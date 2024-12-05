const title = document.getElementsByTagName('h1')[0];
const buttonPlus = document.querySelector('.screen-btn');
const otherItemsPercent = document.querySelectorAll('.other-items.percent');
const otherItemsNumber = document.querySelectorAll('.other-items.number');

const inputRange = document.querySelector('.rollback input');
const inputRangeValue = document.querySelector('.rollback .range-value');

const startBtn = document.getElementsByClassName('handler_btn')[0];
const resetBtn = document.getElementsByClassName('handler_btn')[1];

const total = document.getElementsByClassName('total-input')[0];
const totalCount = document.getElementsByClassName('total-input')[1];
const totalCountOther = document.getElementsByClassName('total-input')[2];
const fullTotalCount = document.getElementsByClassName('total-input')[3];
const totalCountRollback = document.getElementsByClassName('total-input')[4];

let screens = document.querySelectorAll('.screen');

const appData = {
	title: '',
	screens: [],
	screenPrice: 0,
	adaptive: true,
	rollback: 10,
	allServicePrices: 0,
	fullPrice: 0,
	servicePercentPrice: 0,
	services: {},
	init: function () {
		this.addTitle()
		this.start()
	},
	addTitle: function () {
		console.log(title);
	},
	start: function () {
		// this.asking();
		// this.addPrices()
		// this.getFullPrice();
		// this.getServicePercentPrices();
		// this.getTitle();
		// this.logger();
	},
	isNumber: function (num) {
		return !isNaN(parseFloat(num)) && isFinite(num);
	},
	asking: function () {
		this.title = this.examArr("1 Как называется ваш проект?", "Название проекта не может быть числом!")

		for (let i = 0; i < 2; i++) {
			let name = this.examArr("2 Какие типы экранов нужно разработать?", "Тип экрана не может быть числом!")
			let price = this.examNum("3 Сколько будет стоить данная работа?", "Стоимость нужно ввести в числах");
			this.screens.push({ id: i, name, price, })
		}

		for (let i = 0; i < 2; i++) {
			let name = this.examArr("4 Какой дополнительный тип услуг нужен?", "Услуга не может быть числом!")
			let price = this.examNum("5 Сколько это будет стоить?", "Стоимость нужно ввести в числах");
			this.services[name] = +price
		}

		this.screenPrice = parseFloat(this.screenPrice);
		this.adaptive = confirm("Нужен ли адаптив на сайте?");
	},
	getFullPrice: function () {
		appData.fullPrice = +appData.screenPrice + appData.allServicePrices
	},
	getServicePercentPrice: function () {
		appData.servicePercentPrice = appData.fullPrice - (appData.fullPrice * (appData.rollback / 100))
	},
	getTitle: function () {
		appData.title = appData.title.trim()[0].toUpperCase() + appData.title.trim().substr(1).toLowerCase()
	},
	getRollbackMessage: function (price) {
		if (price >= 30000) {
			return "Даём скидку в 10%"
		} else if (price >= 15000 && price < 30000) {
			return "Даём скидку в 5%"
		} else if (price >= 0 && price < 15000) {
			return "Скидка не предусмотрена"
		} else {
			return "Что-то пошло не так"
		}
	},
	logger: function () {
		for (const i in this) {
			if (typeof this[i] !== "function") {
				console.log(`${i}: ${this[i]}`);
			} else {
				console.log(`Метод: ${i}`);
			}
		}
	},
};
appData.init();







// console.log(title);
// console.log(buttonPlus);
// console.log(otherItemsPercent);
// console.log(otherItemsNumber);
// console.log(inputRange);
// console.log(inputRangeValue);
// console.log(startBtn);
// console.log(resetBtn);
// console.log(total);
// console.log(totalCount);
// console.log(totalCountOther);
// console.log(fullTotalCount);
// console.log(totalCountRollback);
// console.log(screens);

