export function calculateCost(data) {

  const HourRate = 7000;
  const Worker_BASE = [8, 20, 50];
  const Storage_Values = [24, 40, 0];
  const AVAILABILITY_Values = [20, 50.4];

  let Help_coef = data._HELP_SERVER ? 0.54 : 1.07;
  const Worker_coef = (ClasterType) => {
    if (ClasterType === 2) return 0.2;
    if (ClasterType === 1) return Help_coef;
    return Help_coef * 0.7 + 0.3 * 0.2;
  };

  let ST_WORKER_HOURS =
    Worker_BASE[data._WorkSt - 1] * Worker_coef(data._ClasterType);
  let SP_WORKER_HOURS =
    Worker_BASE[data._WorkSp - 1] * Worker_coef(data._ClasterType) * 2;
  let STORAGE_HOURS = Storage_Values[data._StorageType - 1];
  let AVAILABILITY_HOURS = AVAILABILITY_Values[data._AVAILABILITY - 1];
  let BASE_LMA_HOURS = data._AVAILABILITY === 1 ? 24 : 40;
  let MONITORING_INTEGRATION_HOURS = 32 * data._MONITORING_INTEGRATION;
  let HELP_COD_HOURS = 32 * data._HELP_COD;
  let HELP_SERVER_HOURS = 12 * data._HELP_SERVER;

  let totalHours =
    ST_WORKER_HOURS +
    SP_WORKER_HOURS +
    STORAGE_HOURS +
    AVAILABILITY_HOURS +
    BASE_LMA_HOURS +
    MONITORING_INTEGRATION_HOURS +
    HELP_COD_HOURS +
    HELP_SERVER_HOURS;
  console.log("totalHours", totalHours);

  return totalHours * HourRate;
}
