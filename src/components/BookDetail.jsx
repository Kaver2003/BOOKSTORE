import React, { useState } from 'react';

const BookDetail = ({ book, onBack, onRent }) => {
    const [rentalPeriod, setRentalPeriod] = useState('');

    const handleRent = () => {
        if (!rentalPeriod) {
            alert('Пожалуйста, выберите срок аренды');
            return;
        }

        // Вызываем функцию аренды, если она передана
        if (onRent) {
            onRent(book.id, rentalPeriod);
            onBack();
        }
    };

    return (
        <div className="p-4 max-w-4xl mx-auto">
            <button
                onClick={onBack}
                className="mb-6 px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
            >
                ← Назад
            </button>

            <div className="flex flex-col md:flex-row gap-8">
                <img
                    src={book.image}
                    alt={book.title}
                    className="w-full md:w-1/3 h-auto object-cover rounded-lg"
                />

                <div className="flex-1">
                    <h1 className="text-3xl font-bold">{book.title}</h1>
                    <p className="text-xl text-gray-600 mt-2">{book.author}</p>
                    <p className="text-gray-500 mt-1">{book.year}</p>

                    <div className="my-6 p-4 bg-gray-50 rounded-lg">
                        <p>{book.description}</p>
                    </div>

                    {book.status === 'available' ? (
                        <div className="mt-6">
                            <h3 className="text-xl font-semibold mb-4">Арендовать книгу</h3>
                            <select
                                value={rentalPeriod}
                                onChange={(e) => setRentalPeriod(e.target.value)}
                                className="p-2 border rounded mr-3"
                            >
                                <option value="">Выберите срок</option>
                                <option value="2 недели">2 недели</option>
                                <option value="1 месяц">1 месяц</option>
                                <option value="3 месяца">3 месяца</option>
                            </select>

                            <button
                                onClick={handleRent}
                                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                            >
                                Подтвердить аренду
                            </button>
                        </div>
                    ) : (
                        <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
                            <h3 className="text-xl font-semibold text-yellow-700">
                                {book.status === 'rented' ? 'Книга арендована' : 'Книга продана'}
                            </h3>
                            {book.status === 'rented' && book.rentalEndDate && (
                                <p>
                                    До: {new Date(book.rentalEndDate).toLocaleDateString('ru-RU', {
                                    day: '2-digit',
                                    month: '2-digit',
                                    year: 'numeric'
                                })}
                                </p>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BookDetail;