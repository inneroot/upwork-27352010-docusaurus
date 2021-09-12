import React, { useState } from "react";
import { createStore, createApi } from "effector";
import { useStore } from "effector-react";
import styles from "../building/Pricing.module.css";
import useBaseUrl from "@docusaurus/useBaseUrl";
// import { calculateCost } from "./calc";
import clsx from "clsx";
import Tooltip from "../../common/Tooltip";
import CheckboxEff from "../../common/CheckboxEff";

//Инициализация всех переключателей с их значениями по умолчанию

//Количество ресурсов
const _1000CPU = createStore(false);
const _5000CPU = createStore(true);
const _10000CPU = createStore(false);

//Уровень доступности
const _LOW_AVAILABILITY = createStore(false);
const _HIGH_AVAILABILITY = createStore(true);

//Мониторинг
const _BASE_LMA = createStore(true);
const _MONITORING_INTEGRATION = createStore(false);

//Дополнительные услуги
const _HELP_SERVER = createStore(true);
const _HELP_COD = createStore(true);
const _HELP_PLATFORM = createStore(true);
const _HELP_MIGRATION = createStore(false);

export default function CalculatorCloud() {
  const checked = useBaseUrl(`/img/pricing/checked.svg`);
  const unchecked = useBaseUrl(`/img/pricing/unchecked.svg`);

  const sm_prj = useBaseUrl(`/img/pricing/s.svg`);
  const md_prj = useBaseUrl(`/img/pricing/m.svg`);
  const lg_prj = useBaseUrl(`/img/pricing/l.svg`);
  const calc_prj = useBaseUrl(`/img/pricing/calc.svg`);

  const allData = {
    _1000CPU: useStore(_1000CPU),
    _5000CPU: useStore(_5000CPU),
    _10000CPU: useStore(_10000CPU),
    _LOW_AVAILABILITY: useStore(_LOW_AVAILABILITY),
    _HIGH_AVAILABILITY: useStore(_HIGH_AVAILABILITY),
    _BASE_LMA: useStore(_BASE_LMA),
    _MONITORING_INTEGRATION: useStore(_MONITORING_INTEGRATION),
    _HELP_SERVER: useStore(_HELP_SERVER),
    _HELP_COD: useStore(_HELP_COD),
    _HELP_PLATFORM: useStore(_HELP_PLATFORM),
    _HELP_MIGRATION: useStore(_HELP_MIGRATION),
  };

  return (
    <>
      <section className={clsx(styles.container, styles.container__desktop)}>
        <div className={styles.table__head}>
          <div className={styles.table__head__label}>
            <span>
              Калькулятор
              <br />
              стоимости построения
              <br />
              частного облака
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
              <br />
              Количество ресурсов
            </strong>
            <Tooltip info={<div>Количество ресурсов</div>} />
          </div>
          <div />
          <div />
          <div />
          <div />
        </div>
        <div className={styles.row_white}>
          <div className={styles.cell_start}>
            10-20 серверов или 500-1000 vCPU
          </div>
          <div>
            <img src={checked} />
          </div>
          <div>
            <img src={unchecked} />
          </div>
          <div>
            <img src={unchecked} />
          </div>
          <div>
            <CheckboxEff store={_1000CPU} />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.cell_start}>
            20-50 серверов или 1000-5000 vCPU
          </div>
          <div>
            <img src={unchecked} />
          </div>
          <div>
            <img src={checked} />
          </div>
          <div>
            <img src={unchecked} />
          </div>
          <div>
            <CheckboxEff store={_5000CPU} />
          </div>
        </div>
        <div className={styles.row_white}>
          <div className={styles.cell_start}>
            50-100 серверов или 5000-10000 vCPU
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
            <CheckboxEff store={_10000CPU} />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.heading_start}>
            <strong>
              <br />
              Уровень доступности
            </strong>
            <Tooltip info={<div>Уровень доступности</div>} />
          </div>
          <div />
          <div />
          <div />
          <div />
        </div>
        <div className={styles.row_white}>
          <div className={styles.cell_start}>Низкий (для тестовых сред)</div>
          <div>
            <img src={checked} />
          </div>
          <div>
            <img src={unchecked} />
          </div>
          <div>
            <img src={unchecked} />
          </div>
          <div>
            <CheckboxEff store={_LOW_AVAILABILITY} />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.cell_start}>Высокий (для продуктива)</div>
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
            <CheckboxEff store={_HIGH_AVAILABILITY} />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.heading_start}>
            <strong>
              <br />
              Мониторинг
            </strong>
            <Tooltip info={<div>Мониторинг</div>} />
          </div>
          <div />
          <div />
          <div />
          <div />
        </div>
        <div className={styles.row_white}>
          <div className={styles.cell_start}>Базовые инструменты LMA</div>
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
            <CheckboxEff store={_BASE_LMA} />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.cell_start}>
            Интеграция с системами мониторинга заказчика
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
            <CheckboxEff store={_MONITORING_INTEGRATION} />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.heading_start}>
            <strong>
              <br />
              Дополнительные услуги
            </strong>
          </div>
          <div />
          <div />
          <div />
          <div />
        </div>
        <div className={styles.row_white}>
          <div className={styles.cell_start}>Помощь в выборе серверов</div>
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
            <CheckboxEff store={_HELP_SERVER} />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.cell_start}>Помощь в выборе ЦОД</div>
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
            <CheckboxEff store={_HELP_COD} />
          </div>
        </div>
        <div className={styles.row_white}>
          <div className={styles.cell_start}>
            Помощь в выборе платформы для облака
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
            <CheckboxEff store={_HELP_PLATFORM} />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.cell_start}>Помощь в миграции</div>
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
            <CheckboxEff store={_HELP_MIGRATION} />
          </div>
        </div>
        <div className={styles.table__footer}>
          <div className={styles.cell_start}></div>
          <div>
            <span>500 000 ₽</span>
            <br />
            цена с НДС
          </div>
          <div>
            <span>1 000 000 ₽</span>
            <br />
            цена с НДС
          </div>
          <div>
            <span>2 000 000 ₽</span>
            <br />
            цена с НДС
          </div>
          <div>
            {/* <span>{calculateCost(allData).toLocaleString("ru-RU")} ₽ </span> */}
            <span>1 000 000 ₽</span>
            <br />
            цена с НДС
          </div>
        </div>
      </section>

      <section className={clsx(styles.container__mobile, styles.container)}>
        <span>Калькулятор стоимости построения частного облака</span>{" "}
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
            <strong>Количество ресурсов</strong>
            <Tooltip info={<div>Количество ресурсов</div>} />
          </div>
          <div />
          <div />
          <div />
        </div>
        <div className={styles.row_white}>
          <div className={styles.cell_start}>
            10-20 серверов или 500-1000 vCPU
          </div>
          <div>
            <img src={checked} />
          </div>
          <div>
            <img src={unchecked} />
          </div>
          <div>
            <img src={unchecked} />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.cell_start}>
            20-50 серверов или 1000-5000 vCPU
          </div>
          <div>
            <img src={unchecked} />
          </div>
          <div>
            <img src={checked} />
          </div>
          <div>
            <img src={unchecked} />
          </div>
        </div>
        <div className={styles.row_white}>
          <div className={styles.cell_start}>
            50-100 серверов или 5000-10000 vCPU
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
            <strong>Уровень доступности</strong>
            <Tooltip info={<div>Уровень доступности</div>} />
          </div>
          <div />
          <div />
          <div />
        </div>
        <div className={styles.row_white}>
          <div className={styles.cell_start}>Низкий (для тестовых сред)</div>
          <div>
            <img src={checked} />
          </div>
          <div>
            <img src={unchecked} />
          </div>
          <div>
            <img src={unchecked} />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.cell_start}>Высокий (для продуктива)</div>
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
            <strong>Мониторинг</strong>
            <Tooltip info={<div>Мониторинг</div>} />
          </div>
          <div />
          <div />
          <div />
        </div>
        <div className={styles.row_white}>
          <div className={styles.cell_start}>Базовые инструменты LMA</div>
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
            Интеграция с системами мониторинга заказчика
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
            <strong>Дополнительные услуги</strong>
          </div>
          <div />
          <div />
          <div />
        </div>
        <div className={styles.row_white}>
          <div className={styles.cell_start}>Помощь в выборе серверов</div>
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
          <div className={styles.cell_start}>Помощь в выборе ЦОД</div>
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
            Помощь в выборе платформы для облака
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
          <div className={styles.cell_start}>Помощь в миграции</div>
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
            <strong>
              <br />
              Стоимость, с НДС
            </strong>
          </div>
          <div>
            <span>500</span>
            <br />
            тыч.руб
          </div>
          <div>
            <span>1000</span>
            <br />
            тыч.руб
          </div>
          <div>
            <span>2000</span>
            <br />
            тыч.руб
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
              <br />
              Количество ресурсов
            </strong>
            <Tooltip info={<div>Количество ресурсов</div>} />
          </div>

          <div />
        </div>
        <div className={styles.row_white}>
          <div className={styles.cell_start}>
            10-20 серверов или 500-1000 vCPU
          </div>
          <div>
            <CheckboxEff store={_1000CPU} />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.cell_start}>
            20-50 серверов или 1000-5000 vCPU
          </div>
          <div>
            <CheckboxEff store={_5000CPU} />
          </div>
        </div>
        <div className={styles.row_white}>
          <div className={styles.cell_start}>
            50-100 серверов или 5000-10000 vCPU
          </div>
          <div>
            <CheckboxEff store={_10000CPU} />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.heading_start}>
            <strong>
              <br />
              Уровень доступности
            </strong>
            <Tooltip info={<div>Уровень доступности</div>} />
          </div>
          <div />
        </div>
        <div className={styles.row_white}>
          <div className={styles.cell_start}>Низкий (для тестовых сред)</div>
          <div>
            <CheckboxEff store={_LOW_AVAILABILITY} />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.cell_start}>Высокий (для продуктива)</div>
          <div>
            <CheckboxEff store={_HIGH_AVAILABILITY} />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.heading_start}>
            <strong>
              <br />
              Мониторинг
            </strong>
            <Tooltip info={<div>Мониторинг</div>} />
          </div>
          <div />
        </div>
        <div className={styles.row_white}>
          <div className={styles.cell_start}>Базовые инструменты LMA</div>
          <div>
            <CheckboxEff store={_BASE_LMA} />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.cell_start}>
            Интеграция с системами мониторинга заказчика
          </div>
          <div>
            <CheckboxEff store={_MONITORING_INTEGRATION} />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.heading_start}>
            <strong>
              <br />
              Дополнительные услуги
            </strong>
          </div>
          <div />
        </div>
        <div className={styles.row_white}>
          <div className={styles.cell_start}>Помощь в выборе серверов</div>
          <div>
            <CheckboxEff store={_HELP_SERVER} />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.cell_start}>Помощь в выборе ЦОД</div>
          <div>
            <CheckboxEff store={_HELP_COD} />
          </div>
        </div>
        <div className={styles.row_white}>
          <div className={styles.cell_start}>
            Помощь в выборе платформы для облака
          </div>
          <div>
            <CheckboxEff store={_HELP_PLATFORM} />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.cell_start}>Помощь в миграции</div>
          <div>
            <CheckboxEff store={_HELP_MIGRATION} />
          </div>
        </div>
        <div className={styles.table__footer}>
          <div className={styles.cell_start}></div>
          <div>
            {/* <span>{calculateCost(allData).toLocaleString("ru-RU")} ₽ </span> */}
            <span>1000</span>
            <br />
            тыс.руб
          </div>
        </div>
      </section>
    </>
  );
}
