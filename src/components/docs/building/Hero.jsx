import React from "react";
import styles from "./Hero.module.css";
import useBaseUrl from "@docusaurus/useBaseUrl";

export default function Hero() {
  const cicdmobile = useBaseUrl("/img/cicdmobile.svg");
  return (
    <section className={styles.section}>
      <h1>Построение процессов CI/CD</h1>
      <p>
        Автоматизируем <span>{"{"}</span>
      </p>
      <ul className={styles.list}>
        <li>разработку</li>
        <li>запуск</li>
        <li>
          эксплуатацию <span>{"}"}</span>
        </li>
      </ul>
      <img className={styles.cicdmobile} src={cicdmobile} />
    </section>
  );
}
