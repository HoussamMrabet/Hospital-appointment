import React from 'react';

const specialties = ['All Specialties', 'Cardiology', 'Neurology', 'Pediatrics', 'Orthopedics', 'Dermatology'];
const availability = ['Any Time', 'Today', 'Tomorrow', 'This Week', 'Next Week'];
const languages = ['English', 'Spanish', 'French', 'Arabic', 'Chinese'];
const gender = ['Any', 'Male', 'Female'];

export default function SearchFilters() {
  return (
    <div className="mt-4 p-4 bg-gray-50 rounded-lg grid sm:grid-cols-2 md:grid-cols-4 gap-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Specialty
        </label>
        <select className="w-full text-black rounded-lg border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
          {specialties.map((specialty) => (
            <option key={specialty}>{specialty}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Availability
        </label>
        <select className="w-full text-black rounded-lg border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
          {availability.map((time) => (
            <option key={time}>{time}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Language
        </label>
        <select className="w-full text-black rounded-lg border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
          {languages.map((language) => (
            <option key={language}>{language}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Gender
        </label>
        <select className="w-full text-black rounded-lg border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
          {gender.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </div>
    </div>
  );
}