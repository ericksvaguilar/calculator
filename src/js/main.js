/*

TO-DO:
- create get and set to the Calculator class

*/

class Calculator {
  constructor(previousOperandOutputElement, currentOperandOutputElement) {
    this._previousOperandOutputElement = previousOperandOutputElement
    this._currentOperandOutputElement = currentOperandOutputElement
    this._operator = undefined
    this.clear()
  }

  appendNumber(number) {
    this._currentOperandOutputElement.innerText += number
  }

  updateDisplay() {
    this._previousOperandOutputElement.innerText = this._currentOperandOutputElement.innerText
    this._currentOperandOutputElement.innerText = ''
  }

  clear() {
    this._previousOperandOutputElement.innerText = ''
    this._currentOperandOutputElement.innerText = ''
  }

  chooseOperator(operator) {
    this._operator = operator
  }

  compute() {
    if (this._currentOperandOutputElement && this._previousOperandOutputElement) {
      let currentOperandNumber = Number(this._currentOperandOutputElement.value)
      let previousOperandNumber = Number(this._previousOperandOutputElement.value)
      let result
      switch (this._operator) {
        case '*':
          result = currentOperandNumber * previousOperandNumber
      }

    }

  }

}

const operandsInputElement = document.querySelectorAll('[data-operands]')
const operatorsInputElement = document.querySelectorAll('[data-operators]')
const previousOperandOutputElement = document.querySelector('[data-previous-operand]')
const currentOperandOutputElement = document.querySelector('[data-current-operand]')
const clearInputElement = document.querySelector('[data-clear]')
const equalsInputElement = document.querySelector('[data-equals]')

const calculator = new Calculator(previousOperandOutputElement, currentOperandOutputElement)

operandsInputElement.forEach(element => {
  element.addEventListener('click', element => {
    calculator.appendNumber(element.target.value)
  })
})

operatorsInputElement.forEach(element => {
  element.addEventListener('click', element => {
    calculator.chooseOperator(element.target.value)
    calculator.updateDisplay()
    calculator.compute()
  })
})

clearInputElement.addEventListener('click', () => {
  calculator.clear()
})