let playField = document.getElementById('play');
let puzzleField = document.getElementById('puzzle');
let imageFile;
let imgSlice = [];
let cardsDisplayed = [];
let start = false;


function movePiece(e) {
  if(e.target.localName !== 'div'){
    console.log(e.target.parentNode, cardsDisplayed);
    let parentPiece = e.target.parentNode
    let i = 0;
    let j;
    for (i; i < cardsDisplayed.length; i++) {
      j = cardsDisplayed[i].findIndex( element => element.firstChild === parentPiece )
      if (j !== -1) {
        break;
      }
    }
    let moveTo = puzzle.move(i,j)
    if (moveTo.enabled) {
      let divMoved = cardsDisplayed[i][j].firstChild
      let divEmpty = cardsDisplayed[moveTo.i][moveTo.j].firstChild
      cardsDisplayed[i][j].firstChild.remove()
      cardsDisplayed[moveTo.i][moveTo.j].firstChild.remove()
      cardsDisplayed[i][j].appendChild(divEmpty)
      cardsDisplayed[moveTo.i][moveTo.j].appendChild(divMoved)
      console.log(cardsDisplayed)
    }
    if(puzzle.won()){
      alert('win')
    }
  }
}

const uploadImage = (input) => {
  imageFile = input.files[0]
}

const setMatrix = (elementDimension) => {
  if (!start) {
    switch (parseInt(elementDimension.value)) {
      case 1:
        puzzle.sizePuzzle = 3;
        puzzle.seed = 3;
        puzzle.inGame = 3;
        matrixDisplay(3)
        break;
      case 2:
        puzzle.sizePuzzle = 4;
        puzzle.seed = 4;
        puzzle.inGame = 4;
        matrixDisplay(4)
        break;
      case 3:
        puzzle.sizePuzzle = 5;
        puzzle.seed = 5;
        puzzle.inGame = 5;
        matrixDisplay(5)
        break;
    }
  }
}

const matrixDisplay = (size) => {
  let divRow;
  let divCol;
  let row;
  puzzleField.innerHTML = '';
  for (var i = 0; i < size; i++) {
    divRow = document.createElement('div')
    divRow.id = `row-${i}`;
    divRow.className = 'row-box';
    row = []
    for (var j = 0; j < size; j++) {
      divCol = document.createElement('div')
      divCol.id = `col-${j}`;
      divCol.className = 'col-box';
      row.push(divCol)
      divRow.appendChild(divCol);
    }
    puzzleField.appendChild(divRow)
    cardsDisplayed.push(row)
  }
}

const puzzleDisplay = () => {
  let imgSliceDiv;
  let xpuzzle = 0
  let ypuzzle = 0
  cardsDisplayed.forEach((row, i) => {
    ypuzzle = 0
    row.forEach((col, j) => {
      imgSliceDiv = document.createElement('div')
      imgSliceDiv.className = 'img-box'
      imgSliceDiv.onclick = movePiece
      let indicator = puzzle.inGame[xpuzzle][ypuzzle++]
      console.log(indicator)
      imgSliceDiv.id = indicator
      if (indicator !== -1) {
        let imgSliceCanva = imgSlice[indicator-1]
        console.log(imgSliceCanva)
        imgSliceDiv.appendChild(imgSliceCanva)
        col.appendChild(imgSliceDiv)
      } else {
        col.appendChild(imgSliceDiv)
      }
    });
    xpuzzle++
  });
}

const generateCutImages = (imgFile) => {
  let chunks = []
  let canvas;
  let ctx;
  let img = new Image()
  img.src = URL.createObjectURL(imageFile)
  img.onload = () => {
    let slice = {
      xi : img.width/puzzle.sizePuzzle,
      yi : img.height/puzzle.sizePuzzle
    }
    for (var i = 0; i < puzzle.sizePuzzle; i++) {
      for (var j = 0; j < puzzle.sizePuzzle; j++) {
        canvas = document.createElement('canvas')
        canvas.width = slice.xi
        canvas.height = slice.yi
        ctx = canvas.getContext('2d');
        ctx.drawImage(img, j*slice.xi, i*slice.yi, slice.xi, slice.yi, 0, 0, canvas.width, canvas.height)
        chunks.push(canvas)
        console.log(chunks)
      }
    }
    puzzleDisplay()
  }
  chunks.pop()
  return chunks;
}

function startGame(e) {
  uploadField = document.getElementsByClassName('upload')[0]
  setMatrix(uploadField.children[0])
  uploadImage(uploadField.children[1])
  if (imageFile && puzzle.sizePuzzle) {
    playField.hidden = true;
    puzzleField.hidden = false;
    imgSlice = generateCutImages(imageFile)
    puzzle.startTime((time)=>{
      let timeField = document.getElementById('time')
      timeField.innerText = `Time : ${time} s`
    },start)
    start = true;
  } else {
    swal({
      title : "No ha subido ninguna imagen",
      icon : "warning",
      button : "Close",
      timer : 3000
    })
  }
}

window.onload = () => {
  puzzleField.hidden = true;
}

playField.addEventListener('click', startGame, false);
