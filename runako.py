import sys
import re

class RunakoInterpreter:
    def __init__(self, filename):
        self.filename = filename
        self.variables = {}
        self.functions = {}

    def run(self):
        try:
            with open(self.filename, 'r', encoding='utf-8') as f:
                lines = f.readlines()
            self.execute_lines(lines)
        except Exception as e:
            print(f"Erreur lors de l'exécution : {e}")

    def eval_expr(self, expr):
        expr = expr.strip()
        # Fonction spéciale entre()
        if expr == 'entre()':
            return input()
        # Gérer les listes (ex: l[0])
        expr = re.sub(r'(\w+)\[(\d+)\]', lambda m: str(self.variables.get(m.group(1), [])[int(m.group(2))]) if isinstance(self.variables.get(m.group(1)), list) else 'None', expr)
        # Gérer les dictionnaires (ex: d["a"] ou d[x])
        def dict_access(match):
            var = match.group(1)
            key_expr = match.group(2)
            d = self.variables.get(var, {})
            if not isinstance(d, dict):
                return match.group(0)
            key = self.eval_expr(key_expr)
            # Forcer la clé en chaîne si possible
            if isinstance(key, str):
                return str(d.get(key, 'None'))
            else:
                return str(d.get(str(key), 'None'))
        expr = re.sub(r'(\w+)\[([^\]]+)\]', dict_access, expr)
        # Remplacer les appels de fonctions RUNAKO par leur valeur de retour
        def runako_func_call(match):
            fname = match.group(1)
            args = match.group(2)
            args_list = [a.strip(' "') for a in args.split(',') if a.strip()]
            if fname in self.functions:
                params, block = self.functions[fname]
                if len(params) != len(args_list):
                    print(f"Erreur: {fname} attend {len(params)} argument(s), {len(args_list)} fourni(s)")
                    return 'None'
                old_vars = self.variables.copy()
                for p, a in zip(params, args_list):
                    self.variables[p] = self.eval_expr(a)
                ret = self.execute_lines(block, 4, allow_return=True)
                self.variables = old_vars
                return repr(ret)
            return match.group(0)
        while re.search(r'(\w+)\(([^()]*)\)', expr):
            expr = re.sub(r'(\w+)\(([^()]*)\)', runako_func_call, expr)
        # Remplacer les variables simples
        tokens = re.split(r'([+\-*/()])', expr)
        for i, t in enumerate(tokens):
            t_strip = t.strip()
            if t_strip in self.variables:
                tokens[i] = repr(self.variables[t_strip]) if isinstance(self.variables[t_strip], str) else str(self.variables[t_strip])
        expr_eval = ''.join(tokens)
        try:
            return eval(expr_eval)
        except Exception:
            return expr

    def execute_lines(self, lines, indent_level=0, allow_return=False):
        i = 0
        in_multiline_comment = False
        while i < len(lines):
            line = lines[i].rstrip('\n')
            # Gestion des commentaires multilignes
            if '/*' in line:
                in_multiline_comment = True
            if in_multiline_comment:
                if '*/' in line:
                    in_multiline_comment = False
                i += 1
                continue
            if not line.strip() or line.strip().startswith('#'):
                i += 1
                continue
            current_indent = len(line) - len(line.lstrip(' '))
            if current_indent < indent_level:
                return None
            line = line.strip()
            try:
                if line.startswith('retourne '):
                    if allow_return:
                        return self.eval_expr(line[len('retourne '):].strip())
                    else:
                        print("Erreur: 'retourne' ne peut être utilisé qu'à l'intérieur d'une fonction.")
                        return None
                elif line.startswith('affiche '):
                    to_print = line[len('affiche '):].strip()
                    val = self.eval_expr(to_print)
                    print(val)
                elif line.startswith('variable '):
                    var_part = line[len('variable '):].strip()
                    if '=' not in var_part:
                        print(f"Erreur de syntaxe dans la déclaration de variable: {line}")
                        i += 1
                        continue
                    var_name, var_value = var_part.split('=', 1)
                    var_name = var_name.strip()
                    var_value = var_value.strip()
                    if var_value.startswith('[') and var_value.endswith(']'):
                        # Liste
                        try:
                            items = [self.eval_expr(x.strip()) for x in var_value[1:-1].split(',') if x.strip()]
                            self.variables[var_name] = items
                        except Exception:
                            print(f"Erreur lors de la création de la liste pour {var_name}")
                    elif var_value.startswith('{') and var_value.endswith('}'):
                        # Dictionnaire
                        try:
                            dict_items = var_value[1:-1].split(',')
                            d = {}
                            for item in dict_items:
                                if not item.strip():
                                    continue
                                k, v = item.split(':', 1)
                                k = k.strip().strip('"')
                                v = self.eval_expr(v.strip())
                                d[k] = v
                            self.variables[var_name] = d
                        except Exception:
                            print(f"Erreur lors de la création du dictionnaire pour {var_name}")
                    else:
                        self.variables[var_name] = self.eval_expr(var_value)
                elif line.startswith('si '):
                    cond = line[len('si '):].rstrip(':').strip()
                    cond_eval = self.eval_condition(cond)
                    block_lines = self.get_block(lines, i+1, indent_level+4)
                    next_line_index = i + 1 + len(block_lines)
                    # Vérifier la présence d'un bloc sinon
                    else_block = []
                    if next_line_index < len(lines):
                        next_line = lines[next_line_index]
                        next_indent = len(next_line) - len(next_line.lstrip(' '))
                        if next_line.strip().startswith('sinon:') and next_indent == indent_level:
                            else_block = self.get_block(lines, next_line_index+1, indent_level+4)
                    if cond_eval:
                        self.execute_lines(block_lines, indent_level+4)
                    elif else_block:
                        self.execute_lines(else_block, indent_level+4)
                    i += len(block_lines)
                    if else_block:
                        i += 1 + len(else_block)
                elif line.startswith('pour '):
                    match = re.match(r'pour (\w+) de (\d+) à (\d+):', line)
                    if match:
                        var, start, end = match.groups()
                        start, end = int(start), int(end)
                        block_lines = self.get_block(lines, i+1, indent_level+4)
                        for v in range(start, end+1):
                            self.variables[var] = v
                            self.execute_lines(block_lines, indent_level+4)
                        i += len(block_lines)
                elif line.startswith('fonction '):
                    # Définition de fonction
                    match = re.match(r'fonction (\w+)\((.*?)\):', line)
                    if match:
                        fname, params = match.groups()
                        params = [p.strip() for p in params.split(',') if p.strip()]
                        block_lines = self.get_block(lines, i+1, indent_level+4)
                        self.functions[fname] = (params, block_lines)
                        i += len(block_lines)
                elif re.match(r'\w+\(.*\)', line):
                    # Appel de fonction
                    match = re.match(r'(\w+)\((.*?)\)', line)
                    if match:
                        fname, args = match.groups()
                        args = [a.strip(' "') for a in args.split(',') if a.strip()]
                        if fname in self.functions:
                            params, block = self.functions[fname]
                            if len(params) != len(args):
                                print(f"Erreur: {fname} attend {len(params)} argument(s), {len(args)} fourni(s)")
                            else:
                                old_vars = self.variables.copy()
                                for p, a in zip(params, args):
                                    self.variables[p] = self.eval_expr(a)
                                ret = self.execute_lines(block, indent_level+4, allow_return=True)
                                self.variables = old_vars
                                if ret is not None:
                                    print(ret)
                        else:
                            print(f"Erreur: fonction {fname} non définie.")
                elif line.startswith('tantque '):
                    cond = line[len('tantque '):].rstrip(':').strip()
                    block_lines = self.get_block(lines, i+1, indent_level+4)
                    while self.eval_condition(cond):
                        self.execute_lines(block_lines, indent_level+4)
                    i += len(block_lines)
                elif line.startswith('importe '):
                    module_file = line[len('importe '):].strip().strip('"')
                    try:
                        with open(module_file, 'r', encoding='utf-8') as mf:
                            module_lines = mf.readlines()
                        self.execute_lines(module_lines)
                    except Exception as e:
                        print(f"Erreur lors de l'import du module {module_file} : {e}")
                else:
                    print(f"Instruction inconnue ou syntaxe invalide: {line}")
            except Exception as e:
                print(f"Erreur d'exécution à la ligne: '{line}' -> {e}")
            i += 1

    def get_block(self, lines, start, indent_level):
        block = []
        for line in lines[start:]:
            if not line.strip():
                block.append(line)
                continue
            current_indent = len(line) - len(line.lstrip(' '))
            if current_indent < indent_level:
                break
            block.append(line)
        return block

    def eval_condition(self, cond):
        # Only supports simple conditions like x > 3 or x == y
        for op in ['>=', '<=', '==', '!=', '>', '<']:
            if op in cond:
                left, right = cond.split(op)
                left = left.strip()
                right = right.strip()
                left_val = self.eval_expr(left)
                right_val = self.eval_expr(right)
                try:
                    return eval(f'{repr(left_val)} {op} {repr(right_val)}')
                except Exception:
                    print(f"Erreur dans la condition: {cond}")
                    return False
        print(f"Condition non supportée: {cond}")
        return False

def main():
    if len(sys.argv) != 2:
        print('Usage: python3 runako.py <fichier.rnk>')
        sys.exit(1)
    interpreter = RunakoInterpreter(sys.argv[1])
    interpreter.run()

if __name__ == '__main__':
    main() 