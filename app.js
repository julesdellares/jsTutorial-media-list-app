// Book Class: Represents a Book
class Book{
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}
//UI Class: handles UI Tasks
class UI {
    static displayBooks() {
        const StoredBooks = [
            {
                title: 'Booke One',
                author: 'John Doe',
                isbn: '45545'
            },
            {
                title: 'Booke Two   ',
                author: 'Jane Doe',
                isbn: '45545'  
            }
        ];

        const books = StoredBooks

        books.forEach((book) => UI.addBookToList(book));
        }

        static addBookToList(book) {
            const list = document.querySelector('#book-list');

            const row = document.createElement('tr');

            row.innerHTML = `
                <td>${book.title}</td>
                <td>${book.author}</td>
                <td>${book.isbn}</td>
                <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
            `;
        }
    }
    
//Store Class: Handles Storage

//Event: Display Books

//Event: Add a Book

//Event: Remove A Book
