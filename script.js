let title
let screens
let screenPrice
let adaptive
let rollback = 10
let allServicePrices
let fullPrice
let servicePercentPrice
let service1
let service2

const asking = function () {
	title = prompt("Как называется ваш проект?", "Проект");
	screens = prompt("Какие типы экранов нужно разработать?", "Простые");

	screenPrice = prompt("Сколько будет стоить данная работа?", "20000");
	do {
		screenPrice = prompt("Сколько будет стоить данная работа?", "20000");
	} while (!isNumber(screenPrice));

	adaptive = confirm("Нужен ли адаптив на сайте?",);
}


const isNumber = function (num) {
	return !isNaN(parseFloat(num)) && isFinite(num);
}

const getAllServicePrices = function () {
	let sum = 0;

	for (let i = 0; i < 2; i++) {
		let service = prompt('Какой дополнительный тип услуг нужен?');

		// Проверка на отмену
		if (service === null) {
			continue; // Пропустить этот цикл и перейти к следующей итерации
		}

		let servicePrice = 0;
		while (true) {
			servicePrice = prompt("Сколько это будет стоить?", '2000');

			// Проверка на отмену или корректность введенного числа
			if (servicePrice === null) {
				break; // Пропуск вопроса о стоимости услуги
			}
			if (isNumber(servicePrice)) {
				sum += parseFloat(servicePrice);
				break; // Выйти из цикла, если введено корректное число
			}
		}
	}
	return sum;
}

let totalServicePrices = getAllServicePrices();
console.log(totalServicePrices);




const getRollBackMessage = function (price) {
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

function getFullPrice(elem1, elem2) {
	return elem1 + elem2
}

function getTitle(elem) {
	return elem.trim()[0].toUpperCase() + elem.trim().substring(1).toLowerCase();
}

function getServicePercentPrices() {
	return fullPrice - (fullPrice * (rollback / 100))
}


asking()
allServicePrices = getAllServicePrices()
fullPrice = getFullPrice(screenPrice, allServicePrices)
servicePercentPrice = getServicePercentPrices()
title = getTitle(title)

console.log(title);
console.log("screens: " + screens);
console.log("Тип данных " + typeof screens + ': типы экранов:' + screens);
console.log("screenPrice: " + screenPrice);
console.log("adaptive: " + adaptive);
console.log("rollback: " + rollback);
console.log("fullPrice: " + fullPrice);
console.log("servicePercentPrice: " + servicePercentPrice);
console.log(getRollBackMessage(fullPrice));

// const showTypeOf = function (variable) {
// 	console.log(variable, typeof variable);
// }
// showTypeOf(title)
// showTypeOf(screenPrice)
// showTypeOf(adaptive)