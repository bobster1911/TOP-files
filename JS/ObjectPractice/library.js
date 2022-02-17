let myLibrary = [];

function Book(title, pages, read) {
    this.title = title;
    this.numberOfPages = pages;
    this.readYet = read;
}

function addBookToLibrary() {
    
    //NOTE: change the prompt to a generated form field that looks nice.

    //ask for book information
    let title = prompt('Title of book: ');
    let pages = prompt('Number of pages: ');
    let read = prompt('Read or Unread: ');
       
    //create object with given information
    let book1 = new Book(title, pages, read);
    //add new object to libraryArray
    myLibrary.push(book1);

}

function refreshBooks() {
    //iterate through the array and create a div for each one.
    let numBooks = myLibrary.length;
    for (i = 0;i <= numBooks;i++) {
        let ''div' + i' = document.createElement('div');
        div[i].textContent = myLibrary[i];
        document.body.appendChild(div[i]);
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








