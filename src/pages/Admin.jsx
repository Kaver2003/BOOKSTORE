import React, { useState } from 'react';
import AdminPanel from '../components/AdminPanel';
import { useBookContext } from '../context/BookContext'; // Исправленный импорт

const Admin = () => {
    const { booksData, updateBook } = useBookContext();

    const handleEditBook = (updatedBook) => {
        updateBook(updatedBook);
    };

    return (
        <div className="p-4">
            <AdminPanel books={booksData} onEditBook={handleEditBook} />
        </div>
    );
};

export default Admin;