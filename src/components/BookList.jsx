import React, { useState } from 'react';

const BookList = ({
                      books,
                      onBookClick,
                      onPurchase,
                      onRent,
                      showActions = true
                  }) => {
    const [filters, setFilters] = useState({
        category: '',
        author: '',
        year: '',
        sortBy: 'title'
    });

    // Функция для фильтрации и сортировки
    const getFilteredBooks = () => {
        return books
            .filter(book => {
                return (
                    (filters.category ? book.category === filters.category : true) &&
                    (filters.author ? book.author.toLowerCase().includes(filters.author.toLowerCase()) : true) &&
                    (filters.year ? book.year.toString().includes(filters.year) : true)
                );
            })
            .sort((a, b) => {
                if (filters.sortBy === 'title') return a.title.localeCompare(b.title);
                if (filters.sortBy === 'author') return a.author.localeCompare(b.author);
                if (filters.sortBy === 'year') return a.year - b.year;
                if (filters.sortBy === 'price') return a.price - b.price;
                return 0;
            });
    };

    const filteredBooks = getFilteredBooks();

    return (
        <div className="p-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <select
                    value={filters.category}
                    onChange={(e) => setFilters({...filters, category: e.target.value})}
                    className="p-2 border rounded"
                >
                    <option value="">Все категории</option>
                    {[...new Set(books.map(b => b.category))].map(cat => (
                        <option key={cat} value={cat}>{cat}</option>
                    ))}
                </select>

                <input
                    type="text"
                    placeholder="Фильтр по автору"
                    value={filters.author}
                    onChange={(e) => setFilters({...filters, author: e.target.value})}
                    className="p-2 border rounded"
                />

                <input
                    type="text"
                    placeholder="Год издания"
                    value={filters.year}
                    onChange={(e) => setFilters({...filters, year: e.target.value})}
                    className="p-2 border rounded"
                />

                <select
                    value={filters.sortBy}
                    onChange={(e) => setFilters({...filters, sortBy: e.target.value})}
                    className="p-2 border rounded"
                >
                    <option value="title">По названию</option>
                    <option value="author">По автору</option>
                    <option value="year">По году</option>
                    <option value="price">По цене</option>
                </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredBooks.map(book => (
                    <div
                        key={book.id}
                        className={`border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition ${
                            book.status === 'rented' ? 'bg-yellow-50' :
                                book.status === 'purchased' ? 'bg-red-50' : ''
                        }`}
                    >
                        <img
                            src={book.image}
                            alt={book.title}
                            className="w-full h-64 object-cover cursor-pointer"
                            onClick={() => onBookClick && onBookClick(book)}
                        />
                        <div className="p-4">
                            <h3 className="text-xl font-bold">{book.title}</h3>
                            <p className="text-gray-600">{book.author}</p>
                            <p className="text-gray-500">Год: {book.year}</p>
                            <p className="text-lg font-semibold mt-2">${book.price}</p>

                            {book.status === 'rented' && book.rentalEndDate && (
                                <p className="text-yellow-600 mt-2">
                                    Арендована до: {new Date(book.rentalEndDate).toLocaleDateString('ru-RU', {
                                    day: '2-digit',
                                    month: '2-digit',
                                    year: 'numeric'
                                })}
                                </p>
                            )}

                            {book.status === 'purchased' && (
                                <p className="text-red-600 mt-2">Продана</p>
                            )}

                            {showActions && book.status === 'available' && (
                                <div className="mt-4 flex flex-wrap gap-2">
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            onPurchase(book.id);
                                        }}
                                        className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                                    >
                                        Купить
                                    </button>
                                    <select
                                        onChange={(e) => {
                                            e.stopPropagation();
                                            if (e.target.value) onRent(book.id, e.target.value);
                                        }}
                                        className="border rounded px-2 py-1"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <option value="">Арендовать</option>
                                        <option value="2 недели">2 недели</option>
                                        <option value="1 месяц">1 месяц</option>
                                        <option value="3 месяца">3 месяца</option>
                                    </select>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BookList;