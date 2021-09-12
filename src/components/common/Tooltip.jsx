import React from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./Tooltip.module.css";
import clsx from "clsx";

export default function Tooltip({ info }) {
  const circle = useBaseUrl(`/img/pricing/info-circle.svg`);
  return (
    <div className={styles.tooltip}>
      <img src={circle} className={styles.tooltip__element} />
      <div className={clsx(styles.tooltip__info, styles.wide_tooltip)}>
        {info}
      </div>
    </div>
  );
}
