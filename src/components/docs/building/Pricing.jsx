import React, { useState } from "react";
import { createStore, createApi } from "effector";
import { useStore } from "effector-react";
import styles from "./Pricing.module.css";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { calculateCost } from "./calc";
import clsx from "clsx";

//Инициализация всех переключателей с их значениями по умолчанию

//Кол-во модулей приложения на языках
const _QTY_APPS_GO = createStore(5);
const _QTY_APPS_PHP = createStore(5);
const _QTY_APPS_JAVA = createStore(0);
const _QTY_APPS_PY = createStore(0);
//Виды окружений
const _Dev = true;
const _Integration = createStore(false);
const _TestQA = createStore(false);
const _StageDemo = createStore(true);
const _Prod = createStore(true);
//Инфраструктура
const _SUBD = createStore(true);
const _RabbitKafka = createStore(true);
const _Redis = createStore(true);
const _Nginx = createStore(true);
const _Terraform = createStore(true);
const _Vault = createStore(false);
const _MinIO = createStore(false);
const _Docker = createStore(true);
const _Elastic = createStore(true);
const _Prometheus = createStore(true);
const _OtherServices = createStore(2);
//Наводим порядок в системе разработки
const _uniformCode = createStore(false);
const _cleanCode = createStore(false);
//Повышаем стабильность и скорость сборки
const _buildProcess = true;
const _unifiedEnvs = createStore(true);
//Тестируем приложение
const _testingCode = createStore(true);
const _stressTesting = createStore(false);
const _functionalTesting = createStore(false);
//Обеспечиваем контролируемое развёртывание
const _deploymentProcess = true;
const _hurtless = createStore(true);
//Выявляем и решаем проблемы прода
const _infrastr = createStore(false);
const _minDowntime = createStore(false);
//Показываем целостную картину
const _fastDiagnostics = createStore(false);
const _controlledLevel = createStore(false);

function Tooltip({ info }) {
  const circle = useBaseUrl(`/img/pricing/info-circle.svg`);
  return (
    <>
      <div className={styles.tooltip}>
        <img src={circle} className={styles.tooltip__element} />
        <div className={clsx(styles.tooltip__info, styles.wide_tooltip)}>
          {info}
        </div>
      </div>
    </>
  );
}
function DigitsEff({ store }) {
  const minus = useBaseUrl(`/img/pricing/minus.svg`);
  const plus = useBaseUrl(`/img/pricing/plus.svg`);
  const count = useStore(store);

  const { increment, decrement } = createApi(store, {
    increment: (state) => (state >= 99 ? 99 : state + 1),
    decrement: (state) => (state < 1 ? 0 : state - 1),
  });

  return (
    <div className={styles.digits}>
      <button onClick={decrement}>
        <img src={minus} />
      </button>
      <div className={styles.count}>{count}</div>
      <button onClick={increment}>
        <img src={plus} />
      </button>
    </div>
  );
}

