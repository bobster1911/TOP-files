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
        let para2 = document.createElement('p');
        // create content
        let titlePara = document.createTextNode('Title: ' + myLibrary[i].title);
        let authorPara = document.createTextNode('Author: ' + myLibrary[i].author);
        // add content to tag
        para.appendChild(titlePara);
        para2.appendChild(authorPara);
        // target div to add tag (with content) to
        let newDiv = document.getElementById(divId);
        newDiv.appendChild(para);
        newDiv.appendChild(para2);

        // --- READ/UNREAD BUTTONS ---
        let buttonId = 'readButton' + i;
        addReadToggle(buttonId, newDiv);

        booksDisplayed = countbooksDisplayed();
    }

    button2.disabled = true;
}

// creates and adds appropriate button based on read status
function addReadToggle(buttonId, newDiv) {

    if (myLibrary[i].readYet == 'read') {
        let readButton = document.createElement('button');
        readButton.textContent = 'Mark as unread';
        newDiv.appendChild(readButton);
        readButton.setAttribute('id', buttonId);
        readButton.addEventListener('click', function() {
            //add premade function here
        console.log('click on read');
        let string = this.id;
        indexNum = string.slice(10);
        let status = myLibrary[indexNum].readYet;
        if (status == 'read') {
            statusUnread(string);
        } else if (status == 'unread') {
            statusRead(string);
        } else {
            console.log('An error has occurred.')
        }

        });

        let ele = document.getElementById(buttonId);
        ele.classList.add('btn-read');


    } else if (myLibrary[i].readYet == 'unread') {
        let readButton = document.createElement('button');
        readButton.textContent = 'Mark as read';
        newDiv.appendChild(readButton);
        readButton.setAttribute('id', buttonId);
        readButton.addEventListener('click', function() {
            //add premade function here
        console.log('click on unread');
        let string = this.id;
        indexNum = string.slice(10);
        let status = myLibrary[indexNum].readYet;
        if (status == 'read') {
            statusUnread(string);
        } else if (status == 'unread') {
            statusRead(string);
        } else {
            console.log('An error has occurred.')
        }
        
    
        });

        let ele = document.getElementById(buttonId);
        ele.classList.add('btn-unread');

    } else {
        console.log('An error has occurred, time to debug');
    }
}

function statusRead(string) {
    indexNum = (string.slice(10));
    myLibrary[indexNum].readYet = 'read';
    let ele = document.getElementById(string);
    ele.textContent = 'Mark as unread';
    ele.classList.remove('btn-unread');
    ele.classList.add('btn-read');
}

function statusUnread(string) {
    indexNum = string.slice(10);
    myLibrary[indexNum].readYet = 'unread';
    let ele = document.getElementById(string);
    ele.textContent = 'Mark as read';
    ele.classList.remove('btn-read');
    ele.classList.add('btn-unread');
}

// function to change button depending on 



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







