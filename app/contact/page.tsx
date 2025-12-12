import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact - Helman Dacuma',
  description: 'Get in touch with me for collaborations or opportunities.',
};

export default function ContactPage() {
  return (
    <div className="bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Contact
          </h1>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600">
            How to reach me for collaborations or opportunities
          </p>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Get In Touch</h2>
              <p className="text-gray-600 mb-6">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Current Status</h3>
                <p className="text-gray-600">
                  Completing On-the-Job Training at NCIP
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Availability</h3>
                <p className="text-gray-600">
                  Open to collaborations and opportunities
                </p>
              </div>
            </div>

            <div className="bg-primary-50 rounded-lg p-6 border border-primary-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Contact Methods</h3>
              <p className="text-gray-700">
                Please reach out through your preferred method. I'll get back to you as soon as possible.
              </p>
              <p className="text-gray-600 text-sm mt-4">
                <em>Contact information can be added here (email, social media links, etc.)</em>
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <p className="text-gray-600 mb-4">
            Interested in working together or have a question?
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="/projects"
              className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
            >
              View My Projects
            </a>
            <a
              href="/about"
              className="inline-block bg-gray-200 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
            >
              Learn More About Me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

