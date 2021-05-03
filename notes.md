// TIC TAC TOE//
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
