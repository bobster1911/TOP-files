// Author: Rob Clarke
// Project: Tic Tac Toe Game
// Description: JS-based TicTacToe game that plays in the browser.
// ===============================================================

// TIPS: 
// =====
// when need ONE of something like gameBoard or displayController, use Module
// when multiples of something is needed, like players, use factory functions

// Objects:
// ========
// players -factory function
// gameBoard - module
// displayController - module

const playerMaker = (name, symbol) => {
    return { name, symbol };
}

// create players and assign symbols
const player1 = playerMaker('Rob', 'X');
const player2 = playerMaker('Glacier', 'O');

// displayController module
const displayController = ( () => {

    const startMenu = () => {
        // display main menu
    };

    const gameSetup = () => {
      // player names and who goes first  
    };

    const display = () => {
        // display the current logic from gameBoard
    };

    const end = () => {
        // end screen displaying final result and option to play again or quit to main menu
    };

    return {
        startMenu,
        gameSetup,
        display,
        end
    };
}) ();

// gameBoard module

const gameBoard = ( () => {

    const generate = () => {
        // generate the blank array for gameboard
    };

    const update = () => {
        // update the gameboard array based on last player's move
        // alternate who's turn it is
    };

    const check = () => {
        // check for empty cells
        // check for 3-in-a-row conditions
        // check for draw conditions (all cells used but no 3-in-a-row)
    }

    return {
        generate,
        update,
        check,
        end
    };
}) ();

// ===========
// Modules ---

// Name: htmlModule
// Functions: create element, insert, makeForm
// create: creates an html element object
// insert: inserts html object
// makeForm: creates a form
// Use: create the html element object and then append it 
// Example: 


const htmlModule = (() => {



    return { 
        create,
        insert,
        makeForm
    }
}) ();

// NEXT: build out htmlModule to facilitate building the elements for each stage of the game and to make the code
//          more succinct and less wordy, yay.

