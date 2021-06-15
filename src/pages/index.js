import React from "react";
// import clsx from "clsx";
// import Layout from "@theme/Layout";
import Navbar from "../components/home/Navbar";

import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import SectionOne from "../components/home/SectionOne";
import SectionTwo from "../components/home/SectionTwo";
import Footer from "../components/home/Footer";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <main className="main__box nalozhenie">
      <Navbar />
      <SectionOne />
      <SectionTwo />
      <Footer />
    </main>
  );
}
