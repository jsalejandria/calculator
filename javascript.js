const screen = document.querySelector('#screen');
let num1=0;
    num2=0;
    operator="";
screen.textContent = num1;

const buttons = document.querySelectorAll('.digit');

buttons.forEach((button)=>{
    let digit = button.innerText;
    button.addEventListener('click', event => {
    if (screen.textContent.length<15) {
            if (screen.textContent==="0" || num1==="") {
            screen.textContent="";
            screen.textContent += digit;
            num1 = screen.textContent;
        } else {
            screen.textContent += digit;
            num1 = screen.textContent;
        }
    } else if (num1==="") {
      screen.textContent="";
      screen.textContent += digit;
      num1 = screen.textContent;
   } else {
      num1 = screen.textContent;
    }
    })
});

const decimalPoint = document.getElementById('decimal')
decimalPoint.addEventListener('click', event => {
  if (num1==="") {
    screen.textContent = "";
    screen.textContent += "0.";
    num1=screen.textContent;
  } else if (screen.textContent.includes(".")) {
  } else {
    screen.textContent += ".";
  }
});

const allClear = document.getElementById('allClear')
allClear.addEventListener('click', event => {
  num1=0;
  num2=0;
  operator="";
  screen.textContent = num1;
});

const clear = document.getElementById('clear')
clear.addEventListener('click', event => {
  num1=0;
  screen.textContent = num1;
});

const back = document.getElementById('back')
back.addEventListener('click', event => {
  let backspaced = screen.textContent.slice(0,-1);
  if (backspaced.length == 0) {
    screen.textContent = "0";
  } else {
  screen.textContent = backspaced
  }
});

function operate() {
  let output;
  if (num1!="") {
    switch (operator) {
      case "+":
        output = +num2 + +num1;
        screen.textContent = output;
        break;

      case "-":
        output = +num2 - +num1;
        screen.textContent = output;
        break;

      case "*":
        output = +num2 * +num1;
        screen.textContent = output;
        break;

      case "/":
      if (num1==0) {
        screen.textContent = "Does not exist";
      }  else {
          output = +num2 / +num1;
          screen.textContent = output;
        }
        break;

      default:
        return;
  }
  num1 = +output;
} else {
  num1=screen.textContent;
}
}

const equals = document.getElementById('equals')
equals.addEventListener('click', event => {
  operate();
  num1 = screen.textContent;
  operator="";
});

const add = document.getElementById('plus')
add.addEventListener('click', event => {
  operate();
  num2 = num1;
  operator = "+";
  num1="";
});

const subtract = document.getElementById('subtract')
subtract.addEventListener('click', event => {
  operate();
  num2 = num1;
  operator = "-";
  num1="";
});

const multiply = document.getElementById('multiply')
multiply.addEventListener('click', event => {
  operate();
  num2 = num1;
  operator = "*";
  num1="";
});

const divide = document.getElementById('divide')
divide.addEventListener('click', event => {
  operate();
  num2 = num1;
  operator = "/";
  num1="";
});