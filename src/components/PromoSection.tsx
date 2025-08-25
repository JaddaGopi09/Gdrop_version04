
import { Gift, Clock,  Percent } from 'lucide-react';

const PromoSection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-green-600 via-green-700 to-green-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-48 -translate-y-48"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-48 translate-y-48"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-6">
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
              <Gift className="h-5 w-5" />
              <span className="font-semibold">Limited Time Offer</span>
            </div>
            
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                Get 20% OFF
                <span className="block text-yellow-300">on your first order!</span>
              </h2>
              
              <p className="text-xl text-green-100 leading-relaxed">
                New to GDROP? Welcome to the family! Enjoy fresh groceries and hot meals delivered to your doorstep with an exclusive discount.
              </p>
            </div>

            {/* Offer Details */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-green-100">
                <Percent className="h-5 w-5 text-yellow-300" />
                <span>Valid on orders above $30</span>
              </div>
              <div className="flex items-center space-x-3 text-green-100">
                <Clock className="h-5 w-5 text-yellow-300" />
                <span>Offer expires in 3 days</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Order Now & Save 20%
              </button>
              
              {/* <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-green-700 transition-all duration-300 flex items-center justify-center space-x-2">
                <span>Browse Menu</span>
                <ArrowRight className="h-5 w-5" />
              </button> */}
            </div>

            {/* Promo Code */}
            {/* <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-green-100 mb-1">Use promo code:</p>
                  <p className="text-2xl font-bold text-yellow-300 tracking-wider">WELCOME20</p>
                </div>
                <button className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
                  Copy Code
                </button>
              </div>
            </div> */}
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.pexels.com/photos/4198018/pexels-photo-4198018.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Fresh groceries and delivery"
                className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-2xl"
              />
              
              {/* Floating Discount Badge */}
              <div className="absolute -top-4 -right-4 bg-red-500 text-white p-6 rounded-full shadow-xl transform rotate-12">
                <div className="text-center">
                  <div className="text-3xl font-bold">20%</div>
                  <div className="text-sm font-semibold">OFF</div>
                </div>
              </div>
              
              {/* Floating Product Cards */}
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl">
                <div className="flex items-center space-x-3">
                  <img
                    src="https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=100"
                    alt="Delivered food"
                    className="w-12 h-12 object-cover rounded-lg"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">Fast Delivery</p>
                    <p className="text-sm text-green-600">30 mins or less</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        {/* <div className="mt-16 pt-12 border-t border-white/20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
            <div>
              <div className="text-3xl font-bold text-yellow-300 mb-2">15K+</div>
              <div className="text-green-100">Orders Delivered</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-300 mb-2">98%</div>
              <div className="text-green-100">Customer Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-300 mb-2">500+</div>
              <div className="text-green-100">Partner Stores</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-300 mb-2">24/7</div>
              <div className="text-green-100">Customer Support</div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default PromoSection;