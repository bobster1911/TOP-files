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