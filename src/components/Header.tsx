import React, { useEffect, useState, useRef, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../css/components/Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const menuRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLElement>(null);

  // Fermer le menu au clic/touch extérieur (mobile support)
  const handleClickOutside = useCallback((event: MouseEvent | TouchEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node) && 
        headerRef.current && !headerRef.current.contains(event.target as Node)) {
      setMenuOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [handleClickOutside]);

  // Fermer le menu quand la route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  // Gestion du scroll pour l'effet de header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && menuOpen) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [menuOpen]);

  // Close on resize/orientation change
  useEffect(() => {
    const handleResize = () => {
      setMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
    };
  }, []);;

  const isActive = (path: string) => location.pathname === path;

  // Body class toggle for padding/no-scroll
  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('menu-open');
      document.body.style.overflow = 'hidden';
    } else {
      document.body.classList.remove('menu-open');
      document.body.style.overflow = '';
    }
    return () => {
      document.body.classList.remove('menu-open');
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <>
      <header ref={headerRef} className={`main-header ${scrolled ? 'scrolled' : ''}`}>
        <div className="header-container">
          {/* Logo */}
          <Link to="/" className="logo">
            <span className="logo-text">Gentil Le NoiR</span>
            <span className="logo-dot">.</span>
          </Link>

          {/* Navigation Desktop */}
          <nav className="desktop-nav">
            <Link 
              to="/" 
              className={`nav-link ${isActive('/') ? 'active' : ''}`}
            >
              Accueil
            </Link>
            <Link 
              to="/bio" 
              className={`nav-link ${isActive('/bio') ? 'active' : ''}`}
            >
              Biographie
            </Link>
            <Link 
              to="/portfolio" 
              className={`nav-link ${isActive('/portfolio') ? 'active' : ''}`}
            >
              Portfolio
            </Link>
            <Link 
              to="/contacts" 
              className={`nav-link ${isActive('/contacts') ? 'active' : ''}`}
            >
              Contacts
            </Link>
            <Link 
              to="/images" 
              className={`nav-link ${isActive('/images') ? 'active' : ''}`}
            >
              Images
            </Link>
          </nav>

          {/* Bouton Menu Mobile */}
          <button 
            className={`menu-toggle ${menuOpen ? 'active' : ''}`} 
            onClick={toggleMenu}
            aria-label="Menu"
            aria-expanded={menuOpen}
          >
            <span className="menu-toggle-line"></span>
            <span className="menu-toggle-line"></span>
            <span className="menu-toggle-line"></span>
          </button>
        </div>

        {/* Navigation Mobile */}
        <div ref={menuRef} className={`mobile-nav ${menuOpen ? 'open' : ''}`}>
          <div className="mobile-nav-header">
            <span className="mobile-nav-title">Menu</span>
            <button 
              className="mobile-nav-close" 
              onClick={() => setMenuOpen(false)}
              aria-label="Fermer le menu"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" width="24" height="24">
                <path d="M18 6L6 18M6 6l12 12" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
          
          <div className="mobile-nav-links">
            <Link 
              to="/" 
              className={`mobile-nav-link ${isActive('/') ? 'active' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              <span className="mobile-nav-icon">🏠</span>
              <span className="mobile-nav-text">Accueil</span>
            </Link>
            <Link 
              to="/bio" 
              className={`mobile-nav-link ${isActive('/bio') ? 'active' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              <span className="mobile-nav-icon">📖</span>
              <span className="mobile-nav-text">Biographie</span>
            </Link>
            <Link 
              to="/portfolio" 
              className={`mobile-nav-link ${isActive('/portfolio') ? 'active' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              <span className="mobile-nav-icon">💼</span>
              <span className="mobile-nav-text">Portfolio</span>
            </Link>
            <Link 
              to="/contacts" 
              className={`mobile-nav-link ${isActive('/contacts') ? 'active' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              <span className="mobile-nav-icon">📞</span>
              <span className="mobile-nav-text">Contacts</span>
            </Link>
            <Link 
              to="/images" 
              className={`mobile-nav-link ${isActive('/images') ? 'active' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              <span className="mobile-nav-icon">📸</span>
              <span className="mobile-nav-text">Images</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Overlay pour mobile */}
      {menuOpen && (
        <div 
          className="mobile-overlay" 
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
};

export default Header;