import React from 'react';
import { MainLayout } from '../components/layout/MainLayout';
import { ItemGrid } from '../components/items/ItemGrid';

// Mock data for demonstration
const mockItems = [
  {
    id: '1',
    title: 'iPhone 13 Pro',
    description: 'Excellent condition, barely used',
    category: { id: '1', name: 'Electronics', icon: 'smartphone' },
    condition: 'Like New',
    images: ['https://images.unsplash.com/photo-1632661674596-618d8b64d641?auto=format&fit=crop&q=80'],
    ownerId: '1',
    createdAt: new Date(),
    location: 'New York, NY'
  },
  {
    id: '2',
    title: 'Vintage Watch Collection',
    description: 'Collection of rare vintage watches',
    category: { id: '6', name: 'Collectibles', icon: 'watch' },
    condition: 'Good',
    images: ['https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?auto=format&fit=crop&q=80'],
    ownerId: '2',
    createdAt: new Date(),
    location: 'Los Angeles, CA'
  },
  // Add more mock items as needed
] as const;

export function Dashboard() {
  return (
    <MainLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Featured Items</h1>
        <p className="text-gray-600">Discover unique items for trade</p>
      </div>
      <ItemGrid items={mockItems} />
    </MainLayout>
  );
}