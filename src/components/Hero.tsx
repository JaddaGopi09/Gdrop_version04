
import { ArrowRight, Play } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-green-50 via-white to-green-50 overflow-hidden min-h-screen flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-green-600 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-green-400 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium animate-bounce-in">
                <span className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></span>
                <span>Connecting Communities</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                <span className="block animate-slide-in-left">Shop Local Online,</span>
                <span className="text-green-600 block animate-slide-in-left delay-200">Delivered to Your</span>
                <span className="text-gray-900 block animate-slide-in-left delay-400">Doorstep</span>
              </h1>
              
              <p className="text-lg lg:text-xl text-gray-600 leading-relaxed animate-fade-in delay-600">
                GDROP connects you with local businesses across South Australia. From fresh groceries to restaurant meals, we bring your community's best right to your door.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-800">
              <button className="bg-green-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 group">
                <span>Explore Services</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-green-600 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2 group">
                <Play className="h-5 w-5 group-hover:scale-110 transition-transform" />
                <span>Watch Demo</span>
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 animate-fade-in delay-1000">
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-green-600 mb-1">500+</div>
                <div className="text-sm text-gray-600">Local Partners</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-green-600 mb-1">25K+</div>
                <div className="text-sm text-gray-600">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-green-600 mb-1">30min</div>
                <div className="text-sm text-gray-600">Avg Delivery</div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative animate-fade-in-right">
            <div className="relative z-10">
              <img
                src="https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Fresh groceries and local food"
                className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-2xl animate-float"
              />
              
              {/* Floating Cards */}
              <div className="absolute -top-6 -left-6 bg-white p-4 rounded-xl shadow-lg animate-bounce-in delay-1200">
                <div className="flex items-center space-x-3">
                  <img
                    src="https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg?auto=compress&cs=tinysrgb&w=100"
                    alt="Fresh vegetables"
                    className="w-12 h-12 object-cover rounded-lg"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">Fresh & Local</p>
                    <p className="text-sm text-green-600">From your community</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg animate-bounce-in delay-1400">
                <div className="flex items-center space-x-3">
                  <img
                    src="https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=100"
                    alt="Restaurant food"
                    className="w-12 h-12 object-cover rounded-lg"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">Fast Delivery</p>
                    <p className="text-sm text-green-600">30 mins or less</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Background decoration */}
            <div className="absolute top-4 right-4 w-72 h-72 bg-gradient-to-br from-green-400 to-green-600 rounded-full opacity-20 blur-3xl animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-green-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-green-600 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;