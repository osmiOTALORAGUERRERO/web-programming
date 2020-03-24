let playField = document.getElementById('play');
let puzzleField = document.getElementById('puzzle');
let imageFile;
let imgSlice = [];
let puzzle = {};
let time = 0;
let move = 0;
let sizePuzzle;
let start = false;


const movePiece = () => {

}

const uploadImage = (input) => {
  imageFile = input.files[0]
}

const setMatrix = (elementDimension) => {
  if (!start) {
    switch (parseInt(elementDimension.value)) {
      case 1:
        sizePuzzle = 3;
        generatePuzzle(3)
        matrixDisplay(3)
        break;
      case 2:
        sizePuzzle = 4;
        generatePuzzle(4)
        matrixDisplay(4)
        break;
      case 3:
        sizePuzzle = 5;
        generatePuzzle(5)
        matrixDisplay(5)
        break;
    }
  }
}

const generatePuzzle = (size) => {
  puzzle.seed = []
  let row
  let count = 0
  for (var i = 0; i < size; i++) {
    row = []
    for (var j = 0; j < size; j++) {
      ++count
      row.push(count==(size*size) ? -1:count)
    }
    puzzle.seed.push(row)
  }
  console.log(puzzle.seed)
}

const matrixDisplay = (size) => {
  let divRow;
  let divCol;
  puzzleField.innerHTMLl = '';
  for (var i = 0; i < size; i++) {
    divRow = document.createElement('div')
    divRow.id = `row-${i}`;
    divRow.className = 'row-box';
    for (var j = 0; j < size; j++) {
      divCol = document.createElement('div')
      divCol.id = `col-${j}`;
      divCol.className = 'col_box';
      divRow.appendChild(divCol);
    }
    puzzleField.appendChild(divRow)
  }
}

const startTime = () => {
  if (!start) {
    let timeField = document.getElementById('time')
    setInterval(function(){
      timeField.innerText = `Time : ${time++} s`
    },1000)
  }
}

const puzzleDisplay = () => {

}

const generateCutImages = (imgFile) => {
  let chunks = []
  let canvas;
  let ctx;
  let img = new Image()
  img.src = URL.createObjectURL(imageFile)
  img.onload = () => {
    let slice = {
      xi : img.width/sizePuzzle,
      yi : img.height/sizePuzzle
    }
    for (var i = 0; i < sizePuzzle; i++) {
      for (var j = 0; j < sizePuzzle; j++) {
        canvas = document.createElement('canvas')
        canvas.width = slice.xi
        canvas.height = slice.yi
        ctx = canvas.getContext('2d');
        ctx.drawImage(img, j*slice.xi, i*slice.yi, slice.xi, slice.yi, 0, 0, canvas.width, canvas.height)
        chunks.push(canvas)
        console.log(chunks)
      }
    }
  }
  chunks.pop()
  return chunks;
}

function startGame(e) {
  playField.hidden = true;
  uploadField = document.getElementsByClassName('upload')[0]
  setMatrix(uploadField.children[0])
  uploadImage(uploadField.children[1])
  if (imageFile && sizePuzzle) {
    imgSlice = generateCutImages(imageFile)
    puzzleDisplay()
    startTime()
  }
  start = true;
}

playField.addEventListener('click', startGame, false);
