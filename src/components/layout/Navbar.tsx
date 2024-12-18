import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Bell, MessageSquare, UserCircle, Plus } from 'lucide-react';
import { Button } from '../ui/Button';

export function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/dashboard" className="text-2xl font-bold text-green-600">
              TradeHub
            </Link>
            <div className="ml-8 relative">
              <input
                type="text"
                placeholder="Search items..."
                className="w-96 pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <Button variant="primary" size="sm" className="bg-green-600 hover:bg-green-700">
              <Plus className="h-4 w-4 mr-2" />
              List Item
            </Button>
            <button className="p-2 text-gray-600 hover:text-green-600">
              <Bell className="h-6 w-6" />
            </button>
            <button className="p-2 text-gray-600 hover:text-green-600">
              <MessageSquare className="h-6 w-6" />
            </button>
            <button className="p-2 text-gray-600 hover:text-green-600">
              <UserCircle className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}