
import { MapPin, Clock, Truck, CheckCircle } from 'lucide-react';

const DeliveryAreasSection = () => {
  const deliveryAreas = [
    {
      city: 'Adelaide',
      suburbs: ['CBD', 'North Adelaide', 'Glenelg', 'Norwood', 'Unley', 'Burnside'],
      deliveryTime: '20-30 min',
      stores: 150,
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      city: 'Adelaide Hills',
      suburbs: ['Stirling', 'Hahndorf', 'Mount Barker', 'Aldgate', 'Crafers', 'Bridgewater'],
      deliveryTime: '25-35 min',
      stores: 45,
      image: 'https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      city: 'Mount Gambier',
      suburbs: ['City Center', 'Suttontown', 'Moorak', 'Compton', 'Mil Lel', 'Glenburnie'],
      deliveryTime: '30-40 min',
      stores: 25,
      image: 'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      city: 'Victor Harbor',
      suburbs: ['City Center', 'Port Elliot', 'Goolwa', 'Middleton', 'Encounter Bay', 'Hayborough'],
      deliveryTime: '35-45 min',
      stores: 20,
      image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=300'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <MapPin className="h-4 w-4" />
            <span>Service Areas</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            We Deliver Across South Australia
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From bustling city centers to peaceful regional towns, GDROP brings local food and groceries to your doorstep
          </p>
        </div>

        {/* Delivery Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {deliveryAreas.map((area, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden border border-gray-100"
            >
              {/* Area Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={area.image}
                  alt={area.city}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">{area.city}</h3>
                  <div className="flex items-center space-x-1 text-sm">
                    <Truck className="h-4 w-4" />
                    <span>{area.deliveryTime}</span>
                  </div>
                </div>
              </div>

              {/* Area Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="font-semibold text-gray-900">Available Now</span>
                  </div>
                  <div className="text-sm text-gray-600">
                    {area.stores} stores
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900 mb-2">Coverage Areas:</h4>
                  <div className="flex flex-wrap gap-1">
                    {area.suburbs.slice(0, 4).map((suburb, subIndex) => (
                      <span
                        key={subIndex}
                        className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full"
                      >
                        {suburb}
                      </span>
                    ))}
                    {area.suburbs.length > 4 && (
                      <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                        +{area.suburbs.length - 4} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Expansion Notice */}
        <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 text-white text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Don't See Your Area?
            </h3>
            <p className="text-green-100 text-lg mb-6">
              We're rapidly expanding across South Australia. Join our waitlist to be notified when GDROP arrives in your neighborhood.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="text"
                placeholder="Enter your suburb"
                className="flex-1 px-4 py-3 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-green-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
                Join Waitlist
              </button>
            </div>
          </div>
        </div>

        {/* Service Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="bg-green-100 p-4 rounded-2xl inline-flex mb-4">
              <Clock className="h-8 w-8 text-green-600" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">Fast Delivery</h4>
            <p className="text-gray-600">Average delivery time of 30 minutes across all service areas</p>
          </div>
          
          <div className="text-center">
            <div className="bg-green-100 p-4 rounded-2xl inline-flex mb-4">
              <MapPin className="h-8 w-8 text-green-600" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">Wide Coverage</h4>
            <p className="text-gray-600">Serving major cities and regional towns across South Australia</p>
          </div>
          
          <div className="text-center">
            <div className="bg-green-100 p-4 rounded-2xl inline-flex mb-4">
              <Truck className="h-8 w-8 text-green-600" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">Reliable Service</h4>
            <p className="text-gray-600">Professional drivers and real-time tracking for every delivery</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeliveryAreasSection;