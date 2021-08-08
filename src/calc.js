const HOUR_RATE = 2800;
const BASE_VALUE = [, 8, 8, 10, 2, 1, 1, 1, , 1, 1, 1, 1];

//Кол-во модулей приложения на языках
let _QTY_APPS_GO = 8; //form Golang
let _QTY_APPS_PHP = 5; //form PHP
let _QTY_APPS_JAVA = 1; //form JAVA
let _QTY_APPS_PY = 1; //form Python

//Виды окружений
const _Dev = true;
let _Integration = true;
let _TestQA = true;
let _StageDemo = true;
let _Prod = true;

//Инфраструктура
let _SUBD = true;
let _RabbitKafka = true;
let _Redis = true;
let _Nginx = true;
let _Terraform = true;
let _Vault = true;
let _MinIO = true;
let _Docker = true;
let _Elastic = true;
let _Prometheus = true;
let _OtherServices = 2;

let _uniformCode = true;
let _cleanCode = true;
const _buildProcess = true;
let _unifiedEnvs = true;
let _testingCode = true;
let _stressTesting = true;
let _functionalTesting = true;
const _deploymentProcess = true;
let _hurtless = true;
let _infrastr = true;
let _minDowntime = true;
let _fastDiagnostics = true;
let _controlledLevel = true;

let buildGolang = _QTY_APPS_GO * 1.1 * 1.1 * 1;
let buildPHP = _QTY_APPS_PHP * 1.5 * 1.2 * 1.1;
let buildJAVA = _QTY_APPS_JAVA * 1.3 * 1.2 * 1;
let buildPython = _QTY_APPS_PY * 1.7 * 1.3 * 1.1;

//Единообразный код
let uniformCodeCost =
  _uniformCode *
  BASE_VALUE[1] *
  (!!_QTY_APPS_GO * 1 +
    !!_QTY_APPS_PHP * 1.3 +
    !!_QTY_APPS_JAVA * 1.2 +
    !!_QTY_APPS_PY * 1.3);
//Чистый код
let cleanCodeCost = _cleanCode * BASE_VALUE[2] * 1.2;

//Эффективный процесс сборки
let buildSum = buildGolang + buildPHP + buildJAVA + buildPython;
let buildProcessCost = _buildProcess * BASE_VALUE[3] * buildSum;

//Унифицированные окружения
let unifiedEnvsCost =
  _unifiedEnvs *
  BASE_VALUE[4] *
  (!!_Vault * 1.1 + !!_Docker * 1.1 + !!_MinIO * 1.2);
//+ !!_Cuber

//Тестирование качества и безопасности кода
let testingCodeCost = _testingCode * BASE_VALUE[5] * 5;

//Нагрузочное тестирование
let stressHours =
  !!_QTY_APPS_GO * 10 +
  !!_QTY_APPS_PHP * 10 +
  !!_QTY_APPS_JAVA * 10 +
  !!_QTY_APPS_PY * 10;
let stressTestingCost = _stressTesting * BASE_VALUE[5] * stressHours;

//Функциональное тестирование
let functionalHours =
  !!_QTY_APPS_GO * 10 +
  !!_QTY_APPS_PHP * 10 +
  !!_QTY_APPS_JAVA * 10 +
  !!_QTY_APPS_PY * 10;
let functionalTestingCost =
  _functionalTesting * BASE_VALUE[5] * functionalHours;

//Эффективный процесс развёртывания
const KUBER_COEF = 0.5;
const SERV_COEF = 1;
const DAMN_9 = 9;
let Services =
  _SUBD +
  _RabbitKafka +
  _Redis +
  _Nginx +
  _Terraform +
  _Vault +
  _MinIO +
  _Docker +
  _Elastic +
  _Prometheus +
  _OtherServices;
let kuber =
  3 * _Dev + 3 * _Integration + 3 * _TestQA + 3 * _StageDemo + 5 * _Prod;
let deploySum = kuber * KUBER_COEF + Services * SERV_COEF + DAMN_9;
let deploymentProcessCost = _deploymentProcess * BASE_VALUE[6] * deploySum;

//Минимальное влияние на пользователей
let hurtlessCost = _hurtless * BASE_VALUE[7] * 20;

//Производительная инфраструктура
let masterWorkers = 3 * _Dev + 3 * _Integration + 3 * _TestQA + 3 * _StageDemo;
let bm_qty_prod =
  3 * _SUBD +
  3 * _RabbitKafka +
  3 * _Redis +
  3 * _Nginx +
  _Terraform +
  3 * _Vault +
  3 * _MinIO +
  1 * _Docker +
  2 * _Elastic +
  2 * _Prometheus +
  _OtherServices;
let bm_qty_dev =
  _SUBD +
  _RabbitKafka +
  _Redis +
  _Nginx +
  _Terraform +
  _Vault +
  _MinIO +
  _Docker +
  _Elastic +
  _Prometheus +
  _OtherServices;

let QTY_SERVERS = masterWorkers + bm_qty_prod + bm_qty_dev;
let QTY_SERVICES =
  _Dev + _Integration + _TestQA + _StageDemo + _Prod + bm_qty_dev;

let infraHours = QTY_SERVERS * 0.3 + QTY_SERVICES * 0.5;
let infrastrCost = _infrastr * BASE_VALUE[9] * infraHours;

//Минимум простоя в случае отказа компонентов прода
let downtimeHours = QTY_SERVERS * 0.3 + QTY_SERVICES * 0.5;
let minDowntimeConst = _minDowntime * BASE_VALUE[10] * downtimeHours;

//Быстрая диагностика
let monitoringHours = QTY_SERVERS * 0.2 + QTY_SERVICES * 0.5;
let alertHours = QTY_SERVERS * 0.1 + QTY_SERVICES * 0.5;
let loggingHours = QTY_SERVERS * 0.1 + QTY_SERVICES * 0.5;
let fastDiagnosticsCost =
  _fastDiagnostics *
  BASE_VALUE[11] *
  (monitoringHours + alertHours + loggingHours);

//Контролируемый уровень сервиса
let controlledLevelCost =
  _controlledLevel * BASE_VALUE[12] * (QTY_SERVICES * 2);

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

console.log(result);
