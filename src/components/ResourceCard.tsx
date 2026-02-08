import React from 'react';
import { ExternalLink } from 'lucide-react';

interface ResourceCardProps {
  title: string;
  description: string;
  category: string;
  link?: string;
  phone?: string;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ 
  title, 
  description, 
  category, 
  link, 
  phone 
}) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-3">
        <span className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
          {category}
        </span>
        {link && (
          <ExternalLink className="h-4 w-4 text-gray-400" />
        )}
      </div>
      
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      
      <div className="space-y-2">
        {phone && (
          <div className="text-sm">
            <span className="font-medium text-gray-700">Phone: </span>
            <a href={`tel:${phone}`} className="text-blue-600 hover:text-blue-800">
              {phone}
            </a>
          </div>
        )}
        {link && (
          <div className="text-sm">
            <a 
              href={link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 inline-flex items-center space-x-1"
            >
              <span>Visit Website</span>
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResourceCard;