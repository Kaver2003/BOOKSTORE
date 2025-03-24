import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between">
                <Link to="/" className="text-xl font-bold">
                    Книжный магазин
                </Link>
                <div className="flex gap-4">
                    <Link to="/user">Пользователь</Link>
                    <Link to="/admin">Администратор</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;