import React, { useState } from "react";
import styles from "./Flow.module.css";
import useBaseUrl from "@docusaurus/useBaseUrl";

function MobileView({ CARDS }) {
  return (
    <div>
      {CARDS.map((card, ind) => (
        <div key={ind}>
          <h3>{card.heading}</h3>
          {card.hint && <span className={styles.hint}>{card.hint}</span>}
          {card.paragraphs.map((line, index) => {
            const imgsrc = useBaseUrl(`/img/workflow/${line.img}.svg`);
            return (
              <div className={styles.line} key={index}>
                <img src={imgsrc} />
                <p>{line.text}</p>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}

function Card({ CARDS, cardNumber }) {
  const paragraphs = CARDS[cardNumber].paragraphs.map((line, index) => {
    const imgsrc = useBaseUrl(`/img/workflow/${line.img}.svg`);
    return (
      <div className={styles.line} key={index}>
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

export default function Flow({ CARDS, BUTTONS }) {
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
    <>
      <section className={styles.container}>
        <Card cardNumber={cardNumber} CARDS={CARDS} />
        <div className={styles.control__panel}>
          <div className={styles.dashed}></div>
          {buttons}
        </div>
      </section>
      <section className={styles.container__mobile}>
        <MobileView CARDS={CARDS} />
      </section>
    </>
  );
}
