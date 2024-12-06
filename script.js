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
	servicePricesPercent: 0,
	servicePricesNumber: 0,
	fullPrice: 0,
	servicePercentPrice: 0,
	servicesPercent: {},
	servicesNumber: {},

	init: function () {
		appData.addTitle()

		startBtn.addEventListener('click', function () {
			let isValid = true;
			screens.forEach((screen) => {
				const select = screen.querySelector('select');
				const input = screen.querySelector('input');
				if (select.options.selectedIndex === 0 || !input.value) {
					isValid = false;
				}
			});
			isValid ? appData.start() : alert("Заполните все поля корректно!");
		});
		inputRange.addEventListener('input', this.inputRangeFunc)
		buttonPlus.addEventListener("click", appData.addScreenBlock)
	},

	addScreens: function () {
		screens = document.querySelectorAll('.screen');
		screens.forEach((screen, index) => {
			const select = screen.querySelector('select')
			const input = screen.querySelector('input')
			if (select.options.selectedIndex === 0 || input === '') {
				startBtn.removeEventListener('click', appData.start)
			}
			const selectName = select.options[select.selectedIndex].textContent
			appData.screens.push({
				id: index,
				name: selectName,
				price: +select.value * +input.value
			})
		})
	},

	start: function () {
		appData.addScreens()
		appData.addServices()
		appData.addPrices()

		// appData.getServicePercentPrices();
		// appData.logger();
		appData.showResult()
	},
	
	inputRangeFunc: function () {
		inputRangeValue.textContent = inputRange.value
		this.rollback = inputRangeValue.textContent
	},

	addServices: function () {
		otherItemsPercent.forEach((item) => {
			const check = item.querySelector('input[type=checkbox]')
			const label = item.querySelector('label')
			const input = item.querySelector('input[type=text]')
			if (check.checked) {
				appData.servicesPercent[label.textContent] = +input.value
			}
		});
		otherItemsNumber.forEach((item) => {
			const check = item.querySelector('input[type=checkbox]')
			const label = item.querySelector('label')
			const input = item.querySelector('input[type=text]')
			if (check.checked) {
				appData.servicesNumber[label.textContent] = +input.value
			}
		});
	},

	addScreenBlock: function () {
		const cloneScreen = screens[0].cloneNode(true)
		screens[screens.length - 1].after(cloneScreen)
	},

	showResult: function () {
		alert('showResult')
		total.value = appData.screenPrice
		totalCountOther.value = appData.servicePricesPercent + appData.servicePricesNumber
		fullTotalCount.value = appData.fullPrice
		// totalCount.value = appData.screens
	},

	addTitle: function () {
		document.title = title.textContent
	},

	addPrices: function () {
		for (let screen of appData.screens) {
			appData.screenPrice += +screen.price
		}

		for (let key in appData.servicesNumber) {
			appData.servicePricesNumber += +appData.servicesNumber[key]
		}

		for (let key in appData.servicesPercent) {
			appData.servicePricesPercent += appData.screenPrice * (appData.servicesPercent[key] / 100)
		}

		appData.fullPrice = +appData.screenPrice + appData.servicePricesPercent + appData.servicePricesNumber

	},

	getServicePercentPrice: function () {
		appData.servicePercentPrice = appData.fullPrice - (appData.fullPrice * (appData.rollback / 100))
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
		for (const i in appData) {
			if (typeof appData[i] !== "function") {
				console.log(`${i}: ${appData[i]}`);
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