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



// create players and assign symbols
// ***
// const player1 = playerMaker('Rob', 'X');
// const player2 = playerMaker('Glacier', 'O');

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
    const makePlayerSelectForm = (location, formId, inputOneId, inputTwoId, inputType) => {
        const formElement = document.createElement('form');
        formElement.setAttribute('id', `${formId}`);
        location.appendChild(formElement);

        const formLabelOne = document.createElement('label');
        formLabelOne.setAttribute('for', 'playerOneName');
        formLabelOne.innerHTML = 'Player 1: '
        const formInput1 = document.createElement('input');
        formInput1.setAttribute('type', `${inputType}`);
        formInput1.setAttribute('id', `${inputOneId}`);

        const formLabelTwo = document.createElement('label');
        formLabelTwo.setAttribute('for', 'playerTwoName');
        formLabelTwo.innerHTML = 'Player 2: '
        const formInput2 = document.createElement('input');
        formInput2.setAttribute('type', `${inputType}`);
        formInput2.setAttribute('id', `${inputTwoId}`);

        const formSubmitBtn = document.createElement('button');
        formSubmitBtn.setAttribute('id', 'formSubmitBtn');
        formSubmitBtn.setAttribute('type', 'button'); // set button type to stop page refresh? look into this
        formSubmitBtn.innerHTML = 'Ready!';
        formSubmitBtn.addEventListener('click', function () {
            playerNameAssign();
            // create player objects using strings in form fields
            // how to reference each player...
        });
        
        // trying out an iterative approach to appending all the elements for the form.
        const formArray = [];
        formArray.push(formLabelOne);
        formArray.push(formInput1);
        formArray.push(formLabelTwo);
        formArray.push(formInput2);
        formArray.push(formSubmitBtn);

        formArray.forEach(item => formElement.appendChild(item));

    };
    // INTERNAL MODULE FUNCTIONS

    // function for player name submit button
    const playerNameAssign = () => {
        const playerOneName = document.getElementById('p1Name').value;
        const playerTwoName = document.getElementById('p2Name').value;
        const player1 = playerMaker(playerOneName, 'X');
        const player2 = playerMaker(playerTwoName, 'O');
    }

    return { 
        add,
        insert,
        makePlayerSelectForm
    }
}) ();

// NEXT: each time a new page setup is created, create a div container, so that removal only requires a single 
//  div to be removed when possible.
// --Currently creating the form for two player information.
// -- hardcoding the symbol for each player but symbol selection could be a feature I add in the future.

// THOUGHT:
// for the array changing, I was thinking it would be a good idea to have a function that iterates over the array and 
// gives an output of somekind for each cell, checking each one to then pass on the data so a new one can be created and 
// the final result of the game can be determined.

// FUNCTIONS ---- NOTE: will have to reorganize these as I think I'm going to have ALOT of functions.
// =========

// startPage
// Generate front page for Tic Tac Toe game

// NOTE: I think I'm going to keep all of the processes in functions


const playerMaker = (name, symbol) => {
    return { name, symbol };
}

const playTicTacToe = () => { // [1]

    const startPage = () => {
        htmlModule.add(document.body, 'div', 'startPageDiv', '');
        const startPageDiv = document.getElementById('startPageDiv');
        htmlModule.add(startPageDiv, 'button', 'start-btn', 'start');
        // IDEA: I would like to add naughts and crosses animation with them all moving in the background.
        const startButton = document.getElementById('start-btn');
        startButton.onclick =  function() { 
            playerSelectPage(startPageDiv); 
        };
    };
    // remove div each time or remove all contents of div?
    // going to start with removing the div and creating a new one

    const playerSelectPage = (rmDiv) => {
        // remove start button
        rmDiv.remove();
        // recreate div
        htmlModule.add(document.body, 'div', 'playerSelectDiv', '');
        const playerSelectDiv = document.getElementById('playerSelectDiv');
        // add player options to new div
        htmlModule.add(playerSelectDiv, 'button', 'onePlayerBtn', '1 Player');
        htmlModule.add(playerSelectDiv, 'button', 'twoPlayerBtn', '2 Player');

        const onePlayerBtn = document.getElementById('onePlayerBtn');
        onePlayerBtn.onclick = function() {
            onePlayerGame();
        };
        const twoPlayerBtn = document.getElementById('twoPlayerBtn');
        twoPlayerBtn.onclick = function() {
            twoPlayerGame(playerSelectDiv);
        };

    }

    const onePlayerGame = () => {
        console.log('one player game selected');
    }

    const twoPlayerGame = (rmDiv) => {
        console.log('two player game selected');
        rmDiv.remove();
        // gather names of player 1 and 2
        htmlModule.add(document.body, 'div', 'playerEntryDiv', '');
        const playerEntryDiv = document.getElementById('playerEntryDiv');
        htmlModule.makePlayerSelectForm(playerEntryDiv, 'playerSelectForm', 'p1Name', 'p2Name', 'text');
    }



    startPage();
}; // [1]

playTicTacToe();

// Features to add:
// -- symbol select at player select screen
// -- single player game against the AI
// -- Themes for the game; this would be a good way to practice my CSS styling 


