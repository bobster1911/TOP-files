const redPara = document.createElement('p'); // create element p
redPara.style.color = 'red';
redPara.setAttribute('id', 'redPara');

// more clean and standard to toggle CSS style rather than adding/
// removing inline CSS

// textContent preferable over innerHTML for adding text.
// innerHTML can open up security risks.

redPara.textContent = 'Some text';
document.body.appendChild(redPara);

const div1 = document.createElement('div');
div1.style.backgroundColor = 'coral';
div1.setAttribute('class', 'div1');
div1.textContent = 'This is a div container. Yeah!'
document.body.appendChild(div1);


const blueH3 = document.createElement('h3');
blueH3.setAttribute('class', 'h3');
blueH3.style.color = 'blue';
blueH3.textContent = 'I\'m a blue h3';
document.body.appendChild(blueH3);

const blackDiv = document.createElement('div');
blackDiv.setAttribute('id', 'blackDiv');
blackDiv.style.cssText = 'border-style: solid; background-color: pink';

const bdH1 = document.createElement('h1');
bdH1.textContent = 'I\'m in a div.';
blackDiv.appendChild(bdH1);

// still need to append the div to the body.

const bdP = document.createElement('p');
bdP.textContent = 'ME TOO!';
blackDiv.appendChild(bdP);

document.body.appendChild(blackDiv);












































