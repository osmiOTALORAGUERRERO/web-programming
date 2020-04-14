let gameField = document.getElementById('game')
let playField = document.getElementById('play');
let puzzleField = document.getElementById('puzzle');
let timeDiv = document.getElementById('time')
let moveDiv = document.getElementById('move')
let imageFile;
let imgSlice = [];
let cardsDisplayed = [];
let start = false;

/**
 * preloaderImg - create a DOMElement for preload image
 *
 * @return {object}  The DOMElement
 */
function preloaderImg() {
  let preImg = document.createElement('div');
  preImg.className = 'single5';
  let preText = document.createElement('p');
  preText.innerText = 'Loading image';
  let container = document.createElement('div');
  container.className = 'preloads'
  container.appendChild(preImg);
  container.appendChild(preText);
  return container;
}

/**
 * movePiece - move the tile of the puzzle in the DOM
 *
 * @param  {object} e event of element
 */
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
      moveDiv.innerText = `# moves : ${puzzle.movements}`
      console.log(cardsDisplayed)
    }
    if(puzzle.won()){
      cardsDisplayed.forEach((row, i) => {
        row.forEach((item, i) => {
          item.firstChild.onclick = null
        });
      });
      saveNewResult({
          time:puzzle.time,
          movements:puzzle.movements,
          difficulty:`${puzzle.sizePuzzle}x${puzzle.sizePuzzle}`
        })
      swal({
        title: "Congratulations!",
        text: "You are won",
        icon: "success",
      });
    }
  }
}

/**
 * uploadImage - get de image of the input
 *
 * @param {object} element input file image
 */
const uploadImage = (input) => {
  imageFile = input.files[0]
}

/**
 * setMatrix - init setMatrix of puzzle
 *
 * @param {object} elementDimension  select element with size value
 */
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

/**
 * matrixDisplay - displayed the puzzle matrix
 *
 * @param {number} size
 */
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

/**
 * puzzleDisplay - displayed the image content in the puzzle
 *
 */
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
      console.log(puzzle.inGame, xpuzzle, ypuzzle)
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

/**
 * loadImage - wait to a image is full loaded
 *
 * @return {Promise<Image>}         The image from input upload
 */
function loadImage() {
  return new Promise((resolve, reject)=>{
    const img = new Image()
    img.onload = () => {resolve(img)}
    img.onerror = () => {reject(new Error(`Error con la carga de la imagen ${img.src}`))}
    img.src = URL.createObjectURL(imageFile)
  });
}

/**
 * generateCutImages - cut the images tail of the image upload
 *
 * @param {object} img image upload
 */
const generateCutImages = (img) => {
  let chunks = []
  let canvas;
  let ctx;
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
    }
  }
  chunks.pop()
  console.log(chunks)
  return chunks;
}

/**
 * thumbnailImage - Thumbnail of the image and add in the puzzle
 *
 * @param  {string} imgSrc File location
 */
function thumbnailImage(imgSrc){
  let container = document.createElement('div')
  container.id = 'thumbnailImage'
  miniature = document.createElement('img')
  miniature.src = imgSrc
  miniature.alt = "Thumbnail Image"
  container.appendChild(miniature)
  gameField.appendChild(container)
}

/**
 * startGame - start functionalities for puzzle play
 *
 * @param  {object} e event of elemet
 */
function startGame(e) {
  let uploadField = document.getElementsByClassName('upload')[0]
  setMatrix(uploadField.querySelector('select'))
  uploadImage(uploadField.querySelector('input[type=file]'))
  if (imageFile && puzzle.sizePuzzle) {
    playField.hidden = true;
    console.log('here')
    imgLoaded = loadImage();
    preImg = preloaderImg();
    gameField.appendChild(preImg)
    imgLoaded.then(img => {
      imgSlice = generateCutImages(img);
      preImg.remove();
      puzzleField.hidden = false;
      puzzleDisplay();
      thumbnailImage(img.src)
      puzzle.startTime((time)=>{
        timeDiv.innerText = `Time : ${time} s`
      },start)
      start = true;
    }).catch(err => {
      swal({
        title : err,
        icon : "warning",
        button : "Close",
        timer : 3000
      })
    })
  } else {
    swal({
      title : "No ha subido ninguna imagen",
      icon : "warning",
      button : "Close",
      timer : 3000
    })
  }
}

/**
 * gameAgain - Restart the game
 */
function gameAgain(){
  puzzle.restart()
  let miniature = document.getElementById('thumbnailImage')
  if (miniature) { miniature.remove() }
  start = false
  playField.hidden = false
  puzzleField.hidden = true
  cardsDisplayed = []
  timeDiv.innerText = `Time : ${puzzle.time} s`
  moveDiv.innerText = `# moves : ${puzzle.movements}`
}

playField.addEventListener('click', startGame, false);
