# ticatactoe
tictactoe project


## How to Play

1. Click on the box
2. // TIC TAC TOE//
Pseudocode

// 1. Set up the board = 3 X 3 grid
// 2. Input Player 1 and Player 2 names
// 3. Have a way for Player 1 and Player 2 to click to add their X, or O
// 4. Begin game
  // Player 1 to add the chosen token (X or O) to an empty space
  // Swap over to Player 2 after input from Player 1
  // Player 2 to enter value in any empty space
  // continue this until 9 boxes filled

// 5. Check if Player 1 or Player 2 won
  // Have they got 3 in a row somewhere?
  // -- Have they got 3 in a row on row 1?
  // -- // Get all values in row 1
        //  -- Add a class to each element in row 1
        //  -- Use querySelectorAll with the class
  // -- // Check if all values are the same
        // If all values are same end the game and declare/alert the winner
        // If all values are not the same continue the game
  // -- Have they got 3 in a row on row 2?
  // -- // Get all values in row 2
        //  -- Add a class to each element in row 2
        //  -- Use querySelectorAll with the class
  // -- // Check if all values are the same
        // If all values are same end the game and declare/alert the winner
        // If all values are not the same continue the game
  // -- Have they got 3 in a row on row 3?      
  // -- // Get all values in row 3
        //  -- Add a class to each element in row 3
        //  -- Use querySelectorAll with the class
  // -- // Check if all values are the same
        // If all values are same end the game and declare/alert the winner
        // If all values are not the same continue the game      
  // -- Have they got 3 in a row on in diagonal 1
  // -- // Get all values in diagnol 1
        //  -- Use querySelectorAll with the class
  // -- // Check if all values are the same
        // If all values are same end the game and declare/alert the winner
        // If all values are not the same continue the game
  // -- Have they got 3 in a row on in diagonal 2
  // -- // Get all values in diagnol 2
        //  -- Use querySelectorAll with the class
  // -- // Check if all values are the same
        // If all values are same end the game and declare/alert the winner
        // If all values are not the same continue the game
// 6. If no values are teh same in any rows or diagonals, then declare/alert draw and end the game
// 7. Offer to start another game - 'Yes' or 'No'
// 8. If 'Yes' then begin from Step 1. again      


/* console.log('here');

let player1
let player2
let currentPlayer
let xBtn = document.querySelector('.xbtn')
xBtn.addEventListener('click', function() {
  player1 = 'X'
  player2 = 'O'
  currentPlayer = 'X'
  console.log(player1)
})

let oBtn = document.querySelector('.obtn')
oBtn.addEventListener('click', function() {
  player1 = 'O'
  player2 = 'X'
  currentPlayer = 'O'
  console.log(player1)
})

const allDivs = document.querySelectorAll('.gameBoard div')
console.log(allDivs)
allDivs[0].addEventListener('click', function(){
  if (allDivs[0].textContent === 'X' || allDivs[0].textContent === 'O') {
    alert ("Nice Try! Find an empty box!")
  } else {
    if (currentPlayer === 'X') { // if current player = X
      currentPlayer = 'O' // set Current player to O
      allDivs[0].textContent = 'X'  // change value in the box to X
    } else { // if current player = O
      currentPlayer = 'X' //set current player to X
      allDivs[0].textContent = 'O' // change value in the box to O
    }
  }
}) 

allDivs[1].addEventListener('click', function(){
  if (allDivs[1].textContent === 'X' || allDivs[1].textContent === 'O') {
    alert ("Nice Try! Find an empty box!")
  } else {
    if (currentPlayer === 'X') { // if current player = X
      currentPlayer = 'O' // set Current player to O
      allDivs[1].textContent = 'X'  // change value in the box to X
    } else { // if current player = O
      currentPlayer = 'X' //set current player to X
      allDivs[1].textContent = 'O' // change value in the box to O
    }
  }
})
allDivs[2].addEventListener('click', function(){
  if (allDivs[2].textContent === 'X' || allDivs[2].textContent === 'O') {
    alert ("Nice Try! Find an empty box!")
  } else {
    if (currentPlayer === 'X') { // if current player = X
      currentPlayer = 'O' // set Current player to O
      allDivs[2].textContent = 'X'  // change value in the box to X
    } else { // if current player = O
      currentPlayer = 'X' //set current player to X
      allDivs[2].textContent = 'O' // change value in the box to O
    }
  }
})
allDivs[3].addEventListener('click', function(){
  if (allDivs[3].textContent === 'X' || allDivs[3].textContent === 'O') {
    alert ("Nice Try! Find an empty box!")
  } else {
    if (currentPlayer === 'X') { // if current player = X
      currentPlayer = 'O' // set Current player to O
      allDivs[3].textContent = 'X'  // change value in the box to X
    } else { // if current player = O
      currentPlayer = 'X' //set current player to X
      allDivs[3].textContent = 'O' // change value in the box to O
    }
  }
})
allDivs[4].addEventListener('click', function(){
  if (allDivs[4].textContent === 'X' || allDivs[4].textContent === 'O') {
    alert ("Nice Try! Find an empty box!")
  } else {
    if (currentPlayer === 'X') { // if current player = X
      currentPlayer = 'O' // set Current player to O
      allDivs[4].textContent = 'X'  // change value in the box to X
    } else { // if current player = O
      currentPlayer = 'X' //set current player to X
      allDivs[4].textContent = 'O' // change value in the box to O
    }
  }
})
allDivs[5].addEventListener('click', function(){
  if (allDivs[5].textContent === 'X' || allDivs[5].textContent === 'O') {
    alert ("Nice Try! Find an empty box!")
  } else {
    if (currentPlayer === 'X') { // if current player = X
      currentPlayer = 'O' // set Current player to O
      allDivs[5].textContent = 'X'  // change value in the box to X
    } else { // if current player = O
      currentPlayer = 'X' //set current player to X
      allDivs[5].textContent = 'O' // change value in the box to O
    }
  }
})
allDivs[6].addEventListener('click', function(){
  if (allDivs[6].textContent === 'X' || allDivs[6].textContent === 'O') {
    alert ("Nice Try! Find an empty box!")
  } else {
    if (currentPlayer === 'X') { // if current player = X
      currentPlayer = 'O' // set Current player to O
      allDivs[6].textContent = 'X'  // change value in the box to X
    } else { // if current player = O
      currentPlayer = 'X' //set current player to X
      allDivs[6].textContent = 'O' // change value in the box to O
    }
  }
})
allDivs[7].addEventListener('click', function(){
  if (allDivs[7].textContent === 'X' || allDivs[7].textContent === 'O') {
    alert ("Nice Try! Find an empty box!")
  } else {
    if (currentPlayer === 'X') { // if current player = X
      currentPlayer = 'O' // set Current player to O
      allDivs[7].textContent = 'X'  // change value in the box to X
    } else { // if current player = O
      currentPlayer = 'X' //set current player to X
      allDivs[7].textContent = 'O' // change value in the box to O
    }
  }
})
allDivs[8].addEventListener('click', function(){
  if (allDivs[8].textContent === 'X' || allDivs[8].textContent === 'O') {
    alert ("Nice Try! Find an empty box!")
  } else {
    if (currentPlayer === 'X') { // if current player = X
      currentPlayer = 'O' // set Current player to O
      allDivs[8].textContent = 'X'  // change value in the box to X
    } else { // if current player = O
      currentPlayer = 'X' //set current player to X
      allDivs[8].textContent = 'O' // change value in the box to O
    }
  }
})  */