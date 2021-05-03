console.log('here');

let player1
let player2
let xBtn = document.querySelector('.xbtn')
xBtn.addEventListener('click', function() {
  player1 = 'X'
  player2 = 'O'
  console.log(player2)
})

let oBtn = document.querySelector('.obtn')
oBtn.addEventListener('click', function() {
  player1 = 'O'
  player2 = 'X'
  console.log(player1)
})


