import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const FooterSection = ({ title, links }: { title: string; links: string[] }) => (
  <div>
    <h3 className="font-semibold text-gray-100 mb-4">{title}</h3>
    <ul className="space-y-2">
      {links.map((link, index) => (
        <li key={index}>
          <a href="#" className="text-gray-300 hover:text-white transition-colors">
            {link}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default function Footer() {
  const sections = {
    Services: ['Emergency Care', 'Heart Center', 'Rehabilitation', 'Laboratory', 'Pharmacy'],
    Information: ['About Us', 'Doctors', 'Careers', 'News & Events', 'Contact'],
    Patients: ['Patient Portal', 'Insurance', 'Find a Doctor', 'Privacy Policy'],
  };

  return (
    <footer className="bg-blue-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <h2 className="text-2xl font-bold mb-4">MedCare Plus</h2>
            <p className="text-gray-300 mb-6">
              Leading the way in medical excellence with cutting-edge technology and compassionate care.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
          
          {Object.entries(sections).map(([title, links]) => (
            <FooterSection key={title} title={title} links={links} />
          ))}
        </div>
        
        <div className="border-t border-blue-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-300">
              © {new Date().getFullYear()} MedCare Plus. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}