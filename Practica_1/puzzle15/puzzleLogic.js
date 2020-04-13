/**
 * This module is the puzzle logic
 */
const puzzle = {
  _seed: [],
  _inGame: [],
  _sizePuzzle: 0,
  _count: 0,
  _movements: 0,
  _time: 0,
  _intervalTime:null,

  /**
   * get time - getter time
   *
   * @return {number}  time spent solving the puzzle
   */
  get time(){
    return this._time;
  },

  /**
   * get movements - getter movements
   *
   * @return {number}  number of moves solving the puzzle
   */
  get movements(){
    return this._movements;
  },

  /**
   * set sizePuzzle - setter sizePuzzle
   *
   * @param  {number} size size of the puzzle
   */
  set sizePuzzle(size) {
    this._sizePuzzle = size;
  },

  /**
   * get sizePuzzle - getter sizePuzzle
   *
   * @return {number}  value of sizePuzzle
   */
  get sizePuzzle() {
    return this._sizePuzzle;
  },

  /**
   * set seed - setter seed, generate a puzzle with a size
   *
   * @param  {number} size size of puzzle
   */
  set seed(size) {
    this._seed = []
    this._count = 0
    let row
    for (var i = 0; i < size; i++) {
      row = []
      row2 = []
      for (var j = 0; j < size; j++) {
        ++this._count
        let numberAdd = this._count==(size*size) ? -1:this._count
        row.push(numberAdd)
        row2.push(numberAdd)
      }
      this._seed.push(row)
      this._inGame.push(row2)
    }
  },

  /**
   * get seed - getter seed
   *
   * @return {object[number[]]}  matrix size * size with puzzle solved
   */
  get seed(){
    return this._seed;
  },

  /**
   * set inGame - setter inGame
   *
   * @param  {number} size size Puzzle
   */
  set inGame(size){
    console.log(this._inGame, this.seed)
    let reorder = Math.floor(Math.random() * (Math.pow(size,size)- 0)) + 0
    let availableMovements = {left:size-1, right:0, up:size-1, down:0}
    let index = {i:size-1, j:size-1}
    for (var x = 0; x < reorder; x++) {
      let moved = false
      let direction = Math.floor(Math.random() * (5- 1)) + 1
      while (!moved) {
        switch (direction) {
          case 1: //left
            if(availableMovements.left > 0){
              this._inGame[index.i][index.j] = this._inGame[index.i][index.j-1]
              this._inGame[index.i][index.j-1] = -1
              availableMovements.left--
              availableMovements.right++
              index.j--
              moved = true;
            }
            break;
          case 2: //right
            if(availableMovements.right > 0){
              this._inGame[index.i][index.j] = this._inGame[index.i][index.j+1]
              this._inGame[index.i][index.j+1] = -1
              availableMovements.left++
              availableMovements.right--
              index.j++
              moved = true;
            }
            break;
          case 3: //up
            if(availableMovements.up > 0){
              this._inGame[index.i][index.j] = this._inGame[index.i-1][index.j]
              this._inGame[index.i-1][index.j] = -1
              availableMovements.up--
              availableMovements.down++
              index.i--
              moved = true;
            }
            break;
          case 4: //down
            if(availableMovements.down > 0){
              this._inGame[index.i][index.j] = this._inGame[index.i+1][index.j]
              this._inGame[index.i+1][index.j] = -1
              availableMovements.up++
              availableMovements.down--
              index.i++
              moved = true;
            }
            break;
        }
        direction > 4 ? direction=1 : direction++;
      }
    }
  },

  /**
   * get inGame - getter inGame
   *
   * @return {object[number[]]}  Matrix with disassembled puzzle for the game
   */
  get inGame(){
    return this._inGame;
  },

  /**
   * startTime - start the elapsed time counter solving the puzzle
   *
   * @callback callback
   * @param  {boolean} start    if start play or not
   */
  startTime(callback, start){
    if (!start) {
      this._intervalTime = setInterval(()=>{
        this._time++
        callback(this._time)
      },1000)
    }
  },

  /**
   * move - move the nearby tile of the puzzle to the hole puzzle
   *
   * @param  {number} i position i to move
   * @param  {number} j position j to move
   * @return {object}   description of the movement
   */
  move(i,j) {
    let moveTo = { enabled:false, 'i':null, 'j':null, }
    if (i===0) {
      if(j===0){
        if (this.inGame[0][1] === -1) { //right
          this.inGame[0][1] = this.inGame[i][j]
          this.inGame[i][j] = -1
          moveTo = {enabled:true, 'i':0, 'j':1}
        }else if (this.inGame[1][0] === -1) { //down
          this.inGame[1][0] = this.inGame[i][j]
          this.inGame[i][j] = -1
          moveTo = {enabled:true, 'i':1, 'j':0}
        }
      }else if (j>0 && j<this.sizePuzzle-1) {
        if (this.inGame[0][j-1] === -1) { //left
          this.inGame[0][j-1] = this.inGame[i][j]
          this.inGame[i][j] = -1
          this._movements++
          moveTo = {enabled:true, 'i':0, 'j':j-1}
        }else if (this.inGame[0][j+1] === -1) { //right
          this.inGame[0][j+1] = this.inGame[i][j]
          this.inGame[i][j] = -1
          moveTo = {enabled:true, 'i':0, 'j':j+1}
        }else if (this.inGame[1][j] === -1) { //down
          this.inGame[1][j] = this.inGame[i][j]
          this.inGame[i][j] = -1
          moveTo = {enabled:true, 'i':1, 'j':j}
        }
      }else if (j===this.sizePuzzle-1) {
        if (this.inGame[0][j-1] === -1) { //left
          this.inGame[0][j-1] = this.inGame[i][j]
          this.inGame[i][j] = -1
          moveTo = {enabled:true, 'i':0, 'j':j-1}
        }else if (this.inGame[1][j] === -1) { //down
          this.inGame[1][j] = this.inGame[i][j]
          this.inGame[i][j] = -1
          moveTo = {enabled:true, 'i':1, 'j':j}
        }
      }
    }else if (i>0 && i<this.sizePuzzle-1) {
      if (j===0) {
        if (this.inGame[i][1] === -1) { //right
          this.inGame[i][1] = this.inGame[i][j]
          this.inGame[i][j] = -1
          moveTo = {enabled:true, 'i':i, 'j':1}
        }else if (this.inGame[i+1][0] === -1) { //down
          this.inGame[i+1][0] = this.inGame[i][j]
          this.inGame[i][j] = -1
          moveTo = {enabled:true, 'i':i+1, 'j':0}
        }else if (this.inGame[i-1][0] === -1) { //up
          this.inGame[i-1][0] = this.inGame[i][j]
          this.inGame[i][j] = -1
          moveTo = {enabled:true, 'i':i-1, 'j':0}
        }
      }else if (j>0 && j<this.sizePuzzle-1) {
        if (this.inGame[i][j+1] === -1) { //right
          this.inGame[i][j+1] = this.inGame[i][j]
          this.inGame[i][j] = -1
          moveTo = {enabled:true, 'i':i, 'j':j+1}
        }else if (this.inGame[i][j-1] === -1) { //left
          this.inGame[i][j-1] = this.inGame[i][j]
          this.inGame[i][j] = -1
          moveTo = {enabled:true, 'i':i, 'j':j-1}
        }else if (this.inGame[i-1][j] === -1) { //up
          this.inGame[i-1][j] = this.inGame[i][j]
          this.inGame[i][j] = -1
          moveTo = {enabled:true, 'i':i-1, 'j':j}
        }else if (this.inGame[i+1][j] === -1) { //down
          this.inGame[i+1][j] = this.inGame[i][j]
          this.inGame[i][j] = -1
          moveTo = {enabled:true, 'i':i+1, 'j':j}
        }
      }else if (j===this.sizePuzzle-1) {
        if (this.inGame[i][j-1] === -1) { //left
          this.inGame[i][j-1] = this.inGame[i][j]
          this.inGame[i][j] = -1
          moveTo = {enabled:true, 'i':i, 'j':j-1}
        }else if (this.inGame[i+1][j] === -1) { //down
          this.inGame[i+1][j] = this.inGame[i][j]
          this.inGame[i][j] = -1
          moveTo = {enabled:true, 'i':i+1, 'j':j}
        }else if (this.inGame[i-1][j] === -1) { //up
          this.inGame[i-1][j] = this.inGame[i][j]
          this.inGame[i][j] = -1
          moveTo = {enabled:true, 'i':i-1, 'j':j}
        }
      }
    }else if (i===this.sizePuzzle-1) {
      if (j===0) {
        if (this.inGame[i][1] === -1) { //right
          this.inGame[i][1] = this.inGame[i][j]
          this.inGame[i][j] = -1
          moveTo = {enabled:true, 'i':i, 'j':1}
        }else if (this.inGame[i-1][0] === -1) { //up
          this.inGame[i-1][0] = this.inGame[i][j]
          this.inGame[i][j] = -1
          moveTo = {enabled:true, 'i':i-1, 'j':0}
        }
      }else if (j>0 && j<this.sizePuzzle-1) {
        if (this.inGame[i][j-1] === -1) { //left
          this.inGame[i][j-1] = this.inGame[i][j]
          this.inGame[i][j] = -1
          moveTo = {enabled:true, 'i':i, 'j':j-1}
        }else if (this.inGame[i][j+1] === -1) { //right
          this.inGame[i][j+1] = this.inGame[i][j]
          this.inGame[i][j] = -1
          moveTo = {enabled:true, 'i':i, 'j':j+1}
        }else if (this.inGame[i-1][j] === -1) { //up
          this.inGame[i-1][j] = this.inGame[i][j]
          this.inGame[i][j] = -1
          moveTo = {enabled:true, 'i':i-1, 'j':j}
        }
      }else if (j===this.sizePuzzle-1) {
        if (this.inGame[i][j-1] === -1) { //left
          this.inGame[i][j-1] = this.inGame[i][j]
          this.inGame[i][j] = -1
          moveTo = {enabled:true, 'i':i, 'j':j-1}
        }else if (this.inGame[i-1][j] === -1) { //up
          this.inGame[i-1][j] = this.inGame[i][j]
          this.inGame[i][j] = -1
          moveTo = {enabled:true, 'i':i-1, 'j':j}
        }
      }
    }
    if (moveTo.enabled) {
      this._movements++
    }
    return moveTo;
  },

  /**
   * won - check if the inGame is equal to seed
   *
   * @return {boolean}  true if won else false
   */
  won(){
    inGameStr = this.inGame.toString()
    seedStr = this.seed.toString()
    console.log(this.inGame, this.seed)
    if(inGameStr === seedStr){
      clearInterval(this._intervalTime)
      return true
    }
    return false
  },

  /**
   * restart - restart of all parameters object puzzle
   *
   */
  restart(){
    this._seed = []
    this._inGame = []
    this._numbersPuzzle = []
    this._sizePuzzle = 0
    this._count = 0
    this._movements = 0
    this._time = 0
    clearInterval(this._intervalTime)
  }
}
