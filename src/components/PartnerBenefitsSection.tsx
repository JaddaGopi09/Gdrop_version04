import { Store, TrendingUp, Users, Handshake, DollarSign, BarChart3, Clock } from 'lucide-react';

const PartnerBenefitsSection = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: 'Increase Sales',
      description: 'Reach new customers and boost revenue with our growing customer base',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: Users,
      title: 'Expand Reach',
      description: 'Connect with customers beyond your physical location',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: DollarSign,
      title: 'Low Commission',
      description: 'Competitive rates that help you maximize your profits',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: BarChart3,
      title: 'Analytics Dashboard',
      description: 'Track performance and optimize your business with detailed insights',
      color: 'bg-orange-100 text-orange-600'
    },
    {
      icon: Clock,
      title: 'Quick Setup',
      description: 'Get online and start selling in less than 24 hours',
      color: 'bg-red-100 text-red-600'
    },
    {
      icon: Handshake,
      title: 'Dedicated Support',
      description: 'Personal account manager to help grow your business',
      color: 'bg-indigo-100 text-indigo-600'
    }
  ];

  // const partnerTypes = [
  //   {
  //     type: 'Restaurants',
  //     description: 'Cafes, takeaways, and fine dining establishments',
  //     image: 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=400',
  //     partners: '200+'
  //   },
  //   {
  //     type: 'Grocery Stores',
  //     description: 'Supermarkets, organic stores, and specialty food shops',
  //     image: 'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=400',
  //     partners: '150+'
  //   },
  //   {
  //     type: 'Convenience Stores',
  //     description: 'Corner shops, petrol stations, and quick marts',
  //     image: 'https://images.pexels.com/photos/2696064/pexels-photo-2696064.jpeg?auto=compress&cs=tinysrgb&w=400',
  //     partners: '100+'
  //   },
  //   {
  //     type: 'Specialty Stores',
  //     description: 'Butchers, bakeries, and ethnic food stores',
  //     image: 'https://images.pexels.com/photos/4198018/pexels-photo-4198018.jpeg?auto=compress&cs=tinysrgb&w=400',
  //     partners: '50+'
  //   }
  // ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Store className="h-4 w-4" />
            <span>Partner Program</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Grow Your Business with GDROP
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join hundreds of local businesses already thriving on our platform. Increase your sales, reach new customers, and grow your business with GDROP.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
              >
                <div className={`inline-flex p-3 rounded-2xl ${benefit.color} mb-4`}>
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            );
          })}
        </div>

        {/* Partner Types */}
        <div className="mb-16">
          <div className="text-center mb-12">
            {/* <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Perfect for All Business Types
            </h3> */}
            {/* <p className="text-lg text-gray-600">
              Whether you're a restaurant, grocery store, or specialty shop, we have solutions for you
            </p> */}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* {partnerTypes.map((partner, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden border border-gray-100"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={partner.image}
                    alt={partner.type}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {partner.partners}
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{partner.type}</h4>
                  <p className="text-gray-600 mb-4">{partner.description}</p>
                  <button className="text-green-600 font-semibold hover:text-green-700 flex items-center space-x-1">
                    <span>Learn More</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))} */}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-3xl p-8 lg:p-12 text-white text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Ready to Partner with GDROP?
            </h3>
            <p className="text-green-100 text-lg mb-8">
              Join our growing network of successful local businesses. Get started today and see the difference GDROP can make for your business.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-green-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors transform hover:scale-105">
                Become a Partner
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-green-700 transition-all duration-300">
                Schedule a Call
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

        {/* Success Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-12 border-t border-gray-200">
          {/* <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">500+</div>
            <div className="text-gray-600">Partner Stores</div>
          </div> */}
          {/* <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">40%</div>
            <div className="text-gray-600">Avg Sales Increase</div>
          </div> */}
          {/* <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">24hrs</div>
            <div className="text-gray-600">Setup Time</div>
          </div> */}
          {/* <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">98%</div>
            <div className="text-gray-600">Partner Satisfaction</div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default PartnerBenefitsSection;