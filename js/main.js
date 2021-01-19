class Calculator {
  constructor(previousOperandOutputElement, currentOperandOutputElement) {
    this._previousOperandOutputElement = previousOperandOutputElement
    this._currentOperandOutputElement = currentOperandOutputElement
  }

  clear() {
    this._currentOperandOutputElement = ''
    this._previousOperandOutputElement = ''
  }
}

const operandsInputElement = document.querySelectorAll('[data-operands]')
const operatorsInputElement = document.querySelectorAll('[data-operators]')
const previousOperandOutputElement = document.querySelector('[data-previous-operand]')
const currentOperandOutputElement = document.querySelector('[data-current-operand]')
const clearInputElement = document.querySelector('[data-clear]')
const equalsInputElement = document.querySelector('[data-equals]')

const calculator = new Calculator(previousOperandOutputElement, currentOperandOutputElement)

console.log(calculator);