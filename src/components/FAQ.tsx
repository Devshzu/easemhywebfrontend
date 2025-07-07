import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const faqs = [
    {
      question: 'What is the return policy?',
      answer: 'We offer a 30-day money-back guarantee for all products. If you\'re not completely satisfied, we\'ll refund your purchase, no questions asked.'
    },
    {
      question: 'Can I upgrade my product later?',
      answer: 'Absolutely! You can easily upgrade or modify your product anytime through your account dashboard. We also offer seamless migration tools to help you transition.'
    },
    {
      question: 'Do you provide customer support?',
      answer: 'Yes! Our dedicated support team is available 24/7 through multiple channels including live chat, email, and phone. We also have an extensive knowledge base and video tutorials.'
    },
    {
      question: 'Is there a free trial available?',
      answer: 'Yes, we offer a 14-day free trial for all our products. No credit card required to get started, and you can cancel anytime during the trial period.'
    },
    {
      question: 'How secure is my data?',
      answer: 'We take security very seriously. All data is encrypted in transit and at rest using industry-standard encryption. We\'re SOC 2 Type II certified and GDPR compliant.'
    }
  ];

  return (
    <section className="container mx-auto px-4 py-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-300">
            Everything you need to know about our products and services.
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl border border-gray-700 hover:border-gray-600 transition-all duration-300 shadow-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-800/50 transition-colors duration-300"
              >
                <span className="text-xl font-bold text-white pr-4">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-6 h-6 text-orange-400 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-orange-400 flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-8 pb-6 border-t border-gray-700 bg-gradient-to-r from-orange-500/10 to-red-500/10">
                  <p className="text-gray-300 leading-relaxed pt-4">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;