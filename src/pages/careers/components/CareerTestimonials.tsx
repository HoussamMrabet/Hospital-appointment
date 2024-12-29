import React from 'react';
import { testimonials } from '../../../data/careersData';

export default function CareerTestimonials() {
  return (
    <section>
      <h2 className="text-2xl font-bold text-gray-900 mb-8">Employee Stories</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-start space-x-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                <p className="text-sm text-gray-600 mb-4">{testimonial.role}</p>
                <p className="text-gray-600 italic">{testimonial.quote}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}