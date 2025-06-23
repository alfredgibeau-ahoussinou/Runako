# RUNAKO

Un langage de programmation simple, lisible et extensible, basé sur Python.

## Philosophie de RUNAKO
RUNAKO vise à rendre la programmation accessible, claire et agréable. Sa syntaxe s'inspire du français pour être intuitive, et chaque fonctionnalité est pensée pour faciliter l'apprentissage, l'expérimentation et la créativité.

---

## Historique et inspirations
RUNAKO est né de la volonté de créer un langage pédagogique, simple et expressif, pour l'initiation à la programmation et le prototypage rapide. Il s'inspire de Python, du pseudo-code, et de la langue française pour offrir une expérience naturelle et inclusive.

---

## Tutoriel pas à pas

### 1. Premier script
Créez un fichier `mon_premier.rnk` :
```runako
affiche "Bienvenue dans RUNAKO !"
```
Exécutez-le :
```bash
python3 runako.py mon_premier.rnk
```

### 2. Variables et affichage
```runako
variable nom = "Marie"
affiche "Bonjour " + nom
```

### 3. Conditions
```runako
variable age = 18
si age >= 18:
    affiche "Majeur"
sinon:
    affiche "Mineur"
```

### 4. Boucles
```runako
pour i de 1 à 5:
    affiche i
```

### 5. Fonctions
```runako
fonction carre(x):
    retourne x * x
affiche carre(7)
```

### 6. Modules
Créez un fichier `util.rnk` :
```runako
fonction triple(x):
    retourne x * 3
```
Dans votre script principal :
```runako
importe "util.rnk"
affiche triple(4)
```

### 7. Tests
Créez un fichier dans `tests/` :
```runako
affiche "Test addition"
variable a = 2
variable b = 3
affiche a + b
```
Lancez tous les tests :
```bash
python3 run_all_tests.py
```

---

## Cas d'usage concrets

### Calculatrice simple
```runako
affiche "Entrez un nombre :"
variable a = entre()
affiche "Entrez un autre nombre :"
variable b = entre()
affiche "Somme : " + (a + b)
```

### Gestion de listes
```runako
variable l = [1, 2, 3, 4]
pour i de 0 à 3:
    affiche l[i]
```

### Mini-jeu : devine le nombre
```runako
variable secret = 7
affiche "Devine le nombre (entre 1 et 10) :"
variable essai = entre()
si essai == secret:
    affiche "Bravo !"
sinon:
    affiche "Raté."
```

---

## Architecture interne
RUNAKO fonctionne grâce à un interpréteur écrit en Python. Il lit chaque ligne du script, analyse la syntaxe, gère les variables, exécute les instructions et gère les blocs (conditions, boucles, fonctions) grâce à l'indentation. Les modules sont importés et exécutés dans le même contexte, ce qui permet de partager variables et fonctions.

---

## Syntaxe de base et explications

### Affichage
Permet d'afficher du texte ou la valeur d'une variable à l'écran.
```runako
affiche "Bonjour"
affiche x
```
**Astuce :** Vous pouvez concaténer des chaînes et des variables avec `+`.

### Variables
Stockent des valeurs (nombres, chaînes, listes, dictionnaires, etc.).
```runako
variable x = 5
variable nom = "Alice"
```
**Conseil :** Donnez des noms explicites à vos variables pour plus de clarté.

### Listes
Pour manipuler des collections ordonnées de valeurs.
```runako
variable l = [1, 2, 3]
affiche l        # Affiche toute la liste
affiche l[0]     # Affiche le premier élément
```
**Usage :** Parcourez une liste avec une boucle pour traiter chaque élément.

