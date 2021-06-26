let stats = {
    playerScore: 0,
    compScore: 0,
    rounds: 0,
    counter: 0
};

const roundSelect = document.getElementById('roundSelect');
const gameText = document.getElementById('gameText');
const gameState = document.getElementById('gameState');

// function for getting random integer between two chosen integers.
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

function playGame (selection) {
    // decide winner
    let compChoice = getRandomInt(1, 4);
    // Computer = Rock
    if (compChoice == 1) {
        gameText.textContent = 'Computer Chose Rock!';
        document.getElementById('gameText').classList.remove('hide');
        if (selection == 'rock') {
            gameState.textContent = 'It\'s a Draw!';
            document.getElementById('gameState').classList.remove('hide');
        } else if (selection == 'paper') {
            gameState.textContent = 'Paper beats Rock, You Win!';
            document.getElementById('gameState').classList.remove('hide');
            stats.counter++;
            stats.playerScore += 1;
        } else if (selection == 'scissors') {
            gameState.textContent = 'Uh Oh, Rock beats Scissors, You Lose!';
            document.getElementById('gameState').classList.remove('hide');
            stats.counter++;
            stats.compScore += 1;
        } else {
            console.log("\n", "Something has gone wrong, please try again.");
            // keeping on console for now.
        }

        if (stats.rounds == stats.counter) {
            if (stats.playerScore == stats.compScore) {
                //change page contents
                console.log('Something has gone wrong, shouldn\'t be able to draw.');

            } else if (stats.playerScore > stats.compScore) {
                //change page contents
                document.getElementById('gameText').classList.add('hide');
                document.getElementById('roundSelect').classList.add('hide');
                // display scores
                gameState.textContent = 'Player Wins! \n Player Score: ' + stats.playerScore + '\n Computer Score: ' + stats.compScore;
                document.getElementById('gameState').classList.remove('hide');

            } else {
                //change page contents
                document.getElementById('gameText').classList.add('hide');
                document.getElementById('roundSelect').classList.add('hide');
                // display scores
                gameState.textContent = 'Computer Wins! \n Player Score: ' + stats.playerScore + '\n Computer Score: ' + stats.compScore;
                document.getElementById('gameState').classList.remove('hide');
            }
        }

    } else if (compChoice == 2) {
        gameText.textContent = 'Computer Chose Paper!';
        document.getElementById('gameText').classList.remove('hide');
        if (selection == 'rock') {
            gameState.textContent = 'Uh Oh, Paper beats Rock, You Lose!';
            document.getElementById('gameState').classList.remove('hide');
            stats.counter++;
            stats.compScore += 1;
        } else if (selection == 'paper') {
            gameState.textContent = 'It\'s a Draw!';
            document.getElementById('gameState').classList.remove('hide');
        } else if (selection == 'scissors') {
            gameState.textContent = 'Scissors beats Paper, You Win!';
            document.getElementById('gameState').classList.remove('hide');
            stats.counter++;
            stats.playerScore += 1;
        } else {
            console.log("\n", "Something has gone wrong, please try again.");
        }

        if (stats.rounds == stats.counter) {
            if (stats.playerScore == stats.compScore) {
                //change page contents
                console.log('Something has gone wrong, shouldn\'t be able to draw.');

            } else if (stats.playerScore > stats.compScore) {
                //change page contents
                document.getElementById('gameText').classList.add('hide');
                document.getElementById('roundSelect').classList.add('hide');
                // display scores
                gameState.textContent = 'Player Wins! \n Player Score: ' + stats.playerScore + '\n Computer Score: ' + stats.compScore;
                document.getElementById('gameState').classList.remove('hide');

            } else {
                //change page contents
                document.getElementById('gameText').classList.add('hide');
                document.getElementById('roundSelect').classList.add('hide');
                // display scores
                gameState.textContent = 'Computer Wins! \n Player Score: ' + stats.playerScore + '\n Computer Score: ' + stats.compScore;
                document.getElementById('gameState').classList.remove('hide');
            }
        }

    // Computer = Scissors    
    } else if (compChoice == 3) {
        gameText.textContent = 'Computer Chose Scissors!';
        document.getElementById('gameText').classList.remove('hide');
        if (selection == 'rock') {
            gameState.textContent = 'Rock beat Scissors, You Win!';
            document.getElementById('gameState').classList.remove('hide');
            stats.counter++;
            stats.playerScore += 1;
        } else if (selection == 'paper') {
            gameState.textContent = 'Uh Oh, Scissors beats Paper, You Lose!';
            document.getElementById('gameState').classList.remove('hide');
            stats.counter++;
            stats.compScore += 1;
        } else if (selection == 'scissors') {
            gameState.textContent = 'It\'s a Draw!';
            document.getElementById('gameState').classList.remove('hide');

        } else {
            console.log("\n", "Something has gone wrong, please try again.");
        }

        if (stats.rounds == stats.counter) {
            if (stats.playerScore == stats.compScore) {
                //change page contents
                console.log('Something has gone wrong, shouldn\'t be able to draw.');

            } else if (stats.playerScore > stats.compScore) {
                //change page contents
                document.getElementById('gameText').classList.add('hide');
                document.getElementById('roundSelect').classList.add('hide');
                // display scores
                gameState.textContent = 'Player Wins! \n Player Score: ' + stats.playerScore + '\n Computer Score: ' + stats.compScore;
                document.getElementById('gameState').classList.remove('hide');

            } else {
                //change page contents
                document.getElementById('gameText').classList.add('hide');
                document.getElementById('roundSelect').classList.add('hide');
                // display scores
                gameState.textContent = 'Computer Wins! \n Player Score: ' + stats.playerScore + '\n Computer Score: ' + stats.compScore;
                document.getElementById('gameState').classList.remove('hide');
            }
        }
    } else {
        console.log('Uh oh, something has gone wrong.')
    }
}

