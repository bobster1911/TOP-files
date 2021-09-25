const div1 = document.createElement('div');
div1.setAttribute('id', 'div1');
div1.style.cssText = 'border-style: solid; border-color: coral; background-color: pink';

const header1 = document.createElement('h1');
header1.setAttribute('id', 'h1');
header1.textContent = 'I\'m an h1'
header1.style.cssText = 'color: black';
div1.appendChild(header1);

const para1 = document.createElement('p');
para1.setAttribute('id', 'para1');
para1.textContent = 'I\'m a paragraph.';
para1.style.cssText = 'color: black';
div1.appendChild(para1);

document.body.appendChild(div1);

const btn1 = document.createElement('button');
btn1.setAttribute('id', 'btn1');
btn1.textContent = 'Click me!';
btn1.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
});

div1.appendChild(btn1);

let selected = document.getElementById('para1');
para1.addEventListener('mouseover', function (e) {
    e.target.classList.add('touched');
});


