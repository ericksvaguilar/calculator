import Calculator from './Calculator.js';

const operandsInputElement = document.querySelectorAll('[data-operands]')
const operatorsInputElement = document.querySelectorAll('[data-operators]')
const previousOperandOutputElement = document.querySelector('[data-previous-operand]')
const currentOperandOutputElement = document.querySelector('[data-current-operand]')
const clearInputElement = document.querySelector('[data-clear]')
const equalsInputElement = document.querySelector('[data-equals]')

const calculator = new Calculator(previousOperandOutputElement, currentOperandOutputElement)

/* || Event Listeners */
operandsInputElement.forEach(element => {
  element.addEventListener('click', element => {
    calculator.appendNumber(element.target.value)
  })
})

operatorsInputElement.forEach(element => {
  element.addEventListener('click', element => {
    calculator.operator = element.target.value
    calculator.compute()
    calculator.updateDisplay()
  })
})

equalsInputElement.addEventListener('click', () => {
  calculator.compute()
  calculator.updateDisplay()
})

clearInputElement.addEventListener('click', () => {
  calculator.clear()
})