export interface Item {
  id: string;
  title: string;
  description: string;
  category: Category;
  condition: 'New' | 'Like New' | 'Good' | 'Fair' | 'Poor';
  images: string[];
  ownerId: string;
  createdAt: Date;
  location: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}

export const categories: Category[] = [
  { id: '1', name: 'Electronics', icon: 'smartphone' },
  { id: '2', name: 'Fashion', icon: 'shirt' },
  { id: '3', name: 'Home & Garden', icon: 'home' },
  { id: '4', name: 'Sports', icon: 'dumbbell' },
  { id: '5', name: 'Books', icon: 'book-open' },
  { id: '6', name: 'Collectibles', icon: 'trophy' },
  { id: '7', name: 'Vehicles', icon: 'car' },
  { id: '8', name: 'Toys & Games', icon: 'gamepad-2' },
];