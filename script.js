const title = prompt("Как называется ваш проект?");
const screens = prompt("Какие типы экранов нужно разработать?", "Простые");
const screenPrice = +prompt("Сколько будет стоить данная работа?", "20000");
const adaptive = confirm("Нужен ли адаптив на сайте?", "Нет");
const service1 = prompt('Какой дополнительный тип услуг нужен?', "нет");
const service2 = prompt('Какой дополнительный тип услуг нужен?', "нет");
const servicePrice1 = +prompt("Сколько это будет стоить?", "2000");
const servicePrice2 = +prompt("Сколько это будет стоить?", "2000");
const rollback = 10;

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
	return ser1 + ser2;
}
const allServicePrices = getAllServicePrices(servicePrice1, servicePrice2);

const getFullPrice = function (elem1, elem2) {
	return elem1 + elem2;
}

const fullPrice = getFullPrice(screenPrice, allServicePrices);
const amountKickback = (fullPrice * (rollback / 100));

const getTitle = function (elem) {
	if (elem !== '') {
		const lowerLetters = elem.toLowerCase();
		let num = 0;
		while (lowerLetters[num] === ' ') {
			num += 1;
		}
		const firstLetter = lowerLetters[num].toUpperCase();
		const lowerLettersSlice = lowerLetters.slice(num + 1);
		const result = firstLetter + lowerLettersSlice;
		return result;
	} else {
		return "Название проекта отсутствует";
	}
}
const getTitleLet = getTitle(title);

const getServicePercentPrices = function (elem1, elem2) {
	return elem1 - elem2;
}
const servicePercentPrice = getServicePercentPrices(fullPrice, amountKickback);

showTypeOf(getTitleLet);
showTypeOf(screenPrice);
// showTypeOf(adaptive);
// showTypeOf(service1);
// showTypeOf(service2);
showTypeOf(servicePrice1);
showTypeOf(servicePrice2);
showTypeOf(rollback);
showTypeOf(servicePercentPrice);
showTypeOf(getRollBackMessage(fullPrice));
