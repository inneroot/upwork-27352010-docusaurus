import React from "react";
import Link from "@docusaurus/Link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navigation}>
      <div className={styles.logo}>
        <img src="/img/logo.svg" />
      </div>
      <div className={styles.nav_links}>
        <Link to="/docs/intro">Услуги</Link>
        <Link to="/docs/intro">О нас</Link>
        <Link to="/docs/intro">Контакты</Link>
      </div>
    </nav>
  );
}
