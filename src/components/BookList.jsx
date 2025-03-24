import React from 'react';

const BookList = ({ books }) => {
    return (
        <div className="p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {books.map(book => (
                    <div key={book.id} className="bg-white shadow-md rounded-lg overflow-hidden max-w-sm mx-auto">
                        <img
                            src={book.image}
                            alt={book.title}
                            className="w-full h-64 object-center"
                        />
                        <div className="p-4">
                            <h3 className="text-xl font-bold mb-2">{book.title}</h3>
                            <p className="text-gray-600">Автор: {book.author}</p>
                            <p className="text-gray-600">Год: {book.year}</p>
                            <p className="text-gray-600 mb-2">{book.description}</p>
                            <p className="text-gray-600">Цена: ${book.price}</p>
                            <p className="text-gray-600">Статус: {book.status === 'available' ? 'Доступна' : 'Недоступна'}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BookList;