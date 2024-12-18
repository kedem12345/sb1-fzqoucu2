import React from 'react';
import { NavLink } from 'react-router-dom';
import { categories } from '../../types/item';
import * as Icons from 'lucide-react';

export function Sidebar() {
  return (
    <aside className="w-64 border-r border-gray-200 min-h-[calc(100vh-4rem)] p-4">
      <nav className="space-y-1">
        <div className="px-3 py-2 text-sm font-semibold text-gray-500">
          Categories
        </div>
        {categories.map((category) => {
          const IconComponent = Icons[category.icon as keyof typeof Icons];
          return (
            <NavLink
              key={category.id}
              to={`/category/${category.id}`}
              className={({ isActive }) =>
                `flex items-center px-3 py-2 text-sm font-medium rounded-lg ${
                  isActive
                    ? 'bg-green-50 text-green-600'
                    : 'text-gray-700 hover:bg-gray-50'
                }`
              }
            >
              {IconComponent && <IconComponent className="h-5 w-5 mr-3" />}
              {category.name}
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
}