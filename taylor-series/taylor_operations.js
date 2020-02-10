let buttons = document.getElementsByTagName('button')

for (const prop in buttons) {
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

const showResult = (operation, inputValue, elementAnswer) => {
  let answer = inputValue.length===2 ? operation(inputValue[0].value, inputValue[1].value) : operation(inputValue[0].value)
  console.log(answer)

  elementAnswer.innerHTML = `<p> <b>Resultado: </b> ${answer}</p>`
}

const eulerT = (exponent, repetitions) => {
  let result = 0
  for (let i = 0; i < repetitions; i++) {
    result += Math.pow(exponent, i)/factorial(i)
  }
  return result;
}

const senT = (degrees, repetitions) => {
  let result = 0
  for (let i = 0; i < repetitions; i++) {
    result += (Math.pow(-1, i)/factorial((2*i+1)))*Math.pow(degreesToRadians(degrees),(2*i+1))
  }
  return result;
}
const cosT = (degrees, repetitions) => {
  let result = 0
  for (let i = 0; i < repetitions; i++) {
    result += (Math.pow(-1, i)/factorial((2*i)))*Math.pow(degreesToRadians(degrees),(2*i))
  }
  return result;
}
const pi = (repetitions) => {
  let result = 0
  let odd = 1
  for (let i = 0; i < repetitions; i++) {
    result += Math.pow(-1, i)*(4/odd)
    odd += 2
  }
  return result;
}

function factorial (n) {
	if (n == 0){
		return 1;
	}
	return n * factorial (n-1);
}

function degreesToRadians(degrees)
{
  return degrees * (Math.PI/180);
}
