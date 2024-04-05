import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import News from './pages/News';
import BetaPage from './pages/BetaPage';
import GameInfo from './pages/GameInfo';
import PlayNow from './pages/PlayNow';


import Navbar from './components/Navbar';
import MobileMenu from './components/MobileMenu';
import Footer from './components/Footer';
import Account from './pages/Account';

function App() {
    const [openMenu, setOpenMenu] = useState(false);

    const handleBurgerMenu = () => {
        setOpenMenu((prev) => !prev);
    };

    const links = [
        { id: 0, name: 'News', path: '/news' },
        { id: 1, name: 'Game Info', path: '/game-info' },
        { id: 2, name: 'Beta', path: '/beta' },
        { id: 3, name: 'Account', path: '/account' },
        { id: 4, name: 'Play Now', path: '/play_now' },
    ];

    return (
        <div>
            <Navbar links={links} handleBurgerMenu={handleBurgerMenu} />
            <MobileMenu links={links} isOpen={openMenu} handleCloseMobileMenu={handleBurgerMenu} />
            <Routes>
                <Route path="/ember_site" element={<Home />} />
                <Route path="/news" element={<News />} />
                <Route path="/game-info" element={<GameInfo />} />
                <Route path="/beta" element={<BetaPage />} />
                <Route path="/account" element={<Account />} />
                <Route path="/play_now" element={<PlayNow />} />
            </Routes>
            <Footer links={links} />
        </div>
    );
}

export default App;
