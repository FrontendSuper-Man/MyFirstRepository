let title = prompt("Как называется ваш проект?");
let screens = prompt("Какие типы экранов нужно разработать?");
let screenPrice = +prompt("Сколько будет стоить данная работа?");
let adaptive = confirm("Нужен ли адаптив на сайте?");
let service1 = prompt("Какой дополнительный тип услуг нужен?");
let servicePrice1 = +prompt("Сколько это будет стоить?");
let service2 = prompt("Какой дополнительный тип услуг нужен?");
let servicePrice2 = +prompt("Сколько это будет стоить?");
let rollback = 10;
let fullPrice = screenPrice + servicePrice1 + servicePrice2;
let servicePercentPrice = fullPrice - (fullPrice * (rollback / 100));

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

// getAllServicePrices
const getAllServicePrices = function (ser1, ser2) {
	return ser1 + ser2
}
const allServicePrices = getAllServicePrices(servicePrice1, servicePrice2);

// getFullPrice
function getFullPrice(elem1, elem2) {
	return elem1 + elem2
}
fullPrice = getFullPrice(screenPrice, getAllServicePrices())

function getTitle(elem) {
	if (elem !== undefined && elem !== null && elem !== '') {
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
		console.log("Название проекта отсутствует");
		return "Название проекта отсутствует";
	}
}
console.log(
	getTitle(title)
);



console.log(allServicePrices);
console.log(getRollBackMessage(fullPrice));
