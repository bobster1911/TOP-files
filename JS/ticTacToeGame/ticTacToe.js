// the logic behind the state of the game board.
const gameBoard = (() => {

    const create = () => {
        // create blank array
        const LEN = 9;
        const n = 0; // may have to be 'let', but not sure..
        const arr = new Array (LEN).fill(0);
        //recursive function for creating the divs for the ticTacToe board.
        const container = document.createElement('div');
        container.setAttribute('id', 'boardContainer');
        document.body.appendChild(container);

        const _genBoard = (n) => {
            // base case
            if (n < 0 || n > 8) {
                return console.log('finished recursion for generating board divs.');
            }
            //recursion in replace of a for loop
            const element = document.createElement('div');
            element.setAttribute('id', `div${n}`);
            // don't need to add to array, the numbers are arbitrarily mapped. Or I should say, the buttons will be hardcoded.
            boardContainer.appendChild(element);
            return _genBoard(n+1);
        };
        _genBoard(n);
    };

    return {
        create
    };

}) ();

// module for GUI and game board display
const displayBoard = (() => {

    const create = () => { // might consider implementing closure for this 'create' method.

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
                magicModule.makeForm(enNd, 'symbol', 'naughts', 'crosses');

                // remove player buttons
                button1.remove();
                button2.remove();
                // player 1 text
                // insert p1Header before input field.
                const formLoc = document.getElementById('symbol');
                magicModule.ins(this.parentNode, formLoc, 'p', 'p1Header');
                
                // submit button to create player 1 object
                magicModule.create(enNd, 'button', 'subBtn');
                const subBtn = document.getElementById('subBtn');
                subBtn.innerHTML = 'Submit';
                // make sure configured as a submit button for the form -> look this up
                subBtn.addEventListener('click', function() {
                    // function for submit button
                    const player1 = Player(nameInput.value, symbolSelect.value, 0);
                    // create player 2 object
                    // * don't need to return the object because it's all a self-contained game.
                    //   the whole point is that the object cannot be accessed from the console and 
                    //   only within the script itself.
                    

                    // remove and re-add the subBtn with new function to create the player 2 object.

                    
                });

            })
            // remove 'start' button after the player buttons have been added
            button.remove();

        });

    }
    return { 
        create
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

        // location - where elements are to be added e.g. document.body.div
        // type - type of element

        // CREATE element for now without dynamically naming it, have name as one of the function parameters.
        // ---
        // n - how many elements [o]
        // dynamic naming of element [o]
        const element = document.createElement(`${type}`);
        element.setAttribute('id', `${idName}`);
        loc.appendChild(element);
        // append the element
        // NOTES:
        // document is all that's needed for creating elements, that's why it wouldn't take the body parameter.
    }

    const ins = (par, ref, type, idName) => {

        // location - where elements are to be added e.g. document.body.div
        // type - type of element

        // CREATE element for now without dynamically naming it, have name as one of the function parameters.
        // ---
        // n - how many elements [o]
        // dynamic naming of element [o]
        const element = document.createElement(`${type}`);
        element.setAttribute('id', `${idName}`);
        par.insertBefore(element, ref);
        // append the element
        // NOTES:
        // document is all that's needed for creating elements, that's why it wouldn't take the body parameter.
    }

    const makeForm = (loc, id, opt1, opt2) => {
        
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
        magicModule.create(tSymbols, 'option', 'opt1');
        const tOpt1 = document.getElementById('opt1');
        magicModule.create(tSymbols, 'option', 'opt2');
        const tOpt2 = document.getElementById('opt2');
        // more efficient way to do this... ( get it to work first.)
        // IMPROVE: use recursion to create x amount of options.
        tOpt1.innerHTML = opt1;
        tOpt1.setAttribute('value', opt1);
        tOpt2.innerHTML = opt2;
        tOpt2.setAttribute('value', opt2);
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