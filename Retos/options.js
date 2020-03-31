/**
 * Object with options for view in HTML
 */
const optionsExercises = {
  isDigitIncreasing : {
    title: "Digit Increasing",
    statement : "A number is called digit-increasing if it is equal to n + nn + nnn + ... for some digit n between 1 and 9. For example 24 is digit-increasing because it equals 2 + 22 (here n = 2) ",
    input : [{
      type: "number",
      quantity: 1,
      placeHolder: ["A number n"]
    }],
    button : {
      text : "Is increasing"
    }
  },
  isTwinPaired : {
    title: "Twin Paired",
    statement : "An array is defined to be twin paired if its even-valued elements (if any) are in scending order and its odd-valued elements (if any) are in ascending order. The array {-6, 12, 1, 24, 3, 5} is twin paired because the even-valued elements (-6, 12, 24) are in ascending order and so are the odd-valued elements (1, 3, 5). However, the array {3, 2, 1} is not twin aired because the odd numbers are not in ascending order.",
    input : [{
      type: "text",
      quantity: 1,
      placeHolder: ['numbers separated by comma","']
    }],
    button : {
      text : "is Twin Paired"
    }
  },
  isOlympic : {
    title: "Olympic",
    statement : ". An Olympic array is defined to be an array in which every value is greater than or equal to the sum of the values less than it. The sum of the values less than the minimum value in the array is defined to be 0",
    input : [{
      type: "text",
      quantity: 1,
      placeHolder: ["numbers separated by comma"]
    }],
    button : {
      text : "Is olympic"
    }
  },
  isEven : {
    title: "Number Even",
    statement : "A number is Even whem its division between 2 is exact",
    input : [{
      type: "number",
      quantity: 1,
      placeHolder: ["A number n"]
    }],
    button : {
      text : "Is Even"
    }
  },
  biggerNumber : {
    title: "Bigger Number",
    statement : "The bigger Number between three numbers",
    input : [{
      type: "number",
      quantity: 3,
      placeHolder: ["Number 1","Number 2","Number 3"]
    }],
    button : {
      text : "The bigger is"
    }
  },
  orderNumbers : {
    title: "Order Numbers",
    statement : "Order of three numbers",
    input : [{
      type: "number",
      quantity: 3,
      placeHolder: ["Number 1","Number 2","Number 3"]
    }],
    button : {
      text : "Order numbers"
    }
  },
  isMultiplo : {
    title: "Multiplo",
    statement : "Two numbers are multiplos if its division is exact",
    input : [{
      type: "number",
      quantity: 2,
      placeHolder: ["Divider","quotient"]
    }],
    button : {
      text : "Is Multiplo"
    }
  },
  isLeapYear : {
    title: "Leap-year",
    statement : "leap years are the multiples of 4, but they are not multiples of 100 and if they are multiples of 100 and multiples of 400 they are leap years.",
    input : [{
      type: "number",
      quantity: 1,
      placeHolder: ["A year"]
    }],
    button : {
      text : "Is Leap-Year"
    }
  },
  nomina : {
    title: "Nomina",
    statement : "A simple nomina",
    input : [{
      type: "number",
      quantity: 3,
      placeHolder: ["worked hours",'price hour','price salary mensual']
    },{
      type: 'text',
      quantity: 1,
      placeHolder: ['Name']
    }],
    button : {
      text : "Calculate"
    }
  },
  offers : {
    title: "Offers",
    statement : "A desktop warehouse makes the following discounts: if the customer buys less than 5 units, they are given a 10% discount on the purchase; if the number of units is greater than or equal to five but less than 10 it is given 20% and, if they are 10 or more, it is given 40%",
    input : [{
      type: "number",
      quantity: 1,
      placeHolder: ["Number of desks"]
    }],
    button : {
      text : "calculate offer"
    }
  },
  enrollment : {
    title: "Enrollment",
    statement : "You want to get the value of a student's registration",
    input : [{
      type: "number",
      quantity: 3,
      placeHolder: ["credits",'price credit', 'student stratum']
    }],
    button : {
      text : "Calculate enrollment"
    }
  },
  shipment : {
    title: "shipment",
    statement : "A merchandise shipping company has a rate and discount plan on the value of its clients' merchandise shipment.",
    input : [{
      type: "number",
      quantity: 2,
      placeHolder: ["commodity weight",'commodity price']
    },{
      type: 'radio',
      value:['cash','credit'],
      placeHolder: ['Cash', 'Credit card'],
      quantity: 2
    },{
      type: 'select',
      options: [{value:1, text:'Lunes'},
        {value:2, text:'Martes'},
        {value:3, text:'Miercoles'},
        {value:4, text:'Jueves'},
        {value:5, text:'Viernes'},
        {value:6, text:'Sabado'},
        {value:7, text:'Domingo'}],
      quantity: 1,
      placeHolder: ['day']
    }],
    button : {
      text : "Calculate shipment"
    }
  },
  numberSeries : {
    title: "Number Series",
    statement : "prints the top N, their sum, and their average.",
    input : [{
      type: "number",
      quantity: 1,
      placeHolder: ["A number n"]
    }],
    button : {
      text : "Serie"
    }
  },
  factorial : {
    title: "Factorial",
    statement : "The n! = (n-1) x n",
    input : [{
      type: "number",
      quantity: 1,
      placeHolder: ["A number n"]
    }],
    button : {
      text : "calculate n!"
    }
  },
  taylorSerie : {
    title: "Taylor Serie",
    statement : "computes the first n terms of the Taylor series",
    input : [{
      type: "number",
      quantity: 2,
      placeHolder: ["terms quantity",'X value']
    }],
    button : {
      text : "Calculate"
    }
  },
  taylorSerieModified : {
    title: "Taylor Serie Modified",
    statement : "computes the first n terms of the Taylor series",
    input : [{
      type: "number",
      quantity: 2,
      placeHolder: ["terms quantity",'X value']
    }],
    button : {
      text : "Is increasing"
    }
  },
  quadraticEcuation : {
    title: "Quadratic Ecuation",
    statement : "Find the value of x using the quadratic equation",
    input : [{
      type: "number",
      quantity: 3,
      placeHolder: ["value of a",'value of b','value of c']
    }],
    button : {
      text : "Calculate"
    }
  },
  fibonacciSerie : {
    title: "Fibonacci Serie",
    statement : "Prints the fibonacci serie until n digit",
    input : [{
      type: "number",
      quantity: 1,
      placeHolder: ["A number n"]
    }],
    button : {
      text : "fibonacci!!"
    }
  },
  fibonacciSerieModified : {
    title: "Digit Increasing",
    statement : "Prints a fibonacci serie modified sum the las two digits until digit n",
    input : [{
      type: "number",
      quantity: 1,
      placeHolder: ["A number n"]
    }],
    button : {
      text : "Other Fibonacci"
    }
  },
  isPrime : {
    title: "Prime",
    statement : "A prime number is the one that only has 1 and the same as a divisor",
    input : [{
      type: "number",
      quantity: 1,
      placeHolder: ["A number"]
    }],
    button : {
      text : "Is prime?"
    }
  },
  primeSerie : {
    title: "Prime serie",
    statement : "Prints a serie the prime numbers until n digits",
    input : [{
      type: "number",
      quantity: 1,
      placeHolder: ["A number n"]
    }],
    button : {
      text : "primes"
    }
  },
  euler : {
    title: "Euler",
    statement : "The mathematical constant is one of the most important irrational numbers",
    input : [{
      type: "number",
      quantity: 1,
      placeHolder: ["Terms of precision"]
    }],
    button : {
      text : "Calculate"
    }
  },
  PI : {
    title: "Number PI",
    statement : "The number PI is the relationship between the length of a circle and its diameter in Euclidean geometry",
    input : [{
      type: "number",
      quantity: 1,
      placeHolder: ["Terms of precision"]
    }],
    button : {
      text : "Calculate"
    }
  },
  evenOddArray : {
    title: "Even and Odd in an array",
    statement : "even[i]=i+7, odd[i]=i-1 after sort",
    input : [{
      type: "number",
      quantity: 1,
      placeHolder: ["size of array"]
    }],
    button : {
      text : "Calculate"
    }
  },
  operationsArray : {
    title: "Operations in a vector",
    statement : "fill a vector using the formula a[i]=(i+1)*i, after calculate the sum and average",
    input : [{
      type: "number",
      quantity: 1,
      placeHolder: ["Size of array"]
    }],
    button : {
      text : "Calculate"
    }
  },
  specialArraySort : {
    title: "Special vector sort",
    statement : "fill a vector using the formula If the position is even, Cell [i] = i * i + 1. If the cell is odd, Cell [i] = 3 * (i + 1). Then the elements that contain an even number of the vector must be ordered descending in the first positions of the vector and the odd elements of the vector must be ordered ascending in the last positions of the vector",
    input : [{
      type: "number",
      quantity: 1,
      placeHolder: ["Size of vector"]
    }],
    button : {
      text : "Calculate"
    }
  },
  isPalindrome : {
    title: "Palindrome",
    statement : "Palindromes are words or phrases that are read the same from right to left as in the usual sense",
    input : [{
      type: "text",
      quantity: 1,
      placeHolder: ["A Phrase"]
    }],
    button : {
      text : "Is Palindrome?"
    }
  },
  beamResistance : {
    title: "the strongest beam",
    statement : "Base: (%=10u),(&=30u),(#=90u), beam: (stringers =),(conection *)\ndetermines if the beam is well built and if the base withstands the weight of all stringers and beam connections \n example: #====*====================*==",
    input : [{
      type: "text",
      quantity: 1,
      placeHolder: ["your beam"]
    }],
    button : {
      text : "Validate"
    }
  },
  madisonBridge : {
    title: "Digit Increasing",
    statement : "* : bridge base, = : platform bridge, + = reinforcement\n \
      determines the validity of the bridge construction",
    input : [{
      type: "text",
      quantity: 1,
      placeHolder: ["The bridge"]
    }],
    button : {
      text : "Validate"
    }
  },
  operationMatrix : {
    title: "Operations in a Matrix",
    statement : "Fill the matrix using the formula cell[i][j]=(i+1)-j\n Show the matrix and the sum, value max and value min",
    input : [{
      type: "number",
      quantity: 1,
      placeHolder: ["size n*n"]
    }],
    button : {
      text : "Operate"
    }
  },
  lowerTriangular : {
    title: "lower triangular in a matrix",
    statement : "fill a matrix in cell[i][j]=i+j. \n Then show a lower triangular of the matrix",
    input : [{
      type: "number",
      quantity: 1,
      placeHolder: ["size n*n"]
    }],
    button : {
      text : "triangular"
    }
  },
  rhombus : {
    title: "A Rhomb",
    statement : "Generate a rhomb",
    input : [{
      type: "number",
      quantity: 1,
      placeHolder: ["size of rhomb"]
    }],
    button : {
      text : "The rhombus"
    }
  },
  matrixMultiplication : {
    title: "Matrix Multplication",
    statement : "Multiplication between two matrix, A mxn X B nxp = C mxp",
    input : [{
      type: "number",
      quantity: 3,
      placeHolder: ["length m",'length n','length p']
    }],
    button : {
      text : "Multiply"
    }
  },
  hourglass : {
    title: "Hourglass",
    statement : "A matrix with form a hourglass, n always is odd",
    input : [{
      type: "number",
      quantity: 1,
      placeHolder: ["size n*n"]
    }],
    button : {
      text : "Show hourglass"
    }
  },
  factorDecomposition : {
    title: "Factor Decomposition",
    statement : "The factor of a number \n example: 72 = 2 x 2 x 2 x 3 x 3",
    input : [{
      type: "number",
      quantity: 1,
      placeHolder: ["A number"]
    }],
    button : {
      text : "calculate"
    }
  }
}
