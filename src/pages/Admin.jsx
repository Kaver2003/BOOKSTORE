import React, { useState } from 'react';
import { useBookContext } from '../context/BookContext';

const Admin = () => {
    const { books, updateBook } = useBookContext();
    const [editingBook, setEditingBook] = useState(null);
    const [newBook, setNewBook] = useState({
        title: '',
        author: '',
        year: '',
        category: '',
        price: '',
        image: '',
        description: '', // Добавлено поле описания
        status: 'available'
    });

    const handleSaveChanges = () => {
        if (editingBook) {
            updateBook(editingBook);
            setEditingBook(null);
        }
    };

    const handleAddBook = () => {
        const bookToAdd = {
            ...newBook,
            id: Date.now(),
            year: parseInt(newBook.year),
            price: parseFloat(newBook.price)
        };
        updateBook(bookToAdd);
        setNewBook({
            title: '',
            author: '',
            year: '',
            category: '',
            price: '',
            image: '',
            description: '',
            status: 'available'
        });
    };

    const handleReturnBook = (bookId) => {
        const book = books.find(b => b.id === bookId);
        updateBook({
            ...book,
            status: 'available',
            rentalEndDate: null,
            rentalPeriod: null
        });
    };

    return (
        <div className="p-4 bg-gray-300 min-h-screen">
            <h1 className="text-3xl font-bold pb-2 pt-14">Панель администратора</h1>

            {/* Форма добавления новой книги */}
            <div className="mb-8 bg-gray-100 p-4 rounded-lg">
                <h2 className="text-xl font-semibold mb-4">Добавить новую книгу</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                        type="text"
                        placeholder="Название"
                        value={newBook.title}
                        onChange={(e) => setNewBook({...newBook, title: e.target.value})}
                        className="p-2 border rounded"
                    />
                    <input
                        type="text"
                        placeholder="Автор"
                        value={newBook.author}
                        onChange={(e) => setNewBook({...newBook, author: e.target.value})}
                        className="p-2 border rounded"
                    />
                    <input
                        type="number"
                        placeholder="Год"
                        value={newBook.year}
                        onChange={(e) => setNewBook({...newBook, year: e.target.value})}
                        className="p-2 border rounded"
                    />
                    <input
                        type="text"
                        placeholder="Категория"
                        value={newBook.category}
                        onChange={(e) => setNewBook({...newBook, category: e.target.value})}
                        className="p-2 border rounded"
                    />
                    <input
                        type="number"
                        placeholder="Цена"
                        value={newBook.price}
                        onChange={(e) => setNewBook({...newBook, price: e.target.value})}
                        className="p-2 border rounded"
                    />
                    <input
                        type="text"
                        placeholder="URL изображения"
                        value={newBook.image}
                        onChange={(e) => setNewBook({...newBook, image: e.target.value})}
                        className="p-2 border rounded"
                    />
                    <textarea
                        placeholder="Описание"
                        value={newBook.description}
                        onChange={(e) => setNewBook({...newBook, description: e.target.value})}
                        className="p-2 border rounded md:col-span-2"
                        rows="3"
                    />
                    {newBook.image && (
                        <div className="md:col-span-2 h-40 bg-gray-200 rounded-lg flex items-center justify-center">
                            <img
                                src={newBook.image}
                                alt="Предпросмотр обложки"
                                className="h-full object-contain"
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = 'https://via.placeholder.com/150x200?text=No+Cover';
                                }}
                            />
                        </div>
                    )}
                </div>
                <button
                    onClick={handleAddBook}
                    className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                >
                    Добавить книгу
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                {books.map(book => (
                    <div
                        key={book.id}
                        className={`border flex flex-col justify-between rounded-lg p-4 shadow ${
                            book.status === 'rented' ? 'bg-yellow-50' :
                                book.status === 'purchased' ? 'bg-red-50' : 'bg-white'
                        }`}
                    >
                        <div className="mb-4 h-48  rounded-lg overflow-hidden flex items-center justify-center">
                            <img
                                src={process.env.PUBLIC_URL + book.image}
                                alt={`Обложка: ${book.title}`}
                                className="h-full object-contain"
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = 'https://via.placeholder.com/150x200?text=No+Cover';
                                }}
                            />
                        </div>

                        {editingBook?.id === book.id ? (
                            <div className="space-y-3">
                                <input
                                    type="text"
                                    value={editingBook.title}
                                    onChange={(e) => setEditingBook({...editingBook, title: e.target.value})}
                                    className="p-2 border rounded w-full"
                                />
                                <input
                                    type="text"
                                    value={editingBook.author}
                                    onChange={(e) => setEditingBook({...editingBook, author: e.target.value})}
                                    className="p-2 border rounded w-full"
                                />
                                <input
                                    type="number"
                                    value={editingBook.price}
                                    onChange={(e) => setEditingBook({...editingBook, price: e.target.value})}
                                    className="p-2 border rounded w-full"
                                />
                                <textarea
                                    value={editingBook.description}
                                    onChange={(e) => setEditingBook({...editingBook, description: e.target.value})}
                                    className="p-2 border rounded w-full"
                                    rows="3"
                                    placeholder="Описание"
                                />
                                <select
                                    value={editingBook.status}
                                    onChange={(e) => setEditingBook({...editingBook, status: e.target.value})}
                                    className="p-2 border rounded w-full"
                                >
                                    <option value="available">Доступна</option>
                                    <option value="rented">Арендована</option>
                                    <option value="purchased">Продана</option>
                                </select>
                                <div className="flex gap-2">
                                    <button
                                        onClick={handleSaveChanges}
                                        className="px-3 py-1 bg-blue-500 text-white rounded"
                                    >
                                        Сохранить
                                    </button>
                                    <button
                                        onClick={() => setEditingBook(null)}
                                        className="px-3 py-1 bg-gray-500 text-white rounded"
                                    >
                                        Отмена
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <div>
                                <h3 className="text-xl font-bold">{book.title}</h3>
                                <p className="text-gray-600">{book.author}</p>
                                <p className="text-gray-500">Год: {book.year}</p>
                                <p className="font-semibold">Цена: {book.price} руб.</p>


                                {book.description && (
                                    <div className="mt-2 p-2 bg-gray-100 rounded">
                                        <p className="text-sm text-gray-700">{book.description}</p>
                                    </div>
                                )}

                                <p className={`mt-2 ${
                                    book.status === 'available' ? 'text-green-600' :
                                        book.status === 'rented' ? 'text-yellow-600' : 'text-red-600'
                                }`}>
                                    Статус: {book.status === 'available' ? 'Доступна' :
                                    book.status === 'rented' ? 'Арендована' : 'Продана'}
                                </p>

                                {book.status === 'rented' && book.rentalEndDate && (
                                    <p className="text-sm mt-1">
                                        До: {new Date(book.rentalEndDate).toLocaleDateString('ru-RU', {
                                        day: '2-digit',
                                        month: '2-digit',
                                        year: 'numeric'
                                    })}
                                    </p>
                                )}

                                <div className="mt-4 flex flex-wrap gap-2">
                                    <button
                                        onClick={() => setEditingBook(book)}
                                        className="px-3 py-1 bg-blue-500 text-white rounded"
                                    >
                                        Редактировать
                                    </button>

                                    {book.status === 'rented' && (
                                        <button
                                            onClick={() => handleReturnBook(book.id)}
                                            className="px-3 py-1 bg-green-500 text-white rounded"
                                        >
                                            Вернуть
                                        </button>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Admin;