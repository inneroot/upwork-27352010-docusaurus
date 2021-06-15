import React from "react";
import Link from "@docusaurus/Link";
import styles from "./Navbar.module.css";
import useBaseUrl from "@docusaurus/useBaseUrl";

export default function Navbar() {
  const logoSrc = useBaseUrl("/img/logo.svg");
  return (
    <nav className={styles.navigation}>
      <div className={styles.logo}>
        <img src={logoSrc} />
      </div>
      <div className={styles.nav_links}>
        <Link to="/docs/intro">Услуги</Link>
        <Link to="/docs/intro">О нас</Link>
        <Link to="/docs/intro">Контакты</Link>
      </div>
    </nav>
  );
}
