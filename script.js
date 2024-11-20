const appData = {
	title: '',
	screens: '',
	screenPrice: 0,
	adaptive: true,
	rollback: 10,
	allServicePrices: 0,
	fullPrice: 0,
	servicePercentPrice: 0,
	service1: '',
	service2: '',
	asking: function () {
		this.title = prompt("Как называется ваш проект?", "Проект");
		this.screens = prompt("Какие типы экранов нужно разработать?", "Простые");

		do {
			this.screenPrice = prompt("Сколько будет стоить данная работа?", "20000");
		} while (!this.isNumber(this.screenPrice));

		this.screenPrice = parseFloat(this.screenPrice);
		this.adaptive = confirm("Нужен ли адаптив на сайте?");
	},
	isNumber: function (num) {
		return !isNaN(parseFloat(num)) && isFinite(num);
	},
	getAllServicePrices: function () {
		let sum = 0;

		for (let i = 0; i < 2; i++) {
			let service = prompt('Какой дополнительный тип услуг нужен?');
			if (service === null) {
				continue;
			}
			let servicePrice = 0;
			while (true) {
				servicePrice = prompt("Сколько это будет стоить?", '2000');
				if (servicePrice === null) {
					break;
				}
				if (this.isNumber(servicePrice)) {
					sum += parseFloat(servicePrice); // Преобразуем в число
					break;
				}
			}
		}
		return sum;
	},
	getRollBackMessage: function (price) {
		if (price >= 30000) {
			return "Даём скидку в 10%";
		} else if (price >= 15000 && price < 30000) {
			return "Даём скидку в 5%";
		} else if (price >= 0 && price < 15000) {
			return "Скидка не предусмотрена";
		} else {
			return "Что-то пошло не так";
		}
	},
	getFullPrice: function (elem1, elem2) {
		return elem1 + elem2;
	},
	getTitle: function (elem) {
		return elem.trim()[0].toUpperCase() + elem.trim().substring(1).toLowerCase();
	},
	getServicePercentPrices: function () {
		return this.fullPrice - (this.fullPrice * (this.rollback / 100));
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
	start: function () {
		this.asking();
		this.allServicePrices = this.getAllServicePrices();
		this.fullPrice = this.getFullPrice(this.screenPrice, this.allServicePrices);
		this.servicePercentPrice = this.getServicePercentPrices();
		this.title = this.getTitle(this.title);
		this.logger();
	}
};

appData.start();
