// the logic behind the state of the game board.
const gameBoard = (() => {

    const play = (playerOne, playerTwo, startPlayer, startOrMove, lastArray = [], forMove = '') => { // if statement depending on start or move
        
        const LEN = 9;
        const n = 0; 
        const arr = new Array (LEN).fill(0);

        const _initialClickerF = function () {

            const idVal = (this.id).slice(3); // array index selection to place the move.

            // create new array with updated data
            const newArray = arr.map((i, j) => {if (j == idVal) {
                return startPlayer.symbol; 
            } else {
                return i;
            }});
            
            // change startPlayer
            if (startPlayer.symbol == playerOne.symbol) {
                startPlayer = playerTwo;

            } else if (startPlayer.symbol == playerTwo.symbol) {
                startPlayer = playerOne;

            } else {
                console.log('An error has occurred.');
            }

            displayBoard.updateBoard(newArray); //displays move
            gameBoard.play(playerOne, playerTwo, startPlayer, 'setup', newArray); //sets up event listeners for next move

}
        const _addClicker = function () {
            const forMove = this;
            const idVal = (this.id).slice(3); // array index selection to place the move.
            // create new array with updated data
            const newArray = lastArray.map((i, j) => {if (j == idVal) {
                return startPlayer.symbol; 
            } else {
                return i;
            }});
            // change startPlayer
            if (startPlayer.symbol == playerOne.symbol) {
                startPlayer = playerTwo;
        
            } else if (startPlayer.symbol == playerTwo.symbol) {
                startPlayer = playerOne;
        
            } else {
                console.log('An error has occurred.');
            }
        
            displayBoard.updateBoard(newArray); //displays move
            gameBoard.play(playerOne, playerTwo, startPlayer, 'move', newArray, forMove);
        }

        if (startOrMove == 'start') {
            const _start = (startPlayer) => {

                //recursive function for creating the divs for the ticTacToe board.
                const container = document.createElement('div');
                container.setAttribute('id', 'boardContainer');
                container.setAttribute('class', 'gridContainer');
                document.body.appendChild(container);

                const _genBoard = (n) => { 
                    // base case
                    if (n < 0 || n > 8) {
                        return;
                    }

                    const element = document.createElement('div');
                    element.setAttribute('id', `div${n}`);
                    element.setAttribute('class', 'gridDiv');

                    element.addEventListener('click', _initialClickerF);

                    boardContainer.appendChild(element);
                    return _genBoard(n+1);
                };
                _genBoard(n); 
            };
            _start(startPlayer); 

        } else if (startOrMove == 'setup') {
            // remove initial clicker function from all divs
            const _removeClicker = (n) => {
                if (n < 0 || n > 8) {
                    return;
                }
                const element = document.getElementById(`div${n}`);
                element.remove();

                const newElement = document.createElement('div');
                newElement.setAttribute('id', `div${n}`);
                newElement.setAttribute('class', 'gridDiv');
                newElement.addEventListener('click', _addClicker);
                boardContainer.appendChild(newElement);
                return _removeClicker(n+1);

            } 
            _removeClicker(n);

            displayBoard.updateBoard(lastArray); //displays move

        } else if (startOrMove == 'move') {
            console.log(lastArray);
            const idVal = (forMove.id).slice(3); // array index selection to place the move.
            // create new array with updated data
            const newArray = lastArray.map((i, j) => {if (j == idVal) {
                return startPlayer.symbol; 
            } else {
                return i;
            }});
            console.log(newArray); // WHERE I CALLED IT -- not sure how to make the array change on move 3, pissing me off....
            // change startPlayer
            if (startPlayer.symbol == playerOne.symbol) {
                startPlayer = playerTwo;
        
            } else if (startPlayer.symbol == playerTwo.symbol) {
                startPlayer = playerOne;
        
            } else {
                console.log('An error has occurred.');
            }
        
            displayBoard.updateBoard(newArray);

        } else {
            console.log('something went wrong.')
        };

}
    return {
        play
    }

}) ();

