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
	servicesPercent: {},
	servicesNumber: {},
	init: function () {
		this.addTitle()
		startBtn.addEventListener('click', appData.start)
		buttonPlus.addEventListener("click", this.addScreenBlock)
	},
	start: function () {
		// this.asking();
		// this.addPrices()
		// this.getFullPrice();
		// this.getServicePercentPrices();
		// this.getTitle();
		// this.logger();
		appData.addScreens()
		appData.addServices()
	},
	addServices: function () {
		otherItemsPercent.forEach((item) => {
			const check = item.querySelector('input[type=checkbox]')
			const label = item.querySelector('label')
			const input = item.querySelector('input[type=text]')
			console.log(check);
			console.log(label);
			console.log(input);
			this.servicePercent[label.textContent] = input.value
		})
		// otherItemsNumber
		console.log(appData);
		
	},

	addScreenBlock: function () {
		const cloneScreen = screens[0].cloneNode(true)
		screens[screens.length - 1].after(cloneScreen)
	},
	addScreens: function () {
		screens = document.querySelectorAll('.screen');
		screens.forEach((screen, index) => {
			const select = screen.querySelector('select')
			const input = screen.querySelector('input')
			const selectName = select.options[select.selectedIndex].textContent
			this.screens.push({
				id: index,
				name: selectName,
				price: +select.value * +input.value
			})
		})
		console.log(this.screens);
	},
	addTitle: function () {
		document.title = title.textContent
	},
	asking: function () {
		for (let i = 0; i < 2; i++) {
			let name = prompt("Какой дополнительный тип услуги нужен?");
			let price = 0;
			do {
				price = prompt("Сколько это будет стоить?");
			} while (!appData.isNumber(price))
			appData.services[name] = +price;
		}
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