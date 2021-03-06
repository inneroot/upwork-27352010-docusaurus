import React, { useState } from "react";
import { createStore, createApi } from "effector";
import { useStore } from "effector-react";
import styles from "../building/Pricing.module.css";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { calculateCost } from "./calc_kuber";
import clsx from "clsx";
import {
  TooltipStWorker,
  TooltipSpWorker,
  TooltipCluster,
  TooltipStorage,
  TooltipAvailability,
  TooltipMonitoring,
  TooltipCODHelp,
  TooltipServerHelp,
} from "./CalcTooltipsKuber";
import CheckboxEff from "../../common/CheckboxEff";
import RadioEff from "../../common/RadioEff";

//Инициализация всех переключателей с их значениями по умолчанию

//Кол-во стандартных воркеров
const _WorkSt = createStore(2);

//Кол-во особых воркеров
const _WorkSp = createStore(2);

//Тип кластера
const _ClusterType = createStore(2);

//Системы хранения данных
const _StorageType = createStore(2);

//Уровень доступности
const _AVAILABILITY = createStore(2);

//Мониторинг
const _BASE_LMA = true;
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
    _WorkSt: useStore(_WorkSt),
    _WorkSp: useStore(_WorkSp),
    _ClusterType: useStore(_ClusterType),
    _StorageType: useStore(_StorageType),
    _AVAILABILITY: useStore(_AVAILABILITY),
    _BASE_LMA,
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
            <TooltipStWorker />
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
            <RadioEff store={_WorkSt} radioValue={1} />
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
            <RadioEff store={_WorkSt} radioValue={2} />
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
            <RadioEff store={_WorkSt} radioValue={3} />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.heading_start}>
            <strong>
              <br />
              Кол-во особых воркеров
            </strong>
            <TooltipSpWorker />
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
            <RadioEff store={_WorkSp} radioValue={1} />
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
            <RadioEff store={_WorkSp} radioValue={2} />
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
            <RadioEff store={_WorkSp} radioValue={3} />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.heading_start}>
            <strong>
              <br />
              Тип кластера
            </strong>
            <TooltipCluster />
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
            <RadioEff store={_ClusterType} radioValue={1} />
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
            <RadioEff store={_ClusterType} radioValue={2} />
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
            <RadioEff store={_ClusterType} radioValue={3} />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.heading_start}>
            <strong>
              <br />
              Системы хранения данных
            </strong>
            <TooltipStorage />
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
            <RadioEff store={_StorageType} radioValue={1} />
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
            <RadioEff store={_StorageType} radioValue={2} />
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
            <RadioEff store={_StorageType} radioValue={3} />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.heading_start}>
            <strong>
              <br />
              Уровень доступности
            </strong>
            <TooltipAvailability />
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
            <RadioEff store={_AVAILABILITY} radioValue={1} />
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
            <RadioEff store={_AVAILABILITY} radioValue={2} />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.heading_start}>
            <strong>
              <br />
              Мониторинг
            </strong>
            <TooltipMonitoring />
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
          <div className={styles.cell_start}>
            Помощь в выборе ЦОД
            <TooltipCODHelp />
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
            <CheckboxEff store={_HELP_COD} />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.cell_start}>
            Помощь в выборе серверов
            <TooltipServerHelp />
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
            <CheckboxEff store={_HELP_SERVER} />
          </div>
        </div>
        <div className={styles.table__footer}>
          <div className={styles.cell_start}></div>
          <div>
            <span>875 000 ₽</span>
            <br />
            цена с НДС
          </div>
          <div>
            <span>1 305 000 ₽</span>
            <br />
            цена с НДС
          </div>
          <div>
            <span>1 625 000 ₽</span>
            <br />
            цена с НДС
          </div>
          <div>
            <span>
              {(
                Math.round(calculateCost(allData) / 1000) * 1000
              ).toLocaleString("ru-RU")}
              ₽
            </span>
            <br />
            цена с НДС
          </div>
        </div>
      </section>

      <p></p>
      <section className={clsx(styles.container__mobile, styles.container)}>
        <span>Калькулятор стоимости построения кластера Kubernetes</span>
        <div className={styles.table__head}>
          <div className={styles.table__head__label}></div>
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
        </div>
        <div className={styles.row}>
          <div className={styles.heading_start}>
            <strong>Кол-во стандартных воркеров</strong>
            <TooltipStWorker />
          </div>
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
        </div>
        <div className={styles.row}>
          <div className={styles.heading_start}>
            <strong>Кол-во особых воркеров</strong>
            <TooltipSpWorker />
          </div>
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
        </div>
        <div className={styles.row}>
          <div className={styles.heading_start}>
            <strong>Тип кластера</strong>
            <TooltipCluster />
          </div>
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
        </div>
        <div className={styles.row}>
          <div className={styles.heading_start}>
            <strong>Системы хранения данных</strong>
            <TooltipStorage />
          </div>
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
        </div>
        <div className={styles.row}>
          <div className={styles.heading_start}>
            <strong>Уровень доступности</strong>
            <TooltipAvailability />
          </div>
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
        </div>
        <div className={styles.row}>
          <div className={styles.heading_start}>
            <strong>Мониторинг</strong>
            <TooltipMonitoring />
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
          <div className={styles.cell_start}>
            Помощь в выборе ЦОД
            <TooltipCODHelp />
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
            Помощь в выборе серверов
            <TooltipServerHelp />
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
        <div className={styles.table__footer}>
          <div className={styles.cell_start}>
            <br />
            <strong>Стоимость, с НДС</strong>
          </div>
          <div>
            <span>875</span>
            <br />
            тыс.руб
          </div>
          <div>
            <span>1305</span>
            <br />
            тыс.руб
          </div>
          <div>
            <span>1625</span>
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
            <strong>Кол-во стандартных воркеров</strong>
            <TooltipStWorker />
          </div>
          <div />
        </div>
        <div className={styles.row_white}>
          <div className={styles.cell_start}>10-20</div>
          <div>
            <RadioEff store={_WorkSt} radioValue={1} />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.cell_start}>20-50</div>
          <div>
            <RadioEff store={_WorkSt} radioValue={2} />
          </div>
        </div>
        <div className={styles.row_white}>
          <div className={styles.cell_start}>50-100</div>
          <div>
            <RadioEff store={_WorkSt} radioValue={3} />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.heading_start}>
            <strong>
              Кол-во особых
              <br />
              воркеров
            </strong>
            <TooltipSpWorker />
          </div>
          <div />
        </div>
        <div className={styles.row_white}>
          <div className={styles.cell_start}>10-20</div>
          <div>
            <RadioEff store={_WorkSp} radioValue={1} />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.cell_start}>20-50</div>
          <div>
            <RadioEff store={_WorkSp} radioValue={2} />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.cell_start}>50-100</div>
          <div>
            <RadioEff store={_WorkSp} radioValue={3} />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.heading_start}>
            <strong>Тип кластера</strong>
            <TooltipCluster />
          </div>
          <div />
        </div>
        <div className={styles.row_white}>
          <div className={styles.cell_start}>Baremetal</div>
          <div>
            <RadioEff store={_ClusterType} radioValue={1} />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.cell_start}>Облако</div>
          <div>
            <RadioEff store={_ClusterType} radioValue={2} />
          </div>
        </div>
        <div className={styles.row_white}>
          <div className={styles.cell_start}>Гибрид</div>
          <div>
            <RadioEff store={_ClusterType} radioValue={3} />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.heading_start}>
            <strong>Системы хранения данных</strong>
            <TooltipStorage />
          </div>
          <div />
        </div>
        <div className={styles.row_white}>
          <div className={styles.cell_start}>SDS</div>
          <div>
            <RadioEff store={_StorageType} radioValue={1} />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.cell_start}>Классическая СХД</div>
          <div>
            <RadioEff store={_StorageType} radioValue={2} />
          </div>
        </div>
        <div className={styles.row_white}>
          <div className={styles.cell_start}>Не требуется</div>
          <div>
            <RadioEff store={_StorageType} radioValue={3} />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.heading_start}>
            <strong>Уровень доступности</strong>
            <TooltipAvailability />
          </div>
          <div />
        </div>
        <div className={styles.row_white}>
          <div className={styles.cell_start}>Низкий</div>
          <div>
            <RadioEff store={_AVAILABILITY} radioValue={1} />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.cell_start}>Высокий</div>
          <div>
            <RadioEff store={_AVAILABILITY} radioValue={2} />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.heading_start}>
            <strong>Мониторинг</strong>
            <TooltipMonitoring />
          </div>
          <div />
        </div>
        <div className={styles.row_white}>
          <div className={styles.cell_start}>Базовые инструменты LMA</div>
          <div>
            <img src={checked} />
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
            <strong>Дополнительные услуги</strong>
          </div>
          <div />
        </div>
        <div className={styles.row_white}>
          <div className={styles.cell_start}>
            Помощь в выборе ЦОД
            <TooltipCODHelp />
          </div>
          <div>
            <CheckboxEff store={_HELP_COD} />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.cell_start}>
            Помощь в выборе серверов
            <TooltipServerHelp />
          </div>
          <div>
            <CheckboxEff store={_HELP_SERVER} />
          </div>
        </div>
        <div className={styles.table__footer}>
          <div className={styles.cell_start}>
            <br />
            <strong>Стоимость, с НДС</strong>
          </div>
          <div>
            <span>
              {Math.round(calculateCost(allData) / 1000).toLocaleString(
                "ru-RU"
              )}
              ₽
            </span>
            <br />
            тыс.руб
          </div>
        </div>
      </section>
    </>
  );
}
