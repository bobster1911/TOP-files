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

    const create = () => {

        // Create container and start button
        const container = document.createElement('div');
        container.setAttribute('id', 'btnContainer');
        document.body.appendChild(container);

        const button = document.createElement('button');
        button.setAttribute('id', 'playBtn');
        button.innerHTML = 'Start';
        button.addEventListener('click', function () {
            
            // add 1 player button
            const button1 = document.createElement('button');
            button1.setAttribute('id', 'onePlayer');
            button1.innerHTML = '1 Player';
            button1.addEventListener('click', function () {
                console.log('Play against the AI');

            })
           
            // add 2 player button
            const button2 = document.createElement('button');
            button2.setAttribute('id', 'twoPlayer');
            button2.innerHTML = '2 Player';
            button2.addEventListener('click', function () {
                // enter name player 1
                magicModule.create(document.body, 'div', 'en-div'); 
                const enNd = document.getElementById('en-div');
                magicModule.create(enNd, 'button', 'en-btn');
                const enBtn = document.getElementById('en-btn');
                enBtn.innerHTML = 'next';
                
                // select symbol
                // enter name player 2
                // select symbol
                console.log('set up players for two player game');
            })

            // append function to start 2 player game
            // create both players and then take user input for names and select symbols.

            document.body.appendChild(button1);
            document.body.appendChild(button2);
            container.remove(button);
        });

        container.appendChild(button);
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

// players could have properties for wins, losses and draws.
	// this could then reset when 'play again' or such is clicked.

// Create a module that creates elements, so that I can call on the module functions
// instead of having to create functions each time. 
// will have to think of a way for the function to dynamically create the element id each time.
    // * count the amount of that same type of element in current element scope and then 
    // create the id name accordingly.

const magicModule = (() => {
    // test p maker to see whether my theory works.
    // * what parameters does the function need?
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

    const makeForm = (loc, label, name, id, opt1, op2, op3) => {
        magicModule.create(loc, 'form', id);
        const tForm = document.getElementById(id);
        magicModule.create(tForm, 'label', 'label1');
        magicModule.create(tForm, 'select', 'symbols');
        const tSelect = document.getElementById('symbols');
        magicModule.create(tSelect, 'option', 'opt1');
        const tOpt1 = document.getElementById('opt1');
        magicModule.create(tSelect, 'option', 'opt2');
        const tOpt2 = document.getElementById('opt2');
        magicModule.create(tSelect, 'option', 'opt3');
        const tOpt3 = document.getElementById('opt3');
        // more efficient way to do this... ( get it to work first.)
    }

    return { 
        create
    }
}) ();

// FUNCTIONS to make for personal library:
// create a basic form with js [ ]
// * skeleton for recursion loop 

displayBoard.create();

