import React, { useContext, useState } from 'react';
import { ShoppingCart } from 'lucide-react';
import { CartContext } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      style={{
        display: 'flex',
        flexDirection: 'column',
        cursor: 'pointer',
        position: 'relative'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={{
        position: 'relative',
        overflow: 'hidden',
        borderRadius: 'var(--radius)',
        aspectRatio: '3/4',
        marginBottom: '1rem',
        backgroundColor: '#f1f1f1'
      }}>
        <img 
          src={product.image} 
          alt={product.name}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            transform: isHovered ? 'scale(1.05)' : 'scale(1)'
          }}
        />
        
        {/* Quick Add Button Layer */}
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          padding: '1rem',
          transform: isHovered ? 'translateY(0)' : 'translateY(100%)',
          transition: 'transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
          background: 'linear-gradient(to top, rgba(0,0,0,0.4), transparent)'
        }}>
          <button 
            onClick={(e) => {
              e.preventDefault();
              addToCart(product);
            }}
            style={{
              width: '100%',
              backgroundColor: 'var(--surface)',
              color: 'var(--primary)',
              padding: '0.8rem',
              borderRadius: 'var(--radius)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              fontWeight: 500,
              boxShadow: 'var(--shadow-md)'
            }}
          >
            <ShoppingCart size={18} />
            Quick Add
          </button>
        </div>
      </div>

      <div style={{ padding: '0 0.5rem' }}>
        <p style={{ 
          fontSize: '0.85rem', 
          color: 'var(--text-secondary)',
          textTransform: 'uppercase',
          letterSpacing: '1px',
          marginBottom: '0.3rem'
        }}>
          {product.category}
        </p>
        <h3 style={{ 
          fontSize: '1.1rem', 
          fontWeight: 400,
          marginBottom: '0.4rem',
          color: 'var(--text-primary)'
        }}>
          {product.name}
        </h3>
        <p style={{ 
          fontSize: '1rem', 
          fontWeight: 500,
          color: 'var(--primary)'
        }}>
          ${product.price.toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
