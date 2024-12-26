import React from 'react';
import { FileText, Download } from 'lucide-react';

interface ResourceCardProps {
  title: string;
  description: string;
  fileType: string;
  fileSize: string;
  downloadUrl: string;
}

export default function ResourceCard({ title, description, fileType, fileSize, downloadUrl }: ResourceCardProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start space-x-4">
        <div className="p-3 bg-blue-50 rounded-lg">
          <FileText className="w-6 h-6 text-blue-600" />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 mb-1">{title}</h3>
          <p className="text-gray-600 text-sm mb-3">{description}</p>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500">
              {fileType} • {fileSize}
            </span>
            <a
              href={downloadUrl}
              className="flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm"
            >
              <Download size={16} className="mr-1" />
              Download
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}