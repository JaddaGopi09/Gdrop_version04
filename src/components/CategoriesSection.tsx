
import { Star, Milk, Coffee, UtensilsCrossed, ShoppingCart, Zap, Wheat, Cake, Beef } from 'lucide-react';

const CategoriesSection = () => {
  const categories = [
    { name: 'Most Popular', icon: Star, color: 'bg-yellow-100 text-yellow-600', bgColor: 'hover:bg-yellow-50' },
    { name: 'Dairy Products', icon: Milk, color: 'bg-blue-100 text-blue-600', bgColor: 'hover:bg-blue-50' },
    { name: 'Beverages', icon: Coffee, color: 'bg-brown-100 text-amber-600', bgColor: 'hover:bg-amber-50' },
    { name: 'Restaurants', icon: UtensilsCrossed, color: 'bg-red-100 text-red-600', bgColor: 'hover:bg-red-50' },
    { name: 'Groceries', icon: ShoppingCart, color: 'bg-green-100 text-green-600', bgColor: 'hover:bg-green-50' },
    { name: 'Fast Food', icon: Zap, color: 'bg-orange-100 text-orange-600', bgColor: 'hover:bg-orange-50' },
    { name: 'Indian Groceries', icon: Wheat, color: 'bg-purple-100 text-purple-600', bgColor: 'hover:bg-purple-50' },
    { name: 'Desserts', icon: Cake, color: 'bg-pink-100 text-pink-600', bgColor: 'hover:bg-pink-50' },
    { name: 'Fresh Meat', icon: Beef, color: 'bg-gray-100 text-gray-600', bgColor: 'hover:bg-gray-50' },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Shop by Category
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover everything you need from fresh groceries to hot meals from local restaurants
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 lg:gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <button
                key={index}
                className={`group p-6 rounded-2xl border border-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${category.bgColor} bg-white`}
              >
                <div className="flex flex-col items-center space-y-4">
                  <div className={`p-4 rounded-2xl ${category.color} group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-8 w-8" />
                  </div>
                  <div className="text-center">
                    <h3 className="font-semibold text-gray-900 text-sm lg:text-base">
                      {category.name}
                    </h3>
                  </div>
                </div>
              </button>
            );
          })}
        </div>


         {/* <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg animate-fade-in-up">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Why Choose GDROP Services?
            </h3>
            <p className="text-lg text-gray-600">
              We're committed to providing the best local shopping and delivery experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-green-100 p-4 rounded-2xl inline-flex mb-4 group-hover:bg-green-200 transition-colors">
                <ShoppingCart className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Wide Selection</h4>
              <p className="text-gray-600">Access to hundreds of local businesses and thousands of products</p>
            </div>

            <div className="text-center group">
              <div className="bg-green-100 p-4 rounded-2xl inline-flex mb-4 group-hover:bg-green-200 transition-colors">
                <Zap className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Fast Delivery</h4>
              <p className="text-gray-600">Average delivery time of 30 minutes across all service areas</p>
            </div>

            <div className="text-center group">
              <div className="bg-green-100 p-4 rounded-2xl inline-flex mb-4 group-hover:bg-green-200 transition-colors">
                <Star className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Quality Assured</h4>
              <p className="text-gray-600">All partners are vetted for quality and reliability</p>
            </div>
          </div> */}

        {/* Quick Stats */}
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-12 border-t border-gray-100">
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">500+</div>
            <div className="text-gray-600">Local Stores</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">10K+</div>
            <div className="text-gray-600">Products</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">30min</div>
            <div className="text-gray-600">Avg Delivery</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">50K+</div>
            <div className="text-gray-600">Happy Customers</div>
          </div>
        </div> */}
        </div>
        <div>
      </div>
    </section>
  );
};

export default CategoriesSection;