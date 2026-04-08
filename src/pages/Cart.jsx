import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Minus, Plus, ArrowLeft } from 'lucide-react';
import { CartContext } from '../context/CartContext';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, cartTotal } = useContext(CartContext);

  if (cartItems.length === 0) {
    return (
      <div className="container animate-fade-in" style={{ 
        padding: '6rem 2rem', 
        textAlign: 'center',
        minHeight: '60vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <h2 className="heading-lg" style={{ marginBottom: '1.5rem' }}>Your Cart is Empty</h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
          Looks like you haven't added anything to your cart yet.
        </p>
        <Link to="/products" className="btn-primary">
          Explore Collection
        </Link>
      </div>
    );
  }

  return (
    <div className="container animate-fade-in" style={{ padding: '3rem 2rem 6rem' }}>
      <h1 className="heading-lg" style={{ marginBottom: '3rem' }}>Your Cart</h1>

      <div className="grid" style={{ gridTemplateColumns: '2fr 1fr', gap: '4rem', alignItems: 'start' }}>
        
        {/* Cart Items */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {cartItems.map(item => (
            <div key={item.id} style={{
              display: 'flex',
              gap: '2rem',
              paddingBottom: '2rem',
              borderBottom: '1px solid var(--border)'
            }}>
              <img 
                src={item.image} 
                alt={item.name} 
                style={{ width: '120px', height: '160px', objectFit: 'cover', borderRadius: 'var(--radius)' }}
              />
              
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 500 }}>{item.name}</h3>
                  <span style={{ fontWeight: 500 }}>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                  {item.category}
                </p>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' }}>
                  
                  {/* Quantity Control */}
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--radius)',
                    overflow: 'hidden'
                  }}>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      style={{ padding: '0.5rem', background: 'transparent' }}
                    >
                      <Minus size={16} />
                    </button>
                    <span style={{ padding: '0 1rem', fontSize: '0.9rem' }}>{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      style={{ padding: '0.5rem', background: 'transparent' }}
                    >
                      <Plus size={16} />
                    </button>
                  </div>

                  <button 
                    onClick={() => removeFromCart(item.id)}
                    style={{ 
                      background: 'none', 
                      color: 'var(--text-secondary)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      fontSize: '0.9rem'
                    }}
                  >
                    <Trash2 size={16} /> Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
          
          <Link to="/products" style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '0.5rem', 
            color: 'var(--text-secondary)',
            marginTop: '1rem',
            fontWeight: 500
          }}>
            <ArrowLeft size={16} /> Continue Shopping
          </Link>
        </div>

        {/* Order Summary */}
        <div style={{
          background: 'var(--surface)',
          padding: '2rem',
          borderRadius: 'var(--radius)',
          boxShadow: 'var(--shadow-md)',
          border: '1px solid var(--border)'
        }}>
          <h2 style={{ fontSize: '1.3rem', fontWeight: 500, marginBottom: '2rem' }}>Order Summary</h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-secondary)' }}>
              <span>Subtotal</span>
              <span style={{ color: 'var(--text-primary)' }}>${cartTotal.toFixed(2)}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-secondary)' }}>
              <span>Shipping</span>
              <span style={{ color: 'var(--text-primary)' }}>Calculated at checkout</span>
            </div>
          </div>

          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            borderTop: '1px solid var(--border)',
            paddingTop: '1.5rem',
            marginBottom: '2rem',
            fontSize: '1.2rem',
            fontWeight: 500
          }}>
            <span>Total</span>
            <span>${cartTotal.toFixed(2)}</span>
          </div>

          <button className="btn-primary" style={{ width: '100%' }}>
            Proceed to Checkout
          </button>
          
          <div style={{ marginTop: '1.5rem', display: 'flex', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.8rem', justifyContent: 'center' }}>
            <span>Secure checkout powered by Stripe</span>
          </div>
        </div>

      </div>

      {/* Responsive adjustments */}
      <style>{`
        @media (max-width: 900px) {
          .grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
};

export default Cart;
