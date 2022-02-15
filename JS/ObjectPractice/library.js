let myLibrary = [];

function Book(title, pages, read) {
    this.title = title;
    this.numberOfPages = pages;
    this.readYet = read;
}

function addBookToLibrary() {
    
    //ask for book information
    let title = prompt('Title of book: ');
    let pages = prompt('Number of pages: ');
    let read = prompt('Read or Unread: ');

    //calculate how to name new addition
    let numBooks = myLibrary.length;
    let newBookName = `book${numBooks}`;
    
    //create object with given information
    const newBookName = new Book(title, pages, read);
    //add new object to libraryArray
    myLibrary.push(newBookName);

}

//create a button that once pressed, calls on the add-book function.
let button1 = document.createElement('button');
button1.innerHTML = 'Add a book';
document.body.appendChild(button1);


