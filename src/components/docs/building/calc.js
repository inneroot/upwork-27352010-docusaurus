const HOUR_RATE = 2800;
const BASE_VALUE = [, 8, 8, 10, 2, 1, 1, 1, , 1, 1, 1, 1];

export function calculateCost(data) {
  let buildGolang = data._QTY_APPS_GO * 1.1 * 1.1 * 1;
  let buildPHP = data._QTY_APPS_PHP * 1.5 * 1.2 * 1.1;
  let buildJAVA = data._QTY_APPS_JAVA * 1.3 * 1.2 * 1;
  let buildPython = data._QTY_APPS_PY * 1.7 * 1.3 * 1.1;

  //Единообразный код
  let uniformCodeCost =
    data._uniformCode *
    BASE_VALUE[1] *
    (!!data._QTY_APPS_GO * 1 +
      !!data._QTY_APPS_PHP * 1.3 +
      !!data._QTY_APPS_JAVA * 1.2 +
      !!data._QTY_APPS_PY * 1.3);

  //Чистый код
  let cleanCodeCost = data._cleanCode * BASE_VALUE[2] * 1.2;

  //Эффективный процесс сборки
  let buildSum = buildGolang + buildPHP + buildJAVA + buildPython;
  let buildProcessCost = data._buildProcess * BASE_VALUE[3] * buildSum;

  //Унифицированные окружения
  let unifiedEnvsCost =
    data._unifiedEnvs *
    BASE_VALUE[4] *
    (!!data._Vault * 1.1 + !!data._Docker * 1.1 + !!data._MinIO * 1.2);
  //+ !!_Cuber // не используется в формуле

  //Тестирование качества и безопасности кода
  let testingCodeCost = data._testingCode * BASE_VALUE[5] * 5;

  //Нагрузочное тестирование
  let stressHours =
    !!data._QTY_APPS_GO * 10 +
    !!data._QTY_APPS_PHP * 10 +
    !!data._QTY_APPS_JAVA * 10 +
    !!data._QTY_APPS_PY * 10;
  let stressTestingCost = data._stressTesting * BASE_VALUE[5] * stressHours;

  //Функциональное тестирование
  let functionalHours =
    !!data._QTY_APPS_GO * 10 +
    !!data._QTY_APPS_PHP * 10 +
    !!data._QTY_APPS_JAVA * 10 +
    !!data._QTY_APPS_PY * 10;
  let functionalTestingCost =
    data._functionalTesting * BASE_VALUE[5] * functionalHours;

  //Эффективный процесс развёртывания
  const KUBER_COEF = 0.5;
  const SERV_COEF = 1;
  const DAMN_9 = 9;
  let Services =
    data._SUBD +
    data._RabbitKafka +
    data._Redis +
    data._Nginx +
    data._Terraform +
    data._Vault +
    data._MinIO +
    data._Docker +
    data._Elastic +
    data._Prometheus +
    data._OtherServices;
  let kuber =
    3 * data._Dev +
    3 * data._Integration +
    3 * data._TestQA +
    3 * data._StageDemo +
    5 * data._Prod;
  let deploySum = kuber * KUBER_COEF + Services * SERV_COEF + DAMN_9;
  let deploymentProcessCost =
    data._deploymentProcess * BASE_VALUE[6] * deploySum;

  //Минимальное влияние на пользователей
  let hurtlessCost = data._hurtless * BASE_VALUE[7] * 20;

  //Производительная инфраструктура
  let masterWorkers =
    3 * data._Dev +
    3 * data._Integration +
    3 * data._TestQA +
    3 * data._StageDemo;
  let bm_qty_prod =
    3 * data._SUBD +
    3 * data._RabbitKafka +
    3 * data._Redis +
    3 * data._Nginx +
    data._Terraform +
    3 * data._Vault +
    3 * data._MinIO +
    1 * data._Docker +
    2 * data._Elastic +
    2 * data._Prometheus +
    data._OtherServices;
  let bm_qty_dev =
    data._SUBD +
    data._RabbitKafka +
    data._Redis +
    data._Nginx +
    data._Terraform +
    data._Vault +
    data._MinIO +
    data._Docker +
    data._Elastic +
    data._Prometheus +
    data._OtherServices;

  let QTY_SERVERS = masterWorkers + bm_qty_prod + bm_qty_dev;
  let QTY_SERVICES =
    data._Dev +
    data._Integration +
    data._TestQA +
    data._StageDemo +
    data._Prod +
    bm_qty_dev;

  let infraHours = QTY_SERVERS * 0.3 + QTY_SERVICES * 0.5;
  let infrastrCost = data._infrastr * BASE_VALUE[9] * infraHours;

  //Минимум простоя в случае отказа компонентов прода
  let downtimeHours = QTY_SERVERS * 0.3 + QTY_SERVICES * 0.5;
  let minDowntimeConst = data._minDowntime * BASE_VALUE[10] * downtimeHours;

  //Быстрая диагностика
  let monitoringHours = QTY_SERVERS * 0.2 + QTY_SERVICES * 0.5;
  let alertHours = QTY_SERVERS * 0.1 + QTY_SERVICES * 0.5;
  let loggingHours = QTY_SERVERS * 0.1 + QTY_SERVICES * 0.5;
  let fastDiagnosticsCost =
    data._fastDiagnostics *
    BASE_VALUE[11] *
    (monitoringHours + alertHours + loggingHours);

  //Контролируемый уровень сервиса
  let controlledLevelCost =
    data._controlledLevel * BASE_VALUE[12] * (QTY_SERVICES * 2);

  let totalHours =
    uniformCodeCost +
    cleanCodeCost +
    buildProcessCost +
    unifiedEnvsCost +
    testingCodeCost +
    stressTestingCost +
    functionalTestingCost +
    deploymentProcessCost +
    hurtlessCost +
    infrastrCost +
    minDowntimeConst +
    fastDiagnosticsCost +
    controlledLevelCost;

  //result
  const result = HOUR_RATE * totalHours;

  const roundedTo500 = Math.floor(result / 1000) * 1000;

  return roundedTo500;
}
