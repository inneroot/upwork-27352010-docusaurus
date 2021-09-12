import React from "react";
import styles from "./Hero.module.css";
import useBaseUrl from "@docusaurus/useBaseUrl";

export default function Hero() {
  const cicdmobile = useBaseUrl("/img/infrastructure/building.svg");
  return (
    <section className={styles.section}>
      <div>
        <span>Создание инфраструктуры для разработки</span>
        <h1 className={styles.desktop}>Строим и поддерживаем</h1>
        <h1 className={styles.mobile}>
          Строим
          <br />и поддерживаем
        </h1>
        <p>платформы и сервисы</p>
      </div>
      <img className={styles.cicdmobile} src={cicdmobile} />
    </section>
  );
}
