import { useState } from 'react';

const useBooks = () => {
    const [books, setBooks] = useState([]);

    const addBook = (book) => {
        setBooks([...books, { ...book, id: Date.now() }]);
    };

    const editBook = (updatedBook) => {
        setBooks(books.map(book => (book.id === updatedBook.id ? updatedBook : book)));
    };

    const deleteBook = (id) => {
        setBooks(books.filter(book => book.id !== id));
    };

    return { books, addBook, editBook, deleteBook };
};

export default useBooks;