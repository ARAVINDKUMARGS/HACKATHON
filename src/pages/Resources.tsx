import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ResourceCard from '../components/ResourceCard';

export default function Resources() {
  const crisisResources = [
    {
      title: "National Suicide Prevention Lifeline",
      description: "24/7 free and confidential support for people in distress, prevention and crisis resources.",
      category: "Crisis Support",
      phone: "988"
    },
    {
      title: "Crisis Text Line",
      description: "Free, 24/7 support for those in crisis. Text with a trained crisis counselor.",
      category: "Crisis Support",
      phone: "741741",
      link: "https://www.crisistextline.org"
    },
    {
      title: "National Alliance on Mental Illness (NAMI)",
      description: "Support, education and advocacy for individuals and families affected by mental illness.",
      category: "Support Organization",
      phone: "1-800-950-6264",
      link: "https://www.nami.org"
    }
  ];

  const studentResources = [
    {
      title: "Active Minds",
      description: "Student-run mental health awareness and advocacy organization on college campuses.",
      category: "Student Support",
      link: "https://www.activeminds.org"
    },
    {
      title: "JED Campus",
      description: "Comprehensive approach to mental health and suicide prevention for colleges.",
      category: "Campus Resources",
      link: "https://www.jedcampus.org"
    },
    {
      title: "Student Mental Health Collective",
      description: "Resources and support specifically designed for student mental health needs.",
      category: "Student Support",
      link: "https://www.studentmentalhealth.org"
    }
  ];

  const selfCareResources = [
    {
      title: "Headspace",
      description: "Meditation and mindfulness app with specific content for students and stress management.",
      category: "Self-Care",
      link: "https://www.headspace.com"
    },
    {
      title: "Calm",
      description: "Sleep stories, meditation, and relaxation techniques to help manage anxiety and stress.",
      category: "Self-Care",
      link: "https://www.calm.com"
    },
    {
      title: "7 Cups",
      description: "Free emotional support through trained listeners and online therapy options.",
      category: "Peer Support",
      link: "https://www.7cups.com"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Mental Health Resources
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Access professional support, crisis resources, and self-care tools to support your mental wellness journey.
            </p>
          </div>

          {/* Crisis Resources */}
          <section className="mb-16">
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-bold text-red-900 mb-2">
                🚨 Crisis Support - Available 24/7
              </h2>
              <p className="text-red-800">
                If you're having thoughts of suicide or self-harm, please reach out for immediate help. 
                You are not alone, and support is available right now.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {crisisResources.map((resource, index) => (
                <ResourceCard key={index} {...resource} />
              ))}
            </div>
          </section>

          {/* Student-Specific Resources */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Student Mental Health Support
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {studentResources.map((resource, index) => (
                <ResourceCard key={index} {...resource} />
              ))}
            </div>
          </section>

          {/* Self-Care Resources */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Self-Care & Wellness Tools
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {selfCareResources.map((resource, index) => (
                <ResourceCard key={index} {...resource} />
              ))}
            </div>
          </section>

          {/* Additional Information */}
          <section className="bg-blue-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">
              Finding Professional Help
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-blue-800">
              <div>
                <h3 className="font-semibold mb-2">On Campus</h3>
                <ul className="space-y-1 text-sm">
                  <li>• Student counseling centers</li>
                  <li>• Campus health services</li>
                  <li>• Academic advisors</li>
                  <li>• Resident advisors (RAs)</li>
                  <li>• Student support services</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Off Campus</h3>
                <ul className="space-y-1 text-sm">
                  <li>• Licensed therapists and counselors</li>
                  <li>• Community mental health centers</li>
                  <li>• Support groups</li>
                  <li>• Psychiatric services</li>
                  <li>• Telehealth platforms</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}