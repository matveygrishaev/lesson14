'use strict';
// Прототип функции
const DomElement = function (selector, height, width, bg, fontSize, textContent) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
    this.textContent = textContent;
};

DomElement{
    cons
};

DomElement.prototype.makeElement = function () {
    if (this.selector.substring(0, 1) === '.') {

        let newDiv = document.createElement('div');
        newDiv.height = this.height +'px';
        newDiv.width = this.width + 'px';
        newDiv.bg = this.bg;
        newDiv.fontSize = this.fontSize + 'px';
        newDiv.textContent = this.textContent.trim();
        newDiv.className = this.selector;
        document.body.appendChild('newDiv');

    } else if (this.selector.substring(0, 1) === '#') {

        let newDiv = document.createElement('div');
        newDiv.style.id = this.selector.substring(0, 1);
        newDiv.height = this.height +'px';
        newDiv.width = this.width + 'px';
        newDiv.bg = this.bg;
        newDiv.fontSize = this.fontSize + 'px';
        newDiv.textContent = this.textContent.trim();
        newDiv.className = this.selector;
        document.body.appendChild('newDiv');
    }
};

let elem1 = new DomElement('.div', '10', '20', 'red', '10', 'Привет');

elem1('.div', '10', '20', 'red', '10', 'Привет');