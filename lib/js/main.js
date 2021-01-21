'use strict';

var _Calculator = require('./Calculator.js');

var _Calculator2 = _interopRequireDefault(_Calculator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var operandsInputElement = document.querySelectorAll('[data-operands]');
var operatorsInputElement = document.querySelectorAll('[data-operators]');
var previousOperandOutputElement = document.querySelector('[data-previous-operand]');
var currentOperandOutputElement = document.querySelector('[data-current-operand]');
var clearInputElement = document.querySelector('[data-clear]');
var equalsInputElement = document.querySelector('[data-equals]');

var calculator = new _Calculator2.default(previousOperandOutputElement, currentOperandOutputElement);

/* || Event Listeners */
operandsInputElement.forEach(function (element) {
  element.addEventListener('click', function (element) {
    calculator.appendNumber(element.target.value);
  });
});

operatorsInputElement.forEach(function (element) {
  element.addEventListener('click', function (element) {
    calculator.operator = element.target.value;
    calculator.compute();
    calculator.updateDisplay();
  });
});

equalsInputElement.addEventListener('click', function () {
  calculator.compute();
  calculator.updateDisplay();
});

clearInputElement.addEventListener('click', function () {
  calculator.clear();
});