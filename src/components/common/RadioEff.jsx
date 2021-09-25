import React from "react";
import { createApi } from "effector";
import { useStore } from "effector-react";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./CheckboxEff.module.css";

export default function RadioEff({ store, radioValue }) {
  const checked = useBaseUrl(`/img/pricing/checked.svg`);
  const checkbox = useBaseUrl(`/img/pricing/checkbox.svg`);
  const radioGroupValue = useStore(store);

  const { setValue } = createApi(store, {
    setValue: (state) => radioValue,
  });
  return (
    <button className={styles.checkbox_btn} onClick={setValue}>
      <img src={radioGroupValue===radioValue ? checked : checkbox} />
    </button>
  );
}
