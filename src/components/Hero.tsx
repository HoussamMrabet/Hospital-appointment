import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-r from-blue-900 to-blue-800 text-white min-h-[600px] flex items-center mt-32">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80"
          alt="Modern hospital facility"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-bold mb-6">
            Advanced Care with a Personal Touch
          </h1>
          <p className="text-xl mb-8 text-blue-100">
            Leading the way in medical excellence with cutting-edge technology and compassionate care.
          </p>
          <div className="flex space-x-4">
            <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Find a Doctor
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors flex items-center space-x-2">
              <span>Virtual Tour</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}