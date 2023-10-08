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

// ==== GLOBAL functions ====

// create players and assign symbols
// ***

const playerMaker = (name, symbol) => {
    return { name, symbol };
};

// ==== * ====

// displayController module

const displayController = ( () => {

// Pages

    const startPage = () => {
        htmlModule.add(document.body, 'div', 'startPageDiv', '');
        const startPageDiv = document.getElementById('startPageDiv');
        htmlModule.add(startPageDiv, 'button', 'start-btn', 'start');
        // IDEA: I would like to add naughts and crosses animation with them all moving in the background.
        const startButton = document.getElementById('start-btn');

        startPageDiv.setAttribute('class', 'mainDiv');
        startButton.setAttribute('class', 'game-btns');

        startButton.onclick =  function() { 
            playerSelectPage(startPageDiv); 
        };
    };

    const playerSelectPage = (rmDiv) => {
        // remove start button
        rmDiv.remove();
        // recreate div
        htmlModule.add(document.body, 'div', 'playerSelectDiv', '');
        const playerSelectDiv = document.getElementById('playerSelectDiv');
        playerSelectDiv.setAttribute('class', 'mainDiv');
        // add player options to new div
        htmlModule.add(playerSelectDiv, 'button', 'onePlayerBtn', '1 Player');
        htmlModule.add(playerSelectDiv, 'button', 'twoPlayerBtn', '2 Player');

        const onePlayerBtn = document.getElementById('onePlayerBtn');
        onePlayerBtn.onclick = () => {
            onePlayerGame();
        };
        const twoPlayerBtn = document.getElementById('twoPlayerBtn');
        
        twoPlayerBtn.onclick = () => {
            console.log('test');
            twoPlayerGame(playerSelectDiv);
        };

        onePlayerBtn.setAttribute('class', 'game-btns');
        twoPlayerBtn.setAttribute('class', 'game-btns');
    };

    const onePlayerGame = () => {
        console.log('one player game selected');
    }

    const twoPlayerGame = (rmDiv) => { // NOTE: maybe didn't need to pass the rmDiv - check this
        console.log('two player game selected');
        rmDiv.remove();
        // gather names of player 1 and 2
        htmlModule.add(document.body, 'div', 'playerEntryDiv', '');
        const playerEntryDiv = document.getElementById('playerEntryDiv');
        playerEntryDiv.setAttribute('class', 'mainDiv');
        htmlModule.makePlayerSelectForm(playerEntryDiv, 'playerSelectForm', 'p1Name', 'p2Name', 'text');
    }

    const display = () => {
        // display the current logic from gameBoard
    };

    const end = () => {
        // end screen displaying final result and option to play again or quit to main menu
    };

    return {
        startPage,
        playerSelectPage,
        display,
        end
    };
}) ();

// gameBoard module

const gameBoard = ( () => {

    
    
    const generate = (p1, p2) => {
        console.log(p1, p2);
        // remove contents of previous div
        playerEntryDiv.remove();
        // generate the blank array for gameboard
        htmlModule.add(document.body, 'div', 'gameBoardDiv', '');
        // create blank array
        const blankArray = createArray(9);
        // create div elements from blank array
        const blankArrayDivs = blankArray.map(createDivElement);
        blankArrayDivs.forEach((divElement, index) => {
            // create id for element
            divElement.setAttribute('id', `gridDiv${index+1}`);
            divElement.setAttribute('class', 'gridDiv');
            // onclick function
            divElement.addEventListener('click', () => {
                playerMove(event, currentPlayerSymbol);
            })
            // might want to configure class for these.. will see
            gameBoardDiv.appendChild(divElement);
        });

    };

    const update = () => {
        // update the gameboard array based on last player's move

    };

    const check = () => {
        // check for empty cells
        // check for 3-in-a-row conditions
        // check for draw conditions (all cells used but no 3-in-a-row)
    }

    // Internal functions
    // ===

    // function to create div element for each item in array
    const createDivElement = (content) => {
        const divElement = document.createElement('div');
        divElement.textContent = content;
        return divElement;
    }

    let currentPlayerSymbol = 'X';

    const playerMove = (event, symbol) => {
        event.target.innerHTML = symbol;
        // function to update array logic
        // function to check array
        // change player symbol
        currentPlayerSymbol = changePlayer(currentPlayerSymbol);
    }

    const changePlayer = (currentSymbol) => {
        // "If currentSymbol is equal to 'X', return 'O'; otherwise, return 'X'."
        return currentSymbol === 'X' ? 'O' : 'X';
    }

    const updateArray = (x) => {
        
    }

    return {
        generate,
        update,
        check,
        //end
    };
}) ();

