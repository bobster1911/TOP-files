// --- GLOBAL ---

let myLibrary = [];
let bookDom = [];

let bookObjects = 0;
let booksDisplayed = 0;

// --- FUNCTIONS ---

function countBookObj() {
    bookObjects = myLibrary.length;
    return bookObjects;
}

function countbooksDisplayed() {
    booksDisplayed = document.body.getElementsByTagName('div').length;
    return booksDisplayed;
}


//create a prototype for the book objects to list all of the objects properties.
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
    // update book object count.
    bookObjects = countBookObj();

    button2.disabled = false;
}

function refreshBooks() { // NOTES -- add disabled attribute to button unless 'add book' has been clicked. Reset to disabled after it is clicked.
    
    if (booksDisplayed > 0) {

        for (i = 0; i <= (booksDisplayed - 1); i++) {
            let divId = ('div' + i);
            console.log(divId);
            document.getElementById(divId).remove();
        }
    }


    //create divs to display each of the book objects.
    for (i = 0;i < (bookObjects); i++) { 
        
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
        
        booksDisplayed = countbooksDisplayed();
    }
    button2.disabled = true;
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

button2.setAttribute('id', 'button2');
button2.disabled = true; // could hide the button completely instead of disabling.

button2.addEventListener("click", function() {refreshBooks();});







