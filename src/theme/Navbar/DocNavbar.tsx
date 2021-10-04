import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Link from "@docusaurus/Link";
import styles from "./DocNavbar.module.css";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import clsx from "clsx";

const MobileLinks = ({ navLinks, isVisible, setVisible }) => {
  const { siteConfig } = useDocusaurusContext();
  const toggle = () => {
    setVisible(!isVisible);
  };
  if (isVisible)
    return (
      <div className={styles.mobile_nav_links_box}>
        <div className={styles.mobile_navigation_links}>
          {navLinks.map((link) => (
            <Link
              to={
                link.docId ? `${siteConfig.baseUrl}docs/${link.docId}` : link.to
              }
              key={link.label}
              onClick={toggle}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <Link to="#" className="nav_btn">
          Задать вопрос
        </Link>
      </div>
    );

  return null;
};

const MobileDocLinks = ({ docLinks, isVisible, setVisible, currentPath }) => {
  const { siteConfig } = useDocusaurusContext();
  const docPref = `${siteConfig.baseUrl}docs/`;
  const currentPathEnds = currentPath.split("/").slice(-2).join("/");
  const toggle = () => {
    setVisible(!isVisible);
  };

  if (isVisible)
    return (
      <div className={styles.mobile_doc_nav_links_box}>
        <div className={styles.mobile_doc_nav_links_category}>Услуги</div>
        <div className={styles.mobile_doc_nav_links_category_links}>
          <Link
            to={`${docPref}services/building`}
            onClick={toggle}
            className={clsx(
              currentPathEnds === "services/building" &&
                styles.mobile_doc_link_active
            )}
          >
            Построение процессов CI/CD
          </Link>
          <Link
            to={`${docPref}services/infrastructure`}
            onClick={toggle}
            className={clsx(
              currentPathEnds === "services/infrastructure" &&
                styles.mobile_doc_link_active
            )}
          >
            Создание инфраструктуры для разработки
          </Link>
        </div>
        <div className={styles.mobile_doc_nav_links_category}>
          Общая информация
        </div>
        <div className={styles.mobile_doc_nav_links_category_links}>
          <Link
            to={`${docPref}info/about`}
            onClick={toggle}
            className={clsx(
              currentPathEnds === "info/about" && styles.mobile_doc_link_active
            )}
          >
            О нас
          </Link>
          <Link
            to={`${docPref}info/contacts`}
            onClick={toggle}
            className={clsx(
              currentPathEnds === "info/contacts" &&
                styles.mobile_doc_link_active
            )}
          >
            Контакты
          </Link>
        </div>
        <div className={styles.mobile_doc_nav_link_soon}>База знаний</div>
      </div>
    );

  return null;
};

export default function Navbar() {
  const location = useLocation();
  const currentPath = location.pathname;
  const { siteConfig } = useDocusaurusContext();
  const navLinks = siteConfig.themeConfig.navbar.items;
  const docLinks = {};
  const logoSrc = useBaseUrl("/img/logo.svg");
  const mmenux = useBaseUrl("/img/mmenux.svg");
  const mmenu = useBaseUrl("/img/mmenu.svg");
  const mdocx = useBaseUrl("/img/docmenux.svg");
  const mdoc = useBaseUrl("/img/docmenu.svg");
  const [isVisible, setVisible] = useState(false);
  const [isDocVisible, setDocVisible] = useState(false);
  const toggle = () => {
    setVisible(!isVisible);
  };
  const toggleDoc = () => {
    setDocVisible(!isDocVisible);
  };
  return (
    <>
      <nav className={styles.navigation}>
        <div className={styles.logo}></div>
        <div className={styles.nav_links}>
          {navLinks.map((link) => (
            <Link
              to={
                link.docId ? `${siteConfig.baseUrl}docs/${link.docId}` : link.to
              }
              key={link.label}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
      <nav className={styles.mobile_navigation}>
        <div className={styles.logo}>
          <Link to={siteConfig.baseUrl}>
            <img src={logoSrc} />
          </Link>
        </div>
        <button className={styles.hamburger_button} onClick={toggle}>
          <img src={isVisible ? mmenux : mmenu} />
        </button>
        <MobileLinks
          navLinks={navLinks}
          isVisible={isVisible}
          setVisible={setVisible}
        />
      </nav>
      <nav className={styles.mobile_doc_navivcation}>
        <button className={styles.doc_menu_button} onClick={toggleDoc}>
          <img src={isDocVisible ? mdocx : mdoc} />
          <span>Меню</span>
        </button>
        <MobileDocLinks
          docLinks={docLinks}
          isVisible={isDocVisible}
          setVisible={setDocVisible}
          currentPath={currentPath}
        />
      </nav>
    </>
  );
}
