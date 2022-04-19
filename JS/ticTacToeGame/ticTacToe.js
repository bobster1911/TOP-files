// the logic behind the state of the game board.
const gameBoard = (() => {
    const create = () => {
        // create blank array
        const LEN = 9;
        const n = 0; // may have to be 'let', but not sure..
        const arr = new Array (LEN).fill(0);
        //return arr;
        const generate = () => {

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

// generate multiple divs within container
const genBoard = (size, n) => {
    
    const element = document.createElement('div');
    element.setAttribute('id', ('div' + `${n}`));
    document.body.appendChild('')
}