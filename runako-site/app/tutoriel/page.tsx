import React from "react";
import styles from "../page.module.css";

export default function Tutoriel() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Tutoriel RUNAKO</h1>
        <p>Apprenez à programmer avec RUNAKO en quelques étapes simples !</p>
        <h2>1. Premier script</h2>
        <pre>{`affiche "Bienvenue dans RUNAKO !"`}</pre>
        <h2>2. Variables et affichage</h2>
        <pre>{`variable nom = "Marie"
affiche "Bonjour " + nom`}</pre>
        <h2>3. Conditions</h2>
        <pre>{`variable age = 18
si age >= 18:
    affiche "Majeur"
sinon:
    affiche "Mineur"`}</pre>
        <h2>4. Boucles</h2>
        <pre>{`pour i de 1 à 5:
    affiche i`}</pre>
        <h2>5. Fonctions</h2>
        <pre>{`fonction carre(x):
    retourne x * x
affiche carre(7)`}</pre>
        <h2>6. Modules</h2>
        <pre>{`importe "util.rnk"
affiche triple(4)`}</pre>
        <h2>7. Tests</h2>
        <pre>{`affiche "Test addition"
variable a = 2
variable b = 3
affiche a + b`}</pre>
        <p>Pour plus d'exemples, consultez le <a href="/documentation">guide complet</a> ou le <a href="https://github.com/alfredgibeau-ahoussinou/Runako" target="_blank">dépôt GitHub</a>.</p>
      </main>
    </div>
  );
} 