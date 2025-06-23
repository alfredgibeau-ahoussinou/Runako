import os
import subprocess

def run_tests():
    test_dir = 'tests'
    test_files = sorted([f for f in os.listdir(test_dir) if f.endswith('.rnk')])
    total = len(test_files)
    print(f"Exécution de {total} tests :\n")
    for test in test_files:
        print(f"--- {test} ---")
        try:
            result = subprocess.run(['python3', 'runako.py', os.path.join(test_dir, test)], capture_output=True, text=True, timeout=5)
            print(result.stdout)
            if result.stderr:
                print("[ERREUR STDERR]", result.stderr)
            if result.returncode != 0:
                print(f"[ECHEC] Code de retour: {result.returncode}")
        except Exception as e:
            print(f"[EXCEPTION] {e}")
        print()

if __name__ == '__main__':
    run_tests() 