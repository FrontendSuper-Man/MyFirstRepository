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

	start: function () {
		this.asking();
		this.addPrices()
		this.getFullPrice();
		this.getServicePercentPrices();
		this.getTitle();
		this.logger();
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

	addPrices: function () {
		for (const screen of appData.screens) {
			appData.screenPrice += screen.price
		}
		for (const key in this.services) {
			this.allServicePrices += this.services[key]
		}
	},

	getFullPrice: function () {
		this.fullPrice = this.screenPrice + this.allServicePrices;
	},

	getTitle: function () {
		this.title = this.title.trim()[0].toUpperCase() + this.title.trim().substring(1).toLowerCase();
	},

	getServicePercentPrices: function () {
		this.servicePercentPrice = this.fullPrice - (this.fullPrice * (this.rollback / 100));
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

	logger: function () {
		for (const i in this) {
			if (typeof this[i] !== "function") {
				console.log(`${i}: ${this[i]}`);
			} else {
				console.log(`Метод: ${i}`);
			}
		}
	},

	examNum: function (message, errorMessage) {
		let input;
		do {
			input = +prompt(message);
			if (!this.isNumber(input)) {
				alert(errorMessage);
			}
		} while (!this.isNumber(input));
		return input;
	},

	examArr: function (message, errorMessage) {
		let input;
		do {
			input = prompt(message);
			if (this.isNumber(input)) {
				alert(errorMessage);
			}
		} while (this.isNumber(input));
		return input;
	},
};
appData.start();