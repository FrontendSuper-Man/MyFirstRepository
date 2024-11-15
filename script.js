let title = prompt("Как называется ваш проект?");
let screens = prompt("Какие типы экранов нужно разработать?");
let screenPrice = +prompt("Сколько будет стоить данная работа?");
let adaptive = confirm("Нужен ли адаптив на сайте?");
let servicePrice1 = +prompt("Сколько это будет стоить?");
let servicePrice2 = +prompt("Сколько это будет стоить?");
let rollback = 10;

// Вывод типов переменных
const showTypeOf = function (variable) {
	console.log(variable, typeof variable);
}
showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);

// Расчет общих цен услуг
const getAllServicePrices = function (ser1, ser2) {
	return ser1 + ser2;
}
let allServicePrices = getAllServicePrices(servicePrice1, servicePrice2);

// Расчет полной стоимости
function getFullPrice(screenPrice, allServicePrices) {
	return screenPrice + allServicePrices;
}
let fullPrice = getFullPrice(screenPrice, allServicePrices);

// Функция для получения преобразованного title
function getTitle(title) {
	let trimmedTitle = title.trim(); // Удаляем пробелы с начала и конца
	return trimmedTitle[0].toUpperCase() + trimmedTitle.substring(1).toLowerCase();
}

// Расчет стоимости за вычетом отката
function getServicePercentPrices(fullPrice, rollback) {
	return fullPrice * (1 - rollback / 100);
}
let servicePercentPrice = getServicePercentPrices(fullPrice, rollback);

// Вывод строк с типами экранов
console.log(screens);

// Вывод сообщения о скидке пользователю
function getRollBackMessage(price) {
	if (price >= 30000) {
		return "Даём скидку в 10%";
	} else if (price >= 15000 && price < 30000) {
		return "Даём скидку в 5%";
	} else if (price >= 0 && price < 15000) {
		return "Скидка не предусмотрена";
	} else {
		return "Что-то пошло не так";
	}
}
console.log(getRollBackMessage(fullPrice));

// Стоимость за вычетом процента отката посреднику
console.log(servicePercentPrice);

// Проверка и вывод преобразованного title
console.log(getTitle(title));
