function startGame() {
	const randomNum = Math.floor(Math.random() * 100) + 1; // Загадываем случайное число
	Game(randomNum);
	console.log(randomNum);
}

function Game(randomNum) {
	const userNum = prompt("Угадай число от 1 до 100:");
	if (userNum === null) {
		alert("Игра окончена");
		console.log(`Игра окончена Загаданное число было: ${randomNum}`);
		return;
	}
	const userNumber = Number(userNum);
	if (isNaN(userNumber)) {
		alert("Введи число!");
		return Game(randomNum);
	}
	if (userNumber < 1 || userNumber > 100) {
		alert("Число должно быть от 1 до 100.");
		return Game(randomNum);
	}
	if (userNumber > randomNum) {
		alert("Загаданное число меньше.");
		return Game(randomNum);
	}
	if (userNumber < randomNum) {
		alert("Загаданное число больше.");
		return Game(randomNum);
	}
	alert(`Поздравляю, Вы угадали!!! Это было число: ${randomNum}`);
}
startGame();
