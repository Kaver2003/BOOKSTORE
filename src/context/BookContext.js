import React, { createContext, useState, useEffect, useContext } from 'react';
import books from '../data/books'; // Импортируем мок-данные

const BookContext = createContext();

export const BookProvider = ({ children }) => {
    const [booksData, setBooksData] = useState([]);

    // Загрузка данных из localStorage при монтировании
    useEffect(() => {
        const savedBooks = JSON.parse(localStorage.getItem('books'));
        if (savedBooks) {
            setBooksData(savedBooks);
        } else {
            setBooksData(books); // Используем мок-данные, если в localStorage ничего нет
        }
    }, []);

    // Сохранение данных в localStorage при изменении
    useEffect(() => {
        localStorage.setItem('books', JSON.stringify(booksData));
    }, [booksData]);

    const updateBook = (updatedBook) => {
        setBooksData((prevBooks) =>
            prevBooks.map((book) => (book.id === updatedBook.id ? updatedBook : book))
        );
    };

    return (
        <BookContext.Provider value={{ booksData, updateBook }}>
            {children}
        </BookContext.Provider>
    );
};

// Создаём кастомный хук для использования контекста
export const useBookContext = () => {
    const context = useContext(BookContext);
    if (!context) {
        throw new Error('useBookContext must be used within a BookProvider');
    }
    return context;
};

export default BookContext;