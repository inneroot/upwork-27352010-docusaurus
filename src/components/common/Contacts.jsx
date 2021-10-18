import React from "react";
import styles from "./Contacts.module.css";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

export default function Contacts() {
  const LogoSrc = useBaseUrl("/img/logo.svg");
  const { siteConfig } = useDocusaurusContext();
  const contacts = siteConfig.customFields.contacts;
  return (
    <>
      <div id={styles.business_card}>
        <div id={styles.business_card_slogan}>
          <img id={styles.business_card_logo} src={LogoSrc} />
          <p>Профессиональные практики DevOps</p>
        </div>
        <div id={styles.business_card_contacts}>
          <a className={styles.card_email} href={`mailto:${contacts.email}`}>
            {contacts.email}
          </a>
          <a className={styles.card_telegram} href={contacts.telegram}>
            Telegram
          </a>
          <a className={styles.card_phone} href={contacts.phone_href}>
            {contacts.phone_label}
          </a>
          <a className={styles.card_whatsapp} href={contacts.whatsapp}>
            WhatsApp
          </a>
        </div>
      </div>

      <div id={styles.business_card__mobile}>
        <img id={styles.business_card_logo__mobile} src={LogoSrc} />
        <p>
          Профессиональные
          <br /> практики DevOps
        </p>
        <div id={styles.business_card_contacts__mobile}>
          <a className={styles.card_email} href="mailto:it-company@info.ru">
            it-company@info.ru
          </a>
          <a className={styles.card_phone} href="phone:+79992223344">
            +7 (999) 222-33-44
          </a>
          <a className={styles.card_telegram} href="#">
            Telegram
          </a>
          <a className={styles.card_whatsapp} href="#">
            WhatsApp
          </a>
        </div>
      </div>
    </>
  );
}
