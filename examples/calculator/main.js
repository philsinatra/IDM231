{
  const keys = document.querySelectorAll('button');
  const input = document.querySelector('.screen');
  const operators = ['+', '-', 'X', '/'];

  var decimalAdded = false;

  const calculator = {
    clear: () => {
      input.innerHTML = '';
      decimalAdded = false;
    },
    evaluate: () => {
      let inputValue = input.innerHTML;
      let equation = inputValue;
      const lastChar = equation[equation.length - 1];

      // console.group('Case =');
      // console.log(`equation: ${equation}`);
      // console.log(`lastChar: ${lastChar}`);
      // console.groupEnd();

      // If the last character is an operator or decimal, remove it.
      if (operators.indexOf(lastChar) > -1 || lastChar === '.')
        equation = equation.replace(/.$/, '');

      if (equation) input.innerHTML = eval(equation);
      decimalAdded = false;
    },
    addDecimal: () => {
      if (!decimalAdded) decimalAdded = true;
      input.innerHTML += '.';
    },
    operator: (btnValue, inputValue) => {
      // Operator selected
      // Get the last character from the equation.
      const lastChar = inputValue[inputValue.length - 1];
      /**
			 * Only add operator if input is not empty, and
			 * there is no operator at the last character.
			 */
      if (inputValue !== '' && operators.indexOf(lastChar) === -1) {
        input.innerHTML += btnValue;
      } else if (input.innerHTML === '' && inputValue === '-') {
        // Allow minus if the string is empty
        input.innerHTML += btnValue;
      }

      // Replace the last operator (if exists) with the newly pressed operator.
      if (operators.indexOf(lastChar) > -1 && inputValue.length > 1) {
        /**
				 * Here, '.' matches any character while $ denotes the end of string,
				 * so anything (will be an operator in this case) at the end of string
				 * will get replaced by new operator.
				 */
        input.innerHTML = inputValue.replace(/.$/, btnValue);
      }
      decimalAdded = false;
    }
  };

  const keyPressed = function() {
    const btnValue = this.innerHTML;
    let inputValue = input.innerHTML;

    switch (btnValue) {
    case 'C':
      calculator.clear();
      break;
    case '=':
    {
      calculator.evaluate();
      break;
    }
    case '.':
    {
      calculator.addDecimal();
      break;
    }
    case '+':
    case '-':
    case '*':
    case '/':
    {
      calculator.operator(btnValue, inputValue);
      break;
    }
    default:
      input.innerHTML += btnValue;
    }
  };

  for (let key of keys) {
    key.addEventListener('click', keyPressed);
  }

  function keyboardInput(e) {
    // console.log(e.keyCode);
    switch (e.keyCode) {
    case 27:
      calculator.clear();
      break;
    case 61:
      calculator.evaluate();
      break;
    case 190:
      calculator.addDecimal();
      break;
				/**
				 * What else would we want to figure out?
				 * Only accept numbers from the keyboard - filter out everything else.
				 * What about + - * ? It takes two keys to get to those characters.
				 */
    }
  }

  window.addEventListener('keydown', keyboardInput);
}

// Original Source: http://thecodeplayer.com/walkthrough/javascript-css3-calculator