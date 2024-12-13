function DomElement(selector, height, width, bg, fontSize) {
	this.selector = selector;
	this.height = height;
	this.width = width;
	this.bg = bg;
	this.fontSize = fontSize;

	this.createElement = function () {
		let element;
		if (this.selector.startsWith('.')) {
			element = document.createElement('div');
			element.className = this.selector.slice(1);
		} else if (this.selector.startsWith('#')) {
			element = document.createElement('p');
			element.id = this.selector.slice(1);
		} else {
			console.error('Некорректный селектор. Используйте точку или решетку.');
			return;
		}

		element.style.cssText = `
		 height: ${this.height};
		 width: ${this.width};
		 background: ${this.bg};
		 font-size: ${this.fontSize};
	  `;
		element.textContent = 'Это созданный элемент.';
		document.body.appendChild(element);
	};
}

const newDomElement = new DomElement('.block', '100px', '200px', 'lightblue', '16px');
newDomElement.createElement();
