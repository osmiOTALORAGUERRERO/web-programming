/**
 * Algorithms with exercise
 */
const algorithms = {

  /**
   * isDigitIncreasing - description
   *
   * @param  {type} n description
   * @return {type}   description
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
   *
   * @param  {type} a description
   * @return {type}   description
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
   *
   * @param  {type} a description
   * @return {type}   description
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
   *
   * @param  {type} n description
   * @return {type}   description
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
   *
   * @param  {type} n description
   * @return {type}   description
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
   *
   * @param  {type} n description
   * @return {type}   description
   */
  factorial(n) {
    	if (n == 0){
    		return 1;
    	}
    	return n * this.factorial(n-1);
  },

  /**
   * taylorSerie - description
   *
   * @param  {type} n description
   * @param  {type} x description
   * @return {type}   description
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
   *
   * @param  {type} n description
   * @param  {type} x description
   * @return {type}   description
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
   *
   * @param  {type} a description
   * @param  {type} b description
   * @param  {type} c description
   * @return {type}   description
   */
  quadraticEcuation(a,b,c) {
    let root = Math.sqrt(Math.pow(b,2)-(4*a*c))
    let x1 = (-b + root)/(2*a)
    let x2 = (-b - root)/(2*a)
    return {x1, x2}
  },

  /**
   * fibonacciSerie - description
   *
   * @param  {type} n     description
   * @param  {type} a=[0  description
   * @param  {type} 1]    description
   * @param  {type} sum=1 description
   * @return {type}       description
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
   *
   * @param  {type} n     description
   * @param  {type} a
   * @param  {type} sum=3 description
   * @return {type}       description
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
   *
   * @param  {type} n description
   * @return {type}   description
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
   *
   * @param  {type} n description
   * @return {type}   description
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
   *
   * @param  {type} p description
   * @return {type}   description
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
   *
   * @param  {type} p description
   * @return {type}   description
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
   *
   * @param  {type} size description
   * @return {type}      description
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
   *
   * @param  {type} size description
   * @return {type}      description
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
   *
   * @param  {type} size description
   * @return {type}      description
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
   *
   * @param  {type} phrase description
   * @return {type}        description
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
   *
   * @param  {type} beam description
   * @return {type}      description
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
   *
   * @param  {type} bridge description
   * @return {type}        description
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
   *
   * @param  {type} n description
   * @return {type}   description
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
   *
   * @param  {type} n description
   * @return {type}   description
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
   *
   * @param  {type} n description
   * @return {type}   description
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
   *
   * @param  {type} m description
   * @param  {type} n description
   * @param  {type} p description
   * @return {type}   description
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
   *
   * @param  {type} n description
   * @return {type}   description
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
   *
   * @param  {type} number description
   * @param  {type} a = [] description
   * @return {type}        description
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
