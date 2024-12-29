import React, { useState } from 'react';
import { Upload, ArrowRight, ArrowLeft } from 'lucide-react';

interface ApplicationFormProps {
  onSubmit: (data: any) => void;
  onReset: () => void;
}

const steps = ['Personal Info', 'Experience', 'Documents', 'Review'];

export default function ApplicationForm({ onSubmit, onReset }: ApplicationFormProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    experience: '',
    education: '',
    resume: null as File | null,
    coverLetter: null as File | null
  });

  const updateFormData = (updates: Partial<typeof formData>) => {
    setFormData(prev => ({ ...prev, ...updates }));
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>, field: 'resume' | 'coverLetter') => {
    const file = event.target.files?.[0];
    if (file) {
      updateFormData({ [field]: file });
    }
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      onSubmit(formData);
    }
  };

  const handleBack = () => {
    setCurrentStep(prev => prev - 1);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  value={formData.firstName}
                  onChange={(e) => updateFormData({ firstName: e.target.value })}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  value={formData.lastName}
                  onChange={(e) => updateFormData({ lastName: e.target.value })}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => updateFormData({ email: e.target.value })}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => updateFormData({ phone: e.target.value })}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        );
      case 1:
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Professional Experience
              </label>
              <textarea
                value={formData.experience}
                onChange={(e) => updateFormData({ experience: e.target.value })}
                rows={4}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Education
              </label>
              <textarea
                value={formData.education}
                onChange={(e) => updateFormData({ education: e.target.value })}
                rows={4}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Resume
              </label>
              <div className="border-2 border-dashed rounded-lg p-6 text-center">
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={(e) => handleFileUpload(e, 'resume')}
                  className="hidden"
                  id="resume"
                />
                <label
                  htmlFor="resume"
                  className="cursor-pointer flex flex-col items-center"
                >
                  <Upload className="w-8 h-8 text-gray-400 mb-2" />
                  <span className="text-sm text-gray-600">
                    {formData.resume ? formData.resume.name : 'Upload Resume (PDF, DOC)'}
                  </span>
                </label>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Cover Letter (Optional)
              </label>
              <div className="border-2 border-dashed rounded-lg p-6 text-center">
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={(e) => handleFileUpload(e, 'coverLetter')}
                  className="hidden"
                  id="coverLetter"
                />
                <label
                  htmlFor="coverLetter"
                  className="cursor-pointer flex flex-col items-center"
                >
                  <Upload className="w-8 h-8 text-gray-400 mb-2" />
                  <span className="text-sm text-gray-600">
                    {formData.coverLetter ? formData.coverLetter.name : 'Upload Cover Letter (PDF, DOC)'}
                  </span>
                </label>
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium mb-2">Personal Information</h3>
              <p>{formData.firstName} {formData.lastName}</p>
              <p>{formData.email}</p>
              <p>{formData.phone}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium mb-2">Experience & Education</h3>
              <p className="whitespace-pre-wrap">{formData.experience}</p>
              <p className="whitespace-pre-wrap mt-2">{formData.education}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium mb-2">Documents</h3>
              <p>Resume: {formData.resume?.name}</p>
              {formData.coverLetter && (
                <p>Cover Letter: {formData.coverLetter.name}</p>
              )}
            </div>
          </div>
        );
    }
  };

  return (
    <div>
      {/* Form Content */}
      {renderStep()}

      {/* Navigation */}
      <div className="flex justify-between mt-8">
        <button
          onClick={handleBack}
          disabled={currentStep === 0}
          className="flex items-center px-4 py-2 text-gray-600 disabled:opacity-50"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </button>
        <button
          onClick={handleNext}
          className="flex items-center px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          {currentStep === steps.length - 1 ? 'Submit Application' : 'Next'}
          <ArrowRight className="w-4 h-4 ml-2" />
        </button>
      </div>
    </div>
  );
}
