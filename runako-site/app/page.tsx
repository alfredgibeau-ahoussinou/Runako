import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 style={{ fontSize: "2.5rem", marginBottom: 0 }}>RUNAKO</h1>
        <p style={{ fontSize: "1.3rem", marginTop: 0, color: "#666" }}>
          Le langage de programmation simple, lisible et extensible.<br/>
          <span style={{ fontStyle: "italic" }}>("beau" en swahili)</span>
        </p>
        <ul style={{ textAlign: "left", maxWidth: 500, margin: "2rem auto 1rem auto", fontSize: "1.1rem" }}>
          <li>✨ Syntaxe inspirée du français, idéale pour apprendre et enseigner</li>
          <li>🧩 Lisibilité maximale, blocs structurés par l'indentation</li>
          <li>🚀 Extensible : ajoutez vos propres fonctions et modules</li>
          <li>🌍 Open source, pour et par la communauté</li>
        </ul>
        <div style={{ background: "#f5f5f5", borderRadius: 8, padding: 16, margin: "2rem 0", fontFamily: "monospace", fontSize: "1.1rem", maxWidth: 600 }}>
          <span style={{ color: '#888' }}>Exemple de code RUNAKO :</span>
          <pre style={{ margin: 0 }}>{`
affiche "Bonjour le monde !"
variable age = 18
si age >= 18:
    affiche "Majeur"
sinon:
    affiche "Mineur"
`}</pre>
        </div>
        <a
          className={styles.primary}
          href="https://github.com/alfredgibeau-ahoussinou/Runako"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontSize: "1.2rem", padding: "0.8rem 2rem", marginBottom: 24 }}
        >
          ⭐ Voir sur GitHub
        </a>
        <p style={{ marginTop: 32, color: "#444", fontWeight: 500 }}>
          Rejoignez la communauté, proposez vos idées et faites évoluer RUNAKO !
        </p>
      </main>
      <footer className={styles.footer}>
        <span>© {new Date().getFullYear()} RUNAKO — Un projet open source pour tous</span>
      </footer>
    </div>
  );
}
