import React from 'react';
import Home from './pages/Home.js';
import Header from './Header.js';
import Footer from './Footer.js';

export default function App() {
    return (
        <div className="App">
            <Header />

            <Home />
            
            <Footer />
        </div>
    );
}

