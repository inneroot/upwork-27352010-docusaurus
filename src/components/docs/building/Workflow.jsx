import React, { useState } from "react";
import styles from "./Workflow.module.css";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { CARDS, BUTTONS } from "./cards";

function Card({ cardNumber }) {
  const paragraphs = CARDS[cardNumber].paragraphs.map((line) => {
    const imgsrc = useBaseUrl(`/img/workflow/${line.img}.svg`);
    return (
      <div className={styles.line}>
        <img src={imgsrc} />
        <p>{line.text}</p>
      </div>
    );
  });

  return (
    <div className={styles.card}>
      <h3>
        {CARDS[cardNumber].heading}
        {CARDS[cardNumber].hint && (
          <span className={styles.hint}>{CARDS[cardNumber].hint}</span>
        )}
      </h3>
      {paragraphs}
    </div>
  );
}

export default function Workflow() {
  const [cardNumber, setCardNumber] = useState(0); // const code = useBaseUrl("/img/code.svg");
  const buttons = BUTTONS.map((label, index) => (
    <a
      className={cardNumber === index ? styles.active__button : null}
      onClick={() => setCardNumber(index)}
      key={index}
    >
      <span>{"0" + (index + 1)}</span>
      <label>{label}</label>
    </a>
  ));

  return (
    <section className={styles.container}>
      <Card cardNumber={cardNumber} />
      <div className={styles.control__panel}>
        <div className={styles.dashed}></div>
        {buttons}
      </div>
    </section>
  );
}
