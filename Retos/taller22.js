const fieldApp = document.getElementById('app')

let currentExercise = 'isDigitIncreasing'

const generateInputs = (inputs) => {
  let elementsInputs = []
  inputs.forEach((input, i) => {
    for (var i = 0; i < input.quantity; i++) {
      let newInput
      let newLabel
      let elements
      switch (input.type) {
        case 'number':
          newInput = document.createElement('input')
          newInput.type = 'number'
          newInput.placeholder = input.placeHolder[i]
          newLabel = document.createElement('label')
          newLabel.innerText = `${input.placeHolder[i]}: `
          elements = {newLabel, newInput}
          elementsInputs.push(elements)
          break;
        case 'text':
          newInput = document.createElement('input')
          newInput.type = 'text'
          newInput.placeholder = input.placeHolder[i]
          newLabel = document.createElement('label')
          newLabel.innerText = `${input.placeHolder[i]}: `
          elements = {newLabel, newInput}
          elementsInputs.push(elements)
          break;
        case 'radio':
          newInput = document.createElement('input')
          newInput.type = 'radio'
          newInput.name = currentExercise
          newInput.value = input.value[i]
          newLabel = document.createElement('label')
          newLabel.innerText = `${input.placeHolder[i]}`
          elements = {newInput, newLabel}
          console.log(elements)
          elementsInputs.push(elements)
          break;
        case 'select':
          newInput = document.createElement('select')
          input.options.forEach((item, i) => {
            let newOption = document.createElement('option')
            newOption.value = item.value
            newOption.innerText = item.text
            newInput.appendChild(newOption)
          });
          newLabel = document.createElement('label')
          newLabel.innerText = `${input.placeHolder[i]}: `
          elements = {newLabel, newInput}
          elementsInputs.push(elements)
          break;
      }
    }
  });
  console.log(elementsInputs)
  return elementsInputs
}

const generateButton = (options, eventOnClick) => {
  let newButton = document.createElement('button')
  newButton.type = 'button'
  newButton.innerText = options.text
  newButton.onclick = eventOnClick
  return newButton
}

const cleanApp = () => {
  fieldApp.getElementsByTagName('h1')[0].remove()
  fieldApp.getElementsByTagName('p')[0].remove()
  let input = document.getElementById('get-input')
  let output = document.getElementById('output')
  let sizeElement = input.children.length
  for (var i = 0; i < sizeElement; i++) {
    input.children[0].remove()
  }
  sizeElement = output.children.length
  for (var i = 0; i < sizeElement; i++) {
    output.children[0].remove()
  }
}

const showApp = (title, statement, inputs, button) => {
  cleanApp()
  let inputsField = document.getElementById('get-input')
  let h1Title = document.createElement('h1')
  h1Title.innerText = title
  fieldApp.insertBefore(h1Title, inputsField)
  let pStatement = document.createElement('p')
  pStatement.innerText = statement
  fieldApp.insertBefore(pStatement, inputsField)
  inputs.forEach((element, i) => {
    inputsField.appendChild(element.newLabel)
    inputsField.appendChild(element.newInput)
  });
  inputsField.appendChild(document.createElement('br'))
  inputsField.appendChild(document.createElement('br'))
  inputsField.appendChild(button)
}

const evaluateExercise = () => {
  let inputs = document.getElementsByTagName('input')
  let output = document.getElementById('output')
  let numInputs = inputs.length
  let values = []
  for (var i = 0; i < numInputs; i++) {
    values.push(inputs[i].value)
  }
  let result
  if(algorithms[currentExercise].length){
    if(currentExercise === 'isDigitIncreasing'||currentExercise==='isEven'||currentExercise==='isLeapYear'||currentExercise==='numberSeries'||currentExercise==='factorial'||currentExercise==='fibonacciSerie'||currentExercise==='fibonacciSerieModified'||currentExercise==='isPrime'||currentExercise==='primeSerie'||currentExercise==='euler'||currentExercise==='PI'||currentExercise==='evenOddArray'||currentExercise==='operationsArray'||currentExercise==='specialArraySort'||currentExercise==='operationMatrix'||currentExercise==='lowerTriangular'||currentExercise==='rhombus'||currentExercise==='hourglass'||currentExercise==='factorDecomposition'){
      result = algorithms[currentExercise](parseInt(values[0]))
    }else if (currentExercise ==='isTwinPaired'||currentExercise==='isOlympic') {
      values = values[0].split(',')
      values = values.map((element)=>parseInt(element))
      result = algorithms[currentExercise](values)
    }else if (currentExercise ==='biggerNumber'||currentExercise==='orderNumbers'){
      values = values.map((element)=>parseInt(element))
      result = algorithms[currentExercise](values)
    }else if (currentExercise ==='isMultiplo'||currentExercise==='taylorSerie'||currentExercise==='taylorSerieModified') {
      result = algorithms[currentExercise](parseInt(values[0]), parseInt(values[1]))
    }else if (currentExercise ==='quadraticEcuation'||currentExercise==='matrixMultiplication') {
      result = algorithms[currentExercise](parseInt(values[0]), parseInt(values[1]), parseInt(values[2]))
    }else if (currentExercise ==='isPalindrome'||currentExercise==='beamResistance'||currentExercise==='madisonBridge'){
      result = algorithms[currentExercise](values[0])
    }
  } else {
    switch (currentExercise) {
      case 'nomina':
        algorithms[currentExercise].employee.name = values[3]
        algorithms[currentExercise].employee.hoursWorked = parseInt(values[0])
        algorithms[currentExercise].employee.hourCost = parseInt(values[1])
        algorithms[currentExercise].minimumSalary = parseInt(values[2])
        result = algorithms[currentExercise].view()
        break;
      case 'offers':
        result = algorithms[currentExercise].getOffer((num)=>{
          if(num<5){
            return 0.1
          }else if (num >= 5 && num < 10) {
            return 0.2
          }else if (num >= 10) {
            return 0.4
          }
        },parseInt(values[0]))
        break;
      case 'enrollment':
        algorithms[currentExercise].priceCredit = parseInt(values[1])
        algorithms[currentExercise].buyCredits = parseInt(values[0])
        algorithms[currentExercise].stratum = parseInt(values[2])
        result = `Cost Enrollment: ${algorithms[currentExercise].costEnrollment}, Subsidy: ${algorithms[currentExercise].subsidy}`
        break;
      case 'shipment':
        algorithms[currentExercise].weight = parseInt(values[0])
        algorithms[currentExercise].price = parseInt(values[1])
        algorithms[currentExercise].day = parseInt(document.getElementsByTagName('select')[1].value)
        algorithms[currentExercise].cash = inputs[2].checked
        algorithms[currentExercise].credit = inputs[3].checked
        result = `<b>Tarifa: </b><p>${algorithms[currentExercise].tariff}</p> <b>Descuento: </b> <p>${algorithms[currentExercise].discount}<p> <b>promotion: </b> <p>${algorithms[currentExercise].promotion}<p> <b>Total: </b><p>${algorithms[currentExercise].cost}</p>`
        break;
    }
  }
  output.innerHTML = `<h3>Resultado:</h3> <br> <p>${JSON.stringify(result)}<p>`
  console.log(result)
}

const choosePoint = (e) => {
  currentExercise = e.value
  let currentOptions = optionsExercises[currentExercise]
  console.log(currentOptions);
  let inputs = generateInputs(currentOptions.input)
  let button = generateButton(currentOptions.button, evaluateExercise)
  showApp(currentOptions.title, currentOptions.statement, inputs, button)
}
