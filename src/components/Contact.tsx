import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Location',
    content: '123 Medical Center Drive, Healthcare City, HC 12345',
    link: 'https://maps.google.com',
  },
  {
    icon: Phone,
    title: 'Phone',
    content: '(800) 555-0123',
    link: 'tel:8005550123',
  },
  {
    icon: Mail,
    title: 'Email',
    content: 'contact@medcareplus.com',
    link: 'mailto:contact@medcareplus.com',
  },
  {
    icon: Clock,
    title: 'Hours',
    content: 'Mon-Fri: 8am-8pm, Sat: 9am-5pm',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get in touch with us for any inquiries or to schedule an appointment.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gray-50 p-8 rounded-xl">
            <div className="grid sm:grid-cols-2 gap-8">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <item.icon className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                    {item.link ? (
                      <a href={item.link} className="text-gray-600 hover:text-blue-600">
                        {item.content}
                      </a>
                    ) : (
                      <p className="text-gray-600">{item.content}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
        
        <div className="h-96 rounded-xl overflow-hidden">
          <iframe
            title="Hospital Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3308.90787575078!2d-6.873138824287109!3d33.96920727318842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda76cd10292747d%3A0xeb0417bcae75e005!2sH%C3%B4pital%20Militaire%20d&#39;Instruction%20Mohamed%20V!5e0!3m2!1sfr!2sma!4v1735181928215!5m2!1sfr!2sma"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
}