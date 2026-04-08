import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { products, categories } from '../data/products';
import { Filter } from 'lucide-react';

const Products = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="container animate-fade-in" style={{ padding: '3rem 2rem 6rem' }}>
      
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h1 className="heading-lg" style={{ marginBottom: '1rem' }}>The Collection</h1>
        <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
          Explore our thoughtfully curated collection of essentials, designed to bring 
          effortless sophistication to your everyday wardrobe.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        
        {/* Filters */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottom: '1px solid var(--border)',
          paddingBottom: '1.5rem'
        }}>
          <div style={{ display: 'flex', gap: '2rem', overflowX: 'auto', paddingBottom: '0.5rem' }}>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  background: 'none',
                  fontSize: '1rem',
                  fontWeight: activeCategory === cat ? 500 : 300,
                  color: activeCategory === cat ? 'var(--primary)' : 'var(--text-secondary)',
                  position: 'relative',
                  whiteSpace: 'nowrap'
                }}
              >
                {cat}
                {activeCategory === cat && (
                  <span style={{
                    position: 'absolute',
                    bottom: '-1.5rem',
                    left: 0,
                    width: '100%',
                    height: '2px',
                    backgroundColor: 'var(--primary)'
                  }} />
                )}
              </button>
            ))}
          </div>

          <button style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '0.5rem',
            background: 'none',
            color: 'var(--text-secondary)'
          }}>
            <Filter size={18} />
            Filter
          </button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-4" style={{ marginTop: '1rem' }}>
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        {filteredProducts.length === 0 && (
          <div style={{ textAlign: 'center', padding: '4rem', color: 'var(--text-secondary)' }}>
            No products found in this category.
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
