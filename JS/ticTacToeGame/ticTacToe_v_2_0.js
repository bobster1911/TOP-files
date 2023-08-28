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
        //end
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

    // creates and adds element 
    const add = (location, type, idName, contents) => {
        const element = document.createElement(`${type}`); // string literal to parse the variable
        element.setAttribute('id', `${idName}`);
        element.innerHTML = `${contents}`;
        location.appendChild(element);
    }
    // creates and inserts element to specific location for when multiple elements in a node
    const insert = (parentNode, reference, type, idName) => {
        const element = document.createElement(`${type}`);
        element.setAttribute('id', `${idName}`);
        parentNode.insertBefore(element, reference);
    }
    // creates custom form
    const makeForm = (location, idName, option1, option2) => {
        htmlModule.create(location, 'form', id);
        const setupForm = document.getElementById(id);
        // input field and label
        
    }

    return { 
        add,
        insert,
        makeForm
    }
}) ();

// NEXT: draft how I want the setup form to look and build the custom form function.

// THOUGHT:
// for the array changing, I was thinking it would be a good idea to have a function that iterates over the array and 
// gives an output of somekind for each cell, checking each one to then pass on the data so a new one can be created and 
// the final result of the game can be determined.

// FUNCTIONS ---- NOTE: will have to reorganize these as I think I'm going to have ALOT of functions.
// =========

// startPage
// Generate front page for Tic Tac Toe game

// NOTE: I think I'm going to keep all of the processes in functions

const playTicTacToe = () => { // [1]

    htmlModule.add(document.body, 'button', 'start-btn', 'start');
    // IDEA: I would like to add naughts and crosses animation with them all moving in the background.

    const playerSelectPage = () => {
        
    }

    const startButton = getElementById('start-btn');
    startButton.setAttribute('onclick', ''); // create function for this


}; // [1]








