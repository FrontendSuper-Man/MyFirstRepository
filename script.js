let title = "Название проекта"; // не знал что указать
let screens = "Простые, Сложные, Интерактивные" // не Понял что указать какие экраны
let screenPrice = 300
let rollback = 23
let fullPrice = 213452
let adaptive = true
console.log(typeof title);
console.log(typeof adaptive);
console.log(typeof fullPrice);
console.log(screens.length);
console.log(`Стоимость верстки экранов ${screenPrice} рублей`);
console.log(`Стоимость разработки сайта ${fullPrice} рублей`);
console.log(screens.toLowerCase());
console.log(screens.split(", "));

let commission = fullPrice * (rollback / 100);
console.log("Процент отката посреднику за работу:", commission); // Процент отката посреднику за работу: 49193.96


