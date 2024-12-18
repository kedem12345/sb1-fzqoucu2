import React from 'react';
import { Item } from '../../types/item';
import { MapPin, Star } from 'lucide-react';

interface ItemCardProps {
  item: Item;
}

export function ItemCard({ item }: ItemCardProps) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
      <img
        src={item.images[0]}
        alt={item.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-1">{item.title}</h3>
        <p className="text-sm text-gray-600 mb-2">{item.description}</p>
        <div className="flex items-center text-sm text-gray-500">
          <MapPin className="h-4 w-4 mr-1" />
          {item.location}
        </div>
        <div className="mt-3 flex items-center justify-between">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
            {item.condition}
          </span>
          <div className="flex items-center text-sm">
            <Star className="h-4 w-4 text-yellow-400 mr-1" />
            4.5
          </div>
        </div>
      </div>
    </div>
  );
}