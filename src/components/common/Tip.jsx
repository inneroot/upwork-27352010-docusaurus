import React from "react";
import styles from "./Tip.module.css";

export default function Tip({ message }) {
  return <div className={styles.mark}>{message}</div>;
}
