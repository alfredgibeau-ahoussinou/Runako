import React from "react";
import styles from "../page.module.css";

export default function APropos() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>À propos de RUNAKO</h1>
        <p>
          <strong>RUNAKO</strong> signifie « beau » en swahili. Ce langage est né d’une envie : rendre la programmation plus accessible, plus humaine, et plus créative.
        </p>
        <h2>Pourquoi RUNAKO ?</h2>
        <p>
          Beaucoup de langages sont puissants, mais leur syntaxe peut rebuter les débutants. RUNAKO s’inspire du français pour offrir une expérience naturelle, où chaque ligne de code est lisible et expressive.
        </p>
        <h2>Nos objectifs</h2>
        <ul>
          <li>Favoriser l’apprentissage et l’expérimentation</li>
          <li>Encourager la créativité et le partage</li>
          <li>Construire une communauté inclusive et bienveillante</li>
          <li>Permettre à chacun de contribuer et d’évoluer</li>
        </ul>
        <h2>Qui est derrière RUNAKO ?</h2>
        <p>
          Ce projet a été initié par <strong>Alfred Gibeau-Ahoussinou</strong>, passionné de code, d’éducation et d’innovation. Mais RUNAKO est avant tout un projet ouvert : chaque contribution, chaque idée compte !
        </p>
        <h2>Rejoignez-nous !</h2>
        <p>
          Que vous soyez débutant, enseignant, maker ou simple curieux, vous êtes le bienvenu. Partagez vos idées, vos modules, vos retours… et faisons grandir RUNAKO ensemble !
        </p>
      </main>
    </div>
  );
} 