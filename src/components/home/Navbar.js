import React from "react";
import Link from "@docusaurus/Link";
import styles from "./Navbar.module.css";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

function LinkItem(links) {
  return links.map();
}

export default function Navbar() {
  const { siteConfig } = useDocusaurusContext();
  const navLinks = siteConfig.themeConfig.navbar.items;
  console.log(navLinks);
  const logoSrc = useBaseUrl("/img/logo.svg");

  return (
    <nav className={styles.navigation}>
      <div className={styles.logo}>
        <img src={logoSrc} />
      </div>
      <div className={styles.nav_links}>
        {navLinks.map((link) => (
          <Link to={link.docId ? `docs/${link.docId}` : link.to}>
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
