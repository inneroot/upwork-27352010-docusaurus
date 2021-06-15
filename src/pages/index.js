import React from "react";
// import clsx from "clsx";
// import Layout from "@theme/Layout";
import Navbar from "../components/mainpage/Navbar";

import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import SectionOne from "../components/mainpage/SectionOne";
import SectionTwo from "../components/mainpage/SectionTwo";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <main className="main__box nalozhenie">
      <Navbar />
      <SectionOne />
      <SectionTwo />
    </main>
  );
}
