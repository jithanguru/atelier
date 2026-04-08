import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import { ArrowRight } from 'lucide-react';

const Home = () => {
  // Get 4 random products for featured section
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section style={{
        position: 'relative',
        height: '90vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
      }}>
        {/* Aesthetic background image */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: 'url("https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.8) contrast(1.1)',
          zIndex: -1
        }} />

        <div style={{
          textAlign: 'center',
          color: 'white',
          padding: '2rem',
          backdropFilter: 'blur(4px)',
          backgroundColor: 'rgba(0,0,0,0.2)',
          borderRadius: 'var(--radius)'
        }}>
          <h2 style={{ 
            fontSize: '1rem', 
            textTransform: 'uppercase', 
            letterSpacing: '4px',
            marginBottom: '1rem',
            color: '#e4e4e4'
          }}>
            New Collection
          </h2>
          <h1 className="heading-xl" style={{ marginBottom: '2rem', textShadow: '0 4px 10px rgba(0,0,0,0.3)' }}>
            The Spring Edit
          </h1>
          <Link to="/products" className="btn-primary" style={{ background: 'white', color: 'black' }}>
            Shop Now <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Featured Products */}
      <section className="container" style={{ padding: '6rem 2rem' }}>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'flex-end',
          marginBottom: '3rem' 
        }}>
          <div>
            <h2 className="heading-lg" style={{ marginBottom: '0.5rem' }}>Featured Arrivals</h2>
            <p style={{ color: 'var(--text-secondary)' }}>Curated pieces for the modern wardrobe.</p>
          </div>
          <Link to="/products" style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '0.5rem',
            fontWeight: 500,
            color: 'var(--primary)',
            borderBottom: '1px solid var(--primary)',
            paddingBottom: '2px'
          }}>
            View All
          </Link>
        </div>

        <div className="grid grid-cols-4">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Aesthetic Banner */}
      <section style={{
        padding: '6rem 0',
        backgroundColor: 'var(--accent-light)',
        textAlign: 'center'
      }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 className="heading-lg" style={{ marginBottom: '1.5rem' }}>Sustainable Elegance</h2>
          <p style={{ 
            fontSize: '1.1rem', 
            color: 'var(--text-secondary)',
            marginBottom: '2.5rem',
            lineHeight: 1.8
          }}>
            We believe in creating timeless pieces that outlast trends. Our commitment to 
            sustainable materials and ethical craftsmanship ensures that every garment not 
            only looks beautiful but also respects the world we live in.
          </p>
          <button className="btn-outline">Discover Our Story</button>
        </div>
      </section>
    </div>
  );
};

export default Home;
