class Calculator {
  constructor(previousOperandOutputElement, currentOperandOutputElement) {
    this._previousOperandOutputElement = previousOperandOutputElement
    this._currentOperandOutputElement = currentOperandOutputElement
    this._operator = undefined
    this.clear()
  }

  /* || Getters and Setters */
  get previousOperand() {
    return Number(this._previousOperandOutputElement.innerText)
  }

  get currentOperand() {
    return Number(this._currentOperandOutputElement.innerText)
  }

  get operator() {
    return this._operator
  }

  set previousOperand(number) {
    this._previousOperandOutputElement.innerText = number
  }

  set currentOperand(number) {
    this._currentOperandOutputElement.innerText = number
  }

  set operator(operator) {
    this._operator = operator
  }

  /* || Methods */
  appendNumber(number) {
    if (this.currentOperand.toString().length <= 8) {
      if (this.currentOperand) {
        this.currentOperand = this.currentOperand.toString() + number
      } else {
        this.currentOperand = number
      }
    }
  }

  updateDisplay() {
    if (this.currentOperand) {
      this.previousOperand = this.currentOperand
      this.currentOperand = ''
    }
  }

  clear() {
    this.previousOperand = ''
    this.currentOperand = ''
    this.operator = undefined
  }

  compute() {
    let result = 0;

    if (this.previousOperand && this.currentOperand) {
      switch (this.operator) {
        case '*':
          result = this.currentOperand * this.previousOperand
          break
        case '-':
          result = this.previousOperand - this.currentOperand
          break
        case '/':
          result = this.previousOperand / this.currentOperand
          break
        case '+':
          result = this.currentOperand + this.previousOperand
          break
      }

      this.currentOperand = result
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