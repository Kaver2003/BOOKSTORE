import React, { useState } from 'react';

const BookList = ({
                      books,
                      onBookClick,
                      onPurchase,
                      onRent,
                      showActions = true,
                      showDescription = false
                  }) => {
    const [filters, setFilters] = useState({
        category: '',
        author: '',
        year: '',
        sortBy: 'title'
    });


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
        <div className="p-4 bg-gray-300 min-h-screen">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <select
                    value={filters.category}
                    onChange={(e) => setFilters({ ...filters, category: e.target.value })}
                    className="p-2 border rounded bg-white shadow-inner"
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
                    onChange={(e) => setFilters({ ...filters, author: e.target.value })}
                    className="p-2 border rounded bg-white shadow-inner"
                />

                <input
                    type="text"
                    placeholder="Год издания"
                    value={filters.year}
                    onChange={(e) => setFilters({ ...filters, year: e.target.value })}
                    className="p-2 border rounded bg-white shadow-inner"
                />

                <select
                    value={filters.sortBy}
                    onChange={(e) => setFilters({ ...filters, sortBy: e.target.value })}
                    className="p-2 border rounded bg-white shadow-inner"
                >
                    <option value="title">По названию</option>
                    <option value="author">По автору</option>
                    <option value="year">По году</option>
                    <option value="price">По цене</option>
                </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                {filteredBooks.map(book => (
                    <div
                        key={book.id}
                        className={`relative flex flex-col justify-between bg-white group overflow-hidden rounded-xl shadow-2xl transition-all 
          duration-300 hover:scale-105 hover:shadow-amber-900/20 ${book.status !== 'available' ?
                            'opacity-90' : 'hover:border-amber-300'}`}
                    >
                        <div className="relative mt-3 h-48">
                            <img
                                src={process.env.PUBLIC_URL + book.image}
                                alt={book.title}
                                className="absolute inset-0 w-full h-full object-contain pt-2 object-center cursor-pointer"
                                onClick={() => onBookClick && onBookClick(book)}
                            />
                        </div>
                        <div className="p-4">
                            <h3 className="text-xl font-bold mb-2">{book.title}</h3>
                            <p className="text-gray-600 mb-2">{book.author}</p>
                            <p className="text-gray-500 mb-2">Год: {book.year}</p>
                            {showDescription && book.description && (
                                <div className="mt-2">
                                    <p className="text-sm text-gray-700 line-clamp-3">{book.description}</p>
                                </div>
                            )}
                            <p className="text-lg font-semibold mb-4">Стоимость: {book.price} руб</p>

                            {book.status === 'rented' && book.rentalEndDate && (
                                <p className="text-yellow-600 mb-4">
                                    Арендована до: {new Date(book.rentalEndDate).toLocaleDateString('ru-RU', {
                                    day: '2-digit',
                                    month: '2-digit',
                                    year: 'numeric'
                                })}</p>
                            )}

                            {book.status === 'purchased' && (
                                <p className="text-red-600 mb-4">Продана</p>
                            )}

                            {showActions && book.status === 'available' && (
                                <div className="flex flex-wrap gap-2">
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