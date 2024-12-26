import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: 'What insurance plans do you accept?',
    answer: 'We accept most major insurance plans including Medicare, Blue Cross Blue Shield, Aetna, Cigna, and UnitedHealthcare. Please contact our billing department for specific coverage questions.',
  },
  {
    question: 'How do I schedule an appointment?',
    answer: 'You can schedule an appointment by calling our office, using our online booking system, or through the patient portal. New patients may need to arrive 15 minutes early to complete registration forms.',
  },
  {
    question: 'What should I bring to my first appointment?',
    answer: 'Please bring your photo ID, insurance card, list of current medications, medical history, and any relevant medical records or test results from previous healthcare providers.',
  },
  {
    question: 'Do you offer telehealth services?',
    answer: 'Yes, we offer telehealth services for certain types of appointments. Please call our office to determine if your visit is eligible for a virtual consultation.',
  },
  {
    question: 'What are your hours of operation?',
    answer: 'Our regular hours are Monday through Friday from 8:00 AM to 6:00 PM. We also offer weekend urgent care services from 9:00 AM to 2:00 PM.',
  },
  {
    question: 'How do I access my medical records?',
    answer: 'You can access your medical records through our secure patient portal. You can also request physical copies by completing a medical records release form at our office.',
  },
];

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our services, appointments, and policies.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm overflow-hidden"
            >
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
      </div>
    </section>
  );
}