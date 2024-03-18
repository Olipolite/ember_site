import React, { useState } from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import MobileMenu from "./components/MobileMenu";


function App() {
  const [openMenu, setOpenMenu] = useState(false);

  const handleBurgerMenu = () => {
    setOpenMenu((prev) => !prev);
  };

  const links = [
    {id: 0, name: 'News' },
    {id: 1, name: 'Game Info' },
    {id: 2, name: 'Beta' },
    {id: 3, name: 'Account' },
    {id: 4, name: 'Play Now' },
];

  return (
    <div>
      <Home />
      <Navbar links={links} handleBurgerMenu={handleBurgerMenu} />
      <MobileMenu links={links} isOpen={openMenu} handleCloseMobileMenu={() => setOpenMenu(false)} />
    </div>
  );
}

export default App;

