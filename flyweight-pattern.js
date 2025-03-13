/**
 * The flyweight pattern is a useful way to convserve memory, when we're creating a large number of similar objects.
 * 
 * In our application, we want users to be able to add books. All books have a title, an author, and an isbn number!
 * However, a library usually doesn't have just one copy of a book: it usually has multiple copies of the same book.
 * 
 * It wouldn't be very useful to create a new book instance each time if there are multiple copies of the exact same book.
 * Instead, we want to create multiple instances of the Book constructor, that represents a single book.
 */

class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

const books = new Map();

const createBook = (title, author, isbn) => {
    const existingBook = books.has(isbn);

    if (existingBook) {
        return books.get(isbn);
    }

    const book = new Book(title, author, isbn);
    books.set(isbn, book);

    return book;
};


// In order to keep track of the total amount of copies, let's create a `bookList` array that contains the total amount of books in the library

const bookList = [];

const addBook = (title, author, isbn, availability, sales) => {
    const book = {
        ...createBook(title, author, isbn),
        sales,
        availability,
        isbn,
    };

    bookList.push(book);
    return book;
}

addBook("Harry Potter", "JK Rowling", "AB123", false, 100);
addBook("Harry Potter", "JK Rowling", "AB123", true, 50);
addBook("To Kill a Mockingbird", "Harper Lee", "CD345", true, 10);
addBook("To Kill a Mockingbird", "Harper Lee", "CD345", false, 20);
addBook("The Great Gatsby", "F. Scott Fitzgerald", "EF567", false, 20);

console.log(bookList[0]);
console.log(bookList[1]);
console.log(bookList[2]);
console.log(bookList[3]);
console.log(bookList[4]);