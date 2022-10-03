const calculator = document.getElementsByClassName('calculator');
const keys = document.querySelector('.calculator_keys');
const operator = document.getElementsByClassName('operator');
const number = document.getElementsByClassName('number');
let display = document.getElementsByClassName('calculator_display')[0];
const clear = document.getElementsByClassName('clear')

// console.log(keys)

// adding event listeners on click for the keys and also targeting the
// key value and display value
keys.addEventListener('click', event => {
  let key = event.target;
  const keyValue = key.innerHTML
  let displayValue = display.innerHTML;

  //  is this a number key
  if (key.dataset.type === 'number') {
    if ( displayValue === '0' ) {
      display.textContent = keyValue
    } else if (calculator.previousKeyType === 'operator') {
      display.textContent = keyValue
    } else {
      display.textContent = displayValue + keyValue
    }

    calculator.previousKeyType = 'number';
  }

// is this a operator
  if (key.dataset.type === 'operator') {

    let operatorKeys = keys.querySelectorAll('[data-type="operator"]')
    operatorKeys.forEach(element => element.classList.remove('selected'))
    key.dataset.state = 'selected'

    key.classList.add('selected')
    calculator.previousKeyType = 'operator';
    calculator.operator = keyValue
    calculator.firstNumber = displayValue
  }

  // is this a equal key
  if (key.dataset.type === 'equal') {
    const secondNumber = parseInt(displayValue)
    const operator = calculator.operator
    const firstNumber = parseInt(calculator.firstNumber)

     let result = '';

     if (operator === '+') {
       result = firstNumber + secondNumber
     } else if (operator === '-') {
       result = firstNumber - secondNumber
     } else if (operator === 'x') {
       result = firstNumber * secondNumber
     } else {
      result = firstNumber / secondNumber
     }

     display.innerHTML = result.toFixed(2)
    // console.log(firstNumber, operator, secondNumber)
    }

    // is this the c key
  if (key.dataset.type === 'clear') {
     display.innerHTML = 0;
  }
})
