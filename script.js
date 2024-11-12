let title = prompt("Как называется ваш проект?");
let screens = prompt("Какие типы экранов нужно разработать?");
let screenPrice = +prompt("Сколько будет стоить данная работа?");
let adaptive = confirm("Нужен ли адаптив на сайте?");
let service1 = prompt('Какой дополнительный тип услуг нужен?');
let service2 = prompt('Какой дополнительный тип услуг нужен?');
let servicePrice1 = +prompt("Сколько это будет стоить?");
let servicePrice2 = +prompt("Сколько это будет стоить?");
let rollback = 10;

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

showTypeOf(title)
showTypeOf(screenPrice)
showTypeOf(adaptive)

const getAllServicePrices = function (ser1, ser2) {
	return ser1 + ser2
}
const allServicePrices = getAllServicePrices(servicePrice1, servicePrice2);

function getFullPrice(elem1, elem2) {
	return elem1 + elem2
}
let fullPrice = getFullPrice(screenPrice, allServicePrices)
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

function getServicePercentPrices(elem1, elem2) {
	return elem1 - elem2
}
servicePercentPrice = getServicePercentPrices(fullPrice, amountKickback)


console.log(servicePercentPrice);
console.log(getRollBackMessage(fullPrice));
console.log(typeof screens, screens);