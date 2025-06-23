import os

TEMPLATE = '''affiche "Début test {num:03d}"
variable a = {a}
affiche a
variable b = {b}
affiche a + b
variable l = [{a}, {b}, {c}]
affiche l[1]
fonction f(x):
    affiche x * {c}
f({b})
si a < b:
    affiche "ok"
si a > b:
    affiche "fail"
# Test erreur variable non définie
si z > 0:
    affiche z
# Test boucle
pour i de 1 à 3:
    affiche i * {a}
affiche "Fin test {num:03d}"
'''

def generate_tests():
    os.makedirs('tests', exist_ok=True)
    for i in range(11, 101):
        a, b, c = i, i+1, i+2
        content = TEMPLATE.format(num=i, a=a, b=b, c=c)
        with open(f'tests/test_{i:03d}.rnk', 'w', encoding='utf-8') as f:
            f.write(content)
    print("Tests générés : test_011.rnk à test_100.rnk")

if __name__ == '__main__':
    generate_tests() 