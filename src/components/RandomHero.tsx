import  { useState } from 'react';
import { 
  Search, 
  MapPin, 
  Clock, 
  Star, 
  ChevronDown,
  Pizza,
  Coffee,
  Sandwich,
  Cookie,
  IceCream,
  ChefHat
} from 'lucide-react';

const Hero = () => {
  const [location, setLocation] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const foodCategories = [
    { name: 'Pizza', icon: Pizza, color: 'bg-red-100 text-red-600' },
    { name: 'Coffee', icon: Coffee, color: 'bg-amber-100 text-amber-600' },
    { name: 'Burgers', icon: Sandwich, color: 'bg-yellow-100 text-yellow-600' },
    { name: 'Desserts', icon: Cookie, color: 'bg-pink-100 text-pink-600' },
    { name: 'Ice Cream', icon: IceCream, color: 'bg-blue-100 text-blue-600' },
    { name: 'Chinese', icon: ChefHat, color: 'bg-green-100 text-green-600' },
  ];

  const trendingRestaurants = [
    { name: "Mario's Pizzeria", rating: 4.5, deliveryTime: "25-30 min", cuisine: "Italian", discount: "50% OFF" },
    { name: "Burger Palace", rating: 4.3, deliveryTime: "20-25 min", cuisine: "American", discount: "40% OFF" },
    { name: "Spice Garden", rating: 4.6, deliveryTime: "30-35 min", cuisine: "Indian", discount: "30% OFF" },
    { name: "Sushi Express", rating: 4.4, deliveryTime: "35-40 min", cuisine: "Japanese", discount: "25% OFF" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-white rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-1/4 w-16 h-16 bg-white rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12">
        {/* Navigation */}
        <nav className="flex items-center justify-between mb-16">
          <div className="flex items-center space-x-2">
            <ChefHat className="w-8 h-8 text-white" />
            <span className="text-2xl font-bold text-white">FoodieExpress</span>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <button className="text-white hover:text-orange-200 transition-colors">Sign In</button>
            <button className="bg-white text-orange-500 px-6 py-2 rounded-full font-semibold hover:bg-orange-50 transition-colors">
              Sign Up
            </button>
          </div>
        </nav>

        {/* Main Hero Content */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Hungry?
            <span className="block text-yellow-300">We've got you covered!</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
            Order from your favorite restaurants and get delicious food delivered to your doorstep in minutes.
          </p>

          {/* Search Section */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl max-w-3xl mx-auto mb-16">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Location Input */}
              <div className="flex-1 relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <MapPin className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Enter your location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none text-gray-700 placeholder-gray-400"
                />
                <button className="absolute inset-y-0 right-0 pr-4 flex items-center">
                  <ChevronDown className="h-5 w-5 text-gray-400" />
                </button>
              </div>

              {/* Search Input */}
              <div className="flex-1 relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search for restaurants, food..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none text-gray-700 placeholder-gray-400"
                />
              </div>

              {/* Search Button */}
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold transition-colors shadow-lg">
                Find Food
              </button>
            </div>
          </div>
        </div>

        {/* Food Categories */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">What's on your mind?</h2>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-6 max-w-4xl mx-auto">
            {foodCategories.map((category, index) => (
              <div
                key={index}
                className="flex flex-col items-center group cursor-pointer transform hover:scale-105 transition-all duration-200"
              >
                <div className={`w-16 h-16 md:w-20 md:h-20 ${category.color} rounded-full flex items-center justify-center mb-3 shadow-lg group-hover:shadow-xl transition-shadow`}>
                  <category.icon className="w-8 h-8 md:w-10 md:h-10" />
                </div>
                <span className="text-white font-medium text-sm md:text-base">{category.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Trending Restaurants */}
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Trending Near You</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trendingRestaurants.map((restaurant, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {restaurant.discount}
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-gray-700 font-medium">{restaurant.rating}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-2">{restaurant.name}</h3>
                <p className="text-gray-600 mb-4">{restaurant.cuisine}</p>
                
                <div className="flex items-center text-gray-500 text-sm">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>{restaurant.deliveryTime}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;