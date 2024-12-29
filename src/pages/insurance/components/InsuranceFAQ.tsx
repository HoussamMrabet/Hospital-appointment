import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { insuranceFAQs } from '../../../data/insuranceData';

export default function InsuranceFAQ() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section>
      <h2 className="text-2xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {insuranceFAQs.map((item, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm">
            <button
              onClick={() => toggleItem(index)}
              className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50"
            >
              <span className="font-semibold text-gray-900">{item.question}</span>
              {openItems.includes(index) ? (
                <ChevronUp className="w-5 h-5 text-gray-500" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-500" />
              )}
            </button>
            
            {openItems.includes(index) && (
              <div className="px-6 pb-4 text-gray-600">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}