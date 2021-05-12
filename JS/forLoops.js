const para = document.querySelector('p');
const btn = document.querySelector('button');

btn.addEventListener('click', launch());

function launch() {
    for (let i = 10; i > 0; i--) {
        para.textContent = i;
    }

    para.textContent = 'Lift off!';
} 