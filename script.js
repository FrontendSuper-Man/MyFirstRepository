let title = prompt("Название проекта");
console.log(title);

let screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные, Интерактивные");
console.log(screens);

let rollback = 23;

let screenPrice = +prompt("Сколько будет стоить данная работа?", "Писать в цифрах, Пример:12000");
console.log(screenPrice);

let adaptive = confirm("Нужен ли адаптив на сайте?");
console.log(adaptive);
if (!adaptive) {
	console.log("Адаптив не нужен, продолжаем...");
}

let service1 = prompt("Какой дополнительный тип услуги нужен?");
console.log(service1);
let servicePrice1 = 0;
if (service1) {
	servicePrice1 = +prompt("Сколько это будет стоить?", "В цифрах");
}
console.log(servicePrice1);

let service2 = prompt("Какой дополнительный тип услуги нужен?");
console.log(service2);
let servicePrice2 = 0;
if (service2) {
	servicePrice2 = +prompt("Сколько это будет стоить?", "В цифрах");
}
console.log(servicePrice2);

let fullPrice = screenPrice + servicePrice1 + servicePrice2;
console.log(fullPrice);

let intermediary = fullPrice * (rollback / 100); // Откат посреднику
console.log(intermediary);

let servicePercentPrice = fullPrice - intermediary;
servicePercentPrice = Math.ceil(servicePercentPrice);
console.log(servicePercentPrice);

// let fullPrice = 120000
if (+fullPrice > 30000) {
	console.log("Даем скидку в 10%");
} else if (+fullPrice < 30000 && +fullPrice > 15000) {
	console.log("Даем скидку в 5%");
} else if (+fullPrice > 0 && +fullPrice <= 15000) {
	console.log("Скидка не предусмотрена");
} else {
	console.log("Что-то пошло не так");
}




