import v1 from './images/v1.jpg';
import v2 from './images/v2.jpg';


export const products = [

  {
    id: '1',
    name: 'Cashmere Blend Overcoat',
    price: 395.00,
    category: 'Outerwear',
    image: v1,
    description: 'A luxurious cashmere blend overcoat perfect for transitioning between seasons. Features a tailored fit and minimalist detailing.'
  },
  {
    id: '2',
    name: 'Silk Crepe Blouse',
    price: 145.00,
    category: 'Tops',
    image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?q=80&w=800&auto=format&fit=crop',
    description: 'Effortlessly elegant silk blouse with a draped neckline. Ideal for both office wear and evening events.'
  },
  {
    id: '3',
    name: 'Merino Wool Turtleneck',
    price: 125.00,
    category: 'Knitwear',
    image: 'https://images.pexels.com/photos/14330642/pexels-photo-14330642.jpeg?_gl=1*bwua0c*_ga*MTEwNjAxNjg5Ny4xNzc1NjA1MTcy*_ga_8JE65Q40S6*czE3NzU2MDUxNzEkbzEkZzEkdDE3NzU2MDUxOTMkajM4JGwwJGgw',
    description: 'A staple winter piece made from 100% fine merino wool. Breathable and incredibly soft against the skin.'
  },
  {
    id: '4',
    name: 'Tailored Wide-Leg Trousers',
    price: 185.00,
    category: 'Bottoms',
    image: v2,
    description: 'High-waisted trousers with a fluid wide leg. Crafted from a structured yet comfortable twill blend.'
  },
  {
    id: '5',
    name: 'Oversized Cotton Button-Down',
    price: 95.00,
    category: 'Tops',
    image: 'https://images.unsplash.com/photo-1596455607563-ad6193f76b17?q=80&w=800&auto=format&fit=crop',
    description: 'A modern take on the classic white shirt. Features an exaggerated silhouette and crisp cotton poplin.'
  },
  {
    id: '6',
    name: 'Structured Leather Tote',
    price: 285.00,
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1584916201218-f4242ceb4809?q=80&w=800&auto=format&fit=crop',
    description: 'Sleek, minimalist leather tote with an interior laptop sleeve and subtle gold hardware.'
  }
];

export const categories = ['All', 'Outerwear', 'Tops', 'Knitwear', 'Bottoms', 'Accessories'];
