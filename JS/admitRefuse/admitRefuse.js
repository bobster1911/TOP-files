const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];

const admitted = document.querySelector('.admitted');
const refused = document.querySelector('.refused');
admitted.textContent = 'Admit: ';
refused.textContent = 'Refuse: ';

for (let i = 0; i < people.length; i++) {
    if (people[i] == 'Phil' || people[i] == 'Lola') {
        if (i == (people.length - 1)) {
            refused.textContent += (people[i] + '. ');
        } else {
            refused.textContent += (people[i] + ', ');
        }
    } else {
        if (i == (people.length - 1)) {
            admitted.textContent += (people[i] + '. ');
        } else {
            admitted.textContent += (people[i] + ', ');
        }
    }     
} // end
