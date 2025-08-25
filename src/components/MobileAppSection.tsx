
import { Smartphone, Download, Star, Bell, MapPin, CreditCard } from 'lucide-react';

const MobileAppSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-green-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-green-400 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-green-600/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Smartphone className="h-4 w-4 text-green-400" />
                <span className="text-green-400 font-medium">Mobile App</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                Get the GDROP App
                <span className="block text-green-400">for the Best Experience</span>
              </h2>
              
              <p className="text-xl text-gray-300 leading-relaxed">
                Download our mobile app for faster ordering, exclusive deals, real-time tracking, and seamless checkout. Available for iOS and Android.
              </p>
            </div>

            {/* App Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3 bg-white/5 backdrop-blur-sm rounded-xl p-4">
                <div className="bg-green-600 p-2 rounded-lg">
                  <Bell className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold">Push Notifications</h4>
                  <p className="text-sm text-gray-400">Real-time order updates</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 bg-white/5 backdrop-blur-sm rounded-xl p-4">
                <div className="bg-green-600 p-2 rounded-lg">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold">Live Tracking</h4>
                  <p className="text-sm text-gray-400">Track your delivery</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 bg-white/5 backdrop-blur-sm rounded-xl p-4">
                <div className="bg-green-600 p-2 rounded-lg">
                  <CreditCard className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold">Easy Payments</h4>
                  <p className="text-sm text-gray-400">Secure & convenient</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 bg-white/5 backdrop-blur-sm rounded-xl p-4">
                <div className="bg-green-600 p-2 rounded-lg">
                  <Star className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold">Exclusive Deals</h4>
                  <p className="text-sm text-gray-400">App-only offers</p>
                </div>
              </div>
            </div>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex items-center space-x-3 bg-white text-gray-900 px-6 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
                <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xs font-bold">📱</span>
                </div>
                <div className="text-left">
                  <div className="text-xs text-gray-600">Download on the</div>
                  <div className="font-bold">App Store</div>
                </div>
              </button>
              
              <button className="flex items-center space-x-3 bg-white text-gray-900 px-6 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
                <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                  <Download className="h-4 w-4 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-xs text-gray-600">Get it on</div>
                  <div className="font-bold">Google Play</div>
                </div>
              </button>
            </div>

            {/* App Stats */}
            <div className="flex items-center space-x-8 pt-4">
              {/* <div>
                <div className="text-2xl font-bold text-green-400">4.8★</div>
                <div className="text-sm text-gray-400">App Store Rating</div>
              </div> */}
              {/* <div>
                <div className="text-2xl font-bold text-green-400">100K+</div>
                <div className="text-sm text-gray-400">Downloads</div>
              </div> */}
              {/* <div>
                <div className="text-2xl font-bold text-green-400">50K+</div>
                <div className="text-sm text-gray-400">Active Users</div>
              </div> */}
            </div>
          </div>

          {/* Right Content - Phone Mockup */}
          <div className="relative">
            <div className="relative z-10 max-w-sm mx-auto">
              {/* Phone Frame */}
              <div className="bg-gray-800 rounded-[3rem] p-2 shadow-2xl">
                <div className="bg-white rounded-[2.5rem] overflow-hidden">
                  {/* Phone Screen */}
                  <div className="relative">
                    <img
                      src="https://images.pexels.com/photos/4198018/pexels-photo-4198018.jpeg?auto=compress&cs=tinysrgb&w=400"
                      alt="GDROP Mobile App"
                      className="w-full h-96 object-cover"
                    />
                    
                    {/* App UI Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
                      <div className="absolute bottom-6 left-6 right-6">
                        <div className="bg-white rounded-2xl p-4 shadow-lg">
                          <div className="flex items-center space-x-3 mb-3">
                            <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                              <Smartphone className="h-6 w-6 text-white" />
                            </div>
                            <div>
                              <h4 className="font-bold text-gray-900">GDROP</h4>
                              <p className="text-sm text-gray-600">Food & Grocery Delivery</p>
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-1">
                              <Star className="h-4 w-4 text-yellow-400 fill-current" />
                              <span className="text-sm font-semibold">4.8</span>
                            </div>
                            <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-semibold">
                              Open
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-6 -left-6 bg-green-600 p-4 rounded-2xl shadow-xl">
              <Bell className="h-6 w-6 text-white" />
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold text-gray-900">Order Delivered!</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileAppSection;