// the logic behind the state of the game board.
const gameBoard = (() => {

    const play = (playerOne, playerTwo, currentPlayer, startOrMove) => {
        if (startOrMove == 'start') { 
            const _start = (currentPlayer) => {

                // create blank array
                const LEN = 9;
                const n = 0; 
                const arr = new Array (LEN).fill(0);
                //recursive function for creating the divs for the ticTacToe board.
                const container = document.createElement('div');
                container.setAttribute('id', 'boardContainer');
                container.setAttribute('class', 'gridContainer');
                document.body.appendChild(container);

                const _genBoard = (n) => { //define function
                    // base case
                    if (n < 0 || n > 8) {
                        console.log('finished recursion for generating board divs.');
                        return;
                    }
                    //recursion in replace of a for loop
                    const element = document.createElement('div');
                    element.setAttribute('id', `div${n}`);
                    element.setAttribute('class', 'gridDiv');
                    element.addEventListener('click', function () {
                        // add function depending on who starts, then the rest is easy to figure out.
                        const idVal = (this.id).slice(3);

                        if (currentPlayer.symbol == 'x') { 
                            // create new array with updated data ***
                            const newArray = arr.map((i, j) => {if (j == idVal) {
                                return currentPlayer.symbol; 
                            } else {
                                return i;
                            }});

                            displayBoard.updateBoard(newArray);
                            gameBoard.play(playerOne, playerTwo, currentPlayer, 'move');
                                
                            // set current player in function call
                        } else if (currentPlayer.symbol == 'o') {
                            // create new array with updated data ***
                            const newArray = arr.map((i, j) => {if (j == idVal) {
                                    return currentPlayer.symbol;
                                } else {
                                    return i;
                                } 
                        });

                            displayBoard.updateBoard(newArray);
                            gameBoard.play(playerOne, playerTwo, currentPlayer, 'move');

                        } else {
                            console.log('An error has occurred.')
                        }
                    });

                    boardContainer.appendChild(element);
                    return _genBoard(n+1);
                };

                _genBoard(n); //run function


            };
            _start(currentPlayer); 

        } else if (startOrMove == 'move') {

            const _makeMove = (currentPlayer) => {
                // define makeMove function
                if (currentPlayer.symbol == playerOne.symbol) {
                    currentPlayer = playerTwo;
                    // regen board with new player
                } else if (currentPlayer.symbol == playerTwo.symbol) {
                    currentPlayer = playerOne;
                    // regen board with new player
                } else {
                    console.log('An error has occurred with deciding the player turn in _makeMove');
                }

            };

            _makeMove(currentPlayer);

        } else {
            console.log('Something went wrong.');
        }
    };

    return {
        play
    };

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
                            gameBoard.play(player1, player2, whoStarts, 'start');
                        } else if (whoCoin <= 4) {
                            const whoStarts = player2;
                            gameBoard.play(player1, player2, whoStarts, 'start');
                        }
                    });
                });
            });
            // remove 'start' button after the player buttons have been added
            button.remove();

        });

    };

    const updateBoard = (newArray) => {
        // map array to display
        console.log(newArray);
        // cycle through divs and change their innerHTML accordingly.
        const element = document.getElementById('boardContainer');
        console.log(element);
        const cellDivs = element.getElementsByTagName('div');
        // declare function
        const _populate = (n) => {
            if (n < 0 || n > 8) {
                console.log('finished populating board game cells.');
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