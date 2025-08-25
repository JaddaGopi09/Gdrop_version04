import { useState } from 'react';
import { Plus, Minus, ShoppingCart, Heart, Star, ArrowLeft, ArrowRight } from 'lucide-react';

const ProductSection = () => {
  const [quantities, setQuantities] = useState<{[key: number]: number}>({});

  const bestDeals = [
    {
      id: 1,
      name: 'Fresh Organic Bananas',
      price: 3.99,
      originalPrice: 5.99,
      image: 'https://images.pexels.com/photos/2280551/pexels-photo-2280551.jpeg?auto=compress&cs=tinysrgb&w=400',
      store: 'Fresh Valley Market',
      rating: 4.8,
      unit: '1kg',
      discount: '33% OFF',
    },
    {
      id: 2,
      name: 'Premium Ground Coffee',
      price: 12.99,
      originalPrice: 18.99,
      image: 'https://images.pexels.com/photos/324028/pexels-photo-324028.jpeg?auto=compress&cs=tinysrgb&w=400',
      store: 'Corner Cafe',
      rating: 4.9,
      unit: '500g',
      discount: '32% OFF',
    },
    {
      id: 3,
      name: 'Fresh Atlantic Salmon',
      price: 24.99,
      originalPrice: 32.99,
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400',
      store: 'Ocean View Seafood',
      rating: 4.7,
      unit: '1kg',
      discount: '24% OFF',
    },
    {
      id: 4,
      name: 'Artisan Sourdough Bread',
      price: 6.99,
      originalPrice: 9.99,
      image: 'https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=400',
      store: 'Nelson Roadhouse',
      rating: 4.6,
      unit: '1 loaf',
      discount: '30% OFF',
    },
  ];

  const recommended = [
    {
      id: 5,
      name: 'Greek Style Yogurt',
      price: 5.49,
      image: 'https://images.pexels.com/photos/1386604/pexels-photo-1386604.jpeg?auto=compress&cs=tinysrgb&w=400',
      store: 'Fresh Valley Market',
      rating: 4.5,
      unit: '500g',
    },
    {
      id: 6,
      name: 'Chicken Tikka Masala',
      price: 16.99,
      image: 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=400',
      store: 'Spice Paradise',
      rating: 4.8,
      unit: '1 serving',
    },
    {
      id: 7,
      name: 'Mixed Berry Smoothie',
      price: 8.99,
      image: 'https://images.pexels.com/photos/775032/pexels-photo-775032.jpeg?auto=compress&cs=tinysrgb&w=400',
      store: 'Corner Cafe',
      rating: 4.7,
      unit: '500ml',
    },
    {
      id: 8,
      name: 'Organic Free Range Eggs',
      price: 7.99,
      image: 'https://images.pexels.com/photos/162712/egg-white-food-protein-162712.jpeg?auto=compress&cs=tinysrgb&w=400',
      store: 'Fresh Valley Market',
      rating: 4.6,
      unit: '12 pack',
    },
  ];

  const updateQuantity = (productId: number, change: number) => {
    setQuantities(prev => ({
      ...prev,
      [productId]: Math.max(0, (prev[productId] || 0) + change)
    }));
  };

  const ProductCard = ({ product, showDiscount = false }: { product: any, showDiscount?: boolean }) => {
    const quantity = quantities[product.id] || 0;

    return (
      <div className="group bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden">
        {/* Product Image */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {showDiscount && (
            <div className="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
              {product.discount}
            </div>
          )}
          <button className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors">
            <Heart className="h-4 w-4 text-gray-600" />
          </button>
        </div>

        {/* Product Info */}
        <div className="p-4">
          <div className="mb-2">
            <h3 className="font-semibold text-gray-900 mb-1 line-clamp-2">{product.name}</h3>
            <p className="text-sm text-gray-600">{product.store} • {product.unit}</p>
          </div>

          <div className="flex items-center space-x-1 mb-3">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="text-sm text-gray-600">{product.rating}</span>
          </div>

          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <span className="text-xl font-bold text-green-600">${product.price}</span>
              {product.originalPrice && (
                <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
              )}
            </div>
          </div>

          {/* Add to Cart */}
          {quantity === 0 ? (
            <button
              onClick={() => updateQuantity(product.id, 1)}
              className="w-full bg-green-600 text-white py-2 rounded-xl font-semibold hover:bg-green-700 transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <ShoppingCart className="h-4 w-4" />
              <span>Add to Cart</span>
            </button>
          ) : (
            <div className="flex items-center justify-between bg-green-50 rounded-xl p-2">
              <button
                onClick={() => updateQuantity(product.id, -1)}
                className="p-1 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <Minus className="h-4 w-4 text-green-600" />
              </button>
              <span className="font-semibold text-green-700 px-4">{quantity}</span>
              <button
                onClick={() => updateQuantity(product.id, 1)}
                className="p-1 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <Plus className="h-4 w-4 text-green-600" />
              </button>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
   <section className="py-16 bg-white">
  <div className="container mx-auto px-4">
    {/* Best Deals Section */}
    <div className="mb-16">
      <div className="flex flex-col items-center mb-8">
        <div className="text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
            🔥 Best Deals
          </h2>
          <p className="text-lg text-gray-600">Limited time offers you can't miss</p>
        </div>
       <div className="flex space-x-2 mt-4">
  <button className="p-2 border border-gray-200 rounded-lg hover:bg-green-600 hover:text-white transition-colors">
    <ArrowLeft className="h-5 w-5" />
  </button>
  <button className="p-2 border border-gray-200 rounded-lg hover:bg-green-600 hover:text-white transition-colors">
    <ArrowRight className="h-5 w-5" />
  </button>
</div>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {bestDeals.map((product) => (
          <ProductCard key={product.id} product={product} showDiscount />
        ))}
      </div>
    </div>

    {/* Recommended Section */}
    <div>
      <div className="flex flex-col items-center mb-8">
        <div className="text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
            Recommended for You
          </h2>
          <p className="text-lg text-gray-600">
            Based on your preferences and order history
          </p>
        </div>
      <div className="flex space-x-2 mt-4">
  <button className="p-2 border border-gray-200 rounded-lg hover:bg-green-600 hover:text-white transition-colors">
    <ArrowLeft className="h-5 w-5" />
  </button>
  <button className="p-2 border border-gray-200 rounded-lg hover:bg-green-600 hover:text-white transition-colors">
    <ArrowRight className="h-5 w-5" />
  </button>
</div>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {recommended.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>

    {/* View More Button */}
    <div className="text-center mt-12">
      <button className="bg-green-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-green-700 transition-colors duration-300 inline-flex items-center space-x-2">
        <span>Explore More Products</span>
        <ArrowRight className="h-5 w-5" />
      </button>
    </div>
  </div>
</section>

  );
};

export default ProductSection;