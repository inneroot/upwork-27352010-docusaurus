import React from "react";
import Tooltip from "../../common/Tooltip";

export const TooltipResource = () => {
  return (
    <Tooltip
      info={
        <div>
          Укажите начальное количество ресурсов под приватное облако. По мере
          роста потребностей в вычислительных ресурсах сервера можно добавлять.
        </div>
      }
    />
  );
};

export const TooltipAvailability = () => {
  return (
    <Tooltip
      info={
        <div>
          Низкий уровень — управляющие компоненты облака в единственном
          экземпляре.
          <br />
          Высокий уровень — управляющие компоненты облака в двух и более
          экземплярах. Выход из строя одного экземпляра, не влияет на
          доступность функциональности облака.
        </div>
      }
    />
  );
};

export const TooltipMonitoring = () => {
  return (
    <Tooltip
      info={
        <div>
          Базовые инструменты LMA (Logging, Monitoring, Alerting) состоят:
          <ul>
            <li>Prometheus — мониторинг;</li>
            <li>EFK — сбор и анализ логов;</li>
            <li>Бот для Telegram — оповещения.</li>
          </ul>
          При необходимости можем интегрировать наши инструменты LMA в
          существующую систему.
        </div>
      }
    />
  );
};

export const TooltipServerHelp = () => {
  return (
    <Tooltip
      info={
        <div>
          Если под облако планируется закупать новые сервера, то мы можем
          подобрать оптимальные конфигурации.
        </div>
      }
    />
  );
};

export const TooltipCODHelp = () => {
  return (
    <Tooltip
      info={
        <div>
          Если сервера планируется размещать в коммерческих ЦОД, то мы можем
          подобрать оптимальные.
        </div>
      }
    />
  );
};

export const TooltipCloudHelp = () => {
  return (
    <Tooltip
      info={
        <div>
          Для построения типового облака под разработку мы используем OpenStack.
          Однако в ряде обстоятельств:
          <ul>
            <li>наличие уже купленных лицензий Microsoft/VMware;</li>
            <li>корпоративных политик (актуально для иностранных филиалов);</li>
            <li>
              желания использовать ресурсы имеющихся администраторов для
              эксплуатации облака;
            </li>
          </ul>
          построить облако на платформах от Microsoft/VMware может быть
          целесообразнее. Чтобы это проверить мы можем провести
          технико-экономический анализ.
        </div>
      }
    />
  );
};

export const TooltipMigrationHelp = () => {
  return (
    <Tooltip
      info={
        <div>
          Если в новое облако нужно мигрировать старые информационные системы,
          мы можем помочь в проработке проекта миграции.
        </div>
      }
    />
  );
};