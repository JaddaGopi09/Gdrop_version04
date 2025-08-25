// import React from 'react';
import { Store, TrendingUp, Users, BarChart3, DollarSign, Handshake, ArrowRight, CheckCircle } from 'lucide-react';

const ForPartnersSection = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: 'Increase Revenue',
      description: 'Boost your sales by reaching customers beyond your physical location',
      stat: '+40%',
      statLabel: 'Avg Revenue Increase'
    },
    {
      icon: Users,
      title: 'Expand Customer Base',
      description: 'Connect with new customers who discover you through our platform',
      stat: '25K+',
      statLabel: 'Active Customers'
    },
    {
      icon: DollarSign,
      title: 'Low Commission Rates',
      description: 'Competitive rates that help maximize your profit margins',
      stat: '15%',
      statLabel: 'Commission Rate'
    },
    {
      icon: BarChart3,
      title: 'Business Analytics',
      description: 'Track performance and optimize your business with detailed insights',
      stat: '24/7',
      statLabel: 'Analytics Access'
    }
  ];

  const partnerTypes = [
    {
      type: 'Restaurants & Cafes',
      description: 'Expand your reach and increase orders',
      image: 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      type: 'Grocery Stores',
      description: 'Offer convenient shopping to your customers',
      image: 'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      type: 'Specialty Shops',
      description: 'Showcase your unique products to a wider audience',
      image: 'https://images.pexels.com/photos/4198018/pexels-photo-4198018.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Store className="h-4 w-4" />
            <span>For Business Owners</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Grow Your Business with GDROP
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join hundreds of successful local businesses already thriving on our platform. 
            Increase your sales, reach new customers, and grow your business with GDROP.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="text-center">
                  <div className="flex items-center justify-between mb-4">
                    <div className="bg-green-100 p-3 rounded-2xl">
                      <Icon className="h-6 w-6 text-green-600" />
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold text-green-600">{benefit.stat}</div>
                      <div className="text-xs text-gray-500">{benefit.statLabel}</div>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Partner Types */}
        <div className="mb-16">
          <div className="text-center mb-12 animate-fade-in-up">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Perfect for All Business Types
            </h3>
            <p className="text-lg text-gray-600">
              Whether you're a restaurant, grocery store, or specialty shop, we have solutions for you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partnerTypes.map((partner, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden border border-gray-100 animate-slide-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={partner.image}
                    alt={partner.type}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h4 className="text-xl font-bold">{partner.type}</h4>
                    <p className="text-sm opacity-90">{partner.description}</p>
                  </div>
                </div>
                <div className="p-6">
                  <button className="w-full bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 transition-colors duration-300 flex items-center justify-center space-x-2">
                    <span>Learn More</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Partnership Process */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg mb-16 animate-fade-in-up">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Simple Partnership Process
            </h3>
            <p className="text-lg text-gray-600">
              Get started with GDROP in just a few easy steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-green-100 p-4 rounded-2xl inline-flex mb-4">
                <Handshake className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">1. Apply</h4>
              <p className="text-gray-600 text-sm">Submit your business details and get approved</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 p-4 rounded-2xl inline-flex mb-4">
                <Store className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">2. Setup</h4>
              <p className="text-gray-600 text-sm">Create your store profile and upload your products</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 p-4 rounded-2xl inline-flex mb-4">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">3. Launch</h4>
              <p className="text-gray-600 text-sm">Go live and start receiving orders from customers</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 p-4 rounded-2xl inline-flex mb-4">
                <TrendingUp className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">4. Grow</h4>
              <p className="text-gray-600 text-sm">Watch your business grow with our support</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-3xl p-8 lg:p-12 text-white text-center animate-fade-in-up">
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">
            Ready to Partner with GDROP?
          </h3>
          <p className="text-green-100 text-lg mb-8 max-w-2xl mx-auto">
            Join our growing network of successful local businesses. Get started today and see the difference GDROP can make for your business.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center space-x-2">
              <Store className="h-5 w-5" />
              <span>Become a Partner</span>
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-green-700 transition-all duration-300 inline-flex items-center justify-center space-x-2">
              <span>Schedule a Call</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>

          {/* Contact Info */}
          <div className="mt-8 pt-8 border-t border-white/20">
            <p className="text-green-100 mb-2">Questions? Contact our partner team:</p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6">
              <a href="mailto:partners@gdrop.com.au" className="text-white hover:text-green-200 transition-colors">
                partners@gdrop.com.au
              </a>
              <a href="tel:1800-PARTNER" className="text-white hover:text-green-200 transition-colors">
                1-800-PARTNER
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForPartnersSection;