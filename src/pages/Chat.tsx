import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ChatInterface from '../components/ChatInterface';

export default function Chat() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      
      <main className="flex-1 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Chat with Saathi
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Share what's on your mind. Saathi is here to listen, understand, and provide support 
              in a safe, judgment-free space.
            </p>
          </div>
          
          <div className="h-[600px]">
            <ChatInterface />
          </div>
          
          <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h3 className="font-semibold text-blue-900 mb-2">Remember:</h3>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>• This is a safe space to express your feelings</li>
              <li>• Saathi is an AI companion, not a replacement for professional help</li>
              <li>• If you're in crisis, please call 988 or text HOME to 741741</li>
              <li>• Your privacy and wellbeing are our top priorities</li>
            </ul>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}