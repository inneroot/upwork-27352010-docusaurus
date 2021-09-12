import React from "react";
import styles from "./Tip.module.css";

export default function Mark({ message }) {
  return (
    <div className={styles.mark}>
      По окончанию внедрения, мы так же можем взять на себя техническую
      поддержку конвейеров, инфраструктурных сервисов и прода.
      <br />
      Для расчёта стоимости вашего проекта и любым другим вопросам, пожалуйста,
      свяжитесь с нами.
    </div>
  );
}
