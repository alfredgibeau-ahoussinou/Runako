import React from "react";
import styles from "../page.module.css";

export default function Exemples() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Exemples RUNAKO</h1>
        <h2>Calculatrice simple</h2>
        <pre>{`affiche "Entrez un nombre :"
variable a = entre()
affiche "Entrez un autre nombre :"
variable b = entre()
affiche "Somme : " + (a + b)`}</pre>
        <h2>Boucle et liste</h2>
        <pre>{`variable l = [1, 2, 3, 4]
pour i de 0 à 3:
    affiche l[i]`}</pre>
        <h2>Fonction personnalisée</h2>
        <pre>{`fonction carre(x):
    retourne x * x
affiche carre(5)`}</pre>
        <h2>Import de module</h2>
        <pre>{`importe "util.rnk"
affiche triple(4)`}</pre>
        <h2>Condition et dictionnaire</h2>
        <pre>{`variable d = {"a": 1, "b": 2}
si d["a"] > 0:
    affiche "a est positif"`}</pre>
      </main>
    </div>
  );
} 