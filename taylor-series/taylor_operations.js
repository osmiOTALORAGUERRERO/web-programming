/**
 * Corresponds to buttons elements
 */
let buttons = document.getElementsByTagName('button')

for (const prop in buttons) {
  /**
   * Assing event onclick to the buttons for calculate the
   * corresponding operation
   */
  buttons[prop].onclick = (e) => {
    let divOperation = e.target.parentNode
    let operation = divOperation.id
    let inputs = divOperation.getElementsByTagName('input')
    let divAnswer = divOperation.nextElementSibling
    switch (operation) {
      case 'euler':
        showResult(eulerT, inputs, divAnswer)
        break;
      case 'seno':
        showResult(senT, inputs, divAnswer)
        break;
      case 'coseno':
        showResult(cosT, inputs, divAnswer)
        break;
      case 'PI':
        showResult(pi, inputs, divAnswer)
        break;
      default:

    }
  }
}

/**
 * Show the result in the HTML.
 * @param {function} operation - The function of the operation to use.
 * @param {object} inputValue - html input element of the operation to be performed.
 * @param {object} elementAnswer - html element where the result will be displayed
 */
const showResult = (operation, inputValue, elementAnswer) => {
  let answer = inputValue.length===2 ? operation(inputValue[0].value, inputValue[1].value) : operation(inputValue[0].value)
  console.log(answer)

  elementAnswer.innerHTML = `<p> <b>Resultado: </b> ${answer}</p>`
}

/**
 * Return the value of euler using taylor series
 * @param {number} exponent - number x
 * @param {number} repetitions - number of turns
 * @returns {number} The result e^x using taylor series
 */
const eulerT = (exponent, repetitions) => {
  let result = 0
  for (let i = 0; i < repetitions; i++) {
    result += Math.pow(exponent, i)/factorial(i)
  }
  return result;
}

/**
 * Return the value of sen(x) using taylor series
 * @param {number} degrees - number x
 * @param {number} repetitions - number of turns
 * @returns {number} The result sen(x) using taylor series
 */
const senT = (degrees, repetitions) => {
  let result = 0
  for (let i = 0; i < repetitions; i++) {
    result += (Math.pow(-1, i)/factorial((2*i+1)))*Math.pow(degreesToRadians(degrees),(2*i+1))
  }
  return result;

  /**
   * Return the value of cos(x) using taylor series
   * @param {number} degrees - number x
   * @param {number} repetitions - number of turns
   * @returns {number} The result cos(x) using taylor series
   */
const cosT = (degrees, repetitions) => {
  let result = 0
  for (let i = 0; i < repetitions; i++) {
    result += (Math.pow(-1, i)/factorial((2*i)))*Math.pow(degreesToRadians(degrees),(2*i))
  }
  return result;
}
/**
 * Return the value of Pi
 * @param {number} repetitions - number of turns
 * @returns {number} The result PI
 */
const pi = (repetitions) => {
  let result = 0
  let odd = 1
  for (let i = 0; i < repetitions; i++) {
    result += Math.pow(-1, i)*(4/odd)
    odd += 2
  }
  return result;
}

/**
 * Return the value of n!
 * @param {number} n - number of factorial
 * @returns {number} The result of n!
 */
function factorial (n) {
	if (n == 0){
		return 1;
	}
	return n * factorial (n-1);
}

/**
 * Return the value of euler using taylor series
 * @param {number} degrees - number in degrees
 * @returns {number} - returns the conversion from degrees to radians
 */
function degreesToRadians(degrees)
{
  return degrees * (Math.PI/180);
}
