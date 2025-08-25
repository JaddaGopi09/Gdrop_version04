// import React from 'react';
import { Star, Quote, ArrowLeft, ArrowRight } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Mitchell',
      location: 'Adelaide Hills, SA',
      rating: 5,
      text: "GDROP has completely changed how I shop for groceries. The quality is amazing and delivery is always on time. I love supporting local businesses through their platform!",
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
      orderCount: 47
    },
    {
      id: 2,
      name: 'Michael Chen',
      location: 'Adelaide CBD, SA',
      rating: 5,
      text: "As a busy professional, GDROP saves me hours every week. Fresh ingredients from my favorite local stores delivered right to my office. Absolutely fantastic service!",
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150',
      orderCount: 32
    },
    {
      id: 3,
      name: 'Emma Thompson',
      location: 'Mount Gambier, SA',
      rating: 5,
      text: "The variety of local restaurants and stores available is incredible. I can get everything from fresh produce to my favorite takeaway in one order. Highly recommend!",
      image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150',
      orderCount: 63
    },
    {
      id: 4,
      name: 'David Wilson',
      location: 'Victor Harbor, SA',
      rating: 5,
      text: "Living in a smaller town, I thought delivery services wouldn't reach us. GDROP proved me wrong! Great selection and the drivers are always friendly and professional.",
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
      orderCount: 28
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-green-50 via-white to-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Star className="h-4 w-4 fill-current" />
            <span>Customer Reviews</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust GDROP for their daily grocery and food delivery needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
            >
              {/* Quote Icon */}
              <div className="mb-4">
                <Quote className="h-8 w-8 text-green-600 opacity-60" />
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Customer Info */}
              <div className="flex items-center space-x-3">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 object-cover rounded-full"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                  <p className="text-xs text-green-600 font-medium">{testimonial.orderCount} orders</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex justify-center space-x-4">
          <button className="p-3 border border-gray-200 rounded-full hover:bg-gray-50 transition-colors">
            <ArrowLeft className="h-5 w-5 text-gray-600" />
          </button>
          <button className="p-3 border border-gray-200 rounded-full hover:bg-gray-50 transition-colors">
            <ArrowRight className="h-5 w-5 text-gray-600" />
          </button>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-12 border-t border-gray-200">
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">4.9★</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">25K+</div>
            <div className="text-gray-600">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">99.2%</div>
            <div className="text-gray-600">On-Time Delivery</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">24/7</div>
            <div className="text-gray-600">Customer Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;