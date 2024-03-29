// --- GLOBAL ---

// General
let myLibrary = [];
let bookDom = [];

let bookObjects = 0;
let booksDisplayed = 0;

document.getElementById('btnAddBook').addEventListener('click', function() {addBookToLibrary()});
document.getElementById('btnUpdateBooks').addEventListener('click', function() {refreshBooks()});

// Regular Expressions
const divRegex = /div\d$/;

// --- FUNCTIONS ---

function countBookObj() {
    bookObjects = myLibrary.length;
    return bookObjects;
}

function countbooksDisplayed() { // create a regular expression for selecting the book divs
    
    let bookArray = [];
    let counter = 0;
    consoleBooks = document.body.getElementsByTagName('div');
    // Loop through returned array and see if any match the regex
    for (i = 0; i < consoleBooks.length; i++) {
        bookArray.push(consoleBooks[i].id);
    }
    for (j = 0; j < bookArray.length; j++) {
        if (bookArray[j].match(divRegex)) {
            counter++;
        }
    }

    booksDisplayed = counter;
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
    let title = document.getElementsByName("title")[0].value;
    let author = document.getElementsByName("author")[0].value;
    let pages = document.getElementsByName("numberOfPages")[0].value;


    //find checked radio value
    let radios = document.getElementsByName('status');
    let radioLength = radios.length;

    for (let i = 0; i < radioLength; i++) {
        if (radios[i].checked) {
            read = radios[i].value;
            break;
        }
    }
       
    //create object with given information
    let book1 = new Book(title, author, pages, read);
    //add new object to libraryArray
    myLibrary.push(book1);
    // update book object count.
    bookObjects = countBookObj();

    btnUpdateBooks.disabled = false;
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
        bookDiv.setAttribute('class', 'bookDiv');
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
        
        let btn1 = document.createElement('button');
        btn1.textContent = 'Remove';
        btn1.addEventListener('click', function(divId) {
            // function here.

            //add if else to account for when there are no books to remove. <-- IMPORTANT
            let toSlice = divId.path[1].id;
            let index = toSlice.slice(3);
            myLibrary.splice(index, 1);
            // need to figure out how to change books displayed variable before refreshing display. DEBUG
            btnUpdateBooks.disabled = false; //global variables not updating ...
        });
        newDiv.appendChild(btn1); 

        // --- READ/UNREAD BUTTONS ---
        let buttonId = 'readButton' + i;
        addReadToggle(buttonId, newDiv);

        
    }

    booksDisplayed = countbooksDisplayed();
    btnUpdateBooks.disabled = true;
}

// creates and adds appropriate button based on read status
function addReadToggle(buttonId, newDiv) {

    if (myLibrary[i].readYet == 'read') {
        let readButton = document.createElement('button');
        readButton.textContent = 'Mark as unread';
        newDiv.appendChild(readButton);
        readButton.setAttribute('id', buttonId);
        readButton.addEventListener('click', function() {

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

//overlay functions

function on() {
    document.getElementById('overlay').style.display = 'grid';
    document.getElementById('overlay').style.placeItems = 'center';
    document.getElementById('addBookForm').style.display = 'flex';

}

function off() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('addBookForm').style.display = 'none';
}


// --- SITE FLUFF ---









