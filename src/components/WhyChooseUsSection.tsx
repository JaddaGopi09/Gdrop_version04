// import React from 'react';
import { Clock, Heart, Shield, Truck, Users, Award } from 'lucide-react';

const WhyChooseUsSection = () => {
  const benefits = [
    {
      icon: Clock,
      title: 'Lightning Fast Delivery',
      description: 'Average delivery time of just 30 minutes. We value your time as much as you do.',
      stat: '30min',
      statLabel: 'Avg Delivery'
    },
    {
      icon: Heart,
      title: 'Support Local Businesses',
      description: 'Every order directly supports local entrepreneurs and keeps money in our community.',
      stat: '500+',
      statLabel: 'Local Partners'
    },
    {
      icon: Shield,
      title: 'Quality & Freshness Guaranteed',
      description: 'We ensure the highest standards of quality and freshness in every delivery.',
      stat: '99.2%',
      statLabel: 'Quality Rating'
    },
    {
      icon: Truck,
      title: 'Reliable Service',
      description: 'Professional drivers, real-time tracking, and contactless delivery options.',
      stat: '98%',
      statLabel: 'On-Time Delivery'
    },
    {
      icon: Users,
      title: 'Community Focused',
      description: 'Built by locals, for locals. We understand what South Australia needs.',
      stat: '25K+',
      statLabel: 'Happy Customers'
    },
    {
      icon: Award,
      title: 'Award-Winning Service',
      description: 'Recognized for excellence in local business support and customer satisfaction.',
      stat: '4.9★',
      statLabel: 'Customer Rating'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-green-50 via-white to-green-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Award className="h-4 w-4" />
            <span>Why GDROP</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Why Choose GDROP?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're not just another delivery service. We're your local community partner, 
            committed to connecting you with the best businesses in South Australia.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Icon and Stat */}
                <div className="flex items-center justify-between mb-6">
                  <div className="bg-green-100 p-3 rounded-2xl group-hover:bg-green-200 transition-colors duration-300">
                    <Icon className="h-8 w-8 text-green-600 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-green-600">{benefit.stat}</div>
                    <div className="text-xs text-gray-500">{benefit.statLabel}</div>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>

                {/* Hover Effect Line */}
                <div className="mt-6 h-1 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-green-600 rounded-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-gradient-to-r from-green-600 to-green-700 rounded-3xl p-8 lg:p-12 text-white animate-fade-in-up">
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">
            Ready to Experience the GDROP Difference?
          </h3>
          <p className="text-green-100 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust GDROP for their local shopping needs. 
            Discover the convenience of supporting local while enjoying premium service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
              Get Started Today
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-green-700 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;