window.addEventListener('click', function (e) {
    if (e.path[0].id == "btn-start") { // function(btn-start)
        document.getElementById('btn-start').classList.add('hide');
        document.getElementById('btn-about').classList.add('hide');
        document.getElementById('btn-single').classList.remove('hide');
        document.getElementById('btn-triple').classList.remove('hide');
        document.getElementById('btn-quintuple').classList.remove('hide');
        document.getElementById('btn-back').classList.remove('hide');

    } else if (e.path[0].id == "btn-about") {
        document.getElementById('btn-about').classList.add('hide');
        document.getElementById('btn-start').classList.add('hide');
        document.getElementById('btn-back').classList.remove('hide');
        document.getElementById('gameText').classList.remove('hide');
        gameText.textContent = 'This is the about text.';

    } else if (e.path[0].id == "btn-single") {
        document.getElementById('btn-single').classList.add('hide');
        document.getElementById('btn-triple').classList.add('hide');
        document.getElementById('btn-quintuple').classList.add('hide');
        document.getElementById('btn-rock').classList.remove('hide');
        document.getElementById('btn-paper').classList.remove('hide');
        document.getElementById('btn-scissors').classList.remove('hide');
        roundSelect.textContent = "Single Round Game";
        document.getElementById('roundSelect').classList.remove('hide');
        document.getElementById('roundSelect').classList.add('roundSelect');
        stats.rounds = 1;

    } else if (e.path[0].id == "btn-triple") {
        document.getElementById('btn-single').classList.add('hide');
        document.getElementById('btn-triple').classList.add('hide');
        document.getElementById('btn-quintuple').classList.add('hide');
        document.getElementById('btn-rock').classList.remove('hide');
        document.getElementById('btn-paper').classList.remove('hide');
        document.getElementById('btn-scissors').classList.remove('hide');
        roundSelect.textContent = "Three Round Game";
        document.getElementById('roundSelect').classList.remove('hide');
        document.getElementById('roundSelect').classList.add('roundSelect');
        stats.rounds = 3;

    } else if (e.path[0].id == "btn-quintuple") {
        document.getElementById('btn-single').classList.add('hide');
        document.getElementById('btn-triple').classList.add('hide');
        document.getElementById('btn-quintuple').classList.add('hide');
        document.getElementById('btn-rock').classList.remove('hide');
        document.getElementById('btn-paper').classList.remove('hide');
        document.getElementById('btn-scissors').classList.remove('hide');
        roundSelect.textContent = "Five Round Game";
        document.getElementById('roundSelect').classList.remove('hide');
        document.getElementById('roundSelect').classList.add('roundSelect');
        stats.rounds = 5;

    } else if (e.path[0].id == "btn-rock") {
        playGame('rock');

    } else if (e.path[0].id == "btn-paper") {
        playGame('paper');

    } else if (e.path[0].id == "btn-scissors") {
        playGame('scissors');


    } else if (e.path[0].id == "btn-back") {
        document.getElementById('btn-about').classList.remove('hide');
        document.getElementById('btn-start').classList.remove('hide');
        document.getElementById('btn-single').classList.add('hide');
        document.getElementById('btn-triple').classList.add('hide');
        document.getElementById('btn-quintuple').classList.add('hide');
        document.getElementById('btn-rock').classList.add('hide');
        document.getElementById('btn-paper').classList.add('hide');
        document.getElementById('btn-scissors').classList.add('hide');
        document.getElementById('btn-back').classList.add('hide');
        document.getElementById('gameText').classList.add('hide');
        document.getElementById('roundSelect').classList.add('hide');
        document.getElementById('gameState').classList.add('hide');
        stats.counter = 0;
        stats.playerScore = 0;
        stats.compScore = 0;
        
    } else {
        // something has gone wrong.
    }

})

// Notes ===
// event is triggering once, how to make sure the eventListener can continue to be called.
// Solution: add the event listener for clicks to the window object instead of document.

//improvements: create an array of the button ids to streamline button manipulation.
// - could make classes for the button sets and this would make the code look nicer.

// 6.25.21 
// - move location of counter++ so there is not iteration when a draw occurs.
// - add text nodes for adding <p> tags; convert console.log's to text on the webpage.
// 6.26.21
// - I could make a function that calls to check the game state and changes the text depending on what the game
// state is. This could also be used for when the buttons are pressed to clean up the code.
// basically just pass off all of the work to the functions so that the code looks much cleaner.

