/**
 * Algorithms with exercise
 */
const algorithms = {

  /**
   * isDigitIncreasing - description
   * A number is called digit-increasing if it is equal to n + nn + nnn + ...
   * for some digit n between 1 and 9.
   * For example 24 is digit-increasing because it equals 2 + 22 (here n = 2)
   * @param  {number} n number to evaluate if it is increasing
   * @return {boolean}   true if it is increasing, false if it is false
   */
  isDigitIncreasing(n) {
    let increments = []
    n = parseInt(n)
    if ((n.toString()).length === 1) {
      return {increasing:true, reason:[n]}
    }
    for (var i = 1; i < 10; i++) {
      currentIncrement = i.toString()
      increments.push(parseInt(currentIncrement))
      sum = increments.reduce((acc, cur) => acc+cur)
      while (sum !== n && sum < n) {
        currentIncrement += i.toString()
        increments.push(parseInt(currentIncrement))
        sum = increments.reduce((acc, cur) => acc+cur)
      }
      if(sum === n) {
        return {increasing : true, reason : increments}
      } else {
        increments = []
      }
    }
    return {increasing : false}
  },

  /**
   * isTwinPaired - description
   * An array is defined to be twin paired if its even-valued elements
   * (if any) are in scending order and its odd-valued elements (if any) are in ascending order
   * @param  {array:number} a array with values
   * @return {boolean}   true if it is Twin Paired, else return false
   */
  isTwinPaired(a) {
    let even = a.filter(number => parseInt(number) % 2 === 0)
    let odd = a.filter(number => parseInt(number) % 2 !== 0)
    const isAscending = (number, index, array) => {
      let a = true
      if (index != 0) {
        a = number >= array[index-1]
      }
      return a
    }

    return even.every(isAscending) && odd.every(isAscending) ? true : false

  },

  /**
   * isOlympic - description
   * An Olympic array is defined to be an array in which every value is greater than
   * or equal to the sum of the values less than it.
   * The sum of the values less than the minimum value in the array is defined to be 0
   * @param  {array:number} a The array with numbers to evaluate
   * @return {boolean}  true if it is Olympic, else return false
   */
  isOlympic(a) {
    if (a.some(number => parseInt(number) < 0)) {
      return false;
    }
    let validate = true
    a.forEach((item, index, array) => {
      if (validate) {
        const lessNumbers = number => parseInt(number) < item
        let less = array.filter(lessNumbers)
        less = less.length ? less : [0]
        let sum = less.reduce((acc, cur) => parseInt(acc)+parseInt(cur))
        validate = parseInt(item) >= sum
      }
    });
    return validate
  },

  isEven : n => parseInt(n) % 2 === 0,

  biggerNumber : a => Math.max(...a),

  orderNumbers : a => a.sort((a, b) => a - b),

  isMultiplo : (a,b) => (a%b === 0),


  /**
   * isLeapYear - description
   *  determine if the year is leap or not
   * @param  {number} n year number
   * @return {boolean}   true if the year is leap
   */
  isLeapYear(n) {
    if(parseInt(n) % 4 == 0 && parseInt(n) % 100 != 0){
      return true
    } else if (parseInt(n) % 400 == 0 && parseInt(n) % 100 == 0) {
      return true
    } else {
      return false
    }
  },

  nomina : {
    minimumSalary : 0,
    employee : {
      name : "name",
      hoursWorked : 0,
      hourCost : 0
    },
    view : () => {
      if (algorithms.nomina.minimumSalary < algorithms.nomina.employee.hoursWorked*algorithms.nomina.employee.hourCost){
        return {
          name: algorithms.nomina.employee.name,
          salary: algorithms.nomina.employee.hoursWorked*algorithms.nomina.employee.hourCost
        }
      } else {
        return {
          name: algorithms.nomina.employee.name
        }
      }
    }
  },

  offers : {
    priceDesk : 650000,
    getOffer : (discount, n) => {
      let percentage = discount(n)
      let totalCost = algorithms.offers.priceDesk*n
      return totalCost*(1-percentage)
    }
  },

  enrollment : {
    priceCredit : 1000,
    buyCredits: 15,
    set stratum(n) {
      if (n < 0 || n > 8) {
        this._stratum = 0
      }else{
        this._stratum = n
      }
    },
    get costEnrollment () {
      let total = 0
      if(this.buyCredits <= 20){
        total = this.buyCredits*this.priceCredit
      } else {
        total = (20*this.priceCredit)+(this.buyCredits-20)*(this.priceCredit*2)
      }
      if (this._stratum === 1){
        total = total*0.2
      }else if (this._stratum === 2) {
        total = total*0.5
      }else if (this._stratum === 3) {
        total = total*0.7
      }
      return total
    },
    get subsidy() {
      if (this._stratum === 1) {
        return 200000
      }else if (this._stratum === 2) {
        return 100000
      }else {
        return 0
      }
    }
  },

  shipment : {
    set weight (n) {
      this._weight = n > 0 ? n : 0
    },
    get weight () { return this._weight },
    set price (n) {
      this._price = n > 0 ? n : 0
    },
    get price () { return this._price },
    set day (n) {
      this._day = n > 0 && n < 8 ? n : null
    },
    get day () { return this._day },
    set cash(n) {this._cash = n},
    set credit(n) {this._credit = n},
    get cash () {return this._cash},
    get credit() {return this._credit},
    get tariff () {
      if (this.weight < 100) {
        return 20000
      }else if (this.weight >= 100 && this.weight <= 150) {
        return 25000
      }else if (this.weight > 150 && this.weight <= 200) {
        return 30000
      }else if (this.weight > 200) {
        return (35000)+(parseInt((this.weight-200)/10)*2000)
      }
    },
    get promotion () {
      if (this.day === 1 && this.credit) {
        return this.tariff*0.5
      } else if (this.cash && this.price > 1000000) {
        return this.tariff*0.6
      } else {
        return 0
      }
    },
    get discount () {
      if (this.promotion > 0) {
        return 0
      }else if (this.price >= 300000 && this.price <= 600000) {
        return this.tariff*0.1
      }else if (this.price > 600000 && this.price <= 1000000) {
        return this.tariff*0.2
      }else if (this.price > 1000000) {
        return this.tariff*0.3
      } else {
        return 0
      }
    },
    get cost () {
      if (this.promotion > 0) {
        return this.tariff - this.promotion
      }else if (this.discount > 0) {
        return this.tariff - this.discount
      }else {
        return this.tariff
      }
    }
  },

  /**
   * numberSeries - description
   * Print the first n numbers, and print their sum and average
   * @param  {number} n number of numbers
   * @return {object}   object with array serie, sum and average
   */
  numberSeries(n) {
    let serie = []
    for (var i = 1; i <= n; i++) {
      serie.push(i)
    }
    let sum = serie.reduce((acc, cur) => acc + cur)
    let average = sum / n
    return {serie, sum, average}
  },

  /**
   * factorial - description
   * The factorial of a number  5 = 1 x 2 x 3 x 4 x 5 = 120.
   * @param  {number} n number of factorial
   * @return {number}   result of factorial
   */
  factorial(n) {
    	if (n == 0){
    		return 1;
    	}
    	return n * this.factorial(n-1);
  },

  /**
   * taylorSerie - description
   * taylorSerie
   * @param  {number} n number of precicion
   * @param  {number} x number of serie
   * @return {number}   number float with the result
   */
  taylorSerie(n, x) {
    let result = 0
    for (let i = 0; i < n; i++) {
      result += Math.pow(x, i)/algorithms.factorial(i)
    }
    return result;
  },

  /**
   * taylorSerieModified - description
   * a second version of taylor Serie
   * @param  {number} n precicion number
   * @param  {number} x number to evaluate
   * @return {number}   number float with the result
   */
  taylorSerieModified(n,x) {
    let result = 0
    for (let i = 0; i < n; i++) {
      result += (Math.pow(x, i)/algorithms.factorial(i))*Math.pow(-1, i)
    }
    return result;
  },

  /**
   * quadraticEcuation - description
   * (-b+-sqrt(b^2-4ac))/2a
   * @param  {number} a term a
   * @param  {number} b term b
   * @param  {number} c term c
   * @return {object} result x1, x2
   */
  quadraticEcuation(a,b,c) {
    let root = Math.sqrt(Math.pow(b,2)-(4*a*c))
    let x1 = (-b + root)/(2*a)
    let x2 = (-b - root)/(2*a)
    return {x1, x2}
  },

  /**
   * fibonacciSerie - description
   * 0, 1, 1, 2, 3, 5, 8, 13, 21,...
   * @param  {number} n     numbers of the serie
   * @param  {array} a=[0,1]  array of the serie
   * @param  {number} sum=1 sum
   * @return {object}   serie and sum
   */
  fibonacciSerie(n, a=[0,1], sum=1) {
    if(a.length === n+1) {
      return {a,sum}
    } else if (n === 0 || n === 1) {
      return {a:[0], sum : 0}
    } else {
      next = a[a.length-2]+a[a.length-1]
      a.push(next)
      return this.fibonacciSerie(n, a, sum+next)
    }
  },


  /**
   * fibonacciSerieModified - description
   * 0, 1, 2, 3, 6, 11, 20, 37, 68, ...
   * @param  {number} n     numbers of the serie
   * @param  {array} a=[0,1,2] array of the serie
   * @param  {number} sum=3 sum
   * @return {object}       serie and sum
   */
  fibonacciSerieModified(n, a=[0,1,2], sum=3) {
    if (a.length === n) {
      return {a, sum}
    }else if (n === 0 || n === 1) {
      return {a:[0], sum:0}
    }else if (n === 2) {
      return {a:[0,1], sum: 1}
    }else {
      next =  a[a.length-3]+a[a.length-2]+a[a.length-1]
      a.push(next)
      return this.fibonacciSerieModified(n, a, sum+next)
    }
  },

  /**
   * isPrime - description
   * validate if a number is a prime
   * @param  {number} n number to evaluate
   * @return {boolean} true is the number is prime
   */
  isPrime(n) {
    for (var i = 2; i < n; i++) {
        if(n % i === 0){
          return false;
        }
    }
    return true;
  },

  /**
   * primeSerie - description
   * prime serie until n
   * @param  {number} n description
   * @return {object}   serie, sum and average
   */
  primeSerie(n) {
    n = parseInt(n)
    let serie = []
    let sum = 0
    let average = 0
    let number = 1
    while (serie.length !== n) {
      if(algorithms.isPrime(number)){
        serie.push(number)
        sum += number
      }
      number++
    }
    average = sum/n
    return {serie, sum, average}
  },

  /**
   * euler - description
   * euler number
   * @param  {number} p precicion number
   * @return {number}   float number result
   */
  euler(p) {
    p = parseInt(p)
    let result = 0;
    for (var i = 0; i < p; i++) {
      result += 1/(algorithms.factorial(i))
    }
    return result;
  },

  /**
   * PI - description
   * Number PI
   * @param  {number} p Number of precicion
   * @return {number}   PI
   */
  PI(p) {
    let result = 0
    let odd = 1
    for (var i = 0; i < p; i++) {
      result += (1/odd)*(Math.pow(-1, i))
      odd += 2
    }
    return result*4
  },

  /**
   * evenOddArray - description
   * If the position is even, the vector cell must be filled with the following formula Cell [i] = i + 7.
   * If the cell is odd, the vector cell must be filled with the following formula Cell [i] = i - 1
   * @param  {number} size size of array
   * @return {array}      array even Odd
   */
  evenOddArray(size) {
    const even = n => n+7
    const odd = n => n-1
    let arr = []
    for (var i = 0; i < size; i++) {
      i % 2 == 0 ? arr.push(even(i)) : arr.push(odd(i))
    }
    return arr
  },

  /**
   * operationsArray - description
   * The vector must be filled with the following formula Cell [i] = (i + 1) * i
   * @param  {type} size size array
   * @return {type}      sum and average of vector
   */
  operationsArray(size) {
    let arr = []
    let sum = 0
    let average = 0
    for (var i = 0; i < size; i++) {
      operation = ((i+1)*i)
      arr.push(operation)
      sum += operation
    }
    average = sum/size
    return {arr, sum, average};
  },

  /**
   * specialArraySort - description
   * @param  {type} size description
   * If the position is even, the vector cell must be filled with the following formula Cell [i] = i * i + 1.
   * If the cell is odd, the vector cell must be filled with the following formula Cell [i] = 3 * (i + 1).
   * Then the elements that contain an even number of the vector must be ordered descending in the first positions of the vector and the odd elements of the vector must be ordered ascending in the last positions of the vector
   * @return {type}      array and array after sort
   */
  specialArraySort(size) {
    let arr = []
    let sum = 0
    let average = 0
    let even = n => n*n+1
    let odd = n => 3*(n+1)
    for (var i = 0; i < size; i++) {
      i % 2 === 0 ? arr.push(even(i)) : arr.push(odd(i))
    }
    let arrEven = arr.filter(number => number%2 === 0)
    let arrOdd = arr.filter(number => number % 2 !== 0)
    arrSort = arrEven.sort((a,b) => b-a).concat(arrOdd.sort((a,b) => a-b))
    return {arr, arrSort}
  },

  /**
   * isPalindrome - description
   * sentences that are read the same from right to left as usual
   * @param  {string} phrase the phrase to evaluate
   * @return {boolean}       If the phrase is equal
   */
  isPalindrome(phrase) {
    let p = phrase.normalize('NFD').replace(/[\u0300-\u036f/,/./ /\?/\¿/\!/\¡]/g,'')
    p = p.toLowerCase()
    let left = Math.ceil(p.length/2)
    let right = p.length%2 === 0 ? left : left-1
    let leftPhrase = p.slice(0, left)
    let rightPhrase = p.slice(right)
    let rightArr = rightPhrase.split("")
    rightPhrase = rightArr.reverse().toString()
		rightPhrase = rightPhrase.replace(/,/g,"")
    return leftPhrase === rightPhrase
  },

  /**
   * beamResistance - description
   * A horizontal beam (built from left to right) suspended in the air requires a base to connect it to ground;
   * there are three types of bases with different resistances:%, &, #.
   * The rest of the beam is built in two pieces: stringers (=) and connections (*);
   * the stringers can be connected with other stringers or with a connection.
   * Connections can only be connected with stringers, no two or more connections are loosely connected.
   * The bases have the following resistances:% resists 10 units of weight, & resists 30 units of weight, # resists 90 units of weight.
   * The following formula is used to calculate the weight of the rest of the beam: each new spar sequence, the first spar weighs one unit weight, the second spar 2 units, and so on until the end of the continuous spar sequence.
   * Each connection weighs twice as much as its previous stringer sequence. Each new stringer sequence is calculated similarly starting at one.
   * @param  {string} beam string with the construction the beam
   * @return {object}      if have a error and reason
   */
  beamResistance(beam) {
    let base = {'%':10, '&':30, '#':90}
    let weightSupported = base[beam.charAt(0)]
    let weightTotal = 0
    if (weightSupported) {
      beam = beam.substring(1)
      if(!beam.includes('**') && beam.search(/[^=*]/g) === -1 && beam.charAt(0) === '=') {
        let stringers = beam.split('*')
        stringers.forEach((crossbar, i) => {
          let weightCrossbar = crossbar.length*(i+1)
          let weightConnection = (i+1)*2
          weightTotal += (weightCrossbar+weightConnection)
        });
        if (weightTotal <= weightSupported) {
          return {error:false, reason:"La viga soporta el peso"}
        } else {
          return {error:true, reason:"La viga no soporta el peso"}
        }
      } else if (beam === '') {
        return {error:false, reason:"La viga soporta el peso"}
      }
    } else{
      return {error:true, reason:'La viga no tiene base'}
    }
    return {error:true, reason:'La viga esta mal construida'}
  },

  /**
   * madisonBridge - description
   * (*) Base of the bridges; (=) Bridge platform; (+) Bridge reinforcement
   * Bridges must comply with the following simple rules:
   * • The bases (*) can only be at the ends of the bridges.
   * • Every two platforms requires a reinforcement next to them.
   * • Three platforms in a row are allowed only in the center of the bridge.
   * • The bridges must be symmetrical (equal the left part to the right part).
   * • If 2 or more reinforcements are allowed in a row
   * @param  {string} bridge string of bridge
   * @return {object}        if bridge have a error and reason
   */
  madisonBridge(bridge) {
    if(bridge.charAt(0)==='*' && bridge.charAt(bridge.length-1)==='*'){
      bridge = bridge.substring(1,bridge.length-1)
      if (bridge === '') {
        return {error:false, reason:'VALIDO'}
      }else if(bridge.search(/[^+=]/g)===-1){
        let platform = bridge.split('+')
        let removeEmpty = element => element.length > 0
        platform = platform.filter(removeEmpty)
        platformValid = platform.every((element, index) => {
          if (index === 0 || index === platform.length-1) {
            return element.length <= 2
          } else {
            return element.length <= 3
          }
        })
        if(platformValid && algorithms.isPalindrome(bridge)){
          return {error:false, reason:'VALIDO'}
        }
      }
    }
    return {error:true, reason:'INVALIDO'};
  },

  /**
   * operationMatrix - description
   * Construct a program that creates a square matrix of order N.
   * The matrix must be filled with the following formula Cell [i] [j] = (i + 1) - j
   * @param  {number} n size of matrix
   * @return {object}   array, sum, number max, and number min
   */
  operationMatrix(n) {
    let matrix = []
    let max = n
    let sum = 0
    for (var i = 0; i < n; i++) {
      row = []
      for (var j = 0; j < n; j++) {
        let operation = (i+1)-j
        if (i === 0 && j === n-1) {
          min = operation
        }
        sum += operation
        row.push(operation)
      }
      matrix.push(row)
    }
    return {matrix, sum, max, min}
  },

  /**
   * lowerTriangular - description
   * The matrix must be filled with the following formula Cell [i] [j] = i + j.
   * Get the lower triangular matrix
   * @param  {number} n matrix size
   * @return {object}   Matrix original, and lower triangular matrix
   */
  lowerTriangular(n) {
    let matrix = []
    let triangular = []
    let xi = 0
    for (var i = 0; i < n; i++) {
      row = []
      for (var j = 0; j < n; j++) {
        let operation = i+j
        row.push(operation)
        if (xi === j) {
          triangular.push([...row])
        }
      }
      xi++
      matrix.push(row)
    }
    return {matrix, triangular}
  },

  /**
   * rhombus - description
   * The rhombus with strings (#)
   * @param  {number} n size rhomb
   * @return {string}   rhomb finished
   */
  rhombus(n) {
    let draw = {space:'&nbsp;', numeral:'#', break:'<br>'}
    let left = n%2 === 0 ? (n/2)-1 : parseInt(n/2)
    let right = n%2 === 0 ? n/2 : parseInt(n/2)
    let coordinates = {xl:left, xr:right}
    let rhomb = '<br>'
    for (var i = 0; i < n; i++) {
      for (var j = 0; j < n; j++) {
        if(j===coordinates.xl || j===coordinates.xr){
          rhomb += draw.numeral
        }else {
          rhomb += draw.space
        }
      }
      rhomb += draw.break
      if (n%2 === 0) {
        if (i !== left) {
          coordinates.xl += i < left ? -1 : 1
          coordinates.xr += i < left ? 1 : -1
        }
      }
      else{
        coordinates.xl += i < left ? -1 : 1
        coordinates.xr += i < left ? 1 : -1
      }
    }
    return rhomb;
  },

  /**
   * matrixMultiplication - description
   * Amxn X Bnxp = Cmxp
   * The elements of matrix A fill it with the following formula: A [i] [j] = (i + 1) * j,
   * The elements of matrix B fill it with the following formula: B [i] [j] = (j + 1) * i.
   * Then show the matrix resulting from the multiplication of A x B
   * @param  {number} m size
   * @param  {number} n size
   * @param  {number} p size
   * @return {object}   array A, array B, array C
   */
  matrixMultiplication(m, n, p) {
    let A = []
    let B = []
    let C = []
    for (var i = 0; i < m; i++) {
      let row = []
      for (var j = 0; j < n; j++) {
        row.push((i+1)*j)
      }
      A.push(row)
    }
    for (var i = 0; i < n; i++) {
      let row = []
      for (var j = 0; j < p; j++) {
        row.push((j+1)*i)
      }
      B.push(row)
    }
    for (var i = 0; i < m; i++) {
      let row = []
      for (var j = 0; j < p; j++) {
        value = 0
        A[i].forEach((itemA, x) => {
          value += B[x][j]*itemA
        });
        row.push(value)
      }
      C.push(row)
    }
    return {A,B,C}
  },

  /**
   * hourglass - description
   * print the hourglas of matrix
   * @param  {number} n size odd
   * @return {object}   matrix and hourglas matrix
   */
  hourglass(n) {
    if (n%2 !== 0){
      let left = 0
      let right = n-1
      let matrix = []
      let watch = []
      for (var i = 0; i < n; i++) {
        let row = []
        let row2 = []
        let count = i*2
        for (var j = 0; j < n; j++) {
          if(j >= left && j <= right){
            row2.push(count)
          }else {
            row2.push(-1)
          }
          row.push(count++)
        }
        left += i > (n/2)-1 ? -1 : 1
        right += i > (n/2)-1 ? 1 : -1
        watch.push(row2)
        matrix.push(row)
      }
      return {matrix, watch};
    }else{
      return "Solo Numero impares";
    }
  },

  /**
   * factorDecomposition - description
   * decomposes a number, shows the numbers of the decomposition
   * @param  {number} number number to decomposes
   * @param  {array} a = [] description
   * @return {string}        string with the answer
   */
  factorDecomposition(number, a = []) {
    if (number === 1) {
      a = a.toString()
      return a.replace(/,/g,' x ');
    }else{
      let count = 2
      let numberMultiplo
      do {
        numberMultiplo = algorithms.isMultiplo(number, count)
        numberMultiplo ? count : count++
      } while (!numberMultiplo);
      a.push(count)
      return algorithms.factorDecomposition(number/count, a);
    }
  }
}
