let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.numberOfPages = pages;
    this.readYet = read;
}

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

    console.log(myLibrary);

    //iterate through the array and create a div for each one.
    let numBooks = myLibrary.length;
    //if length = 0 -- no books in the library.
    if (numBooks == 0) {
        let paraErr = document.createElement('p');
        paraErr.textContent = 'No books found in the library.'
        document.body.appendChild(paraErr);
    }
    //create array for variable names for said div elements.
    let bookDiv = [];
    for (i = 0;i <= numBooks; i++) {
        bookDiv[i] = 'book' + i;
    }

    let bookInfo = [];
    for (i = 0;i <= numBooks; i++) {
        bookInfo[i] = 'book' + i;
    }

    //create div for book object
    for (i = 0;i <= numBooks;i++) {
        //add empty div element
        bookDiv[i] = document.createElement('div');
        document.body.appendChild(bookDiv[i]);
        //append object information to div
        bookInfo[i] = document.createElement('p');
        console.log('TEST: ' + myLibrary[i])
        bookInfo[i].textContent = 'Title: ' + myLibrary[i].title + '\n' + 'Author: ' + myLibrary[i].author + '\n' +
        'Pages: ' + myLibrary[i].numberOfPages + '\n' + 'Read: ' + myLibrary[i].readYet + '\n';

    }
}

//website fluffies
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








