import React from "react";
import Link from "@docusaurus/Link";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer id={styles.main_footer}>
      <span>
        © 2021 Гелеор
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </span>
      <span>
        <a href="#">Политика конфиденциальности</a>
      </span>
      <span>
        Иллюстрации <a href="#">Freepik Stories</a>
      </span>
      <span>
        Разработка дизайна сайта <a href="#">Анастасия Громова</a>
      </span>
    </footer>
  );
}

export default Footer;
