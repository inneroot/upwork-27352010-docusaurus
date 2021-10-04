import React from "react";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./SectionOne.module.css";

export default function SectionOne() {
  const illustration = useBaseUrl("/img/illustration.svg");
  const illustration_mobile = useBaseUrl("/img/illustration-mobile.svg");
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <div id={styles.text}>
          <div id={styles.text_container}>
            <h1 id={styles.h1}>
              Профессиональные
              <br />
              практики <span>DevOps</span>
            </h1>
            <p className={styles.hero__text}>
              Мы строим инфраструктуру
              <br /> и автоматизируем разработку
            </p>
          </div>
          <img id={styles.m__image} src={illustration_mobile} />
          <div className={styles.hero__btns}>
            <Link to="#" className="btn btn_primary">
              Презентация
            </Link>
            {/* <Link to="#" className="btn"> temporary disabled
              Задать вопрос
            </Link> */}
          </div>
        </div>
        <div id={styles.image}>
          <img src={illustration} />
        </div>
      </div>
    </section>
  );
}
