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
            if (n == 0 || n < 0 || n > 8) {
                return console.log('finished recursion for generating board divs.');
            }
            //recursion in replace of a for loop
            const element = document.createElement('div');
            element.addAttribute('id', `div${n}`);
            // don't need to add to array, the numbers are arbitrarily mapped. Or I should say, the buttons will be hardcoded.
            boardContainer.appendChild(element);
            return _genBoard(n - 1);
        };
    };

    return {
        create
    };

}) ();

// renders the gameboard output into GUI representation of the board
const displayBoard = (() => {
    const create = () => {
        // CREATE CONTAINER AND INITIAL START BUTTON
        const container = document.createElement('div');
        container.setAttribute('id', 'btnContainer');
        document.body.appendChild(container);

        const button = document.createElement('button');
        button.setAttribute('id', 'playBtn');
        button.innerHTML = 'Start';
        button.addEventListener('click', function () {
            // function to remove some items and add new ones for player selection.
                // 1 player vs. COM, 2 player
            const button1 = document.createElement('button');
            button1.setAttribute('id', '1 Player');
            button1.innerHTML = 'Player 1';

            const button2 = document.createElement('button');
            button2.setAttribute('id', 'Player 2');
            // carry on here ... <<<
        });
        container.appendChild(button);
    }
    return { 
        create
    }
}) ();

// factory function for creating players
const Player = (name, symbol, score) => {
	const rng = () => {};
	return {
		name,
		symbol,
		score,
		rng
	};
};

// players could have properties for wins, losses and draws.
	// this could then reset when 'play again' or such is clicked.

displayBoard.create();