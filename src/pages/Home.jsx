import React from 'react';
import BookList from '../components/BookList';
import books from '../data/books'; // Импортируем мок-данные

const Home = () => {
    return (
        <div className="p-4">
            <h1 className="text-3xl font-bold mb-4">Добро пожаловать в книжный магазин!</h1>
            <BookList books={books} onBookClick={(book) => console.log(book)} />
        </div>
    );
};

export default Home;