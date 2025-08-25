import React, { useState } from 'react';
import { Search, MapPin, ShoppingCart, User, Handshake, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-green-600 text-white py-2">
        <div className="container mx-auto px-4 text-center text-sm">
          🎉 Free delivery on orders over $50! Use code: WELCOME20
        </div>
      </div>
      
      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-green-600 p-2 rounded-full">
              <ShoppingCart className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-gray-800">GDROP</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 flex-1 max-w-4xl mx-8">
            {/* Location */}
            <div className="flex items-center space-x-2 bg-gray-100 rounded-lg px-4 py-2 min-w-48">
              <MapPin className="h-4 w-4 text-green-600" />
              <select className="bg-transparent text-sm outline-none">
                <option>Adelaide, SA</option>
                <option>Melbourne, VIC</option>
                <option>Sydney, NSW</option>
              </select>
              <button className="text-green-600 text-xs hover:text-green-700">
                Locate Me
              </button>
            </div>

            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search for products, restaurants..."
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Right Icons */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="flex items-center space-x-1 text-gray-600 hover:text-green-600 transition-colors">
              <Handshake className="h-5 w-5" />
              <span className="text-sm">Partner with us</span>
            </button>
            <button className="flex items-center space-x-1 text-gray-600 hover:text-green-600 transition-colors">
              <User className="h-5 w-5" />
              <span className="text-sm">Login</span>
            </button>
            <button className="relative bg-green-600 text-white p-2 rounded-lg hover:bg-green-700 transition-colors">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t">
            <div className="space-y-4 pt-4">
              {/* Mobile Location */}
              <div className="flex items-center space-x-2 bg-gray-100 rounded-lg px-4 py-2">
                <MapPin className="h-4 w-4 text-green-600" />
                <select className="bg-transparent text-sm outline-none flex-1">
                  <option>Adelaide, SA</option>
                  <option>Melbourne, VIC</option>
                  <option>Sydney, NSW</option>
                </select>
              </div>
              
              {/* Mobile Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for products, restaurants..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>

              {/* Mobile Navigation Links */}
              <div className="space-y-2">
                <button className="flex items-center space-x-2 w-full text-left py-2">
                  <Handshake className="h-5 w-5 text-green-600" />
                  <span>Partner with us</span>
                </button>
                <button className="flex items-center space-x-2 w-full text-left py-2">
                  <User className="h-5 w-5 text-green-600" />
                  <span>Login / Sign up</span>
                </button>
                <button className="flex items-center space-x-2 w-full text-left py-2">
                  <ShoppingCart className="h-5 w-5 text-green-600" />
                  <span>Cart (3 items)</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;