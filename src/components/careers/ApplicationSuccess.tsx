import React from 'react';
import { CheckCircle } from 'lucide-react';

interface ApplicationSuccessProps {
  onClose: () => void;
}

export default function ApplicationSuccess({ onClose }: ApplicationSuccessProps) {
  return (
    <div className="text-center py-8">
      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <CheckCircle className="w-8 h-8 text-green-600" />
      </div>
      <h3 className="text-xl font-semibold mb-2">Application Submitted!</h3>
      <p className="text-gray-600 mb-6">
        Thank you for your interest. We'll review your application and get back to you soon.
      </p>
      <button
        onClick={onClose}  // Reset form when closing
        className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Close
      </button>
    </div>
  );
}
