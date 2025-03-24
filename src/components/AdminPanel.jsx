import React, { useState } from 'react';

const AdminPanel = ({ books, onEditBook }) => {
    const [editingBook, setEditingBook] = useState(null);

    const handleSave = () => {
        onEditBook(editingBook);
        setEditingBook(null);
    };

    return (
        <div className="p-4">
            <h2 className="text-xl font-bold mb-4">Панель администратора</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {books.map(book => (
                    <div key={book.id} className="border p-4">
                        <h3 className="text-lg font-bold">{book.title}</h3>
                        {editingBook?.id === book.id ? (
                            <div className="mt-4">
                                <input
                                    type="number"
                                    placeholder="Цена"
                                    value={editingBook.price}
                                    onChange={(e) =>
                                        setEditingBook({ ...editingBook, price: e.target.value })
                                    }
                                    className="p-2 border mb-2"
                                />
                                <select
                                    value={editingBook.status}
                                    onChange={(e) =>
                                        setEditingBook({ ...editingBook, status: e.target.value })
                                    }
                                    className="p-2 border mb-2"
                                >
                                    <option value="available">Доступна</option>
                                    <option value="unavailable">Недоступна</option>
                                </select>
                                <button onClick={handleSave} className="bg-green-500 text-white px-4 py-2">
                                    Сохранить
                                </button>
                            </div>
                        ) : (
                            <div className="mt-4">
                                <p>Цена: ${book.price}</p>
                                <p>Статус: {book.status === 'available' ? 'Доступна' : 'Недоступна'}</p>
                                <button
                                    onClick={() => setEditingBook(book)}
                                    className="bg-blue-500 text-white px-4 py-2 mt-2"
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