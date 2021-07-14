import React from "react";
import styles from "./Opportunities.module.css";
import useBaseUrl from "@docusaurus/useBaseUrl";

export default function Opportunities() {
  const code = useBaseUrl("/img/code.svg");
  const golang = useBaseUrl("/img/golang.svg");
  const python = useBaseUrl("/img/python.svg");
  const javascript = useBaseUrl("/img/javascript.svg");
  const cpp = useBaseUrl("/img/cpp.svg");
  const gitlab = useBaseUrl("/img/gitlab.svg");
  const jenkins = useBaseUrl("/img/jenkins.svg");
  const teamcity = useBaseUrl("/img/teamcity.svg");
  const docker = useBaseUrl("/img/docker.svg");

  const maintenance = useBaseUrl("/img/maintenance.svg");

  return (
    <section className={styles.container}>
      <section className={styles.section__1}>
        <div className={`${styles.heading} ${styles.heading__1}`}>
          <img src={code} />
          <p className={styles.title}>Написание кода</p>
        </div>
        <h3>
          Наводим порядок
          <br /> в системе разработки
        </h3>
        <h4>Единообразный код</h4>
        <p>
          Подберем и внедрим линтеры для анализа стилистики
          <br />и соответствия кода лучшим практикам.
        </p>
        <h4>Чистый код</h4>
        <p>
          Внедрим инструменты сканирования кода на наличие чувствительных
          данных.
        </p>
        <div className={styles.technologies}>
          <figure>
            <img src={golang} width="50" height="40" />
            <figcaption>Go</figcaption>
          </figure>
          <figure>
            <img src={python} width="40" height="40" />
            <figcaption>Python</figcaption>
          </figure>
          <figure>
            <img src={javascript} width="40" height="40" />
            <figcaption>JS</figcaption>
          </figure>
          <figure>
            <img src={cpp} width="40" height="40" />
            <figcaption>C/C++</figcaption>
          </figure>
        </div>
      </section>

      <section className={styles.section__2}>
        <div className={`${styles.heading} ${styles.heading__2}`}>
          <img src={maintenance} />
          <p className={styles.title}>Сборка кода</p>
        </div>
        <h3>
          Повышаем стабильность
          <br /> и скорость сборки
        </h3>
        <h4>Эффективный процесс сборки</h4>
        <p>
          Автоматизируем создания окружений сборки. Снижаем
          <br /> размер артефактов. Распараллеливаем процесс сборки.
        </p>
        <h4>Унифицированные окружения</h4>
        <p>
          Стандартизируем управление окружениями с помощью систем хранения
          секретов и хранилищ артефактов (s3, registry и т.д.)
        </p>
        <div className={styles.technologies}>
          <figure>
            <img src={gitlab} width="40" height="40" />
            <figcaption>Gitlab CI</figcaption>
          </figure>
          <figure>
            <img src={jenkins} width="40" height="40" />
            <figcaption>Jenkins</figcaption>
          </figure>
          <figure>
            <img src={teamcity} width="40" height="40" />
            <figcaption>Teamcity</figcaption>
          </figure>
          <figure>
            <img src={docker} width="40" height="40" />
            <figcaption>Docker</figcaption>
          </figure>
        </div>
      </section>
    </section>
  );
}
