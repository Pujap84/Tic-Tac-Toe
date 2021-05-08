# ticatactoe
tictactoe project
Here is the game url https://pujap84.github.io/Tic-Tac-Toe/
Click on it and have a play!

# How was it built
- HTML
- CSS
- JavaScript

## How to Play
Pseudocode
1. Heading // TIC TAC TOE//
2. Set up the board = 3 X 3 grid
3. Input Player 1 and Player 2 names
4. Have a way for Player 1 and Player 2 to click to choose their value - X or O
5. Begin game
  // Player 1 to add the chosen token (X or O) to an empty space
  // Swap over to Player 2 after input from Player 1
  // Player 2 to enter value in any empty space
  // continue this until 9 boxes filled

6. Check if Player 1 or Player 2 won
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
7. If no values are teh same in any rows or diagonals, then declare/alert draw and end the game
8. Offer to start another game - 'Yes' or 'No'
9. If 'Yes' then begin from Step 1. again      

# Technologies Used
I have used the Blinking animation with its Keyframe at the start of the game

# Unresolved Problems

- Unable to remove eventListener to disable clicks after the win
- Disabling X and O token buttons after the game has started (P.S. helps player cheat)
- not adapted for mobiles
- Unable to link the player names to 'X' and 'O'
- Unable to display player turns
- blinking animation not working in DOM


# Wishlist
- To figure out how to use a counter and tally scores(Visual score tally)
- To make it a one player game versing the computer
- counter options (probably using images?- pacman maybe? mario? several choices for players to choose from)
- strike through all the way with every win!