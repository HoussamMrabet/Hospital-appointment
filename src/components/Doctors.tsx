import React from 'react';

const doctors = [
  {
    name: 'Dr. Mohammed El Fahfouhi',
    specialty: 'Cardiology',
    image: '/assets/simo.jpeg',
  },
  {
    name: 'Dr. Mohammed El Fahfouhi',
    specialty: 'Neurology',
    image: '/assets/simo.jpeg',
  },
  {
    name: 'Dr. Mohammed El Fahfouhi',
    specialty: 'Pediatrics',
    image: '/assets/simo.jpeg',
  },
];

export default function Doctors() {
  return (
    <section id="doctors" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Specialists</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our team of experienced doctors provides exceptional care with expertise in various medical fields.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doctor, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{doctor.name}</h3>
                <p className="text-blue-600">{doctor.specialty}</p>
                <a href="https://www.linkedin.com/in/mohammed-el-fahfouhi-093559207/" target="_blank" className="mt-4 text-blue-600 font-semibold hover:text-blue-800">
                  View Profile →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}