function Checkbox({ def = false }) {
  const checked = useBaseUrl(`/img/pricing/checked.svg`);
  // const unchecked = useBaseUrl(`/img/pricing/unchecked.svg`);
  const checkbox = useBaseUrl(`/img/pricing/checkbox.svg`);
  const [isChecked, setIsChecked] = useState(def);
  return (
    <button
      className={styles.checkbox_btn}
      onClick={() => setIsChecked(!isChecked)}
    >
      <img src={isChecked ? checked : checkbox} />
    </button>
  );
}
function CheckboxEff({ store }) {
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

export default function Pricing() {
  const checked = useBaseUrl(`/img/pricing/checked.svg`);
  const unchecked = useBaseUrl(`/img/pricing/unchecked.svg`);

  const sm_prj = useBaseUrl(`/img/pricing/s.svg`);
  const md_prj = useBaseUrl(`/img/pricing/m.svg`);
  const lg_prj = useBaseUrl(`/img/pricing/l.svg`);
  const calc_prj = useBaseUrl(`/img/pricing/calc.svg`);

  const allData = {
    _QTY_APPS_GO: useStore(_QTY_APPS_GO),
    _QTY_APPS_PHP: useStore(_QTY_APPS_PHP),
    _QTY_APPS_JAVA: useStore(_QTY_APPS_JAVA),
    _QTY_APPS_PY: useStore(_QTY_APPS_PY),
    _Dev: _Dev,
    _Integration: useStore(_Integration),
    _TestQA: useStore(_TestQA),
    _StageDemo: useStore(_StageDemo),
    _Prod: useStore(_Prod),
    _SUBD: useStore(_SUBD),
    _RabbitKafka: useStore(_RabbitKafka),
    _Redis: useStore(_Redis),
    _Nginx: useStore(_Nginx),
    _Terraform: useStore(_Terraform),
    _Vault: useStore(_Vault),
    _MinIO: useStore(_MinIO),
    _Docker: useStore(_Docker),
    _Elastic: useStore(_Elastic),
    _Prometheus: useStore(_Prometheus),
    _OtherServices: useStore(_OtherServices),
    _uniformCode: useStore(_uniformCode),
    _cleanCode: useStore(_cleanCode),

    _buildProcess: _buildProcess,
    _unifiedEnvs: useStore(_unifiedEnvs),

    _testingCode: useStore(_testingCode),
    _stressTesting: useStore(_stressTesting),
    _functionalTesting: useStore(_functionalTesting),

    _deploymentProcess: _deploymentProcess,
    _hurtless: useStore(_hurtless),

    _infrastr: useStore(_infrastr),
    _minDowntime: useStore(_minDowntime),

    _fastDiagnostics: useStore(_fastDiagnostics),
    _controlledLevel: useStore(_controlledLevel),
  };

  return (
    <>
      <section className={clsx(styles.container, styles.container__desktop)}>
        <div className={styles.table__head}>
          <div className={styles.table__head__label}>
            <span>
              Калькулятор
              <br />
              стоимости построения процессов CI/CD
            </span>
          </div>
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
            <DigitsEff store={_QTY_APPS_GO} />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.cell_start}>PHP</div>
          <div>1</div>
          <div>5</div>
          <div>3</div>
          <div>
            <DigitsEff store={_QTY_APPS_PHP} />
          </div>
        </div>
        <div className={styles.row_white}>
          <div className={styles.cell_start}>Java</div>
          <div>-</div>
          <div>-</div>
          <div>5</div>
          <div>
            <DigitsEff store={_QTY_APPS_JAVA} />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.cell_start}>Python</div>
          <div>-</div>
          <div>-</div>
          <div>2</div>
          <div>
            <DigitsEff store={_QTY_APPS_PY} />
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
            <CheckboxEff store={_Integration} />
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
            <CheckboxEff store={_TestQA} />
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
            <CheckboxEff store={_StageDemo} />
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
            <CheckboxEff store={_Prod} />
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
            <CheckboxEff store={_SUBD} />
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
            <CheckboxEff store={_RabbitKafka} />
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
            <CheckboxEff store={_Redis} />
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
            <CheckboxEff store={_Nginx} />
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
            <CheckboxEff store={_Terraform} />
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
            <CheckboxEff store={_Vault} />
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
            <CheckboxEff store={_MinIO} />
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
            <CheckboxEff store={_Docker} />
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
            <CheckboxEff store={_Elastic} />
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
            <CheckboxEff store={_Prometheus} />
          </div>
        </div>
        <div className={styles.row_white}>
          <div className={styles.cell_start}>Другие сервисы</div>
          <div>-</div>
          <div>2</div>
          <div>4</div>
          <div>
            <DigitsEff store={_OtherServices} />
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
            <CheckboxEff store={_uniformCode} />
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
            <CheckboxEff store={_cleanCode} />
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
            <CheckboxEff store={_unifiedEnvs} />
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
            <CheckboxEff store={_testingCode} />
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
            <CheckboxEff store={_stressTesting} />
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
            <CheckboxEff store={_functionalTesting} />
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
            <img src={checked} />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.cell_start}>
            Минимальное влияние
            <br />
            на пользователей
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
            <CheckboxEff store={_hurtless} />
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
            <CheckboxEff store={_infrastr} />
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
            <CheckboxEff store={_minDowntime} />
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
            <CheckboxEff store={_fastDiagnostics} />
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
            <CheckboxEff store={_controlledLevel} />
          </div>
        </div>
        <div className={styles.table__footer}>
          <div className={styles.cell_start}></div>
          <div>
            <span>182 000 ₽</span>
            <br />
            примерная стоимость
          </div>
          <div>
            <span>591 000 ₽</span>
            <br />
            примерная стоимость
          </div>
          <div>
            <span>1 955 000 ₽</span>
            <br />
            примерная стоимость
          </div>
          <div>
            <span>{calculateCost(allData).toLocaleString("ru-RU")} ₽ </span>
            <br />
            примерная стоимость
          </div>
        </div>
      </section>

      <section className={clsx(styles.container__mobile, styles.container)}>
        <span>Калькулятор стоимости построения процессов CI/CD</span>
        <div className={styles.table__head}>
          <div className={styles.table__head__label}></div>
          <div>
            <img src={sm_prj} />
            <br />S
          </div>
          <div>
            <img src={md_prj} />
            <br />M
          </div>
          <div>
            <img src={lg_prj} />
            <br />L
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
        </div>
        <div className={styles.row_white}>
          <div className={styles.cell_start}>Golang</div>
          <div>2</div>
          <div>5</div>
          <div>15</div>
        </div>
        <div className={styles.row}>
          <div className={styles.cell_start}>PHP</div>
          <div>1</div>
          <div>5</div>
          <div>3</div>
        </div>
        <div className={styles.row_white}>
          <div className={styles.cell_start}>Java</div>
          <div>-</div>
          <div>-</div>
          <div>5</div>
        </div>
        <div className={styles.row}>
          <div className={styles.cell_start}>Python</div>
          <div>-</div>
          <div>-</div>
          <div>2</div>
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
        </div>
        <div className={styles.row_white}>
          <div className={styles.cell_start}>Другие сервисы</div>
          <div>-</div>
          <div>2</div>
          <div>4</div>
        </div>
        <div className={styles.row}>
          <div className={styles.heading_start}>
            <strong>Наводим порядок в системе разработки</strong>
          </div>
          <div />
          <div />
          <div />
        </div>
        <div className={styles.row_white}>
          <div className={styles.cell_start}>
            Единообразный
            <br /> код
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
        </div>
        <div className={styles.row}>
          <div className={styles.heading_start}>
            <strong>Повышаем стабильность и скорость сборки</strong>
          </div>
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
        </div>
        <div className={styles.row}>
          <div className={styles.heading_start}>
            <strong>Тестируем приложение</strong>
          </div>
          <div />
          <div />
          <div />
        </div>
        <div className={styles.row_white}>
          <div className={styles.cell_start}>
            Тестирование качества и безопасности
            <br /> кода
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
        </div>
        <div className={styles.row}>
          <div className={styles.heading_start}>
            <strong>Обеспечиваем контролируемое развёртывание</strong>
          </div>
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
        </div>
        <div className={styles.row}>
          <div className={styles.heading_start}>
            <strong>Выявляем и решаем проблемы прода</strong>
          </div>
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
        </div>
        <div className={styles.row}>
          <div className={styles.cell_start}>
            Минимум простоя в случае отказа компонентов
            <br />
            прода
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
        </div>
        <div className={styles.row}>
          <div className={styles.heading_start}>
            <strong>Показываем целостную картину</strong>
          </div>
          <div />
          <div />
          <div />
        </div>
        <div className={styles.row_white}>
          <div className={styles.cell_start}>
            Быстрая
            <br />
            диагностика
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
        </div>
        <div className={styles.table__footer}>
          <div className={styles.cell_start}>
            <br />
            <strong>Стоимость, с НДС</strong>
          </div>
          <div>
            <span>182</span>
            <br />
            тыс.руб
          </div>
          <div>
            <span>591</span>
            <br />
            тыс.руб
          </div>
          <div>
            <span>1955</span>
            <br />
            тыс.руб
          </div>
        </div>
      </section>

      <section
        className={clsx(styles.container, styles.container__mobile__calulate)}
      >
        <div className={styles.table__head}>
          <div className={styles.table__head__label}></div>
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
        </div>
        <div className={styles.row_white}>
          <div className={styles.cell_start}>Golang</div>
          <div>
            <DigitsEff store={_QTY_APPS_GO} />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.cell_start}>PHP</div>
          <div>
            <DigitsEff store={_QTY_APPS_PHP} />
          </div>
        </div>
        <div className={styles.row_white}>
          <div className={styles.cell_start}>Java</div>
          <div>
            <DigitsEff store={_QTY_APPS_JAVA} />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.cell_start}>Python</div>
          <div>
            <DigitsEff store={_QTY_APPS_PY} />
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
        </div>
        <div className={styles.row_white}>
          <div className={styles.cell_start}>Dev</div>
          <div>
            <img src={checked} />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.cell_start}>Integration</div>
          <div>
            <CheckboxEff store={_Integration} />
          </div>
        </div>
        <div className={styles.row_white}>
          <div className={styles.cell_start}>Test/QA</div>
          <div>
            <CheckboxEff store={_TestQA} />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.cell_start}>Stage/Demo</div>
          <div>
            <CheckboxEff store={_StageDemo} />
          </div>
        </div>
        <div className={styles.row_white}>
          <div className={styles.cell_start}>Prod</div>
          <div>
            <CheckboxEff store={_Prod} />
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
        </div>
        <div className={styles.row_white}>
          <div className={styles.cell_start}>СУБД (MySQL, PSQL, noSQL)</div>
          <div>
            <CheckboxEff store={_SUBD} />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.cell_start}>Rabbit, Kafka</div>
          <div>
            <CheckboxEff store={_RabbitKafka} />
          </div>
        </div>
        <div className={styles.row_white}>
          <div className={styles.cell_start}>Redis, Memcached</div>
          <div>
            <CheckboxEff store={_Redis} />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.cell_start}>Nginx, Apache, Traefik</div>
          <div>
            <CheckboxEff store={_Nginx} />
          </div>
        </div>
        <div className={styles.row_white}>
          <div className={styles.cell_start}>
            Terraform, Ansible, GitLab Runner
          </div>
          <div>
            <CheckboxEff store={_Terraform} />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.cell_start}>Vault</div>
          <div>
            <CheckboxEff store={_Vault} />
          </div>
        </div>
        <div className={styles.row_white}>
          <div className={styles.cell_start}>MinIO S3</div>
          <div>
            <CheckboxEff store={_MinIO} />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.cell_start}>Docker-registry</div>
          <div>
            <CheckboxEff store={_Docker} />
          </div>
        </div>
        <div className={styles.row_white}>
          <div className={styles.cell_start}>Elasticsearch, Kibana, Fluent</div>
          <div>
            <CheckboxEff store={_Elastic} />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.cell_start}>Prometheus, VictoriaMetrics</div>
          <div>
            <CheckboxEff store={_Prometheus} />
          </div>
        </div>
        <div className={styles.row_white}>
          <div className={styles.cell_start}>Другие сервисы</div>
          <div>
            <DigitsEff store={_OtherServices} />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.heading_start}>
            <strong>Наводим порядок в системе разработки</strong>
          </div>
          <div />
        </div>
        <div className={styles.row_white}>
          <div className={styles.cell_start}>
            Единообразный код
            <Tooltip info="Подберем и внедрим линтеры для анализа стилистики и соответствия кода лучшим практикам." />
          </div>
          <div>
            <CheckboxEff store={_uniformCode} />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.cell_start}>
            Чистый код
            <Tooltip info="Внедрим инструменты сканирования кода на наличие чувствительных данных." />
          </div>
          <div>
            <CheckboxEff store={_cleanCode} />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.heading_start}>
            <strong>Повышаем стабильность и скорость сборки</strong>
          </div>
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
        </div>
        <div className={styles.row}>
          <div className={styles.cell_start}>
            Унифицированные окружения
            <Tooltip info="Стандартизируем управление окружениями с помощью систем хранения секретов и хранилищ артефактов (s3, registry и т.д.)" />
          </div>
          <div>
            <CheckboxEff store={_unifiedEnvs} />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.heading_start}>
            <strong>Тестируем приложение</strong>
          </div>
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
            <CheckboxEff store={_testingCode} />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.cell_start}>
            Нагрузочное тестирование
            <Tooltip info="Дополняем конвейеры нагрузочным тестированием используя JMeter, Яндекс.Танк" />
          </div>
          <div>
            <CheckboxEff store={_stressTesting} />
          </div>
        </div>
        <div className={styles.row_white}>
          <div className={styles.cell_start}>
            Функциональное тестирование
            <Tooltip info="Дополняем конвейеры функциональным тестированием используя Selenium." />
          </div>
          <div>
            <CheckboxEff store={_functionalTesting} />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.heading_start}>
            <strong>Обеспечиваем контролируемое развёртывание</strong>
          </div>
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
        </div>
        <div className={styles.row}>
          <div className={styles.cell_start}>
            Минимальное влияние
            <br />
            на пользователей
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
            <CheckboxEff store={_hurtless} />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.heading_start}>
            <strong>Выявляем и решаем проблемы прода</strong>
          </div>
          <div />
        </div>
        <div className={styles.row_white}>
          <div className={styles.cell_start}>
            Производительная инфраструктура
            <Tooltip info="Анализируем узкие места в производительности вашей инфраструктуры и избавляемся от них. " />
          </div>
          <div>
            <CheckboxEff store={_infrastr} />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.cell_start}>
            Минимум простоя в случае отказа компонентов прода
            <Tooltip info="Внедряем процесс регулярного тестирования прода (Chaos Monkey)." />
          </div>
          <div>
            <CheckboxEff store={_minDowntime} />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.heading_start}>
            <strong>Показываем целостную картину</strong>
          </div>
          <div />
        </div>
        <div className={styles.row_white}>
          <div className={styles.cell_start}>
            Быстрая диагностика
            <Tooltip info="Внедряем мониторинг, алертинг и логирование для всех компонентов прода" />
          </div>

          <div>
            <CheckboxEff store={_fastDiagnostics} />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.cell_start}>
            Контролируемый уровень сервиса
            <Tooltip info="Помогаем определить SLI и SLO для вашего сервиса" />
          </div>
          <div>
            <CheckboxEff store={_controlledLevel} />
          </div>
        </div>
        <div className={styles.table__footer}>
          <div className={styles.cell_start}>
            <br />
            <strong>Стоимость, с НДС</strong>
          </div>
          <div>
            <span>{Math.floor(calculateCost(allData) / 1000)}</span>
            <br />
            тыс.руб
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
