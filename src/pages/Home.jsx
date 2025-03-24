import React from 'react';
import BookList from '../components/BookList';
import { useBookContext } from '../context/BookContext';

const Home = () => {
    const { books } = useBookContext();

    return (
        <div className="p-4">
            <h1 className="text-3xl font-bold mb-6">Все книги</h1>
            <BookList
                books={books}
                showActions={false}
            />
        </div>
    );
};

export default Home;