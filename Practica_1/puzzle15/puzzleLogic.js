const puzzle = {
  _seed: [],
  _inGame: [],
  _sizePuzzle: 0,
  _count: 0,
  _movements: 0,
  _time: 0,
  _intervalTime:null,
  get time(){
    return this._time;
  },
  get movements(){
    return this._movements;
  },
  set sizePuzzle(size) {
    this._sizePuzzle = size;
  },
  get sizePuzzle() {
    return this._sizePuzzle;
  },
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
  get seed(){
    return this._seed;
  },
  set inGame(size){
    console.log(this._inGame, this.seed)
    let reorder = Math.floor(Math.random() * (Math.pow(size,3)- 0)) + 0
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
  get inGame(){
    return this._inGame;
  },
  startTime(callback, start){
    if (!start) {
      this._intervalTime = setInterval(()=>{
        this._time++
        callback(this._time)
      },1000)
    }
  },
  move(i,j) {
    let moveTo = { enabled:false, 'i':null, 'j':null, }
    if (i===0) {
      if(j===0){
        if (this.inGame[0][1] === -1) { //right
          this.inGame[0][1] = this.inGame[i][j]
          this.inGame[i][j] = -1
          this._movements++
          moveTo = {enabled:true, 'i':0, 'j':1}
        }else if (this.inGame[1][0] === -1) { //down
          this.inGame[1][0] = this.inGame[i][j]
          this.inGame[i][j] = -1
          this._movements++
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
    return moveTo;
  },
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
