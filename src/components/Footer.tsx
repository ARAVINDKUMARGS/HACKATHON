import React from 'react';
import { Heart, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Heart className="h-6 w-6 text-blue-600" />
              <span className="text-xl font-semibold text-gray-900">Saathi.AI</span>
            </div>
            <p className="text-gray-600 text-sm">
              Your AI companion for mental health support. Always here to listen, understand, and help.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
              Crisis Support
            </h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Phone className="h-4 w-4" />
                <span>National Suicide Prevention: 988</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Phone className="h-4 w-4" />
                <span>Crisis Text Line: Text HOME to 741741</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
              Legal
            </h3>
            <div className="space-y-2">
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900 block">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900 block">
                Terms of Service
              </a>
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900 block">
                Disclaimer
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-600">
              © 2026 Saathi.AI. All rights reserved.
            </p>
            <p className="text-xs text-gray-500 mt-2 md:mt-0">
              This is an AI support tool, not a replacement for professional medical care.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;