### Dictionnaires (maps)
Pour associer des clés à des valeurs (comme un carnet d'adresses).
```runako
variable d = {"a": 1, "b": 2}
affiche d["a"]
```
**Astuce :** Les clés sont généralement des chaînes, mais peuvent être des variables ou des résultats d'expressions.

### Conditions
Permettent d'exécuter du code selon une condition (si...sinon).
```runako
si x > 3:
    affiche "x est grand"
sinon:
    affiche "x est petit ou égal à 3"
```
**Bonnes pratiques :** Indentez le code à l'intérieur des blocs pour plus de lisibilité.

### Boucles
Pour répéter des instructions plusieurs fois.
```runako
pour i de 1 à 3:
    affiche i

tantque x < 5:
    affiche x
    variable x = x + 1
```
**Conseil :** Utilisez `pour` pour un nombre fixe de répétitions, `tantque` pour des conditions dynamiques.

### Fonctions
Pour réutiliser du code et organiser votre programme.
```runako
fonction saluer(nom):
    affiche "Bonjour " + nom

saluer("Alice")

fonction double(n):
    retourne n * 2
affiche double(4)
```
**Astuce :** Utilisez `retourne` pour renvoyer une valeur depuis une fonction.

### Expressions
Permettent de combiner des valeurs, des variables et des fonctions.
- Opérateurs supportés : `+`, `-`, `*`, `/`, `//`, `%`
- Utilisez des parenthèses pour clarifier les priorités.

### Commentaires
Pour documenter votre code ou désactiver temporairement des lignes.
- Ligne : commencez par `#`
- Multiligne :
```runako
/*
Ceci est un commentaire
sur plusieurs lignes
*/
```
**Conseil :** Commentez votre code pour expliquer vos choix ou rappeler des points importants.

### Import de modules
Pour réutiliser du code depuis d'autres fichiers RUNAKO.
```runako
importe "chemin/vers/module.rnk"
```
**Usage :** Placez vos fonctions utilitaires dans un module et importez-les dans vos projets.

### Entrée utilisateur
Pour interagir avec l'utilisateur.
```runako
variable nom = entre()
affiche "Bonjour " + nom
```
**Astuce :** Utilisez l'entrée utilisateur pour rendre vos programmes dynamiques.

### Gestion des exceptions (à venir)
Pour gérer les erreurs sans interrompre le programme.
```runako
essaie:
    # code qui peut échouer
attrape:
    affiche "Erreur !"
```
**Conseil :** Utilisez cette structure pour sécuriser les parties sensibles de votre code.

---

## Exécution d'un script RUNAKO

1. Écrivez votre code dans un fichier `.rnk` (ex: `examples/hello.rnk`).
2. Exécutez :
   ```bash
   python3 runako.py examples/hello.rnk
   ```

---

## Conseils et bonnes pratiques
- Indentez toujours les blocs de code (4 espaces recommandés).
- Commentez pour expliquer la logique ou les choix importants.
- Testez chaque fonctionnalité dans un petit script avant de l'intégrer à un projet plus grand.
- Utilisez des noms de variables et de fonctions explicites.

---

## FAQ

**Q : Puis-je utiliser RUNAKO pour des projets sérieux ?**
R : RUNAKO est idéal pour l'apprentissage, le prototypage rapide, et l'expérimentation. Pour des projets critiques, préférez un langage mature.

**Q : Puis-je importer des modules Python ?**
R : Non, seuls les modules RUNAKO (`.rnk`) sont supportés.

**Q : Comment signaler un bug ou proposer une amélioration ?**
R : Ouvrez une issue ou une pull request sur le dépôt du projet.

---

## Aller plus loin
- Explorez les exemples dans le dossier `examples/`.
- Ajoutez vos propres modules et partagez-les.
- Proposez de nouvelles fonctionnalités ou contribuez à l'amélioration du langage !

---

## Glossaire
- **Bloc** : Ensemble d'instructions indentées sous une condition, une boucle ou une fonction.
- **Variable** : Nom associé à une valeur stockée en mémoire.
- **Fonction** : Bloc de code réutilisable, pouvant prendre des arguments et retourner une valeur.
- **Module** : Fichier RUNAKO importé dans un autre script.
- **Expression** : Calcul ou opération qui produit une valeur.
- **Interpréteur** : Programme qui lit et exécute le code RUNAKO ligne par ligne.

---

## Guide de contribution

### Structure du projet
- `runako.py` : l'interpréteur principal
- `examples/` : exemples de scripts
- `tests/` : scripts de test
- `README.md` : documentation

### Proposer une fonctionnalité
1. Ouvrez une issue pour décrire votre idée.
2. Proposez une pull request avec votre code et des tests.
3. Respectez le style du projet (clarté, indentation, commentaires).

### Style de code
- Privilégiez la lisibilité et la simplicité.
- Commentez les parties complexes ou importantes.
- Ajoutez des tests pour chaque nouvelle fonctionnalité.

---

## Ressources pour apprendre et s'inspirer
- [Python Tutor](https://pythontutor.com/) : visualisez l'exécution de votre code
- [OpenClassrooms](https://openclassrooms.com/fr/courses/235344-apprenez-a-programmer-en-python) : apprendre la programmation
- [Le Site du Zéro](https://zestedesavoir.com/tutoriels/954/apprendre-a-programmer-avec-python-3/) : tutoriels Python
- [Codecademy](https://www.codecademy.com/fr/learn/learn-python-3) : exercices interactifs

---

## Remerciements et communauté
Merci à tous les contributeurs, testeurs et utilisateurs de RUNAKO. Rejoignez la communauté pour partager vos idées, vos modules, et faire évoluer le langage ensemble !

---

## Tests

Tous les tests sont dans le dossier `tests/` et portent l'extension `.rnk`.

### Écrire un test
Un test est un script RUNAKO classique. Placez-le dans le dossier `tests/` avec un nom explicite (ex: `test_001.rnk`).

### Exécuter tous les tests automatiquement
Utilisez le script suivant :
```bash
python3 run_all_tests.py
```
Ce script exécute chaque fichier `.rnk` du dossier `tests/`, affiche la sortie, et signale les erreurs éventuelles.

### Interpréter les résultats
- Si la sortie correspond à ce qui est attendu, le test est réussi.
- Si un code de retour non nul ou une erreur apparaît, le test est en échec.
- Les erreurs de syntaxe ou d'exécution sont affichées pour faciliter le débogage.

### Exemple de test avancé
```runako
fonction max2(a, b):
    si a > b:
        affiche a
    sinon:
        affiche b
max2(10, 5)
max2(3, 8)
```

### Ajouter de nouveaux tests
Ajoutez simplement un fichier `.rnk` dans le dossier `tests/`.
