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
		do {
			this.title = prompt("Как называется ваш проект?", "Проект");
			if (this.isNumber(this.title)) {
				alert("Название проекта не может быть числом!");
			}
		} while (this.isNumber(this.title));

		for (let i = 0; i < 2; i++) {
			let name;
			let price = 0;

			do {
				name = prompt("Какие типы экранов нужно разработать?", "Простые");
				if (this.isNumber(name)) {
					alert("Тип экрана не может быть числом!");
				}
			} while (this.isNumber(name));

			do {
				if (!this.isNumber(price)) {
					alert("Стоимость нужно ввести в числах");
				}
				price = +prompt("Сколько будет стоить данная работа?", "20000");
			} while (!this.isNumber(price));

			this.screens.push({ id: i, name, price, })
		}

		for (let i = 0; i < 2; i++) {
			let name;
			let price = 0;

			do {
				name = prompt("Какой дополнительный тип услуг нужен?");
				if (this.isNumber(name)) {
					alert("Услуг не может быть числом!");
				}
			} while (this.isNumber(name));

			do {
				if (!this.isNumber(price)) {
					alert("Стоимость нужно ввести в числах");
				}
				price = +prompt("Сколько это будет стоить?", 2000);
			} while (!this.isNumber(price));


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
};

appData.start();
console.log(appData.screens);