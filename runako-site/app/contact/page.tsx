import React from "react";
import styles from "../page.module.css";

export default function Contact() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Contact & Communauté</h1>
        <p>Vous souhaitez contribuer, poser une question ou proposer une idée ?</p>
        <p>
          Rejoignez la communauté sur <a href="https://github.com/alfredgibeau-ahoussinou/Runako" target="_blank">GitHub</a><br/>
          ou écrivez-nous à <a href="mailto:alfredgibeauahoussinou@gmail.com">alfredgibeauahoussinou@gmail.com</a>
        </p>
        <p style={{ marginTop: 32, color: "#444" }}>
          Merci pour votre intérêt pour RUNAKO !
        </p>
      </main>
    </div>
  );
} 