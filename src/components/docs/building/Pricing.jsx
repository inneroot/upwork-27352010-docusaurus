import React, { useState, useEffect } from "react";
import styles from "./Pricing.module.css";
import useBaseUrl from "@docusaurus/useBaseUrl";

function Tooltip({ info }) {
  const circle = useBaseUrl(`/img/pricing/info-circle.svg`);
  return (
    <>
      <div className={styles.tooltip}>
        <img src={circle} className={styles.tooltip__element} />
        <div className={`${styles.tooltip__info} ${styles.wide_tooltip}`}>
          {info}
        </div>
      </div>
    </>
  );
}

function Digits({ def }) {
  const minus = useBaseUrl(`/img/pricing/minus.svg`);
  const plus = useBaseUrl(`/img/pricing/plus.svg`);

  const [count, setCount] = useState(0);
  useEffect(() => {
    setCount(def ? parseInt(def) : 0);
  }, []);
  return (
    <div className={styles.digits}>
      <button onClick={() => setCount(count < 1 ? 0 : count - 1)}>
        <img src={minus} />
      </button>
      <div className={styles.count}>{count}</div>
      <button onClick={() => setCount(count >= 99 ? 99 : count + 1)}>
        <img src={plus} />
      </button>
    </div>
  );
}

function Checkbox() {
  const checked = useBaseUrl(`/img/pricing/checked.svg`);
  // const unchecked = useBaseUrl(`/img/pricing/unchecked.svg`);
  const checkbox = useBaseUrl(`/img/pricing/checkbox.svg`);
  const [isChecked, setIsChecked] = useState(false);
  return (
    <button
      className={styles.checkbox_btn}
      onClick={() => setIsChecked(!isChecked)}
    >
      <img src={isChecked ? checked : checkbox} />
    </button>
  );
}

