let title = prompt("Название проекта");
console.log(title);

let screens = prompt("Какие типы экранов нужно разработать ?", "Простые, Сложные, Интерактивные");
console.log(screens);

let screenPrice = +prompt("“Сколько будет стоить данная работа?”", "Писать в цифрах, Пример:12000");
console.log(screenPrice);

let adaptive = confirm("“Нужен ли адаптив на сайте?”")
console.log(adaptive);
if (!adaptive) {
	console.log("Адаптив не нужен, продолжаем...");
}

let service1 = prompt("“Какой дополнительный тип услуги нужен?”")
console.log(service1);
let servicePrice1
if (service1 == true) { servicePrice1 = +prompt("“Сколько это будет стоить?”", "В цифрах") }
console.log(servicePrice1);


let service2 = prompt("“Какой дополнительный тип услуги нужен?”")
console.log(service2);
let servicePrice2
if (service2 == true) { servicePrice2 = +prompt("“Сколько это будет стоить?”", "В цифрах") }
console.log(servicePrice2);


let fullPrice = screenPrice + servicePrice1 + servicePrice2
console.log(fullPrice);

let intermediary = fullPrice * (rollback / 100) // Откат посреднику
console.log(intermediary);

let servicePercentPrice = fullPrice - intermediary;
console.log(servicePercentPrice);



