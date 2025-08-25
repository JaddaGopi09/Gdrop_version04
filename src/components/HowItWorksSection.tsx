
import { MapPin, Search, ShoppingCart, Truck, Clock, CheckCircle } from 'lucide-react';

const HowItWorksSection = () => {
  const steps = [
    {
      id: 1,
      icon: MapPin,
      title: 'Set Your Location',
      description: 'Enter your address or use our location finder to see available stores and restaurants in your area.',
      color: 'bg-blue-100 text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      id: 2,
      icon: Search,
      title: 'Browse & Search',
      description: 'Explore thousands of products from local grocers, restaurants, and specialty stores near you.',
      color: 'bg-purple-100 text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      id: 3,
      icon: ShoppingCart,
      title: 'Add to Cart',
      description: 'Select your favorite items, customize your order, and add everything to your cart with one click.',
      color: 'bg-orange-100 text-orange-600',
      bgColor: 'bg-orange-50'
    },
    {
      id: 4,
      icon: Truck,
      title: 'Fast Delivery',
      description: 'Our trusted drivers pick up your order and deliver it fresh to your doorstep in 30 minutes or less.',
      color: 'bg-green-100 text-green-600',
      bgColor: 'bg-green-50'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Clock className="h-4 w-4" />
            <span>Simple Process</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            How GDROP Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Getting your favorite local food and groceries delivered is easier than ever. Just follow these simple steps.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.id} className="relative">
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-gray-300 to-transparent transform translate-x-4 z-0"></div>
                )}
                
                <div className={`relative z-10 text-center p-6 rounded-2xl ${step.bgColor} border border-gray-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}>
                  {/* Step Number */}
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {step.id}
                  </div>
                  
                  {/* Icon */}
                  <div className={`inline-flex p-4 rounded-2xl ${step.color} mb-4`}>
                    <Icon className="h-8 w-8" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Features Grid */}
        {/* <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-3xl p-8 lg:p-12 text-white">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">Why Choose GDROP?</h3>
            <p className="text-green-100 text-lg">Experience the best in local food and grocery delivery</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl inline-flex mb-4">
                <Clock className="h-8 w-8" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Lightning Fast</h4>
              <p className="text-green-100">Average delivery time of just 30 minutes to your door</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl inline-flex mb-4">
                <CheckCircle className="h-8 w-8" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Quality Guaranteed</h4>
              <p className="text-green-100">Fresh products and satisfaction guaranteed or your money back</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl inline-flex mb-4">
                <MapPin className="h-8 w-8" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Local Focus</h4>
              <p className="text-green-100">Supporting local businesses and communities across South Australia</p>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default HowItWorksSection;