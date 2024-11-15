let title = prompt("Как называется ваш проект?");
let screens = prompt("Какие типы экранов нужно разработать?", "Простые");
let screenPrice = +prompt("Сколько будет стоить данная работа?", "20000");
let adaptive = confirm("Нужен ли адаптив на сайте?", "Нет");
let service1 = prompt('Какой дополнительный тип услуг нужен?', "нет");
let service2 = prompt('Какой дополнительный тип услуг нужен?', "нет");
let servicePrice1 = +prompt("Сколько это будет стоить?", "2000");
let servicePrice2 = +prompt("Сколько это будет стоить?", "2000");
let rollback = 10;

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

const showTypeOf = function (variable) {
	console.log(variable, typeof variable);
}

const getAllServicePrices = function (ser1, ser2) {
	return ser1 + ser2
}
const allServicePrices = getAllServicePrices(servicePrice1, servicePrice2);

function getFullPrice(elem1, elem2) {
	return elem1 + elem2
}

const fullPrice = getFullPrice(screenPrice, allServicePrices)
let amountKickback = (fullPrice * (rollback / 100));

function getTitle(elem) {
	if (elem !== '') {
		let lowerLetters = elem.toLowerCase();
		let num = 0;
		while (lowerLetters[num] == ' ') {
			num += 1;
		}
		let firstLetter = lowerLetters[num].toUpperCase();
		let lowerLettersSlice = lowerLetters.slice(num + 1);
		let result = firstLetter + lowerLettersSlice;
		return result;
	} else {
		return "Название проекта отсутствует";
	}
}
let getTitleLet = getTitle(title)

function getServicePercentPrices(elem1, elem2) {
	return elem1 - elem2
}
let servicePercentPrice = getServicePercentPrices(fullPrice, amountKickback)

showTypeOf(getTitleLet)
showTypeOf(screenPrice)
// showTypeOf(adaptive)
// showTypeOf(service1)
// showTypeOf(service2)
showTypeOf(servicePrice1)
showTypeOf(servicePrice2)
showTypeOf(rollback)
showTypeOf(servicePercentPrice)
showTypeOf(getRollBackMessage(fullPrice))