import React from "react";
import styles from "./Possibilities.module.css";
import useBaseUrl from "@docusaurus/useBaseUrl";
import clsx from "clsx";

export default function Possibilities() {
  const sharing = useBaseUrl("/img/infrastructure/sharing.svg");
  const services = useBaseUrl("/img/infrastructure/services.svg");
  const support = useBaseUrl("/img/infrastructure/support.svg");
  return (
    <section className={styles.container}>
      <section className={styles.section__1}>
        <div className={clsx(styles.heading, styles.heading__1)}>
          <img src={sharing} />
          <p className={styles.title}>Платформы</p>
        </div>
        <h3>
          Строим основу вашей
          <br />
          инфраструктуры для
          <br />
          разработки и прода
        </h3>
        <h4>Виртуальные машины</h4>
        <p>
          Подберём и внедрим платформу управления ВМ с API: OpenStack, oVirt,
          OpenNebula;
        </p>
        <h4>Контейнеры</h4>
        <p>Внедрим Kubernetes для управления вашими приложениями;</p>
        <h4>Программно-определяемое хранилище</h4>
        <p>Внедрим CEPH, LINSTOR на уже имеющимся или новом железе;</p>
        <h4>Логирование, мониторинг, оповещение</h4>
        <p>
          Внедрим системы логирования и мониторинга с различными способами
          оповещения.
        </p>
      </section>
      <section className={styles.section__2}>
        <div className={clsx(styles.heading, styles.heading__2)}>
          <img src={services} />
          <p className={styles.title}>Сервисы</p>
        </div>
        <h3>Строим сервисы для работы ваших приложений</h3>
        <h4>Инфраструктурные сервисы</h4>
        <p>
          Внедрим PostgreSQL, MySQL, Mongo, ClickHouse, Redis, RabbitMQ и т.д. с
          требуемым уровнем отказоустойчивости;
        </p>
        <h4>Поиск и устранение узких мест</h4>
        <p>Тестируем и повышаем производительность существующих сервисов;</p>
        <h4>Масштабирование с ростом нагрузки</h4>
        <p>Решаем проблемы горизонтального масштабирования.</p>
      </section>
      <section className={styles.section__3}>
        <div className={clsx(styles.heading, styles.heading__3)}>
          <img src={support} />
          <p className={styles.title}>Поддержка</p>
        </div>
        <h3>Обеспечиваем стабильность внедренных решений</h3>
        <h4>Снижение времени восстановления после аварий</h4>
        <p>Создаем и проверим DRP вашей инфраструктуры;</p>
        <h4>Аутсорсинг задач DevOps</h4>
        <p>
          Обслуживаем внедренные решения – обновляем, мониторим, решаем
          инциденты согласно SLA.
        </p>
      </section>
    </section>
  );
}
