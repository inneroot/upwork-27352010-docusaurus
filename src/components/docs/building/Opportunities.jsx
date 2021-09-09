import React from "react";
import styles from "./Opportunities.module.css";
import useBaseUrl from "@docusaurus/useBaseUrl";
import clsx from "clsx";

export default function Opportunities() {
  const code = useBaseUrl("/img/opportunities/code.svg");
  const golang = useBaseUrl("/img/opportunities/golang.svg");
  const python = useBaseUrl("/img/opportunities/python.svg");
  const javascript = useBaseUrl("/img/opportunities/javascript.svg");
  const cpp = useBaseUrl("/img/opportunities/cpp.svg");

  const maintenance = useBaseUrl("/img/opportunities/maintenance.svg");
  const gitlab = useBaseUrl("/img/opportunities/gitlab.svg");
  const jenkins = useBaseUrl("/img/opportunities/jenkins.svg");
  const teamcity = useBaseUrl("/img/opportunities/teamcity.svg");
  const docker = useBaseUrl("/img/opportunities/docker.svg");

  const testing = useBaseUrl("/img/opportunities/testing.svg");
  const selenium = useBaseUrl("/img/opportunities/selenium.svg");
  const jmeter = useBaseUrl("/img/opportunities/jmeter.svg");
  const sonarqube = useBaseUrl("/img/opportunities/sonarqube.svg");
  const yandex = useBaseUrl("/img/opportunities/yandex.svg");

  const deploy = useBaseUrl("/img/opportunities/deploy.svg");
  const ansible = useBaseUrl("/img/opportunities/ansible.svg");
  const terraform = useBaseUrl("/img/opportunities/terraform.svg");
  const kubernetes = useBaseUrl("/img/opportunities/kubernetes.svg");
  const helm = useBaseUrl("/img/opportunities/helm.svg");

  const expluatation = useBaseUrl("/img/opportunities/expluatation.svg");
  const centos = useBaseUrl("/img/opportunities/centos.svg");
  const ubuntu = useBaseUrl("/img/opportunities/ubuntu.svg");
  const suse = useBaseUrl("/img/opportunities/suse.svg");
  const debian = useBaseUrl("/img/opportunities/debian.svg");

  const monitoring = useBaseUrl("/img/opportunities/monitoring.svg");
  const prometheus = useBaseUrl("/img/opportunities/prometheus.svg");
  const grafana = useBaseUrl("/img/opportunities/grafana.svg");
  const zabbix = useBaseUrl("/img/opportunities/zabbix.svg");
  const elastic = useBaseUrl("/img/opportunities/elastic.svg");

  return (
    <section className={styles.container}>
      <section className={styles.section__1}>
        <div className={clsx(styles.heading, styles.heading__1)}>
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
        <div className={clsx(styles.heading, styles.heading__2)}>
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
            <img src={docker} width="50" height="40" />
            <figcaption>Docker</figcaption>
          </figure>
        </div>
      </section>

      <section className={styles.section__3}>
        <div className={clsx(styles.heading, styles.heading__3)}>
          <img src={testing} />
          <p className={styles.title}>Тестирование</p>
        </div>
        <h3>Тестируем приложение</h3>
        <h4>Минимум ошибок</h4>
        <p>
          Внедряем статический анализатор кода и систему покрытия кода тестами.
        </p>
        <p>
          Дополняем конвейеры нагрузочным, функциональным
          <br />и юнит-тестированием.
        </p>
        <div className={styles.technologies}>
          <figure>
            <img src={selenium} width="40" height="40" />
            <figcaption>Selenium</figcaption>
          </figure>
          <figure>
            <img src={sonarqube} width="74" height="40" />
            <figcaption>SonarQube</figcaption>
          </figure>
          <figure>
            <img src={jmeter} width="52" height="40" />
            <figcaption>JMeter</figcaption>
          </figure>
          <figure>
            <img src={yandex} width="45" height="40" />
            <figcaption>Yandex.Tank</figcaption>
          </figure>
        </div>
      </section>

      <section className={styles.section__4}>
        <div className={clsx(styles.heading, styles.heading__4)}>
          <img src={deploy} />
          <p className={styles.title}>Развёртывание в прод</p>
        </div>
        <h3>Обеспечиваем контролируемое развёртывание</h3>
        <h4>Эффективный процесс развёртывания</h4>
        <p>Автоматизируем развёртывание приложения в прод.</p>
        <h4>Минимальное влияние на пользователей</h4>
        <p>
          Подбираем стратегию выкатки (canary, blue-green и т.д.) для вашего
          приложения.
        </p>
        <p>
          Подготавливаем автоматические сценарии отката изменений (rollback).
        </p>
        <div className={styles.technologies}>
          <figure>
            <img src={ansible} width="40" height="40" />
            <figcaption>Ansible</figcaption>
          </figure>
          <figure>
            <img src={terraform} width="36" height="40" />
            <figcaption>Terraform</figcaption>
          </figure>
          <figure>
            <img src={kubernetes} width="42" height="40" />
            <figcaption>Kubernetes</figcaption>
          </figure>
          <figure>
            <img src={helm} width="35" height="40" />
            <figcaption>Helm</figcaption>
          </figure>
        </div>
      </section>

      <section className={styles.section__5}>
        <hr />
        <div className={clsx(styles.heading, styles.heading__5)}>
          <img src={expluatation} />
          <p className={styles.title}>Эксплуатация</p>
        </div>
        <h3>
          Выявляем и решаем
          <br />
          проблемы прода
        </h3>
        <h4>Минимум ошибок при эксплуатации</h4>
        <p>Автоматизируем работу с продуктивной средой.</p>
        <h4>Производительная инфраструктура</h4>
        <p>
          Анализируем узкие места в производительности вашей инфраструктуры и
          избавляемся от них.
        </p>
        <h4>Минимум простоя в случае отказа компонентов прода</h4>
        <p>Внедряем процесс регулярного тестирования прода (Chaos Monkey).</p>
        <div className={styles.technologies}>
          <figure>
            <img src={centos} width="40" height="40" />
            <figcaption>CentOS</figcaption>
          </figure>
          <figure>
            <img src={ubuntu} width="36" height="40" />
            <figcaption>Ubuntu</figcaption>
          </figure>
          <figure>
            <img src={suse} width="42" height="40" />
            <figcaption>Suse</figcaption>
          </figure>
          <figure>
            <img src={debian} width="35" height="40" />
            <figcaption>Debian</figcaption>
          </figure>
        </div>
      </section>

      <section className={styles.section__6}>
        <div className={clsx(styles.heading, styles.heading__6)}>
          <img src={monitoring} />
          <p className={styles.title}>Мониторинг</p>
        </div>

        <h3>Показываем целостную картину</h3>
        <h4>Быстрая диагностика</h4>
        <p>
          Внедряем мониторинг, алертинг и логирование для всех компонентов
          прода.
        </p>
        <h4>Контролируемый уровень сервиса</h4>
        <p>Помогаем определить SLI и SLO для вашего сервиса .</p>
        <div className={styles.technologies}>
          <figure>
            <img src={prometheus} width="40" height="40" />
            <figcaption>Prometheus</figcaption>
          </figure>
          <figure>
            <img src={grafana} width="37" height="40" />
            <figcaption>Grafana</figcaption>
          </figure>
          <figure>
            <img src={zabbix} width="40" height="40" />
            <figcaption>Zabbix</figcaption>
          </figure>
          <figure>
            <img src={elastic} width="40" height="40" />
            <figcaption>Elastic</figcaption>
          </figure>
        </div>
      </section>
    </section>
  );
}