// module for GUI and game board display
const displayBoard = (() => {

    const create = () => {

        // Create container and start button
        magicModule.create(document.body, 'div', 'btnContainer');
        const container = document.getElementById('btnContainer');
        
        magicModule.create(container, 'button', 'playBtn');
        const button = document.getElementById('playBtn');
        button.innerHTML = 'Start';
        button.addEventListener('click', function () {

            // NOTE - make sure the buttons are added to the btnContainer
            
            // add 1 player button
            magicModule.create(container, 'button', 'onePlayer');
            const button1 = document.getElementById('onePlayer');
            button1.innerHTML = '1 Player';
            button1.addEventListener('click', function () {
                console.log('Play against the AI');

            });
           
            // add 2 player button
            magicModule.create(container, 'button', 'twoPlayer');
            const button2 = document.getElementById('twoPlayer');
            button2.innerHTML = '2 Player';
            button2.addEventListener('click', function () {
                
                // div for player creation
                magicModule.create(document.body, 'div', 'enDiv'); 
                const enNd = document.getElementById('enDiv');

                // field for typing name, drop down for symbol select
                magicModule.makeForm(enNd, 'symbol', 'o', 'x');

                // remove player buttons
                button1.remove();
                button2.remove();

                // player 1 text
                const formLoc = document.getElementById('symbol');
                magicModule.ins(enNd, formLoc, 'p', 'p1Header');
                const p1Header = document.getElementById('p1Header');
                p1Header.innerHTML = 'Player 1';

                // submit button to create player 1 object
                magicModule.create(enNd, 'button', 'subBtn');
                const subBtn = document.getElementById('subBtn');
                subBtn.innerHTML = 'Submit';
                // make sure configured as a submit button for the form -> look this up
                subBtn.addEventListener('click', function() {
                    // function for submit button
                    const player1 = Player(nameInput.value, symbolSelect.value, 0);
                    // create player 2 object
                    p1Header.remove();
                    formLoc.reset();
                    // grey out option selected (symbolSelect.value)
                    subBtn.remove();
                    // recreate button with function for player 2
                    magicModule.create(enNd, 'button', 'subBtn2');
                    const subBtn2 = document.getElementById('subBtn2');
                    subBtn2.innerHTML = 'Submit';

                    magicModule.ins(enNd, formLoc, 'p', 'p2Header');
                    const p2Header = document.getElementById('p2Header');
                    p2Header.innerHTML = 'Player 2';
                    if (player1.symbol == 'o') {
                        // disable o option
                        nauOpt.setAttribute('disabled', '');
                    } else if (player1.symbol == 'x') {
                        // disable x option
                        crossOpt.setAttribute('disabled', '');
                    }


                    subBtn2.addEventListener('click', function() {
                        const player2 = Player(nameInput.value, symbolSelect.value, 0);
                        //formLoc.reset();
                        const whoCoin = Math.floor(Math.random() * 10);
                        //decide who goes first

                        if (whoCoin >= 5) {
                            const whoStarts = player1;
                            gameBoard.play(player1, player2, whoStarts, 'start', []);
                        } else if (whoCoin <= 4) {
                            const whoStarts = player2;
                            gameBoard.play(player1, player2, whoStarts, 'start', []);
                        }
                    });
                });
            });
            // remove 'start' button after the player buttons have been added
            button.remove();

        });

    };

    const updateBoard = (newArray) => { // USE: map array to display
       
        // cycle through divs and change their innerHTML accordingly.
        const element = document.getElementById('boardContainer');

        const cellDivs = element.getElementsByTagName('div');
        // declare function
        const _populate = (n) => {
            if (n < 0 || n > 8) {
                // cycles through recursively
                return;
            } else {
                cellDivs[n].innerHTML = newArray[n];
            }
            return _populate(n+1);
        }
        // call function
        _populate(0);
        
    }

    return { 
        create,
        updateBoard
    }
}) ();

// factory function for creating players
const Player = (name, symbol, score) => {
    
	return {
		name,
		symbol,
		score
	};
};

// module with functions that create elements to save me time.
const magicModule = (() => {

    const create = (loc, type, idName) => {

        const element = document.createElement(`${type}`);
        element.setAttribute('id', `${idName}`);
        loc.appendChild(element);
    }

    const ins = (par, ref, type, idName) => {

        const element = document.createElement(`${type}`);
        element.setAttribute('id', `${idName}`);
        par.insertBefore(element, ref);
    }

    const makeForm = (loc, id, nauOpt, crossOpt) => {
        
        magicModule.create(loc, 'form', id);
        const tForm = document.getElementById(id);
        // input field and label
        magicModule.create(tForm, 'label', 'fname');
        const tName = document.getElementById('fname');
        tName.innerHTML = 'Name: ';
        magicModule.create(tForm, 'input', 'nameInput');
        const nameInput = document.getElementById('nameInput');
        nameInput.setAttribute('type', 'text');
        nameInput.setAttribute('name', 'fname');

        magicModule.create(tForm, 'br');
        
        // dropdown symbol select
        magicModule.create(tForm, 'label', 'lSymbol');
        const lSymbol = document.getElementById('lSymbol');
        lSymbol.innerHTML = 'Symbol: ';
        magicModule.create(tForm, 'label', 'symbol');
        magicModule.create(tForm, 'select', 'symbolSelect');
        const tSymbols = document.getElementById('symbolSelect');
        tSymbols.setAttribute('name', 'symbols');
        magicModule.create(tSymbols, 'option', 'nauOpt');
        const tnauOpt = document.getElementById('nauOpt');
        magicModule.create(tSymbols, 'option', 'crossOpt');
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
        ins,
        makeForm
    }
}) ();

displayBoard.create();

// FUNCTIONS to make for personal library:
// create a basic form with js [ ]
// * skeleton for recursion loop 