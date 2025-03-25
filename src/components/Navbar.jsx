import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ?
            'bg-gray-800 py-5 shadow-lg' :
            'bg-gray-800 py-5'}`}
        >
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                    <div className="w-full md:w-auto flex justify-between items-center">
                        <Link
                            to="/"
                            className={`font-serif text-2xl font-bold transition-all ${scrolled ?
                                'text-white ' :
                                'text-white '}`}
                        >
                            <span className="text-amber-300">Книжный</span>Магазин
                        </Link>

                        <button
                            className="md:hidden text-amber-100 focus:outline-none"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? (
                                <span className="material-icons text-xl">закрыть</span>
                            ) : (
                                <span className="material-icons text-xl">Меню</span>
                            )}
                        </button>
                    </div>

                    <div className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row w-full md:w-auto mt-4 md:mt-0 space-y-2 md:space-y-0 md:space-x-6`}>
                        <Link
                            to="/user"
                            className="px-3 py-2 md:py-1 rounded-lg
              font-medium text-white  hover:text-amber-100 flex items-center gap-1"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <span className="material-icons">Пользователь</span>
                        </Link>
                        <Link
                            to="/admin"
                            className="px-3 py-2 md:py-1 rounded-lg
              font-medium text-white  hover:text-amber-100 flex items-center gap-1"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <span className="material-icons">Администратор</span>

                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;