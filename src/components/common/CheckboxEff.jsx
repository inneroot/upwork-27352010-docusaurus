import React from "react";
import { createApi, createStore } from "effector";
import { useStore } from "effector-react";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./CheckboxEff.module.css";

export default function CheckboxEff({ store }) {
  const checked = useBaseUrl(`/img/pricing/checked.svg`);
  const checkbox = useBaseUrl(`/img/pricing/checkbox.svg`);
  const isChecked = useStore(store);

  const { toggle } = createApi(store, {
    toggle: (state) => !state,
  });
  return (
    <button className={styles.checkbox_btn} onClick={toggle}>
      <img src={isChecked ? checked : checkbox} />
    </button>
  );
}