export default function Pricing() {
  const checked = useBaseUrl(`/img/pricing/checked.svg`);
  const unchecked = useBaseUrl(`/img/pricing/unchecked.svg`);

  const sm_prj = useBaseUrl(`/img/pricing/s.svg`);
  const md_prj = useBaseUrl(`/img/pricing/m.svg`);
  const lg_prj = useBaseUrl(`/img/pricing/l.svg`);
  const calc_prj = useBaseUrl(`/img/pricing/calc.svg`);

  return (
    <>
      <section className={styles.container}>
        <div className={styles.table__head}>
          <div></div>
          <div>
            <img src={sm_prj} />
            <br />
            Малый проект
          </div>
          <div>
            <img src={md_prj} />
            <br />
            Средний проект
          </div>
          <div>
            <img src={lg_prj} />
            <br />
            Большой проект
          </div>
          <div>
            <img src={calc_prj} />
            <br />
            Ваш проект
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.heading_start}>
            <strong>
              Кол-во модулей приложения
              <br />
              на языках
            </strong>
            <Tooltip
              info={
                <div>
                  Введите кол-во модулей приложения, написанных на различных
                  языках, сборку которых необходимо автоматизировать.
                  <br />
                  <br />
                  Пример:
                  <br />
                  Изначально приложение было написано PHP и состояло из 15
                  модулей. Со временем часть кода переписали на Go для ускорения
                  отдельных частей и оно стало состоять из 12 модулей на PHP и 3
                  модулей на Go. Затем понадобилась специфическая функция (типа
                  распознавания изображений), выбрали готовую библиотеку на
                  Python (из-за минимальных трудозатрат на внедрение) и теперь
                  приложение состоит из 12 модулей на PHP, 3 модулей на Go и 2
                  модулей на Python.
                </div>
              }
            />
          </div>
          <div />
          <div />
          <div />
          <div />
        </div>
        <div className={styles.row_white}>
          <div className={styles.cell_start}>Golang</div>
          <div>2</div>
          <div>5</div>
          <div>15</div>
          <div>
            <Digits def="5" />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.cell_start}>PHP</div>
          <div>1</div>
          <div>5</div>
          <div>3</div>
          <div>
            <Digits def="5" />
          </div>
        </div>
        <div className={styles.row_white}>
          <div className={styles.cell_start}>Java</div>
          <div>-</div>
          <div>-</div>
          <div>5</div>
          <div>
            <Digits />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.cell_start}>Python</div>
          <div>-</div>
          <div>-</div>
          <div>2</div>
          <div>
            <Digits />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.heading_start}>
            <strong>Виды окружений</strong>{" "}
            <Tooltip
              info={
                <div>
                  Укажите нужные Вам окружения.
                  <br />
                  На старте создания приложения может быть достаточно только
                  окружения разработки, для большого проекта окружений может
                  быть более 10-тка.
                  <br />
                  Именование окружений:
                  <br />
                  Prod — окружение рабочего развёртывания с которым
                  непосредственно взаимодействуют пользователи.
                  <br />
                  Dev — окружение разработки.
                  <br />
                  Stage — окружение промежуточного развёртывания между Dev и
                  Prod. Обычно является зеркалом Prod`а, но без пользовательской
                  нагрузки и используется для предварительного просмотра новых
                  функций и нагрузочного тестирования.
                  <br />
                  Test/QA — тестовое окружение для автоматических и ручных
                  проверок.
                  <br />
                  Integration — Основа для построения CI или для тестирования
                  сайд-эффектов разработчиком
                </div>
              }
            />
          </div>
          <div />
          <div />
          <div />
          <div />
        </div>
        <div className={styles.row_white}>
          <div className={styles.cell_start}>Dev</div>
          <div>
            <img src={checked} />
          </div>
          <div>
            <img src={checked} />
          </div>
          <div>
            <img src={checked} />
          </div>
          <div>
            <img src={checked} />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.cell_start}>Integration</div>
          <div>
            <img src={unchecked} />
          </div>
          <div>
            <img src={unchecked} />
          </div>
          <div>
            <img src={checked} />
          </div>
          <div>
            <Checkbox />
          </div>
        </div>
        <div className={styles.row_white}>
          <div className={styles.cell_start}>Test/QA</div>
          <div>
            <img src={unchecked} />
          </div>
          <div>
            <img src={unchecked} />
          </div>
          <div>
            <img src={checked} />
          </div>
          <div>
            <Checkbox />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.cell_start}>Stage/Demo</div>
          <div>
            <img src={unchecked} />
          </div>
          <div>
            <img src={checked} />
          </div>
          <div>
            <img src={checked} />
          </div>
          <div>
            <img src={checked} />
          </div>
        </div>
        <div className={styles.row_white}>
          <div className={styles.cell_start}>Prod</div>
          <div>
            <img src={checked} />
          </div>
          <div>
            <img src={checked} />
          </div>
          <div>
            <img src={checked} />
          </div>
          <div>
            <img src={checked} />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.heading_start}>
            <strong>Инфраструктура</strong>{" "}
            <Tooltip
              info={
                <div>
                  Укажите сторонние сервисы, которые используется в Вашем
                  приложении.
                  <br />
                  В калькуляторе для расчета используются трудозатраты
                  построения сервисов в неотказоустойчивом (некластерном)
                  варианте развёртывания. Расчет высокодоступных и
                  отказоустойчивых вариантов производится индивидуально под
                  конкретные требования:
                  <br />
                  <ul>
                    <li>
                      размер домена отказа: ВМ, хост, стойка, машзал, ЦОД,
                      провайдер;
                    </li>
                    <li>
                      RTO и RPO (допустимое время простоя сервиса в случае сбоя
                      и допустимый объем возможных потерь данных в случае сбоя
                      соответственно);
                    </li>
                    <li>требуемая производительность сервиса.</li>
                  </ul>
                </div>
              }
            />
          </div>
          <div />
          <div />
          <div />
          <div />
        </div>
        <div className={styles.row_white}>
          <div className={styles.cell_start}>СУБД (MySQL, PSQL, noSQL)</div>
          <div>
            <img src={checked} />
          </div>
          <div>
            <img src={checked} />
          </div>
          <div>
            <img src={checked} />
          </div>
          <div>
            <img src={checked} />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.cell_start}>Rabbit, Kafka</div>
          <div>
            <img src={unchecked} />
          </div>
          <div>
            <img src={checked} />
          </div>
          <div>
            <img src={checked} />
          </div>
          <div>
            <img src={checked} />
          </div>
        </div>
        <div className={styles.row_white}>
          <div className={styles.cell_start}>Redis, Memcached</div>
          <div>
            <img src={checked} />
          </div>
          <div>
            <img src={checked} />
          </div>
          <div>
            <img src={checked} />
          </div>
          <div>
            <img src={checked} />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.cell_start}>Nginx, Apache, Traefik</div>
          <div>
            <img src={checked} />
          </div>
          <div>
            <img src={checked} />
          </div>
          <div>
            <img src={checked} />
          </div>
          <div>
            <img src={checked} />
          </div>
        </div>
        <div className={styles.row_white}>
          <div className={styles.cell_start}>
            Terraform, Ansible, GitLab Runner
          </div>
          <div>
            <img src={checked} />
          </div>
          <div>
            <img src={checked} />
          </div>
          <div>
            <img src={checked} />
          </div>
          <div>
            <img src={checked} />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.cell_start}>Vault</div>
          <div>
            <img src={unchecked} />
          </div>
          <div>
            <img src={unchecked} />
          </div>
          <div>
            <img src={checked} />
          </div>
          <div>
            <Checkbox />
          </div>
        </div>
        <div className={styles.row_white}>
          <div className={styles.cell_start}>MinIO S3</div>
          <div>
            <img src={unchecked} />
          </div>
          <div>
            <img src={unchecked} />
          </div>
          <div>
            <img src={checked} />
          </div>
          <div>
            <Checkbox />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.cell_start}>Docker-registry</div>
          <div>
            <img src={checked} />
          </div>
          <div>
            <img src={checked} />
          </div>
          <div>
            <img src={checked} />
          </div>
          <div>
            <img src={checked} />
          </div>
        </div>
        <div className={styles.row_white}>
          <div className={styles.cell_start}>Elasticsearch, Kibana, Fluent</div>
          <div>
            <img src={unchecked} />
          </div>
          <div>
            <img src={checked} />
          </div>
          <div>
            <img src={checked} />
          </div>
          <div>
            <Checkbox />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.cell_start}>Prometheus, VictoriaMetrics</div>
          <div>
            <img src={checked} />
          </div>
          <div>
            <img src={checked} />
          </div>
          <div>
            <img src={checked} />
          </div>
          <div>
            <Checkbox />
          </div>
        </div>
        <div className={styles.row_white}>
          <div className={styles.cell_start}>Другие сервисы</div>
          <div>-</div>
          <div>2</div>
          <div>4</div>
          <div>
            <Digits def="2" />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.heading_start}>
            <strong>Наводим порядок в системе разработки</strong>
          </div>
          <div />
          <div />
          <div />
          <div />
        </div>
        <div className={styles.row_white}>
          <div className={styles.cell_start}>
            Единообразный код
            <Tooltip info="Подберем и внедрим линтеры для анализа стилистики и соответствия кода лучшим практикам." />
          </div>
          <div>
            <img src={unchecked} />
          </div>
          <div>
            <img src={unchecked} />
          </div>
          <div>
            <img src={checked} />
          </div>
          <div>
            <Checkbox />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.cell_start}>
            Чистый код
            <Tooltip info="Внедрим инструменты сканирования кода на наличие чувствительных данных." />
          </div>
          <div>
            <img src={unchecked} />
          </div>
          <div>
            <img src={unchecked} />
          </div>
          <div>
            <img src={checked} />
          </div>
          <div>
            <Checkbox />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.heading_start}>
            <strong>Повышаем стабильность и скорость сборки</strong>
          </div>
          <div />
          <div />
          <div />
          <div />
        </div>
        <div className={styles.row_white}>
          <div className={styles.cell_start}>
            Эффективный процесс сборки
            <Tooltip info="Автоматизируем создания окружений сборки. Снижаем размер артефактов. Распараллеливаем процесс сборки. " />
          </div>
          <div>
            <img src={checked} />
          </div>
          <div>
            <img src={checked} />
          </div>
          <div>
            <img src={checked} />
          </div>
          <div>
            <img src={checked} />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.cell_start}>
            Унифицированные окружения
            <Tooltip info="Стандартизируем управление окружениями с помощью систем хранения секретов и хранилищ артефактов (s3, registry и т.д.)" />
          </div>
          <div>
            <img src={checked} />
          </div>
          <div>
            <img src={checked} />
          </div>
          <div>
            <img src={checked} />
          </div>
          <div>
            <img src={checked} />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.heading_start}>
            <strong>Тестируем приложение</strong>
          </div>
          <div />
          <div />
          <div />
          <div />
        </div>
        <div className={styles.row_white}>
          <div className={styles.cell_start}>
            Тестирование качества и безопасности кода
            <Tooltip
              info={
                <div>
                  Внедряем систему контроля качества и безопасности кода
                  SonarQube, PVS-Studio.
                  <br />В калькуляторе для расчета используются трудозатраты
                  внедрения SonarQube CommunityEdition с параметрами «по
                  умолчанию» и настройки базовых проверок:
                  <ul>
                    <li>кода на баги и уязвимости;</li>
                    <li>ошибки в конструкциях кода (code smells);</li>
                    <li>покрытие кода тестами;</li>
                    <li>дублировании кода.</li>
                  </ul>
                  Расчет стоимости внедрения расширенной версии SonarQube
                  производится индивидуально под конкретные требования.
                </div>
              }
            />
          </div>
          <div>
            <img src={unchecked} />
          </div>
          <div>
            <img src={checked} />
          </div>
          <div>
            <img src={checked} />
          </div>
          <div>
            <Checkbox />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.cell_start}>
            Нагрузочное тестирование
            <Tooltip info="Дополняем конвейеры нагрузочным тестированием используя JMeter, Яндекс.Танк" />
          </div>
          <div>
            <img src={unchecked} />
          </div>
          <div>
            <img src={unchecked} />
          </div>
          <div>
            <img src={checked} />
          </div>
          <div>
            <Checkbox />
          </div>
        </div>
        <div className={styles.row_white}>
          <div className={styles.cell_start}>
            Функциональное тестирование
            <Tooltip info="Дополняем конвейеры функциональным тестированием используя Selenium." />
          </div>
          <div>
            <img src={unchecked} />
          </div>
          <div>
            <img src={unchecked} />
          </div>
          <div>
            <img src={checked} />
          </div>
          <div>
            <Checkbox />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.heading_start}>
            <strong>Обеспечиваем контролируемое развёртывание</strong>
          </div>
          <div />
          <div />
          <div />
          <div />
        </div>
        <div className={styles.row_white}>
          <div className={styles.cell_start}>
            Эффективный процесс развёртывания
            <Tooltip info="Автоматизируем развёртывание приложения в окружения используя Terraform, Ansible." />
          </div>
          <div>
            <img src={checked} />
          </div>
          <div>
            <img src={checked} />
          </div>
          <div>
            <img src={checked} />
          </div>
          <div>
            <Checkbox />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.cell_start}>
            Минимальное влияние на пользователей
            <Tooltip
              info={
                <div>
                  Подбираем стратегию выкатки (canary, blue-green) для вашего
                  приложения.
                  <br />
                  Подготавливаем автоматические сценарии отката изменений
                  (rollback).
                </div>
              }
            />
          </div>
          <div>
            <img src={unchecked} />
          </div>
          <div>
            <img src={checked} />
          </div>
          <div>
            <img src={checked} />
          </div>
          <div>
            <Checkbox />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.heading_start}>
            <strong>Выявляем и решаем проблемы прода</strong>
          </div>
          <div />
          <div />
          <div />
          <div />
        </div>
        <div className={styles.row_white}>
          <div className={styles.cell_start}>
            Производительная инфраструктура
            <Tooltip info="Анализируем узкие места в производительности вашей инфраструктуры и избавляемся от них. " />
          </div>
          <div>
            <img src={unchecked} />
          </div>
          <div>
            <img src={unchecked} />
          </div>
          <div>
            <img src={checked} />
          </div>
          <div>
            <Checkbox />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.cell_start}>
            Минимум простоя в случае отказа компонентов прода
            <Tooltip info="Внедряем процесс регулярного тестирования прода (Chaos Monkey)." />
          </div>
          <div>
            <img src={unchecked} />
          </div>
          <div>
            <img src={unchecked} />
          </div>
          <div>
            <img src={checked} />
          </div>
          <div>
            <Checkbox />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.heading_start}>
            <strong>Показываем целостную картину</strong>
          </div>
          <div />
          <div />
          <div />
          <div />
        </div>
        <div className={styles.row_white}>
          <div className={styles.cell_start}>
            Быстрая диагностика
            <Tooltip info="Внедряем мониторинг, алертинг и логирование для всех компонентов прода" />
          </div>
          <div>
            <img src={unchecked} />
          </div>
          <div>
            <img src={unchecked} />
          </div>
          <div>
            <img src={checked} />
          </div>
          <div>
            <Checkbox />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.cell_start}>
            Контролируемый уровень сервиса
            <Tooltip info="Помогаем определить SLI и SLO для вашего сервиса" />
          </div>
          <div>
            <img src={unchecked} />
          </div>
          <div>
            <img src={unchecked} />
          </div>
          <div>
            <img src={checked} />
          </div>
          <div>
            <Checkbox />
          </div>
        </div>
        <div className={styles.table__footer}>
          <div></div>
          <div>
            <span>195 440 ₽</span>
            <br />
            примерная стоимость
          </div>
          <div>
            <span>604 240 ₽</span>
            <br />
            примерная стоимость
          </div>
          <div>
            <span>1 955 296 ₽</span>
            <br />
            примерная стоимость
          </div>
          <div>
            <span>604 240 ₽</span>
            <br />
            примерная стоимость
          </div>
        </div>
      </section>
      <div className={styles.mark}>
        По окончанию внедрения, мы так же можем взять на себя техническую
        поддержку конвейеров, инфраструктурных сервисов и прода.
        <br /> Для расчёта стоимости вашего проекта и любым другим вопросам,
        пожалуйста, свяжитесь с нами.
      </div>
    </>
  );
}
