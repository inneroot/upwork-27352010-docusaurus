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
        <Link to="/politics">Политика конфиденциальности</Link>
      </span>
      <span>
        Иллюстрации <a href="https://stories.freepik.com">Freepik Stories</a>
      </span>
      <span>
        Разработка дизайна сайта <a href="https://www.behance.net/gromova1_10792">Анастасия Громова</a>
      </span>
    </footer>
  );
}

export default Footer;
