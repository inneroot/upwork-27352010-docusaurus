import React from "react";
import { createApi, createStore } from "effector";
import { useStore } from "effector-react";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./DigitsEff.module.css";

export default function DigitsEff({ store }) {
  const minus = useBaseUrl(`/img/pricing/minus.svg`);
  const plus = useBaseUrl(`/img/pricing/plus.svg`);
  const count = useStore(store);

  const { increment, decrement } = createApi(store, {
    increment: (state) => (state >= 99 ? 99 : state + 1),
    decrement: (state) => (state < 1 ? 0 : state - 1),
  });

  return (
    <div className={styles.digits}>
      <button onClick={decrement}>
        <img src={minus} />
      </button>
      <div className={styles.count}>{count}</div>
      <button onClick={increment}>
        <img src={plus} />
      </button>
    </div>
  );
}
