import React from 'react';
import BookList from '../components/BookList';
import { useBookContext } from '../context/BookContext';

const User = () => {
    const { books, rentBook, purchaseBook } = useBookContext();
    const availableBooks = books.filter(b => b.status === 'available');

    return (
        <div className="p-4">
            <h1 className="text-3xl font-bold mb-6">Доступные для аренды/покупки</h1>
            <BookList
                books={availableBooks}
                onPurchase={purchaseBook}
                onRent={rentBook}
            />
        </div>
    );
};

export default User;