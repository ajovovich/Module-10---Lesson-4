//Task 1: Create a Constructor Function for the Book Object

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

//Task 2: Implement a Method to Display Book Information

Book.prototype.displayInfo = function() {
    return `Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}`;
};

//Task 3: Create an Array to Store Book Objects and Implement Functions

const library = [];

function addBook(book) {
    library.push(book);
}

function searchByTitle(title) {
    return library.filter(book => book.title.toLowerCase() === title.toLowerCase());
}

function searchByAuthor(author) {
    return library.filter(book => book.author.toLowerCase() === author.toLowerCase());
}

//Task 4: Filter Books and Modify Titles and Authors

function filterBooksByPageCount(maxPages) {
    return library.filter(book => book.pages <= maxPages);
}

function formatBooks() {
    return library.map(book => ({
        title: `Title: ${book.title}`,
        author: `Author: ${book.author}`,
        pages: book.pages
    }));
}

//Usage

let book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 180);
let book2 = new Book("1984", "George Orwell", 328);
let book3 = new Book("The Little Prince", "Antoine de Saint-Exupéry", 96);

addBook(book1);
addBook(book2);
addBook(book3);

console.log(book1.displayInfo()); 
// Title: The Great Gatsby, Author: F. Scott Fitzgerald, Pages: 180

console.log(searchByTitle("1984"));
// [ Book { title: '1984', author: 'George Orwell', pages: 328 } ]

console.log(searchByAuthor("Antoine de Saint-Exupéry"));
// [ Book { title: 'The Little Prince', author: 'Antoine de Saint-Exupéry', pages: 96 } ]

console.log(filterBooksByPageCount(100));
// [ Book { title: 'The Little Prince', author: 'Antoine de Saint-Exupéry', pages: 96 } ]

console.log(formatBooks());
// [
//   { title: 'Title: The Great Gatsby', author: 'Author: F. Scott Fitzgerald', pages: 180 },
//   { title: 'Title: 1984', author: 'Author: George Orwell', pages: 328 },
//   { title: 'Title: The Little Prince', author: 'Author: Antoine de Saint-Exupéry', pages: 96 }
// ]