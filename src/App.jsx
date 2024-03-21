import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import BetaPage from './pages/BetaPage';
import Navbar from './components/Navbar';
import MobileMenu from './components/MobileMenu';
import Footer from './components/Footer';

function App() {
    const [openMenu, setOpenMenu] = useState(false);

    const handleBurgerMenu = () => {
        setOpenMenu((prev) => !prev);
    };

    const links = [
        { id: 0, name: 'News' },
        { id: 1, name: 'Game Info' },
        { id: 2, name: 'Beta', path: '/beta' },
        { id: 3, name: 'Account' },
        { id: 4, name: 'Play Now' },
    ];

    return (
        <div>
            <Navbar links={links} handleBurgerMenu={handleBurgerMenu} />
            <MobileMenu links={links} isOpen={openMenu} handleCloseMobileMenu={handleBurgerMenu} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/beta" element={<BetaPage />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
