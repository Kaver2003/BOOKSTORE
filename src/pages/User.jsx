import React from 'react';
import BookList from '../components/BookList';
import { useBookContext } from '../context/BookContext'; // Исправленный импорт

const User = () => {
    const { booksData } = useBookContext();

    return (
        <div className="p-4">
            <h1 className="text-3xl font-bold mb-4">Книжный магазин</h1>
            <BookList books={booksData} />
        </div>
    );
};

export default User;