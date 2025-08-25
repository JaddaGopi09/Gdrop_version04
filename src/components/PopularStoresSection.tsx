import { MapPin, Clock, Star, ArrowRight } from 'lucide-react';

const PopularStoresSection = () => {
  const stores = [
    {
      name: 'Nelson Roadhouse',
      location: 'Nelson, SA',
      category: 'Restaurant',
      rating: 4.8,
      deliveryTime: '25-35 min',
      image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=400',
      logo: 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=100',
      offers: ['Free Delivery', '20% OFF'],
    },
    {
      name: 'BP Meningie',
      location: 'Meningie, SA',
      category: 'Convenience Store',
      rating: 4.6,
      deliveryTime: '15-25 min',
      image: 'https://images.pexels.com/photos/2696064/pexels-photo-2696064.jpeg?auto=compress&cs=tinysrgb&w=400',
      logo: 'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=100',
      offers: ['24/7 Open'],
    },
    {
      name: 'Fresh Valley Market',
      location: 'Adelaide Hills, SA',
      category: 'Grocery Store',
      rating: 4.9,
      deliveryTime: '30-40 min',
      image: 'https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg?auto=compress&cs=tinysrgb&w=400',
      logo: 'https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg?auto=compress&cs=tinysrgb&w=100',
      offers: ['Organic', 'Farm Fresh'],
    },
    {
      name: 'Ocean View Seafood',
      location: 'Victor Harbor, SA',
      category: 'Seafood Restaurant',
      rating: 4.7,
      deliveryTime: '35-45 min',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400',
      logo: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=100',
      offers: ['Fresh Daily'],
    },
    {
      name: 'Corner Cafe',
      location: 'Mount Gambier, SA',
      category: 'Cafe',
      rating: 4.5,
      deliveryTime: '20-30 min',
      image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=400',
      logo: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=100',
      offers: ['Coffee Specialist'],
    },
    {
      name: 'Spice Paradise',
      location: 'Adelaide, SA',
      category: 'Indian Grocery',
      rating: 4.8,
      deliveryTime: '25-35 min',
      image: 'https://images.pexels.com/photos/4198018/pexels-photo-4198018.jpeg?auto=compress&cs=tinysrgb&w=400',
      logo: 'https://images.pexels.com/photos/4198018/pexels-photo-4198018.jpeg?auto=compress&cs=tinysrgb&w=100',
      offers: ['Authentic Spices'],
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Heading + Paragraph + Button */}
        <div className="flex flex-col justify-center items-center mb-12 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Most Popular Stores
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Top-rated local businesses delivering to your area
          </p>
        </div>

        {/* Store Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stores.map((store, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden border border-gray-100"
            >
              {/* Store Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={store.image}
                  alt={store.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Logo */}
                <div className="absolute top-4 left-4">
                  <img
                    src={store.logo}
                    alt={`${store.name} logo`}
                    className="w-12 h-12 object-cover rounded-full border-2 border-white shadow-md"
                  />
                </div>
                {/* Offers */}
                <div className="absolute top-4 right-4 space-y-1">
                  {store.offers.map((offer, offerIndex) => (
                    <div
                      key={offerIndex}
                      className="bg-green-600 text-white text-xs px-2 py-1 rounded-full font-medium"
                    >
                      {offer}
                    </div>
                  ))}
                </div>
              </div>

              {/* Store Info */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{store.name}</h3>
                    <p className="text-gray-600 text-sm">{store.category}</p>
                  </div>
                  <div className="flex items-center space-x-1 bg-green-100 px-2 py-1 rounded-full">
                    <Star className="h-3 w-3 text-yellow-500 fill-current" />
                    <span className="text-sm font-semibold text-green-700">{store.rating}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                  <div className="flex items-center space-x-1">
                    <MapPin className="h-4 w-4" />
                    <span>{store.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{store.deliveryTime}</span>
                  </div>
                </div>

                <button className="w-full bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 transition-colors duration-300">
                  Shop Now
                </button>
              </div>
            </div>
          ))}
          
        </div>
        
      </div>
       {/* Button Centered */}
<div className="mt-10 flex justify-center">
  <button className="flex items-center space-x-2 bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition-colors duration-300 shadow-md">
    <span>View All Stores</span>
    <ArrowRight className="h-4 w-4" />
  </button>
</div>

        
    </section>
    
  );
};

export default PopularStoresSection;
