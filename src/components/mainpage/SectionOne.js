import React from "react";
// import clsx from "clsx";
import Link from "@docusaurus/Link";
import styles from "./SectionOne.module.css";

export default function SectionOne() {
  return (
    <section className={styles.section__wrapper}>
      <div className={styles.section__container}>
        <div id={styles.text}>
          <h1 id={styles.h1}>
            Профессиональные практики <span>DevOps</span>
          </h1>
          <p className={styles.hero__text}>
            Мы строим инфраструктуру
            <br /> и автоматизируем разработку
          </p>
          <div className={styles.hero__btns}>
            <Link to="#" className="btn btn_primary">
              Презентация
            </Link>
            <Link to="#" className="btn prj_btn">
              Задать вопрос
            </Link>
          </div>
        </div>
        <div id={styles.image}>
          <img src="/img/illustration.svg" />
        </div>
      </div>
    </section>
  );
}
