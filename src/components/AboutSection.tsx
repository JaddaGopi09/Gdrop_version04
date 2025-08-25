
import { Heart, Users, Truck, Shield } from 'lucide-react';

const AboutSection = () => {
  const values = [
    {
      icon: Heart,
      title: 'Community First',
      description: 'We believe in supporting local businesses and strengthening community bonds through technology.',
      color: 'bg-red-100 text-red-600'
    },
    {
      icon: Users,
      title: 'Local Partnerships',
      description: 'Building lasting relationships with local stores, restaurants, and service providers.',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: Truck,
      title: 'Reliable Service',
      description: 'Fast, dependable delivery service that you can count on, every single time.',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: Shield,
      title: 'Trust & Quality',
      description: 'Ensuring the highest standards of quality and safety in every delivery.',
      color: 'bg-purple-100 text-purple-600'
    }
  ];

  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Heart className="h-4 w-4" />
            <span>Our Story</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            About GDROP
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            GDROP was born from a simple idea: connecting communities with their local businesses through technology. 
            We're more than just a delivery platform – we're a bridge between you and the amazing local stores, 
            restaurants, and services that make South Australia special.
          </p>
        </div>

        {/* Story Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6 animate-slide-in-left">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
              Empowering Local Communities
            </h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Founded in 2023, GDROP emerged from the need to support local businesses during challenging times. 
                We saw incredible local stores and restaurants struggling to reach customers, while communities 
                wanted convenient access to their favorite local products.
              </p>
              <p>
                Today, we're proud to serve as the digital marketplace that brings together over 500 local 
                businesses with thousands of customers across South Australia. Every order placed through 
                GDROP directly supports local entrepreneurs and keeps money within our communities.
              </p>
              <p>
                Our mission is simple: make local shopping as convenient as possible while ensuring local 
                businesses thrive in the digital age.
              </p>
            </div>
          </div>

          <div className="relative animate-slide-in-right">
            <img
              src="https://images.pexels.com/photos/4198018/pexels-photo-4198018.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Local community and businesses"
              className="w-full h-96 object-cover rounded-2xl shadow-xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-green-600 text-white p-6 rounded-xl shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold">500+</div>
                <div className="text-sm opacity-90">Local Partners</div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 animate-fade-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`inline-flex p-4 rounded-2xl ${value.color} mb-4`}>
                  <Icon className="h-8 w-8" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            );
          })}
        </div>

        {/* Mission Statement */}
        {/* <div className="mt-16 text-center bg-gradient-to-r from-green-600 to-green-700 rounded-3xl p-8 lg:p-12 text-white animate-fade-in-up">
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">Our Mission</h3>
          <p className="text-green-100 text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
            "To create a thriving ecosystem where local businesses flourish, communities stay connected, 
            and everyone has convenient access to the products and services they love – all while 
            supporting the local economy that makes South Australia unique."
          </p>
        </div> */}
      </div>
    </section>
  );
};

export default AboutSection;