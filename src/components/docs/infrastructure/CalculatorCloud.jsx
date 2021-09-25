import React from "react";
import { createStore } from "effector";
import { useStore } from "effector-react";
import styles from "../building/Pricing.module.css";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { calculateCost } from "./calc_cloud";
import clsx from "clsx";
import {
  TooltipResource,
  TooltipAvailability,
  TooltipMonitoring,
  TooltipServerHelp,
  TooltipCODHelp,
  TooltipCloudHelp,
  TooltipMigrationHelp,
} from "./CalcTooltipsCloud";
import CheckboxEff from "../../common/CheckboxEff";
import RadioEff from "../../common/RadioEff";

//Инициализация всех переключателей с их значениями по умолчанию

//Количество ресурсов
const _CPU = createStore(2);

//Уровень доступности
const _AVAILABILITY = createStore(2);

//Мониторинг
const _BASE_LMA = true;
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
    _CPU: useStore(_CPU),
    _AVAILABILITY: useStore(_AVAILABILITY),
    _BASE_LMA,
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
            <TooltipResource />
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
            <RadioEff store={_CPU} radioValue={1} />
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
            <RadioEff store={_CPU} radioValue={2} />
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
            <RadioEff store={_CPU} radioValue={3} />
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
            <RadioEff store={_AVAILABILITY} radioValue={1} />
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
        <div className={styles.row}>
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
        <div className={styles.row_white}>
          <div className={styles.cell_start}>
            Помощь в выборе платформы
            <br /> для облака
            <TooltipCloudHelp />
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
          <div className={styles.cell_start}>
            Помощь в миграции
            <TooltipMigrationHelp />
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
            <TooltipResource />
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
            <TooltipAvailability />
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
        <div className={styles.row}>
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
        <div className={styles.row_white}>
          <div className={styles.cell_start}>
            Помощь в выборе платформы для облака
            <TooltipCloudHelp />
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
            Помощь в миграции
            <TooltipMigrationHelp />
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
            <TooltipResource />
          </div>
          <div />
        </div>
        <div className={styles.row_white}>
          <div className={styles.cell_start}>
            10-20 серверов или 500-1000 vCPU
          </div>
          <div>
            <RadioEff store={_CPU} radioValue={1} />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.cell_start}>
            20-50 серверов или 1000-5000 vCPU
          </div>
          <div>
            <RadioEff store={_CPU} radioValue={2} />
          </div>
        </div>
        <div className={styles.row_white}>
          <div className={styles.cell_start}>
            50-100 серверов или 5000-10000 vCPU
          </div>
          <div>
            <RadioEff store={_CPU} radioValue={3} />
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
          <div className={styles.cell_start}>Низкий (для тестовых сред)</div>
          <div>
            <RadioEff store={_AVAILABILITY} radioValue={1} />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.cell_start}>Высокий (для продуктива)</div>
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
            <strong>
              <br />
              Дополнительные услуги
            </strong>
          </div>
          <div />
        </div>
        <div className={styles.row_white}>
          <div className={styles.cell_start}>
            Помощь в выборе серверов
            <TooltipServerHelp />
          </div>
          <div>
            <CheckboxEff store={_HELP_SERVER} />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.cell_start}>
            Помощь в выборе ЦОД
            <TooltipCODHelp />
          </div>
          <div>
            <CheckboxEff store={_HELP_COD} />
          </div>
        </div>
        <div className={styles.row_white}>
          <div className={styles.cell_start}>
            Помощь в выборе платформы для облака
            <TooltipCloudHelp />
          </div>
          <div>
            <CheckboxEff store={_HELP_PLATFORM} />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.cell_start}>
            Помощь в миграции
            <TooltipMigrationHelp />
          </div>
          <div>
            <CheckboxEff store={_HELP_MIGRATION} />
          </div>
        </div>
        <div className={styles.table__footer}>
          <div className={styles.cell_start}></div>
          <div>
            <span>{Math.round(calculateCost(allData) / 1000)}</span>
            <br />
            тыс.руб
          </div>
        </div>
      </section>
    </>
  );
}
