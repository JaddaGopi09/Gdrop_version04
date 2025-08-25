
import { ShoppingCart, Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-gray-800">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Stay Updated with GDROP
            </h3>
            <p className="text-gray-300 mb-8 text-lg">
              Get exclusive deals, new store announcements, and delivery updates straight to your inbox
            </p>
            
            <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
              <div className="flex-1 relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full pl-12 pr-4 py-4 bg-gray-800 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-white placeholder-gray-400"
                />
              </div>
              <button className="bg-green-600 hover:bg-green-700 px-8 py-4 rounded-xl font-semibold transition-colors duration-300 flex items-center justify-center space-x-2">
                <span>Subscribe</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-2">
              <div className="bg-green-600 p-2 rounded-full">
                <ShoppingCart className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold">GDROP</h2>
            </div>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              Your local food and grocery delivery partner. We connect you with the best stores and restaurants in your community, delivering fresh quality right to your doorstep.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="h-5 w-5 text-green-500" />
                <span>1-800-GDROP-AU (43767)</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="h-5 w-5 text-green-500" />
                <span>support@gdrop.com.au</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="h-5 w-5 text-green-500" />
                <span>Adelaide, South Australia</span>
              </div>
            </div>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 hover:bg-green-600 p-3 rounded-full transition-colors duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-green-600 p-3 rounded-full transition-colors duration-300">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-green-600 p-3 rounded-full transition-colors duration-300">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-green-600 p-3 rounded-full transition-colors duration-300">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Our Story</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Press</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Grocery Delivery</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Restaurant Partners</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Partner with Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Become a Driver</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Corporate Orders</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Support</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Track Your Order</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2025 GDROP. All rights reserved. Made with ❤️ in South Australia
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-green-400 transition-colors">Privacy</a>
              <a href="#" className="hover:text-green-400 transition-colors">Terms</a>
              <a href="#" className="hover:text-green-400 transition-colors">Cookies</a>
              <a href="#" className="hover:text-green-400 transition-colors">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;