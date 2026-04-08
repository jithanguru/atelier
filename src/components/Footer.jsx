import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      background: 'var(--primary)',
      color: 'white',
      padding: '4rem 0 2rem',
      marginTop: '6rem'
    }}>
      <div className="container grid grid-cols-4" style={{ marginBottom: '3rem' }}>
        <div>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 600, letterSpacing: '2px', marginBottom: '1rem' }}>
            ATELIER
          </h3>
          <p style={{ color: '#aaa', fontSize: '0.9rem', maxWidth: '250px' }}>
            Elevating everyday wear with sustainable, luxurious materials and timeless design.
          </p>
        </div>

        <div>
          <h4 style={{ marginBottom: '1.5rem', fontWeight: 500 }}>Shop</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', color: '#aaa', fontSize: '0.9rem' }}>
            <span style={{ cursor: 'pointer' }}>New Arrivals</span>
            <span style={{ cursor: 'pointer' }}>Bestsellers</span>
            <span style={{ cursor: 'pointer' }}>Outerwear</span>
            <span style={{ cursor: 'pointer' }}>Accessories</span>
          </div>
        </div>

        <div>
          <h4 style={{ marginBottom: '1.5rem', fontWeight: 500 }}>Support</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', color: '#aaa', fontSize: '0.9rem' }}>
            <span style={{ cursor: 'pointer' }}>FAQ</span>
            <span style={{ cursor: 'pointer' }}>Shipping & Returns</span>
            <span style={{ cursor: 'pointer' }}>Contact Us</span>
            <span style={{ cursor: 'pointer' }}>Size Guide</span>
          </div>
        </div>

        <div>
          <h4 style={{ marginBottom: '1.5rem', fontWeight: 500 }}>Newsletter</h4>
          <p style={{ color: '#aaa', fontSize: '0.9rem', marginBottom: '1rem' }}>
            Subscribe to receive updates, access to exclusive deals, and more.
          </p>
          <div style={{ display: 'flex' }}>
            <input 
              type="email" 
              placeholder="Enter your email" 
              style={{
                background: 'transparent',
                border: '1px solid #444',
                padding: '0.8rem 1rem',
                color: 'white',
                outline: 'none',
                width: '100%',
                borderRadius: 'var(--radius) 0 0 var(--radius)'
              }}
            />
            <button style={{
              background: 'white',
              color: 'var(--primary)',
              padding: '0 1rem',
              fontWeight: 500,
              borderRadius: '0 var(--radius) var(--radius) 0'
            }}>
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="container" style={{ 
        borderTop: '1px solid #333', 
        paddingTop: '2rem',
        display: 'flex',
        justifyContent: 'space-between',
        color: '#888',
        fontSize: '0.85rem'
      }}>
        <p>&copy; {new Date().getFullYear()} Atelier. All rights reserved.</p>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          <span style={{ cursor: 'pointer' }}>Privacy Policy</span>
          <span style={{ cursor: 'pointer' }}>Terms of Service</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
