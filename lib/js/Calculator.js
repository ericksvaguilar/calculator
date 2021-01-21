'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Calculator = function () {
  function Calculator(previousOperandOutputElement, currentOperandOutputElement) {
    _classCallCheck(this, Calculator);

    this._previousOperandOutputElement = previousOperandOutputElement;
    this._currentOperandOutputElement = currentOperandOutputElement;
    this._operator = undefined;
    this.clear();
  }

  /* || Getters and Setters */


  _createClass(Calculator, [{
    key: 'appendNumber',


    /* || Methods */
    value: function appendNumber(number) {
      if (this.currentOperand.toString().length <= 8) {
        if (this.currentOperand) {
          this.currentOperand = this.currentOperand.toString() + number;
        } else {
          this.currentOperand = number;
        }
      }
    }
  }, {
    key: 'updateDisplay',
    value: function updateDisplay() {
      if (this.currentOperand) {
        this.previousOperand = this.currentOperand;
        this.currentOperand = '';
      }
    }
  }, {
    key: 'clear',
    value: function clear() {
      this.previousOperand = '';
      this.currentOperand = '';
      this.operator = undefined;
    }
  }, {
    key: 'compute',
    value: function compute() {
      var result = 0;

      if (this.previousOperand && this.currentOperand) {
        switch (this.operator) {
          case '*':
            result = this.currentOperand * this.previousOperand;
            break;
          case '-':
            result = this.previousOperand - this.currentOperand;
            break;
          case '/':
            result = this.previousOperand / this.currentOperand;
            break;
          case '+':
            result = this.currentOperand + this.previousOperand;
            break;
        }

        this.currentOperand = result;
      }
    }
  }, {
    key: 'previousOperand',
    get: function get() {
      return Number(this._previousOperandOutputElement.innerText);
    },
    set: function set(number) {
      this._previousOperandOutputElement.innerText = number;
    }
  }, {
    key: 'currentOperand',
    get: function get() {
      return Number(this._currentOperandOutputElement.innerText);
    },
    set: function set(number) {
      this._currentOperandOutputElement.innerText = number;
    }
  }, {
    key: 'operator',
    get: function get() {
      return this._operator;
    },
    set: function set(operator) {
      this._operator = operator;
    }
  }]);

  return Calculator;
}();

exports.default = Calculator;