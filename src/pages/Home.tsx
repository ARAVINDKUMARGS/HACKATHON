import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Shield, Heart, Brain, Users, Clock } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FeatureCard from '../components/FeatureCard';

export default function Home() {
  const features = [
    {
      icon: MessageCircle,
      title: "24/7 AI Support",
      description: "Always available to listen and provide empathetic responses when you need someone to talk to."
    },
    {
      icon: Shield,
      title: "Privacy First",
      description: "Your conversations are private and secure. We prioritize your confidentiality and safety."
    },
    {
      icon: Brain,
      title: "Emotion Detection",
      description: "Advanced AI that understands emotional context and responds with appropriate support."
    },
    {
      icon: Heart,
      title: "Crisis Support",
      description: "Immediate recognition of crisis situations with guidance to professional resources."
    },
    {
      icon: Users,
      title: "Peer Connection",
      description: "Connect with others who understand your experiences in a safe, moderated environment."
    },
    {
      icon: Clock,
      title: "Instant Response",
      description: "Get immediate support without waiting for appointments or office hours."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Your AI Companion for
                <span className="text-blue-600 block">Mental Wellness</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Saathi.AI provides empathetic, 24/7 mental health support for students. 
                Talk to our AI companion whenever you need someone to listen, understand, and help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/chat"
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Start Chatting Now
                </Link>
                <Link
                  to="/resources"
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold border border-blue-600 hover:bg-blue-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  View Resources
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                How Saathi.AI Supports You
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Our AI companion is designed with student mental health in mind, 
                providing safe, accessible, and immediate support.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-blue-600 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Take the first step towards better mental health. 
              Saathi.AI is here to listen and support you every step of the way.
            </p>
            <Link
              to="/chat"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
            >
              Begin Your Conversation
            </Link>
          </div>
        </section>

        {/* Disclaimer Section */}
        <section className="bg-gray-100 py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Important Disclaimer</h3>
            <p className="text-gray-600">
              Saathi.AI is an AI-powered support tool designed to provide emotional support and resources. 
              It is not a replacement for professional medical care, therapy, or crisis intervention. 
              If you are experiencing a mental health emergency, please contact emergency services, 
              call 988 (Suicide & Crisis Lifeline), or visit your nearest emergency room immediately.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}