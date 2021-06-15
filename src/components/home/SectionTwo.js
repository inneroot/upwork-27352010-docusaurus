import React from "react";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./SectionTwo.module.css";

export default function SectionTwo() {
  const OpenSrc = useBaseUrl("/img/open.svg");
  const CloseSrc = useBaseUrl("/img/close.svg");
  const LogoSrc = useBaseUrl("/img/logo.svg");

  return (
    <>
      <section id={styles.wrapper2}>
        <div className={styles.open_box}>
          <img id={styles.open_svg} src={OpenSrc} />
          <div id={styles.open__container}>
            <h1 id={styles.open}>Мы предлагаем услуги в двух направлениях</h1>
          </div>
        </div>
      </section>
      <section id={styles.wrapper3}>
        <div className={styles.card1}>
          <h2>
            Построение
            <br /> процессов CI/CD
          </h2>
          <ul>
            <li>
              Внедряем конвейеры для автоматической сборки, тестирования и
              развёртывания приложения;
            </li>
            <li>Помогаем с эксплуатацией приложения.</li>
          </ul>
          <Link to="#" className="btn btn_arrow">
            Узнать больше
          </Link>
        </div>
        <div className={styles.card2}>
          <h2>
            Создание инфраструктуры
            <br /> для разработки
          </h2>
          <ul>
            <li>Строим инфраструктуру на базе Kubernetes, OpenStack;</li>
            <li>
              Поддерживаем вспомогательные сервисы:
              <br /> БД, очередей, балансировки и т.д.;
            </li>
            <li>Внедряем мониторинг и логирование;</li>
            <li>
              Помогаем с эксплуатацией
              <br /> инфраструктуры.
            </li>
          </ul>
          <Link to="#" className="btn btn_arrow">
            Узнать больше
          </Link>
        </div>
      </section>
      <section id={styles.wrapper4}>
        <div className={styles.close_box}>
          <img id={styles.open_svg} src={CloseSrc} />
          <div id={styles.open__container}>
            <h1 id={styles.open}>
              Свяжитесь
              <br /> с нами
            </h1>
          </div>
        </div>
        <div id={styles.business_card}>
          <img id={styles.business_card_logo} src={LogoSrc} />
          <p>Профессиональные практики DevOps</p>
          <div id={styles.business_card_contacts}>
            <a className={styles.card_email} href="mailto:it-company@info.ru">
              it-company@info.ru
            </a>
            <a className={styles.card_telegram} href="#">
              Telegram
            </a>
            <a className={styles.card_phone} href="phone:+79992223344">
              +7 (999) 222-33-44
            </a>
            <a className={styles.card_whatsapp} href="#">
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
