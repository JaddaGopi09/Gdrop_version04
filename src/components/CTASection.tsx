
import { ArrowRight, Users, Store, Truck } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-green-600 via-green-700 to-green-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-48 -translate-y-48 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-48 translate-y-48 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-white rounded-full -translate-x-32 -translate-y-32 animate-pulse delay-500"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Join the GDROP Movement Today
          </h2>
          <p className="text-green-100 text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
            Be part of South Australia's growing community that supports local businesses while enjoying convenient delivery. 
            Whether you're a customer or business owner, GDROP has something amazing for you.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl inline-flex mb-4">
              <Users className="h-8 w-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">25K+</div>
            <div className="text-green-100">Happy Customers</div>
          </div>
          
          <div className="text-center animate-fade-in-up" style={{ animationDelay: '400ms' }}>
            <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl inline-flex mb-4">
              <Store className="h-8 w-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">500+</div>
            <div className="text-green-100">Partner Businesses</div>
          </div>
          
          <div className="text-center animate-fade-in-up" style={{ animationDelay: '600ms' }}>
            <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl inline-flex mb-4">
              <Truck className="h-8 w-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">100K+</div>
            <div className="text-green-100">Deliveries Made</div>
          </div>
          
          <div className="text-center animate-fade-in-up" style={{ animationDelay: '800ms' }}>
            <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl inline-flex mb-4">
              <ArrowRight className="h-8 w-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">30min</div>
            <div className="text-green-100">Avg Delivery Time</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col lg:flex-row gap-6 justify-center items-center mb-16 animate-fade-in-up" style={{ animationDelay: '1000ms' }}>
          <div className="text-center lg:text-left">
            <h3 className="text-2xl font-bold text-white mb-2">For Customers</h3>
            <p className="text-green-100 mb-4">Start shopping from your favorite local businesses</p>
            <button className="bg-white text-green-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center space-x-2 group">
              <span>Start Shopping</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          
          <div className="hidden lg:block w-px h-24 bg-white/30"></div>
          <div className="lg:hidden w-24 h-px bg-white/30"></div>
          
          <div className="text-center lg:text-right">
            <h3 className="text-2xl font-bold text-white mb-2">For Businesses</h3>
            <p className="text-green-100 mb-4">Grow your business and reach new customers</p>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-green-700 transition-all duration-300 transform hover:scale-105 inline-flex items-center space-x-2 group">
              <Store className="h-5 w-5 group-hover:scale-110 transition-transform" />
              <span>Partner With Us</span>
            </button>
          </div>
        </div>

        {/* Bottom Message */}
        <div className="text-center animate-fade-in-up" style={{ animationDelay: '1200ms' }}>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto border border-white/20">
            <h4 className="text-xl font-semibold text-white mb-4">
              🌟 Supporting Local Communities Since 2023
            </h4>
            <p className="text-green-100 leading-relaxed">
              Every order placed through GDROP directly supports local businesses and helps build stronger communities across South Australia. Join us in making a difference, one delivery at a time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;