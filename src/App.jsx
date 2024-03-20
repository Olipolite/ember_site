import React, { useState } from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import MobileMenu from "./components/MobileMenu";
import Footer from "./components/Footer";

function App() {
  const [openMenu, setOpenMenu] = useState(false);

  const handleBurgerMenu = () => {
    setOpenMenu((prev) => !prev);
  };

  const links = [
    { id: 0, name: 'News' },
    { id: 1, name: 'Game Info' },
    { id: 2, name: 'Beta' },
    { id: 3, name: 'Account' },
    { id: 4, name: 'Play Now' },
  ];

  return (
    <div>
      <Navbar links={links} handleBurgerMenu={handleBurgerMenu} />
      <Home />
      <MobileMenu links={links} isOpen={openMenu} handleCloseMobileMenu={handleBurgerMenu} />
      <Footer />
    </div>
  );
}

export default App;
