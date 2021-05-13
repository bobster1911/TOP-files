// adds <p> elements to html document.

function addText(text, identifier) {
    console.log(text, identifier);
    const para = document.createElement('p'); // create <p> element
    const node = document.createTextNode(text); // creates a text node
    para.appendChild(node); // appends text node to <p> element
    const element = document.getElementById(identifier); // finds the existing element
    element.appendChild(para); // appends newly created element to existing element
}