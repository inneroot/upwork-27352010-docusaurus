import React from "react";
import Navbar from "../components/home/Navbar";
import SectionOne from "../components/home/SectionOne";
import SectionTwo from "../components/home/SectionTwo";
import Footer from "../theme/Footer/index";

export default function Home() {
  return (
    <main className="main__box nalozhenie">
      <Navbar />
      <SectionOne />
      <SectionTwo />
      <Footer />
    </main>
  );
}
