import React from "react";
import Link from "@docusaurus/Link";
import styles from "./Navbar.module.css";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

export default function Navbar() {
  const { siteConfig } = useDocusaurusContext();
  const navLinks = siteConfig.themeConfig.navbar.items;
  const logoSrc = useBaseUrl("/img/logo.svg");
  const mmenux = useBaseUrl("/img/mmenux.svg");
  const mmenu = useBaseUrl("/img/mmenu.svg");
  return (
    <>
      <nav className={styles.navigation}>
        <div className={styles.logo}>
          <img src={logoSrc} />
        </div>
        <div className={styles.nav_links}>
          {navLinks.map((link) => (
            <Link
              to={link.docId ? `docs/${link.docId}` : link.to}
              key={link.label}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
      <nav className={styles.mobile_navigation}>
        <div className={styles.logo}>
          <img src={logoSrc} />
        </div>
        <button className={styles.hamburger_button}>
          <img src={mmenu} />
        </button>
      </nav>
    </>
  );
}
