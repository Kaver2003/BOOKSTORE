import React from 'react';
import BookList from '../components/BookList';
import { useBookContext } from '../context/BookContext';

const Home = () => {
    const { books } = useBookContext();

    return (
        <div className="pt-2">
            <h1 className="text-2xl pl-4 bg-gray-300 font-bold mt-16">Все книги</h1>
            <BookList
                books={books}
                showActions={false}
                showDescription={true}
            />
        </div>
    );
};

export default Home;