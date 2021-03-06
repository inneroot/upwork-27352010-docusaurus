export function calculateCost(data) {
  const HourRate = 7000
  const CPU_Values = [4, 11, 27]
  const AVAILABILITY_Values = [20, 50.4]
  let HELP_SERVER_COEF = data._HELP_SERVER ? 1 : 2
  let BASE_LMA_AVAILABILITY_COEF = data._AVAILABILITY===1 ? 24 : 40
  let COD_AVAILABILITY_COEF = data._AVAILABILITY===1 ? 16 : 32

  let CPU_HOURS = CPU_Values[data._CPU-1]*HELP_SERVER_COEF
  let AVAILABILITY_HOURS = AVAILABILITY_Values[data._AVAILABILITY-1]
  let MONITORING_HOURS = BASE_LMA_AVAILABILITY_COEF*data._BASE_LMA + 32*data._MONITORING_INTEGRATION
  let ADDITIONAL_HOURS = 12*data._HELP_SERVER + COD_AVAILABILITY_COEF*data._HELP_COD + 10*data._HELP_PLATFORM + 32*data._HELP_MIGRATION

  let totalHours = CPU_HOURS + AVAILABILITY_HOURS + MONITORING_HOURS + ADDITIONAL_HOURS
  return totalHours*HourRate
}