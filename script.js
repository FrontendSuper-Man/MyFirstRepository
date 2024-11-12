let title
let screens
let screenPrice
let adaptive

let rollback = 10;
let allServicePrices
let fullPrice
let servicePercentPrice
let service1
let service2

const asking = function (params) {
	title = prompt("Как называется ваш проект?", "Проект");
	screens = prompt("Какие типы экранов нужно разработать?", "Простые");
	screenPrice = +prompt("Сколько будет стоить данная работа?", "20000");
	adaptive = confirm("Нужен ли адаптив на сайте?",);
}

const getAllServicePrices = function () {
	let sum = 0

	for (let i = 0; i < 2; i++) {

		if (i === 0) {
			service1 = prompt('Какой дополнительный тип услуг нужен?');
		} else if (i === 1) {
			service2 = prompt('Какой дополнительный тип услуг нужен?');
		}

		sum += +prompt("Сколько это будет стоить?", '2000');
	}
	return sum
}

const showTypeOf = function (variable) {
	console.log(variable, typeof variable);
}

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
	return elem.trim()[0].toUpperCase + title.trim().substring(1).toLowerCase()
}

function getServicePercentPrices(elem1, elem2) {
	return elem1 - elem2
}

allServicePrices = getAllServicePrices()
fullPrice = getFullPrice(screenPrice, allServicePrices)
let amountKickback = (fullPrice * (rollback / 100));
servicePercentPrice = getServicePercentPrices(fullPrice, amountKickback)
title = getTitle(title)


// showTypeOf(title)
// showTypeOf(screenPrice)
// showTypeOf(adaptive)

// console.log(getTitle(title));
console.log("screens: " + screens);
console.log("Тип данных " + typeof screens + ': типы экранов:' + screens);
console.log("screenPrice: " + screenPrice);
console.log("adaptive: " + adaptive);
console.log("rollback: " + rollback);
console.log("fullPrice: " + fullPrice);
console.log("servicePercentPrice: " + servicePercentPrice);
console.log(getRollBackMessage(fullPrice));