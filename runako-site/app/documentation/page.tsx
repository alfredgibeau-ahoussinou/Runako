import React from "react";
import styles from "../page.module.css";

export default function Documentation() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Documentation RUNAKO</h1>
        <p>RUNAKO est un langage de programmation simple, lisible et extensible, idéal pour l'apprentissage et le prototypage.</p>
        <h2>Syntaxe de base</h2>
        <pre>{`affiche "Bonjour"
variable x = 5
si x > 3:
    affiche "x est grand"
sinon:
    affiche "x est petit ou égal à 3"
`}</pre>
        <h2>Variables, Listes et Dictionnaires</h2>
        <pre>{`variable nom = "Alice"
variable l = [1, 2, 3]
variable d = {"a": 1, "b": 2}
affiche l[0]
affiche d["a"]
`}</pre>
        <h2>Boucles et Fonctions</h2>
        <pre>{`pour i de 1 à 3:
    affiche i

tantque x < 5:
    affiche x
    variable x = x + 1

fonction double(n):
    retourne n * 2
affiche double(4)
`}</pre>
        <h2>Import de modules</h2>
        <pre>{`importe "util.rnk"
affiche triple(4)
`}</pre>
        <h2>Entrée utilisateur</h2>
        <pre>{`variable nom = entre()
affiche nom
`}</pre>
        <h2>Commentaires</h2>
        <pre>{`# Ceci est un commentaire
/*
Commentaire sur plusieurs lignes
*/
`}</pre>
        <h2>Pour aller plus loin</h2>
        <ul>
          <li>Consultez le <a href="https://github.com/alfredgibeau-ahoussinou/Runako" target="_blank">README complet sur GitHub</a></li>
          <li>Explorez les exemples et tests du dépôt</li>
          <li>Participez à la communauté !</li>
        </ul>
      </main>
    </div>
  );
} 