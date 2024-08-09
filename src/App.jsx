import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './component/pages/Header';
import Footer from './component/pages/Footer';
import Home from './component/pages/Home';
import About from './component/pages/About';
import ProductList from './component/pages/ProductList';
import Contact from './component/pages/Contact';

const App = () => {
    const message = "Welcome to the Home Page!";
    const products = ["Product 1", "Product 2", "Product 3"];

    return (
        <Router>
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<Home message={message} />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/products" element={<ProductList products={products} />} />
                </Routes>
            </main>
            <Footer />
        </Router>
    );
};

export default App;
