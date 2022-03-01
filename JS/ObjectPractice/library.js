// --- GLOBAL ---

let myLibrary = [];
let bookDom = [];


// --- FUNCTIONS ---

function countBooks() {
    let numBooks = myLibrary.length;
    return numBooks;
}

//iterate through the array and create a div for each one.
let numBooks = (myLibrary.length - 1);

//FUNCTIONS

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.numberOfPages = pages;
    this.readYet = read;
}

//Adds object to myLibrary array.
function addBookToLibrary() {
    
    //NOTE: change the prompt to a generated form field that looks nice.

    //ask for book information
    let title = prompt('Title of book: ');
    let author = prompt('Author: ');
    let pages = prompt('Number of pages: ');
    let read = prompt('Read or Unread: ');
       
    //create object with given information
    let book1 = new Book(title, author, pages, read);
    //add new object to libraryArray
    myLibrary.push(book1);

}

function refreshBooks() {

    let numBooks = countBooks();
    
    //create divs to display each of the book objects.
    for (i = 0;i <= (numBooks- 1); i++) { 
        
        let bookDiv = document.createElement('div');
        bookDom[i] = bookDiv;
        document.body.appendChild(bookDiv);

        // create ID
        let divId = 'div' + i;
        // add ID to div element
        bookDiv.setAttribute('id', divId);

        // create tag
        let para = document.createElement('p');
        // create content
        let info = document.createTextNode('Title: ' + myLibrary[i].title + '\n' + 'Author: ' + myLibrary[i].author + '\n');
        // add content to tag
        para.appendChild(info);

        // target div to add content to
        let newDiv = document.getElementById(divId);
        newDiv.appendChild(para);
        
    }
}

// --- SITE FLUFF ---

let title1 = document.createElement('H1');
title1.textContent = 'Library App';
document.body.appendChild(title1);

let para1 = document.createElement('p');
para1.textContent = 'Click the button below to add a book to the library.';
document.body.appendChild(para1);

//create a button that once pressed, calls on the add-book function.
let button1 = document.createElement('button');
button1.textContent = 'Add a book';
document.body.appendChild(button1);
button1.addEventListener("click", function() {addBookToLibrary();});

//refresh button to update the library contents
let button2 = document.createElement('button');
button2.textContent = 'Update';
document.body.appendChild(button2);
button2.addEventListener("click", function() {refreshBooks();});







