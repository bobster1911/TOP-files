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
            // don't need to add to array, the numbers are arbitrarily mapped.
            boardContainer.appendChild(element);
            return _genBoard(n - 1);
        };
    };

    return {
        create
    };
}) ();

const displayBoard = (() => {
    const create = () => {
        
    }
}) ();

// generate container
const container = document.createElement('div');
container.setAttribute('id', 'boardContainer');
document.body.appendChild(container);