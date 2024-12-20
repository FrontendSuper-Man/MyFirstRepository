const nameInput = document.querySelector('.name');
const surnameInput = document.querySelector('.surname');
const inputRangeAge = document.getElementById('range');
const checkboxInput = document.getElementById('checkbox');
const jobSelect = document.getElementById('select');
const submitButton = document.getElementById('submit');
const removeButton = document.getElementById('remove');
const tableBody = document.querySelector('#data-table tbody');

const user = {
	name: nameInput,
	surname: surnameInput,
	age: inputRangeAge,
	post: null,
	organization: null,
	children: checkboxInput,
	hiringDate: null,
}

const args = { name, surname, age, post, organization, children, hiringDate }
class worker {
	constructor() { }
}

class driver extends plants {
	constructor(args) {
		// super()
		args.name = 'Nikita'
		args.surname = 'Alexov'
		args.age = 24
		args.post = "Дальнобойщики"
		args.organization = "DHL"
		args.children = true
		args.hiringDate = '21.03.2020'
	}
}
class builder extends plants {
	constructor(args) {
		// super()
		args.name = 'Alex'
		args.surname = 'Alexov'
		args.age = 29
		args.post = "Директор"
		args.organization = "Progress"
		args.children = true
		args.hiringDate = '21.03.2010'
	}
}


// Добавление строки
submitButton.addEventListener('click', () => {
	const name = nameInput.value.trim();
	const surname = surnameInput.value.trim();
	const hasChildren = checkboxInput.checked ? 'Да' : 'Нет';
	const job = jobSelect.options[jobSelect.selectedIndex].text;

	if (name && surname) {
		const row = document.createElement('tr');
		row.innerHTML = `
			 <td>${name}</td>
			 <td>${surname}</td>
			 <td>${hasChildren}</td>
			 <td>${job}</td>
			 <td><button class="delete-row">Удалить</button></td>
		`;
		tableBody.appendChild(row);

		// Очистка полей
		nameInput.value = '';
		surnameInput.value = '';
		checkboxInput.checked = false;
		jobSelect.selectedIndex = 0;

		// Добавляем обработчик на кнопку удаления строки
		row.querySelector('.delete-row').addEventListener('click', () => {
			row.remove();
		});
	} else {
		alert('Пожалуйста, заполните Имя и Фамилию.');
	}
});

// Удаление последней строки
removeButton.addEventListener('click', () => {
	const rows = tableBody.querySelectorAll('tr');
	if (rows.length > 0) {
		rows[rows.length - 1].remove();
	} else {
		alert('Таблица уже пуста.');
	}
});