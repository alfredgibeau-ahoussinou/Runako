import React from "react";
import styles from "../page.module.css";

export default function FAQ() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>FAQ - Questions fréquentes</h1>
        <h2>Qu'est-ce que RUNAKO ?</h2>
        <p>RUNAKO est un langage de programmation simple, lisible et extensible, idéal pour l'apprentissage, le prototypage et la créativité.</p>
        <h2>Comment installer RUNAKO ?</h2>
        <p>Clonez le dépôt GitHub, puis exécutez vos scripts avec <code>python3 runako.py monscript.rnk</code>.</p>
        <h2>À qui s'adresse RUNAKO ?</h2>
        <p>Aux débutants, enseignants, makers, curieux, et à toute personne souhaitant un langage expressif et accessible.</p>
        <h2>Puis-je contribuer ?</h2>
        <p>Oui ! Toute contribution (code, idées, documentation, exemples) est la bienvenue. Consultez le README ou ouvrez une issue sur GitHub.</p>
        <h2>RUNAKO est-il open source ?</h2>
        <p>Oui, le projet est open source et la communauté est encouragée à participer.</p>
        <h2>Puis-je importer des modules Python ?</h2>
        <p>Non, seuls les modules RUNAKO (.rnk) sont supportés pour l'instant.</p>
        <h2>Comment signaler un bug ou une suggestion ?</h2>
        <p>Ouvrez une issue sur <a href="https://github.com/alfredgibeau-ahoussinou/Runako" target="_blank">GitHub</a> ou contactez-nous par email.</p>
      </main>
    </div>
  );
} 