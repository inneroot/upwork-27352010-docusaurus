import React, { useState } from "react";
import Link from "@docusaurus/Link";
import styles from "./Navbar.module.css";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

const MobileLinks = ({ navLinks, isVisible }) => {
  if (isVisible)
    return (
      <div className={styles.mobile_nav_links_box}>
        <div className={styles.mobile_navigation_links}>
          {navLinks.map((link) => (
            <Link
              to={link.docId ? `docs/${link.docId}` : link.to}
              key={link.label}
            >
              {link.label}
            </Link>
          ))}
        </div>
        {/* <Link to="#" className="nav_btn"> temporary disabled
          Задать вопрос
        </Link> */}
      </div>
    );

  return null;
};

export default function Navbar() {
  const { siteConfig } = useDocusaurusContext();
  const navLinks = siteConfig.themeConfig.navbar.items;
  const logoSrc = useBaseUrl("/img/logo.svg");
  const mmenux = useBaseUrl("/img/mmenux.svg");
  const mmenu = useBaseUrl("/img/mmenu.svg");

  const [isVisible, setVisible] = useState(false);
  const toggle = () => {
    setVisible(!isVisible);
  };
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
        <button className={styles.hamburger_button} onClick={toggle}>
          <img src={isVisible ? mmenux : mmenu} />
        </button>
        <MobileLinks navLinks={navLinks} isVisible={isVisible} />
      </nav>
    </>
  );
}
