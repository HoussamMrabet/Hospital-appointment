import React, { useState } from 'react';
import { X, Upload, CheckCircle } from 'lucide-react';
import ApplicationForm from './ApplicationForm';
import ApplicationSuccess from './ApplicationSuccess';

interface ApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  jobTitle: string;
}

export default function ApplicationModal({ isOpen, onClose, jobTitle }: ApplicationModalProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (formData: any) => {
    console.log('Application submitted:', formData);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setCurrentStep(0); // Reset to first step
    setIsSubmitted(false); // Reset submission state
    // Reset form data here as well
    onClose(); // Close the modal if necessary (optional)
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-2xl rounded-2xl">
        <div className="p-6 border-b flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-900">
            {isSubmitted ? 'Application Submitted' : `Apply for ${jobTitle}`}
          </h2>
          <button
            onClick={handleReset}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          {isSubmitted ? (
            <ApplicationSuccess onClose={handleReset} />
          ) : (
            <ApplicationForm onSubmit={handleSubmit} onReset={handleReset} />
          )}
        </div>
      </div>
    </div>
  );
}
