import React from 'react';
import BookList from '../components/BookList';
import { useBookContext } from '../context/BookContext';

const User = () => {
    const { books, rentBook, purchaseBook } = useBookContext();
    const availableBooks = books.filter(b => b.status === 'available');

    return (
        <div className="pt-2">
            <h1 className="text-2xl pl-4 bg-gray-300 font-bold mt-16">Доступные для аренды/покупки</h1>
            <BookList
                books={availableBooks}
                onPurchase={purchaseBook}
                onRent={rentBook}
                showDescription={true}
            />
        </div>
    );
};

export default User;