// NOTES ===

// print final scores at the end of the iterations.
    
// function to call the menu screen
// - this can be used when user wants to change game mode.

// ===

// Instructions: 

// Menu - start or exit

// Menu - select number of rounds/game type

// Play selected number of rounds and return player and computer scores, then winner.

// prompt - would you like to play again?
// play another game or return to the menu

// === Code ===

menuCall();

// === Here Be Functions ===

function menuCall() {
   console.log("1 - Start", "\n", "2 - Exit", "\n");

   let selection = prompt("Enter Selection: ");

if ((selection != 1) && (selection != 2)) {
    console.log("Please enter one of the selections.");
} else if (selection == 1) {
  // single, triple or quintuple game?
  let numRounds = prompt("How many rounds would you like to play? (1, 3 or 5): ");

    // single game
    if (numRounds == 1) {
      playGame(1);
    }
    // triple game
    else if (numRounds == 3) {
      playGame(3);
    }
    // quintuple game
    else if (numRounds == 5) {
      playGame(5);
    }
    // wrong entry
    else {
      console.log("You must enter one of the valid options.");
    }
}

else if (selection == 2) {
    console.log("Thanks and have a nice day :-)");
}

} // end of menuCall function



// function for getting random integer between two chosen integers.
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
} // end getRandomeInt function



function playGame(numRounds) {
    // if statements to set the rounds variables to be used in iterations.

    let rounds = numRounds;
    let playerScore = 0;
    let computerScore = 0;

    for (let i = rounds; i > 0; i--) {

      // computer choice
      let compChoice = getRandomInt(1, 3);

      console.log("1 -- Rock", "\n", "2 -- Paper", "\n", "3 -- Scissors");
      let selection = prompt("Enter selection: ");

      if (selection == 1) {
          console.log("You have selected: Rock");
      } else if (selection == 2) {
          console.log("You have selected: Paper");
      } else if (selection == 3) {
          console.log("You have selected: Scissors");
      } else {
          console.log("Something has gone wrong, please select a valid option.");
      }

      // Computer = Rock
      if (compChoice == 1) {
          console.log("\n", "Computer chose Rock!");
          if (selection == 1) {
            console.log("\n", "It's a Draw!");
            i++;
          } else if (selection == 2) {
              console.log("\n", "Paper beats Rock, You Win!");
              playerScore += 1;
          } else if (selection == 3) {
              console.log("\n", "Uh Oh, Rock beats Scissors, You Lose!");
              computerScore += 1;
          } else {
              console.log("\n", "Something has gone wrong, please try again.");
          }

      // Computer = Paper
      } else if (compChoice == 2) {
          console.log("\n", "Computer chose Paper!");
          if (selection == 1) {
              console.log("\n", "Uh Oh, Paper beats Rock, You Lose!");
              computerScore += 1;
          } else if (selection == 2) {
              console.log("\n", "It's a Draw!");
              i++;
          } else if (selection == 3) {
              console.log("\n", "Scissors beats Paper, You Win!");
              playerScore += 1;
          } else {
              console.log("\n", "Something has gone wrong, please try again.");
          }
      
      // Computer = Scissors
      } else if (compChoice == 3) {
          console.log("\n", "Computer chose Scissors!");
          if (selection == 1) {
              console.log("\n", "Rock beat Scissors, You Win!");
              playerScore += 1;
        } else if (selection == 2) {
            console.log("\n", "Uh Oh, Scissors beats Paper, You Lose!");
            computerScore += 1;
        } else if (selection == 3) {
            console.log("\n", "It's a Draw!");
            i++;
        } else {
            console.log("\n", "Something has gone wrong, please try again.");
        }

    } else {
        console.log("\n", "Please select a valid option.");
        i++;
    }
      }
      console.log("Player Score: ", playerScore, "\n", "Computer Score: ", computerScore);

      if (playerScore > computerScore) {
        console.log("Congratulations, You Win!");
      } else {
        console.log("Wah wah wahhhh, You Lose :-(");
      }

} // end playGame function