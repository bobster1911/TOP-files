const countdown = "countdown";

function launch() {
    for (let i = 10; i > 0; i--) {
        addText(i, countdown);

        if (i == 1) {
            let text = "Lift off!";
            addText(text, countdown);
        }
    }
    //document.getElementById("countdown").innerHTML = 'Lift off!';
} 

// refresh current webpage
function refresh() { 
    location.reload();
}

function addText(text, identifier) {
    console.log(text, identifier);
    const para = document.createElement('p'); // create <p> element
    const node = document.createTextNode(text); // creates a text node
    para.appendChild(node); // appends text node to <p> element
    const element = document.getElementById(identifier); // finds the existing element
    element.appendChild(para); // appends newly created element to existing element
}