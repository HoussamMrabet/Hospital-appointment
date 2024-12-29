import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { jobListings, departments } from '../../../data/careersData';
import ApplicationModal from '../../../components/careers/ApplicationModal';

export default function JobListings() {
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedJob, setSelectedJob] = useState<string | null>(null);

  const filteredJobs = jobListings.filter(job => {
    const matchesDepartment = selectedDepartment === 'all' || job.department === selectedDepartment;
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDepartment && matchesSearch;
  });

  return (
    <section className="mb-20">
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="flex-1 relative">
          <input
            type="text"
            placeholder="Search positions..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        </div>
        
        <select
          value={selectedDepartment}
          onChange={(e) => setSelectedDepartment(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="all">All Departments</option>
          {departments.map(dept => (
            <option key={dept} value={dept}>{dept}</option>
          ))}
        </select>
      </div>

      <div className="space-y-6">
        {filteredJobs.map((job, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">{job.title}</h3>
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium">
                    {job.department}
                  </span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                    {job.location}
                  </span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                    {job.type}
                  </span>
                </div>
              </div>
              <button
                onClick={() => setSelectedJob(job.title)}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Apply Now
              </button>
            </div>
            <p className="text-gray-600 mt-4">{job.description}</p>
          </div>
        ))}
      </div>

      <ApplicationModal
        isOpen={!!selectedJob}
        onClose={() => setSelectedJob(null)}
        jobTitle={selectedJob || ''}
      />
    </section>
  );
}