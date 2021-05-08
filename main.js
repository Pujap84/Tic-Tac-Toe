console.log('here');
let player1
let player2
let currentPlayer
let box1 = document.querySelector('#box1')
let box2 = document.querySelector('#box2')
let box3 = document.querySelector('#box3')
let box4 = document.querySelector('#box4')
let box5 = document.querySelector('#box5')
let box6 = document.querySelector('#box6')
let box7 = document.querySelector('#box7')
let box8 = document.querySelector('#box8')
let box9 = document.querySelector('#box9')
let player1Name = document.querySelector('#player1Name')
let player2Name = document.querySelector('#player2Name')

let xBtn = document.querySelector('.xbtn')
xBtn.addEventListener('click', function() {
  player1 = 'X'
  player2 = 'O'
  currentPlayer = player1
  document.querySelector('#message').textContent = player1Name.value + ' selected ' + player1 + ' and ' + player2Name.value + ' selected ' + player2
  console.log(player1)
})
let oBtn = document.querySelector('.obtn')
oBtn.addEventListener('click', function() {
  player1 = 'O'
  player2 = 'X'
  currentPlayer = player1
  document.querySelector('#message').textContent = player1Name.value + ' selected ' + player1 + ' and ' + player2Name.value + ' selected ' + player2
  console.log(player1)
})


const allDivs = document.querySelectorAll('.gameBoard div')
for (let i = 0; i < allDivs.length; i++)
  allDivs[i].addEventListener('click', function (event) {
    if (event.target.textContent === 'X' || event.target.textContent === 'O') {
    alert ("Nice Try! Find an empty box!")
    } else {
      if (currentPlayer === 'X') { // if current player = X
        currentPlayer = 'O' // set Current player to O
        event.target.textContent = 'X'  // change value in the box to X
        event.target.style.color = 'rgb(232, 43, 178)'
      } else { // if current player = O
        currentPlayer = 'X' //set current player to X
        event.target.textContent = 'O' // change value in the box to O
        event.target.style.color = 'greenYellow'
      }
    }
    let row1Boxes = [box1, box2, box3]
    let allTheSameRow1 = allSame(row1Boxes, 'X');
    allTheSameRow1 = allSame(row1Boxes, 'O')

    let row2Boxes = [box4, box5, box6]
    let allTheSameRow2 = allSame(row2Boxes, 'X');
    allTheSameRow2 = allSame(row2Boxes, 'O')

    let row3Boxes = [box7, box8, box9]
    let allTheSameRow3 = allSame(row3Boxes, 'X');
    allTheSameRow3 = allSame(row3Boxes, 'O')

    let column1Boxes = [box1, box4, box7]
    let allTheSameColumn1 = allSame(column1Boxes, 'X');
    allTheSameColumn1 = allSame(column1Boxes, 'O')

    let column2Boxes = [box2, box5, box8]
    let allTheSameColumn2 = allSame(column2Boxes, 'X');
    allTheSameColumn2 = allSame(column2Boxes, 'O')
    
    let column3Boxes = [box3, box6, box9]
    let allTheSameColumn3 = allSame(column3Boxes, 'X');
    allTheSameColumn3 = allSame(column3Boxes, 'O')

    let diagonal1Boxes = [box1, box5, box9]
    let allTheSameDiagonal1 = allSame(diagonal1Boxes, 'X');
    allTheSameDiagonal1 = allSame(diagonal1Boxes, 'O')

    let diagonal2Boxes = [box3, box5, box7]
    let allTheSameDiagonal2 = allSame(diagonal2Boxes, 'X');
    allTheSameDiagonal2 = allSame(diagonal2Boxes, 'O')

    let boxesAreFull = document.querySelector('.gameBoard').textContent;
    boxesAreFull = boxesAreFull.replaceAll(" ", "").replaceAll("\n","");
    console.log('***DEBUG : ', boxesAreFull)
    if( boxesAreFull.length == 9){
        boxesAreFull = true;
    } else {
        boxesAreFull = false;
    }
    if (allTheSameRow1 === false && allTheSameRow2 === false && allTheSameRow3 === false && allTheSameColumn1 === false && allTheSameColumn2 === false && allTheSameColumn3 === false && allTheSameDiagonal1 === false && allTheSameDiagonal2 === false && boxesAreFull) {
      alert('Its a draw! Restart the game');
      document.querySelector('.gameWinner').textContent = "It's a Draw!";
      document.querySelector('.gameWinner').style.color = "greenYellow";
      document.querySelector('.gameWinner').style.fontSize = "40px";
      document.querySelector('.gameWinner').style.animateName = "blinking";
      document.querySelector('.gameWinner').style.animateDuration = "3s";
    }
})

function allSame(threeBoxes, playerValue){
  let allTheSame = true;
  for (let i = 0; i < threeBoxes.length; i++) {
    if (threeBoxes[i].textContent !== playerValue) {
      allTheSame = false;
      break;
    }
  }
  if (allTheSame == true) {
    alert(playerValue + ' Wins! Well Done');
    alert('Restart game');
    document.querySelector('.gameWinner').textContent = 'The Winner is ' + playerValue + '!';
    document.querySelector('.gameWinner').style.color = "greenYellow";
    document.querySelector('.gameWinner').style.fontSize = "40px";
    document.querySelector('.gameWinner').style.animation = "blinking 4s infinite linearx ";
    document.querySelector('#box1').textContent = '';
    document.querySelector('#box2').textContent = playerValue;
    document.querySelector('#box3').textContent = '';
    document.querySelector('#box4').textContent = 'W';
    document.querySelector('#box5').textContent = 'O';
    document.querySelector('#box6').textContent = 'N';
    document.querySelector('#box7').textContent = '';
    document.querySelector('#box8').textContent = '';
    document.querySelector('#box9').textContent = '';
  }
  return allTheSame;
}


let restartBtn = document.querySelector('.restartBtn')
restartBtn.addEventListener('click', function(){
  document.querySelector('#player1Name').value = '';
  document.querySelector('#player2Name').value = '';
  document.querySelector('#message').textContent = 'Player 1 Choose your Value';
  document.querySelector('#box1').textContent = '';
  document.querySelector('#box2').textContent = '';
  document.querySelector('#box3').textContent = '';
  document.querySelector('#box4').textContent = '';
  document.querySelector('#box5').textContent = '';
  document.querySelector('#box6').textContent = '';
  document.querySelector('#box7').textContent = '';
  document.querySelector('#box8').textContent = '';
  document.querySelector('#box9').textContent = '';
  document.querySelector('.gameWinner').textContent = 'The Winner is...';
  document.querySelector('.gameWinner').style.color = 'rgb(232, 43, 178)';
  document.querySelector('.gameWinner').style.fontSize = '20px';
})

