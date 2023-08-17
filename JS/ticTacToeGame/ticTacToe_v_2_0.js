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
// players
// gameBoard
// displayController

const playerMaker = (name, symbol) => {
    return { name, symbol };
}

// create players and assign symbols
const player1 = playerMaker('Rob', 'X');
const player2 = playerMaker('Glacier', 'O');

// generate the game array
// NOTE: write down the variables to keep track of for the game

// which players turn it is 
// 

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

    const create = (location, type, idName) => {

        const element = document.createElement(`${type}`);
        element.setAttribute('id', `${idName}`);
        location.appendChild(element);
    }

    const insert = (par, ref, type, idName) => {

        const element = document.createElement(`${type}`);
        element.setAttribute('id', `${idName}`);
        par.insertBefore(element, ref);
    }

    const makeForm = (location, id, nauOpt, crossOpt) => {
        
        htmlModule.create(location, 'form', id);
        const tForm = document.getElementById(id);
        // input field and label
        htmlModule.create(tForm, 'label', 'fname');
        const tName = document.getElementById('fname');
        tName.innerHTML = 'Name: ';
        htmlModule.create(tForm, 'input', 'nameInput');
        const nameInput = document.getElementById('nameInput');
        nameInput.setAttribute('type', 'text');
        nameInput.setAttribute('name', 'fname');

        htmlModule.create(tForm, 'br');
        
        // dropdown symbol select
        htmlModule.create(tForm, 'label', 'lSymbol');
        const lSymbol = document.getElementById('lSymbol');
        lSymbol.innerHTML = 'Symbol: ';
        htmlModule.create(tForm, 'label', 'symbol');
        htmlModule.create(tForm, 'select', 'symbolSelect');
        const tSymbols = document.getElementById('symbolSelect');
        tSymbols.setAttribute('name', 'symbols');
        htmlModule.create(tSymbols, 'option', 'nauOpt');
        const tnauOpt = document.getElementById('nauOpt');
        htmlModule.create(tSymbols, 'option', 'crossOpt');
        const tcrossOpt = document.getElementById('crossOpt');
        // more efficient way to do this... ( get it to work first.)
        // IMPROVE: use recursion to create x amount of options.
        tnauOpt.innerHTML = nauOpt;
        tnauOpt.setAttribute('value', nauOpt);
        tcrossOpt.innerHTML = crossOpt;
        tcrossOpt.setAttribute('value', crossOpt);
    }

    return { 
        create,
        insert,
        makeForm
    }
}) ();