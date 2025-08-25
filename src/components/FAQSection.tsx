import  { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question: 'How does GDROP work?',
      answer: 'GDROP connects you with local businesses in your area. Simply enter your location, browse available stores and restaurants, place your order, and we\'ll deliver it to your doorstep within 30 minutes on average.'
    },
    {
      question: 'What areas do you deliver to?',
      answer: 'We currently serve Adelaide, Adelaide Hills, Mount Gambier, and Victor Harbor areas across South Australia. We\'re rapidly expanding to new areas - join our waitlist if your area isn\'t covered yet.'
    },
    {
      question: 'How much does delivery cost?',
      answer: 'Delivery fees vary by distance and store, typically ranging from $2.99 to $5.99. Many stores offer free delivery on orders over $30-50. You\'ll see the exact delivery fee before placing your order.'
    },
    {
      question: 'How long does delivery take?',
      answer: 'Our average delivery time is 30 minutes, but it can range from 20-45 minutes depending on your location, the store, and current demand. You\'ll get real-time tracking updates once your order is confirmed.'
    },
    {
      question: 'Can I track my order?',
      answer: 'Yes! Once your order is confirmed, you\'ll receive real-time updates via SMS and email. You can track your order from preparation to delivery through our website or mobile app.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit and debit cards (Visa, Mastercard, American Express), PayPal, Apple Pay, Google Pay, and Afterpay for eligible orders.'
    },
    {
      question: 'How do I become a partner business?',
      answer: 'It\'s easy! Click "Partner With Us" and fill out our application form. Our team will review your application and contact you within 24-48 hours to discuss next steps and get you set up.'
    },
    {
      question: 'What if there\'s an issue with my order?',
      answer: 'We\'re here to help! Contact our customer support team through the app, website, or phone. We offer refunds, replacements, or credits for any issues with your order to ensure you\'re completely satisfied.'
    },
    {
      question: 'Do you offer contactless delivery?',
      answer: 'Yes, we offer contactless delivery options. You can request contactless delivery during checkout, and our drivers will leave your order at your door and notify you when it arrives.'
    },
    {
      question: 'Are there minimum order requirements?',
      answer: 'Minimum order requirements vary by store, typically ranging from $15-25. This helps ensure delivery remains economical for both customers and our partner businesses.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <HelpCircle className="h-4 w-4" />
            <span>Support</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Got questions? We've got answers. Find everything you need to know about GDROP's services, delivery, and partnerships.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl border border-gray-100 overflow-hidden animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-100 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openFAQ === index ? (
                      <ChevronUp className="h-5 w-5 text-green-600" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-400" />
                    )}
                  </div>
                </button>
                
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openFAQ === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Support */}
        <div className="mt-16 text-center bg-gradient-to-r from-green-600 to-green-700 rounded-3xl p-8 lg:p-12 text-white animate-fade-in-up">
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">
            Still Have Questions?
          </h3>
          <p className="text-green-100 text-lg mb-8 max-w-2xl mx-auto">
            Our friendly customer support team is here to help you 24/7. Get in touch and we'll get back to you as soon as possible.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
              Contact Support
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-green-700 transition-all duration-300">
              Live Chat
            </button>
          </div>

          {/* Contact Methods */}
          <div className="mt-8 pt-8 border-t border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <h4 className="font-semibold mb-2">Phone Support</h4>
                <p className="text-green-100">1-800-GDROP-AU</p>
                <p className="text-sm text-green-200">24/7 Available</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Email Support</h4>
                <p className="text-green-100">support@gdrop.com.au</p>
                <p className="text-sm text-green-200">Response within 2 hours</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Live Chat</h4>
                <p className="text-green-100">Available on website</p>
                <p className="text-sm text-green-200">Instant responses</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;