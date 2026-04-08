import React, { useContext, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Menu, X, Search } from 'lucide-react';
import { CartContext } from '../context/CartContext';

const Navbar = () => {
  const { itemCount } = useContext(CartContext);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 50,
      transition: 'var(--transition)',
      background: isScrolled ? 'rgba(253, 251, 247, 0.9)' : 'transparent',
      backdropFilter: isScrolled ? 'blur(10px)' : 'none',
      borderBottom: isScrolled ? '1px solid var(--border)' : '1px solid transparent',
      padding: isScrolled ? '1rem 0' : '1.5rem 0'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        
        {/* Logo */}
        <Link to="/" style={{ fontSize: '1.5rem', fontWeight: 600, letterSpacing: '2px' }}>
          ATELIER
        </Link>

        {/* Desktop Links */}
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }} className="desktop-nav">
          <Link to="/" style={{ fontWeight: location.pathname === '/' ? 500 : 300 }}>Home</Link>
          <Link to="/products" style={{ fontWeight: location.pathname === '/products' ? 500 : 300 }}>Collection</Link>
          <div style={{ cursor: 'pointer', fontWeight: 300 }}>About</div>
        </div>

        {/* Actions */}
        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
          <Search size={22} strokeWidth={1.5} style={{ cursor: 'pointer' }} />
          <Link to="/cart" style={{ position: 'relative' }}>
            <ShoppingBag size={22} strokeWidth={1.5} />
            {itemCount > 0 && (
              <span style={{
                position: 'absolute',
                top: '-5px',
                right: '-8px',
                background: 'var(--accent)',
                color: 'white',
                fontSize: '0.7rem',
                minWidth: '18px',
                height: '18px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 600
              }}>
                {itemCount}
              </span>
            )}
          </Link>
          
          <button 
            className="mobile-toggle"
            style={{ display: 'none', background: 'none' }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

      </div>

      {/* Basic Mobile Menu Styles injection */}
      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          width: '100%',
          background: 'var(--surface)',
          borderBottom: '1px solid var(--border)',
          display: 'flex',
          flexDirection: 'column',
          padding: '1rem 2rem',
          gap: '1rem',
          boxShadow: 'var(--shadow-md)'
        }}>
          <Link to="/">Home</Link>
          <Link to="/products">Collection</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
