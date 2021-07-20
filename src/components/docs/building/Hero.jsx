import React from "react";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.section}>
      <h1>Построение процессов CI/CD</h1>
      <p>Автоматизируем {"{"}</p>
      <ul>
        <li>разарботку</li>
        <li>запуск</li>
        <li>
          эксплуатацию <span>{"}"}</span>
        </li>
      </ul>
    </section>
  );
}
