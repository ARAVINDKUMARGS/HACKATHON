import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Heart, Shield, Users, Brain } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              About Saathi.AI
            </h1>
            <p className="text-xl text-gray-600">
              Your compassionate AI companion for mental health support
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-600 mb-6">
                Saathi.AI was created to address the growing mental health crisis among students. 
                We believe that everyone deserves access to immediate, compassionate support when they need it most. 
                Our AI companion provides a safe, judgment-free space where students can express their feelings, 
                receive empathetic responses, and access resources for professional help.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">How Saathi.AI Works</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                  <div className="flex items-center space-x-3 mb-3">
                    <Brain className="h-6 w-6 text-blue-600" />
                    <h3 className="font-semibold text-gray-900">AI Understanding</h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Our AI uses advanced natural language processing to understand emotional context 
                    and respond with appropriate empathy and support.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                  <div className="flex items-center space-x-3 mb-3">
                    <Shield className="h-6 w-6 text-green-600" />
                    <h3 className="font-semibold text-gray-900">Crisis Detection</h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Saathi can identify signs of crisis and immediately provide resources 
                    for professional help and emergency support.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                  <div className="flex items-center space-x-3 mb-3">
                    <Heart className="h-6 w-6 text-red-600" />
                    <h3 className="font-semibold text-gray-900">Empathetic Support</h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Every interaction is designed to be supportive, non-judgmental, 
                    and focused on your emotional wellbeing.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                  <div className="flex items-center space-x-3 mb-3">
                    <Users className="h-6 w-6 text-purple-600" />
                    <h3 className="font-semibold text-gray-900">Resource Connection</h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    We connect you with professional resources, crisis support, 
                    and self-care tools tailored to your needs.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Privacy & Safety</h2>
              <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Your conversations are private and not stored permanently</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>We use encryption to protect your data during conversations</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Crisis detection is designed to connect you with professional help</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>We follow ethical AI principles and responsible development practices</span>
                  </li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Important Limitations</h2>
              <div className="bg-yellow-50 rounded-lg p-6 border border-yellow-200">
                <p className="text-gray-700 mb-4">
                  While Saathi.AI is designed to provide supportive conversations and resources, 
                  it's important to understand what we are and what we're not:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-green-700 mb-2">✓ What Saathi.AI Is:</h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• A supportive AI companion</li>
                      <li>• Available 24/7 for conversations</li>
                      <li>• A resource for crisis support information</li>
                      <li>• A tool for emotional support</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-red-700 mb-2">✗ What Saathi.AI Is Not:</h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• A replacement for professional therapy</li>
                      <li>• A medical diagnostic tool</li>
                      <li>• A crisis intervention service</li>
                      <li>• A substitute for emergency services</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Get Started Today</h2>
              <p className="text-gray-600 mb-6">
                Ready to begin your conversation with Saathi? We're here to listen and support you.
              </p>
              <a
                href="/chat"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Start Chatting with Saathi
              </a>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}