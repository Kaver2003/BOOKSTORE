import React, { createContext, useState, useEffect } from 'react';
import booksData from '../data/books';

const BookContext = createContext();

export const BookProvider = ({ children }) => {
    const [books, setBooks] = useState([]);
    const [notifications, setNotifications] = useState([]);

    // Инициализация данных
    useEffect(() => {
        const savedBooks = JSON.parse(localStorage.getItem('books'));
        const savedNotifications = JSON.parse(localStorage.getItem('notifications')) || [];
        setBooks(savedBooks || booksData);
        setNotifications(savedNotifications);
    }, []);

    // Сохранение данных
    useEffect(() => {
        localStorage.setItem('books', JSON.stringify(books));
        localStorage.setItem('notifications', JSON.stringify(notifications));
    }, [books, notifications]);

    // Проверка аренды
    useEffect(() => {
        const checkRentals = () => {
            const today = new Date();
            const newNotifications = [];

            books.forEach(book => {
                if (book.status === 'rented' && new Date(book.rentalEndDate) < today) {
                    newNotifications.push({
                        bookId: book.id,
                        title: book.title,
                        message: `Срок аренды книги "${book.title}" истек!`
                    });
                }
            });

            if (newNotifications.length > 0) {
                setNotifications(prev => [...prev, ...newNotifications]);
            }
        };

        const interval = setInterval(checkRentals, 24 * 60 * 60 * 1000);
        return () => clearInterval(interval);
    }, [books]);

    const updateBook = (updatedBook) => {
        setBooks(prev => {
            // Если книга с таким ID уже есть - обновляем, иначе добавляем новую
            const exists = prev.some(b => b.id === updatedBook.id);
            return exists
                ? prev.map(b => b.id === updatedBook.id ? updatedBook : b)
                : [...prev, updatedBook];
        });
    };

    const purchaseBook = (bookId) => {
        setBooks(prev => prev.map(b =>
            b.id === bookId ? { ...b, status: 'purchased' } : b
        ));
    };

    const rentBook = (bookId, period) => {
        const endDate = new Date();

        // Правильный расчет даты окончания аренды
        if (period === '2 недели') endDate.setDate(endDate.getDate() + 14);
        else if (period === '1 месяц') endDate.setMonth(endDate.getMonth() + 1);
        else if (period === '3 месяца') endDate.setMonth(endDate.getMonth() + 3);

        setBooks(prev => prev.map(b =>
            b.id === bookId ? {
                ...b,
                status: 'rented',
                rentalEndDate: endDate.toISOString(), // Сохраняем как строку ISO
                rentalPeriod: period
            } : b
        ));
    };

    return (
        <BookContext.Provider value={{
            books,
            notifications,
            updateBook,
            rentBook,
            purchaseBook
        }}>
            {children}
        </BookContext.Provider>
    );
};

export const useBookContext = () => {
    const context = React.useContext(BookContext);
    if (!context) {
        throw new Error('useBookContext must be used within a BookProvider');
    }
    return context;
};