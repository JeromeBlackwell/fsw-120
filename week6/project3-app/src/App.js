import React from 'react';
// import ReactDOM from 'react-dom'
import './App.css';

class Calculator  {
    
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement
    this.currentOperandTextElement = currentOperandTextElement
    this.clear()
  }

  clear() {
    this.currentOperand = ''
    this.previousOperand = ''
    this.operation = undefined
  }

  delete() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1)
  }

  appendNumber(number) {
    if (number === '.' && this.currentOperand.includes('.')) return
    this.currentOperand = this.currentOperand.toString() + number.toString()
  }

  chooseOperation(operation) {
    if (this.currentOperand === '') return
    if (this.previousOperand !== '') {
      this.compute()
    }
    this.operation = operation
    this.previousOperand = this.currentOperand
    this.currentOperand = ''
  }

  compute() {
    let computation
    const prev = parseFloat(this.previousOperand)
    const current = parseFloat(this.currentOperand)
    if (isNaN(prev) || isNaN(current)) return
    switch (this.operation) {
      case '+':
        computation = prev + current
        break
      case '-':
        computation = prev - current
        break
      case '*':
        computation = prev * current
        break
      case '÷':
        computation = prev / current
        break
      default:
        return
    }
    this.currentOperand = computation
    this.operation = undefined
    this.previousOperand = ''
  }

  getDisplayNumber(number) {
    const stringNumber = number.toString()
    const integerDigits = parseFloat(stringNumber.split('.')[0])
    const decimalDigits = stringNumber.split('.')[1]
    let integerDisplay
    if (isNaN(integerDigits)) {
      integerDisplay = ''
    } else {
      integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 })
    }
    if (decimalDigits != null) {
      return `${integerDisplay}.${decimalDigits}`
    } else {
      return integerDisplay
    }
  }

  updateDisplay() {
    this.currentOperandTextElement.innerText =
      this.getDisplayNumber(this.currentOperand)
    if (this.operation != null) {
      this.previousOperandTextElement.innerText =
        `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
    } else {
      this.previousOperandTextElement.innerText = ''
    }
  }
}

class App extends React.Component {
  constructor() {
super ()
    this.state ={}
  }
 
render () {
    return ( <section>
      <h1>MY REACT Calculator</h1>
        <div class="calculator-grid">
    <div class="output">
      <div data-previous-operand class="previous-operand"></div>
        <div data-current-operand class="current-operand"></div>
    </div>
      <button data-all-clear class="span-two" onClick= {(e) => {
          const previousOperandTextElement = document.querySelector('[data-previous-operand]')
          const currentOperandTextElement = document.querySelector('[data-current-operand]')
          
          const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)
          calculator.appendNumber(e.target.innerText)
          calculator.updateDisplay()
          }}>AC</button>
      <button data-delete onClick= {(e) => {
          const previousOperandTextElement = document.querySelector('[data-previous-operand]')
          const currentOperandTextElement = document.querySelector('[data-current-operand]')
          
          const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)
          calculator.appendNumber(e.target.innerText)
          calculator.updateDisplay()
          }}>DEL</button>
      <button data-operation onClick= {(e) => {
          const previousOperandTextElement = document.querySelector('[data-previous-operand]')
          const currentOperandTextElement = document.querySelector('[data-current-operand]')
          
          const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)
          calculator.appendNumber(e.target.innerText)
          calculator.updateDisplay()
          }}>÷</button>
      <button data-number onClick= {(e) => {
          const previousOperandTextElement = document.querySelector('[data-previous-operand]')
          const currentOperandTextElement = document.querySelector('[data-current-operand]')
          
          const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)
          calculator.appendNumber(e.target.innerText)
          calculator.updateDisplay()
          }}>1</button>
      <button data-number onClick= {(e) => {
          const previousOperandTextElement = document.querySelector('[data-previous-operand]')
          const currentOperandTextElement = document.querySelector('[data-current-operand]')
          
          const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)
          calculator.appendNumber(e.target.innerText)
          calculator.updateDisplay()
          }}>2</button>
      <button data-number onClick= {(e) => {
          const previousOperandTextElement = document.querySelector('[data-previous-operand]')
          const currentOperandTextElement = document.querySelector('[data-current-operand]')
          
          const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)
          calculator.appendNumber(e.target.innerText)
          calculator.updateDisplay()
          }}>3</button>
        {/* <button data-number>2</button>
        <button data-number>3</button> */}
      <button data-operation onClick= {(e) => {
          const previousOperandTextElement = document.querySelector('[data-previous-operand]')
          const currentOperandTextElement = document.querySelector('[data-current-operand]')
          
          const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)
          calculator.appendNumber(e.target.innerText)
          calculator.updateDisplay()
          }}>*</button>
      <button data-number onClick= {(e) => {
          const previousOperandTextElement = document.querySelector('[data-previous-operand]')
          const currentOperandTextElement = document.querySelector('[data-current-operand]')
          
          const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)
          calculator.appendNumber(e.target.innerText)
          calculator.updateDisplay()
          }}>4</button>
      <button data-number onClick= {(e) => {
          const previousOperandTextElement = document.querySelector('[data-previous-operand]')
          const currentOperandTextElement = document.querySelector('[data-current-operand]')
          
          const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)
          calculator.appendNumber(e.target.innerText)
          calculator.updateDisplay()
          }}>5</button>
      <button data-number onClick= {(e) => {
          const previousOperandTextElement = document.querySelector('[data-previous-operand]')
          const currentOperandTextElement = document.querySelector('[data-current-operand]')
          
          const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)
          calculator.appendNumber(e.target.innerText)
          calculator.updateDisplay()
          }}>6</button>
        
        {/* <button data-number>4</button>
        <button data-number>5</button>
        <button data-number>6</button> */}
      <button data-operation onClick= {(e) => {
          const previousOperandTextElement = document.querySelector('[data-previous-operand]')
          const currentOperandTextElement = document.querySelector('[data-current-operand]')
          
          const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)
          calculator.appendNumber(e.target.innerText)
          calculator.updateDisplay()
          }}>+</button>
        
      <button data-number onClick= {(e) => {
          const previousOperandTextElement = document.querySelector('[data-previous-operand]')
          const currentOperandTextElement = document.querySelector('[data-current-operand]')
          
          const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)
          calculator.appendNumber(e.target.innerText)
          calculator.updateDisplay()
          }}>7</button>
        {/* <button data-operation>+</button> */}
        
      <button data-number onClick= {(e) => {
          const previousOperandTextElement = document.querySelector('[data-previous-operand]')
          const currentOperandTextElement = document.querySelector('[data-current-operand]')
          
          const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)
          calculator.appendNumber(e.target.innerText)
          calculator.updateDisplay()
          }}>8</button>
        {/* <button data-operation>+</button> */}
        
      <button data-number onClick= {(e) => {
          const previousOperandTextElement = document.querySelector('[data-previous-operand]')
          const currentOperandTextElement = document.querySelector('[data-current-operand]')
          
          const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)
          calculator.appendNumber(e.target.innerText)
          calculator.updateDisplay()
          }}>9</button>
        {/* <button data-number>7</button>
        <button data-number>8</button>
        <button data-number>9</button> */}
      <button data-operation onClick= {(e) => {
          const previousOperandTextElement = document.querySelector('[data-previous-operand]')
          const currentOperandTextElement = document.querySelector('[data-current-operand]')
          
          const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)
          calculator.appendNumber(e.target.innerText)
          calculator.updateDisplay()
          }}>-</button>
      <button data-number onClick= {(e) => {
          const previousOperandTextElement = document.querySelector('[data-previous-operand]')
          const currentOperandTextElement = document.querySelector('[data-current-operand]')
          
          const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)
          calculator.appendNumber(e.target.innerText)
          calculator.updateDisplay()
          }}>.</button>
      <button data-number onClick= {(e) => {
          const previousOperandTextElement = document.querySelector('[data-previous-operand]')
          const currentOperandTextElement = document.querySelector('[data-current-operand]')
          
          const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)
          calculator.appendNumber(e.target.innerText)
          calculator.updateDisplay()
          }}>0</button>
        {/* <button data-number>0</button> */}
      <button data-equals class="span-two" onClick= {(e) => {
          const previousOperandTextElement = document.querySelector('[data-previous-operand]')
          const currentOperandTextElement = document.querySelector('[data-current-operand]')
          
          const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)
          calculator.appendNumber(e.target.innerText)
          calculator.updateDisplay()
          }}>=</button>
    </div></section>)
  }
} 

export default App;