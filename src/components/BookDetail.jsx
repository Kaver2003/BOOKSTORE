import React, { useState } from 'react';

const BookDetail = ({ book, onRent }) => {
    const [rentalPeriod, setRentalPeriod] = useState('');

    const handleRent = () => {
        if (!rentalPeriod) {
            alert('Выберите срок аренды');
            return;
        }
        onRent(book.id, rentalPeriod);
    };

    return (
        <div className="p-4 bg-white shadow-md rounded-lg max-w-md mx-auto">
            <div className="mb-4">
                <img
                    src={book.image}
                    alt={book.title}
                    className="w-full h-64 object-cover rounded-t-lg mb-4"
                />
                <h1 className="text-2xl font-bold mb-2">{book.title}</h1>
                <p className="text-gray-600">Автор: {book.author}</p>
                <p className="text-gray-600">Год: {book.year}</p>
                <p className="text-gray-600">Описание: {book.description}</p>
                <p className="text-gray-600">Цена: ${book.price}</p>
            </div>
            <div className="flex gap-4 mt-4">
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
                    Купить
                </button>
                <select
                    value={rentalPeriod}
                    onChange={(e) => setRentalPeriod(e.target.value)}
                    className="p-2 border border-gray-300 rounded hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400"
                >
                    <option value="" disabled>
                        Выберите срок аренды
                    </option>
                    <option value="2 недели">2 недели</option>
                    <option value="1 месяц">1 месяц</option>
                    <option value="3 месяца">3 месяца</option>
                </select>
                <button
                    onClick={handleRent}
                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
                >
                    Арендовать
                </button>
            </div>
        </div>
    );
};

export default BookDetail;