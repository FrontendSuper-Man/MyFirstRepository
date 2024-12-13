function DomElement(selector, height, width, bg, fontSize) {
	this.selector = selector;
	this.height = height;
	this.width = width;
	this.bg = bg;
	this.fontSize = fontSize;

	this.createElement = function () {
		let element;
		if (this.selector.trim().startsWith('.')) {
			element = document.createElement('div');
			element.className = this.selector.slice(1);
		} else if (this.selector.trim().startsWith('#')) {
			element = document.createElement('p');
			element.id = this.selector.slice(1);
		} else {
			alert('Некорректный селектор. Используйте точку или решетку.')
		}
		element.style.cssText = `
		 height: ${this.height};
		 width: ${this.width};
		 background: ${this.bg};
		 font-size: ${this.fontSize};
	  `;
		element.textContent = 'Это созданный элемент.';
		document.body.before(element);
	};
}

const color = 'red'
const width = '100px'
const height = '200px'
const fZ = '16px'
const selector = ' .block'
// const selector = '#block'
const newDomElement = new DomElement(selector, height, width, color, fZ);
newDomElement.createElement();
