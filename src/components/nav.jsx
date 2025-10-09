import React, { useState } from 'react';
import './nav.css'; 

const Nav = ({ onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', page: 'home' },
    { name: 'À propos', page: 'about' },
    { name: 'Galerie', page: 'gallery' },
    { name: 'Menu', page: 'menu' },
    { name: 'Contact', page: 'contact' },
  ];

  const scrollToTop = (smooth = true) => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: smooth ? 'smooth' : 'auto' });
    }
  };

  const handleLogoClick = () => {
    onNavigate('home');
    scrollToTop();
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="nav">
      <div className="nav-container">
        {/* Logo */}
        <div className="logo" onClick={handleLogoClick}>
          <img 
            src="/LOTUS LOGO.jpg"
            alt="Logo" 
            className="logo-image"
          />
        </div>

        {/* Navigation Items */}
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          {navItems.map((item, index) => (
            <li key={index} className="nav-item">
              <button
                className="nav-link"
                onClick={() => {
                  onNavigate(item.page);
                  setIsMenuOpen(false);
                  scrollToTop();
                }}
                style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div 
          className={`hamburger ${isMenuOpen ? 'active' : ''}`} 
          onClick={toggleMenu}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

      </div>
    </nav>
  );
};

export default Nav;