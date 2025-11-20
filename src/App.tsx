import { useEffect } from 'react';
import {
  ShoppingCart,
  Globe,
} from 'lucide-react';

// --- DATA MENU ---
export const MENU_ITEMS = [
  {
    id: 1,
    name: 'Nasi Goreng Ciputra',
    description:
      'Signature fried rice with satay, fried chicken, and sunny side up egg.',
    price: 95000,
    category: 'Main Course',
    image:
      'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80',
    tag: 'Best Seller',
    allergens: 'Egg, Peanut, Shrimp',
  },
  {
    id: 2,
    name: 'Soto Ayam',
    description:
      'Traditional turmeric chicken soup with glass noodles, cabbage, and egg.',
    price: 85000,
    category: 'Main Course',
    image:
      'https://images.unsplash.com/photo-1572656631137-7935297eff55?auto=format&fit=crop&w=800&q=80',
    tag: 'Chef Rec',
    allergens: 'Egg',
  },
  {
    id: 3,
    name: 'Lumpia Semarang',
    description:
      'Traditional spring rolls filled with bamboo shoots, served with sweet sauce.',
    price: 45000,
    category: 'Appetizer',
    image:
      'https://images.unsplash.com/photo-1606101273945-e9eba91c0dc4?auto=format&fit=crop&w=800&q=80',
    tag: 'Local',
    allergens: 'Wheat, Shrimp',
  },
  {
    id: 4,
    name: 'Es Puter Conglik',
    description:
      'Traditional coconut ice cream with durian and avocado topping.',
    price: 40000,
    category: 'Dessert',
    image:
      'https://images.unsplash.com/photo-1560008581-09826d1de69e?auto=format&fit=crop&w=800&q=80',
    tag: '',
    allergens: 'Dairy',
  },
  {
    id: 5,
    name: 'Iced Cappuccino',
    description: 'Freshly brewed espresso with cold milk and foam.',
    price: 45000,
    category: 'Beverage',
    image:
      'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=800&q=80',
    tag: '',
    allergens: 'Dairy, Caffeine',
  },
];

export const CATEGORIES = ['Appetizer', 'Main Course', 'Dessert', 'Beverage'];


