import React from "react";
import styles from "./Contacts.module.css";
import useBaseUrl from "@docusaurus/useBaseUrl";

export default function Contacts() {
  const LogoSrc = useBaseUrl("/img/logo.svg");
  return (
    <div id={styles.business_card}>
      <div id={styles.business_card_slogan}>
        <img id={styles.business_card_logo} src={LogoSrc} />
        <p>Профессиональные практики DevOps</p>
      </div>
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
  );
}
