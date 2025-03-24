import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { BookProvider } from './context/BookContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import User from './pages/User';
import Admin from './pages/Admin';

const App = () => {
    return (
        <AuthProvider>
            <BookProvider>
                <Router>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<User />} /> {/* По умолчанию открываем страницу пользователя */}
                        <Route path="/user" element={<User />} />
                        <Route path="/admin" element={<Admin />} />
                    </Routes>
                    <Footer />
                </Router>
            </BookProvider>
        </AuthProvider>
    );
};

export default App;