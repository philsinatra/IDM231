{
  const keys = document.querySelectorAll('button');
  const input = document.querySelector('.screen');
  const operators = ['+', '-', 'X', '/'];

  var decimalAdded = false;

  const keyPressed = function() {
    const btnValue = this.innerHTML;
    let inputValue = input.innerHTML;

    console.log(`btnValue: ${btnValue}`);

    // if (btnValue === 'C') {
    //   input.innerHTML = '';
    //   decimalAdded = false;
    // }

    switch (btnValue) {
    case 'C':
      input.innerHTML = '';
      decimalAdded = false;
      break;
    case '=':
    {
      let equation = inputValue;
      const lastChar = equation[equation.length - 1];
      console.group('Case =');
      console.log(`equation: ${equation}`);
      console.log(`lastChar: ${lastChar}`);
      console.groupEnd();

      // If the last character is an operator or decimal, remove it.
      if (operators.indexOf(lastChar) > -1 || lastChar === '.')
        equation = equation.replace(/.$/, '');

      if (equation) input.innerHTML = eval(equation);
      decimalAdded = false;
      break;
    }
    case '.':
    {
      if (!decimalAdded) decimalAdded = true;
      input.innerHTML += btnValue;
      break;
    }
    case '+':
    case '-':
    case '*':
    case '/':
    {
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
      break;
    }
    default:
      input.innerHTML += btnValue;
    }
  };

  for (let key of keys) {
    key.addEventListener('click', keyPressed);
  }
}

// Original Source: http://thecodeplayer.com/walkthrough/javascript-css3-calculator