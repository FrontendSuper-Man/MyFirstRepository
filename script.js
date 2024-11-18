let gameStart = +prompt("Игра 'Угадай число' Я загадал число от 1 до 100. Попробуй угадать!")
const isNumber = function (num) {
	return !isNaN(parseFloat(num)) && isFinite(num);
}