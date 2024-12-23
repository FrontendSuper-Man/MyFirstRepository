
class Worker {
	constructor(firstName, lastName, age, position) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.age = age;
		this.position = position;
	}

	getFullName() {
		return `${this.firstName} ${this.lastName}`;
	}
}

class Mechanic extends Worker {
	constructor(firstName, lastName, age, position, rank, hasChildren) {
		super(firstName, lastName, age, position);
		this.rank = rank;
		this.hasChildren = hasChildren;
	}

	getRank() {
		return this.rank;
	}
}

class Driver extends Worker {
	constructor(firstName, lastName, age, position, licenseCategory, hireDate) {
		super(firstName, lastName, age, position);
		this.licenseCategory = licenseCategory;
		this.hireDate = hireDate;
	}

	getLicenseCategory() {
		return this.licenseCategory;
	}

	getHireDate() {
		return this.hireDate;
	}
}

const workers = JSON.parse(localStorage.getItem('workers')) || [];

function renderTable() {
	const tableBody = document.querySelector("#workers-table tbody");
	tableBody.innerHTML = "";

	workers.forEach((worker, index) => {
		const row = document.createElement("tr");
		row.innerHTML = `
		 <td>${worker.firstName}</td>
		 <td>${worker.lastName}</td>
		 <td>${worker.age}</td>
		 <td>${worker.position}</td>
		 <td>${worker.rank || worker.licenseCategory || "N/A"}</td>
		 <td>${worker.hasChildren !== undefined ? worker.hasChildren : worker.hireDate || "N/A"}</td>
		 <td><button class="delete-btn" onclick="deleteWorker(${index})">Удалить</button></td>
	  `;
		tableBody.appendChild(row);
	});
}

function saveWorker(event) {
	event.preventDefault();

	const form = event.target;
	const firstName = form.firstName.value;
	const lastName = form.lastName.value;
	const age = form.age.value;
	const position = form.position.value;
	const type = form.type.value;
	const additional1 = form.additional1.value;
	const additional2 = form.additional2.value;

	let newWorker;

	if (type === "Mechanic") {
		newWorker = new Mechanic(firstName, lastName, age, position, additional1, additional2 === "true");
	} else if (type === "Driver") {
		newWorker = new Driver(firstName, lastName, age, position, additional1, additional2);
	}

	workers.push(newWorker);
	localStorage.setItem("workers", JSON.stringify(workers));
	renderTable();
	form.reset();
}

function deleteWorker(index) {
	workers.splice(index, 1);
	localStorage.setItem("workers", JSON.stringify(workers));
	renderTable();
}

document.addEventListener("DOMContentLoaded", () => {
	renderTable();

	const form = document.querySelector("#worker-form");
	form.addEventListener("submit", saveWorker);
});
