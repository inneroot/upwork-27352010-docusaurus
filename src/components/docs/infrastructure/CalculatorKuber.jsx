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

//Кол-во стандартных воркеров
const _20WorkSt = createStore(false);
const _50WorkSt = createStore(true);
const _100WorkSt = createStore(false);

//Кол-во особых воркеров
const _20WorkSp = createStore(false);
const _50WorkSp = createStore(true);
const _100WorkSp = createStore(false);

//Тип кластера
const _Baremetal = createStore(false);
const _Cloud = createStore(true);
const _Hybrid = createStore(false);

//Системы хранения данных
const _SDS = createStore(false);
const _SHD = createStore(true);
const _NotNeed = createStore(false);

//Уровень доступности
const _Low = createStore(false);
const _High = createStore(true);

//Мониторинг
const _BASE_LMA = createStore(true);
const _MONITORING_INTEGRATION = createStore(false);

//Дополнительные услуги
const _HELP_COD = createStore(true);
const _HELP_SERVER = createStore(true);

export default function CalculatorKuber() {
  const checked = useBaseUrl(`/img/pricing/checked.svg`);
  const unchecked = useBaseUrl(`/img/pricing/unchecked.svg`);

  const sm_prj = useBaseUrl(`/img/pricing/s.svg`);
  const md_prj = useBaseUrl(`/img/pricing/m.svg`);
  const lg_prj = useBaseUrl(`/img/pricing/l.svg`);
  const calc_prj = useBaseUrl(`/img/pricing/calc.svg`);

  const allData = {
    _20WorkSt: useStore(_20WorkSt),
    _50WorkSt: useStore(_50WorkSt),
    _100WorkSt: useStore(_100WorkSt),
    _20WorkSp: useStore(_20WorkSp),
    _50WorkSp: useStore(_50WorkSp),
    _100WorkSp: useStore(_100WorkSp),
    _Baremetal: useStore(_Baremetal),
    _Cloud: useStore(_Cloud),
    _Hybrid: useStore(_Hybrid),
    _SDS: useStore(_SDS),
    _SHD: useStore(_SHD),
    _NotNeed: useStore(_NotNeed),
    _Low: useStore(_Low),
    _High: useStore(_High),
    _BASE_LMA: useStore(_BASE_LMA),
    _MONITORING_INTEGRATION: useStore(_MONITORING_INTEGRATION),
    _HELP_COD: useStore(_HELP_COD),
    _HELP_SERVER: useStore(_HELP_SERVER),
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
              кластера Kubernetes
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
              Кол-во стандартных воркеров
            </strong>
            <Tooltip info={<div>Кол-во стандартных воркеров</div>} />
          </div>
          <div />
          <div />
          <div />
          <div />
        </div>
        <div className={styles.row_white}>
          <div className={styles.cell_start}>10-20</div>
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
            <CheckboxEff store={_20WorkSt} />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.cell_start}>20-50</div>
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
            <CheckboxEff store={_50WorkSt} />
          </div>
        </div>
        <div className={styles.row_white}>
          <div className={styles.cell_start}>50-100</div>
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
            <CheckboxEff store={_100WorkSt} />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.heading_start}>
            <strong>
              <br />
              Кол-во особых воркеров
            </strong>
            <Tooltip info={<div>Кол-во особых воркеров </div>} />
          </div>
          <div />
          <div />
          <div />
          <div />
        </div>
        <div className={styles.row_white}>
          <div className={styles.cell_start}>10-20</div>
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
            <CheckboxEff store={_20WorkSp} />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.cell_start}>20-50</div>
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
            <CheckboxEff store={_50WorkSp} />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.cell_start}>50-100</div>
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
            <CheckboxEff store={_100WorkSp} />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.heading_start}>
            <strong>
              <br />
              Тип кластера
            </strong>
            <Tooltip info={<div>Мониторинг</div>} />
          </div>
          <div />
          <div />
          <div />
          <div />
        </div>
        <div className={styles.row_white}>
          <div className={styles.cell_start}>Baremetal</div>
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
            <CheckboxEff store={_Baremetal} />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.cell_start}>Облако</div>
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
            <CheckboxEff store={_Cloud} />
          </div>
        </div>
        <div className={styles.row_white}>
          <div className={styles.cell_start}>Гибрид</div>
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
            <CheckboxEff store={_Hybrid} />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.heading_start}>
            <strong>
              <br />
              Системы хранения данных
            </strong>
          </div>
          <div />
          <div />
          <div />
          <div />
        </div>
        <div className={styles.row_white}>
          <div className={styles.cell_start}>SDS</div>
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
            <CheckboxEff store={_SDS} />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.cell_start}>Классическая СХД</div>
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
            <CheckboxEff store={_SHD} />
          </div>
        </div>
        <div className={styles.row_white}>
          <div className={styles.cell_start}>Не требуется</div>
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
            <CheckboxEff store={_NotNeed} />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.heading_start}>
            <strong>
              <br />
              Уровень доступности
            </strong>
          </div>
          <div />
          <div />
          <div />
          <div />
        </div>
        <div className={styles.row_white}>
          <div className={styles.cell_start}>Низкий</div>
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
            <CheckboxEff store={_Low} />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.cell_start}>Высокий</div>
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
            <CheckboxEff store={_High} />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.heading_start}>
            <strong>
              <br />
              Мониторинг
            </strong>
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
        <div className={styles.row}>
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
        <div className={styles.table__footer}>
          <div className={styles.cell_start}></div>
          <div>
            <span>300 000 ₽</span>
            <br />
            цена с НДС
          </div>
          <div>
            <span>600 000 ₽</span>
            <br />
            цена с НДС
          </div>
          <div>
            <span>1 200 000 ₽</span>
            <br />
            цена с НДС
          </div>
          <div>
            {/* <span>{calculateCost(allData).toLocaleString("ru-RU")} ₽ </span> */}
            <span>600 000 ₽</span>
            <br />
            цена с НДС
          </div>
        </div>
      </section>
    </>
  );
}
