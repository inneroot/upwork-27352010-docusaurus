import React, { useState } from "react";
import styles from "./Pricing.module.css";
import useBaseUrl from "@docusaurus/useBaseUrl";

function Tooltip({ info }) {
  const circle = useBaseUrl(`/img/pricing/info-circle.svg`);
  return (
    <>
      <div className={styles.tooltip}>
        <img src={circle} className={styles.tooltip__element} />
        <div className={styles.tooltip__info}>{info}</div>
      </div>
    </>
  );
}

export default function Pricing() {
  const checked = useBaseUrl(`/img/pricing/checked.svg`);
  const unchecked = useBaseUrl(`/img/pricing/unchecked.svg`);
  const checkbox = useBaseUrl(`/img/pricing/checkbox.svg`);
  return (
    <section className={styles.container}>
      <div></div>
      <div>Малый проект</div>
      <div>Средний проект</div>
      <div>Большой проект</div>
      <div>Ваш проект</div>
      <p className={styles.heading_start}>
        <strong>
          Кол-во модулей приложения
          <br />
          на языках
        </strong>
        <Tooltip
          info={
            <p>
              Введите кол-во модулей приложения, написанных на различных языках,
              сборку которых необходимо автоматизировать.
              <br />
              <br />
              Пример:
              <br />
              Изначально приложение было написано PHP и состояло из 15 модулей.
              Со временем часть кода переписали на Go для ускорения отдельных
              частей и оно стало состоять из 12 модулей на PHP и 3 модулей на
              Go. Затем понадобилась специфическая функция (типа распознавания
              изображений), выбрали готовую библиотеку на Python (из-за
              минимальных трудозатрат на внедрение) и теперь приложение состоит
              из 12 модулей на PHP, 3 модулей на Go и 2 модулей на Python.
            </p>
          }
        />
      </p>

      <div />
      <div />
      <div />
      <div />
      <p className={styles.cell_start}>Golang</p>
      <p>2</p>
      <p>5</p>
      <p>15</p>
      <p>5</p>
      <p className={styles.cell_start}>PHP</p>
      <p>1</p>
      <p>5</p>
      <p>3</p>
      <p>5</p>
      <p className={styles.cell_start}>Java</p>
      <p>-</p>
      <p>-</p>
      <p>5</p>
      <p>0</p>
      <p className={styles.cell_start}>Python</p>
      <p>-</p>
      <p>-</p>
      <p>2</p>
      <p>0</p>
      <p className={styles.heading_start}>
        <strong>Виды окружений</strong> <Tooltip info="Виды окружений" />
      </p>
      <div />
      <div />
      <div />
      <div />
      <p className={styles.cell_start}>Dev</p>
      <img src={checked} />
      <img src={checked} />
      <img src={checked} />
      <img src={checked} />
      <p className={styles.cell_start}>Integration</p>
      <img src={unchecked} />
      <img src={unchecked} />
      <img src={checked} />
      <img src={checkbox} />
      <p className={styles.cell_start}>Test/QA</p>
      <img src={unchecked} />
      <img src={unchecked} />
      <img src={checked} />
      <img src={checkbox} />
      <p className={styles.cell_start}>Stage/Demo</p>
      <img src={unchecked} />
      <img src={checked} />
      <img src={checked} />
      <img src={checked} />
      <p className={styles.cell_start}>Prod</p>
      <img src={checked} />
      <img src={checked} />
      <img src={checked} />
      <img src={checked} />
      <p className={styles.heading_start}>
        <strong>Инфраструктура</strong> <Tooltip info="Инфраструктура" />
      </p>
      <div />
      <div />
      <div />
      <div />
      <p className={styles.cell_start}>СУБД (MySQL, PSQL, noSQL)</p>
      <img src={checked} />
      <img src={checked} />
      <img src={checked} />
      <img src={checked} />
      <p className={styles.cell_start}>Rabbit, Kafka</p>
      <img src={unchecked} />
      <img src={checked} />
      <img src={checked} />
      <img src={checked} />
      <p className={styles.cell_start}>Redis, Memcached</p>
      <img src={checked} />
      <img src={checked} />
      <img src={checked} />
      <img src={checked} />
      <p className={styles.cell_start}>Nginx, Apache, Traefik</p>
      <img src={checked} />
      <img src={checked} />
      <img src={checked} />
      <img src={checked} />
      <p className={styles.cell_start}>Terraform, Ansible, GitLab Runner</p>
      <img src={checked} />
      <img src={checked} />
      <img src={checked} />
      <img src={checked} />
      <p className={styles.cell_start}>Vault</p>
      <img src={unchecked} />
      <img src={unchecked} />
      <img src={checked} />
      <img src={checkbox} />
      <p className={styles.cell_start}>MinIO S3</p>
      <img src={unchecked} />
      <img src={unchecked} />
      <img src={checked} />
      <img src={checkbox} />
      <p className={styles.cell_start}>Docker-registry</p>
      <img src={checked} />
      <img src={checked} />
      <img src={checked} />
      <img src={checked} />
      <p className={styles.cell_start}>Elasticsearch, Kibana, Fluent</p>
      <img src={unchecked} />
      <img src={checked} />
      <img src={checked} />
      <img src={checkbox} />
      <p className={styles.cell_start}>Prometheus, VictoriaMetrics</p>
      <img src={checked} />
      <img src={checked} />
      <img src={checked} />
      <img src={checkbox} />
      <p className={styles.cell_start}>Другие сервисы</p>
      <p>-</p>
      <p>2</p>
      <p>4</p>
      <p>2</p>
      <p className={styles.heading_start}>
        <strong>Наводим порядок в системе разработки</strong>
      </p>
      <div />
      <div />
      <div />
      <div />
      <p className={styles.cell_start}>
        Единообразный код <Tooltip info="Единообразный код" />
      </p>
      <img src={unchecked} />
      <img src={unchecked} />
      <img src={checked} />
      <img src={checkbox} />
      <p className={styles.cell_start}>
        Чистый код <Tooltip info="Чистый код" />
      </p>
      <img src={unchecked} />
      <img src={unchecked} />
      <img src={checked} />
      <img src={checkbox} />
      <p className={styles.heading_start}>
        <strong>Повышаем стабильность и скорость сборки</strong>
      </p>
      <div />
      <div />
      <div />
      <div />
      <p className={styles.cell_start}>
        Эффективный процесс сборки <Tooltip info="Эффективный процесс сборки" />
      </p>
      <img src={checked} />
      <img src={checked} />
      <img src={checked} />
      <img src={checked} />
      <p className={styles.cell_start}>
        Унифицированные окружения <Tooltip info="Унифицированные окружения" />
      </p>
      <img src={checked} />
      <img src={checked} />
      <img src={checked} />
      <img src={checked} />
    </section>
  );
}
