const fetchBooks = () => {
    return Promise.resolve([
        { id: 1, title: '1984', author: 'Джордж Оруэлл', year: 1949, price: 10 },
        { id: 2, title: 'Убийство в Восточном экспрессе', author: 'Агата Кристи', year: 1934, price: 15 },
    ]);
};

export { fetchBooks };