import React, { useState } from 'react';

const AdminPanel = ({ books, notifications, onUpdateBook }) => {
    const [editingBook, setEditingBook] = useState(null);

    const handleSave = () => {
        onUpdateBook(editingBook);
        setEditingBook(null);
    };

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-6">Панель администратора</h2>

            <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Уведомления</h3>
                {notifications.length > 0 ? (
                    <div className="space-y-2">
                        {notifications.map((note, index) => (
                            <div key={index} className="p-3 bg-red-100 rounded">
                                {note.message}
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>Нет новых уведомлений</p>
                )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {books.map(book => (
                    <div key={book.id} className="border rounded-lg p-4 shadow">
                        {editingBook?.id === book.id ? (
                            <div>
                                <input
                                    type="number"
                                    value={editingBook.price}
                                    onChange={(e) => setEditingBook({...editingBook, price: e.target.value})}
                                    className="p-2 border rounded mb-2 w-full"
                                />
                                <select
                                    value={editingBook.status}
                                    onChange={(e) => setEditingBook({...editingBook, status: e.target.value})}
                                    className="p-2 border rounded mb-2 w-full"
                                >
                                    <option value="available">Доступна</option>
                                    <option value="rented">Арендована</option>
                                    <option value="purchased">Продана</option>
                                </select>
                                <button
                                    onClick={handleSave}
                                    className="px-4 py-2 bg-green-500 text-white rounded mr-2"
                                >
                                    Сохранить
                                </button>
                                <button
                                    onClick={() => setEditingBook(null)}
                                    className="px-4 py-2 bg-gray-500 text-white rounded"
                                >
                                    Отмена
                                </button>
                            </div>
                        ) : (
                            <div>
                                <h3 className="text-lg font-bold">{book.title}</h3>
                                <p>Цена: ${book.price}</p>
                                <p>Статус:
                                    <span className={`ml-2 ${
                                        book.status === 'available' ? 'text-green-600' :
                                            book.status === 'rented' ? 'text-yellow-600' : 'text-red-600'
                                    }`}>
                    {book.status === 'available' ? 'Доступна' :
                        book.status === 'rented' ? 'Арендована' : 'Продана'}
                  </span>
                                </p>
                                {book.status === 'rented' && (
                                    <p>Аренда до: {new Date(book.rentalEndDate).toLocaleDateString()}</p>
                                )}
                                <button
                                    onClick={() => setEditingBook(book)}
                                    className="mt-2 px-4 py-1 bg-blue-500 text-white rounded"
                                >
                                    Редактировать
                                </button>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AdminPanel;