// ====
// Name: htmlModule
// Description: functions for creating html content for the displayController module
// Functions: create element, insert, makePlayerSelectForm
// create: creates an html element object
// insert: inserts html object
// makePlayerSelectForm: creates a form for the player select page
// Use: create the html element object and then append it 
// ====

const htmlModule = (() => {

    // creates and adds element 
    const add = (location, type, idName = 'defaultId', contents) => {
        const element = document.createElement(`${type}`); // string literal to parse the variable
        element.setAttribute('id', `${idName}`);
        element.innerHTML = `${contents}`;
        location.appendChild(element);
    } // end

    // creates and inserts element to specific location for when multiple elements in a node
    const insert = (parentNode, reference, type, idName) => {
        const element = document.createElement(`${type}`);
        element.setAttribute('id', `${idName}`);
        parentNode.insertBefore(element, reference);
    } // end

    // creates custom form
    const makePlayerSelectForm = (location, formId, inputOneId, inputTwoId, inputType) => {

        const formElement = document.createElement('form');
        formElement.setAttribute('id', `${formId}`);
        location.appendChild(formElement);

        const firstRowDiv = document.createElement('div');
        firstRowDiv.setAttribute('class', 'form-row');
        formElement.appendChild(firstRowDiv);

        const formLabelOne = document.createElement('label');
        formLabelOne.setAttribute('for', 'playerOneName');
        formLabelOne.innerHTML = 'Player 1 (X): ';

        const formInput1 = document.createElement('input');
        formInput1.setAttribute('type', `${inputType}`);
        formInput1.setAttribute('id', `${inputOneId}`);

        firstRowDiv.appendChild(formLabelOne);
        firstRowDiv.appendChild(formInput1);

        const secondRowDiv = document.createElement('div');
        secondRowDiv.setAttribute('class', 'form-row');
        formElement.appendChild(secondRowDiv);

        const formLabelTwo = document.createElement('label');
        formLabelTwo.setAttribute('for', 'playerTwoName');
        formLabelTwo.innerHTML = 'Player 2 (O): ';

        const formInput2 = document.createElement('input');
        formInput2.setAttribute('type', `${inputType}`);
        formInput2.setAttribute('id', `${inputTwoId}`);

        secondRowDiv.appendChild(formLabelTwo);
        secondRowDiv.appendChild(formInput2);


        // submit button for player entry form
        const formSubmitBtn = document.createElement('button');
        formSubmitBtn.setAttribute('class', 'form-btn');
        formSubmitBtn.setAttribute('type', 'button'); // set button type to stop page refresh? look into this
        formSubmitBtn.innerHTML = 'Ready!';
        formSubmitBtn.addEventListener('click', function () {
            playerNameAssign();
            // create player objects using strings in form fields
            // how to reference each player...
        });
        formElement.appendChild(formSubmitBtn);
        
        // trying out an iterative approach to appending all the elements for the form.

    }; // end

    // function for player name submit button
    const playerNameAssign = () => { 
        const playerOneName = document.getElementById('p1Name').value;
        const playerTwoName = document.getElementById('p2Name').value;
        const player1 = playerMaker(playerOneName, 'X');
        const player2 = playerMaker(playerTwoName, 'O');
        
        // function to generate the array
        gameBoard.generate(player1, player2); // pass player objects to be used in later function
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

// create an array of size x
const createArray = (x) => Array.from({ length: x }, );

// EXECUTABLE

displayController.startPage();

// FEATURES TO ADD:
// -- symbol select at player select screen
// -- single player game against the AI
// -- Themes for the game; this would be a good way to practice my CSS styling 

// Next steps
// ==========

// Need to create a div that displays the current player []
// create a new array when a div is clicked, then map the new array to the display controller
// add a footer 

// NOTES
// =====
// when I finish tic tac toe, I'm going to start a side-project where I start building my website out as far as I possibly
// can with my current skills and then add to it and tweak it as I learn.
// - This is mainly so I can start putting together my recipe compiling, meal planner application