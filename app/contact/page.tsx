import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact - Helman Dacuma',
  description: 'Get in touch with me for collaborations or opportunities.',
};

export default function ContactPage() {
  return (
    <div className="bg-vanilla">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h1 className="text-4xl md:text-5xl font-bold text-text-charcoal mb-4">
            Contact
          </h1>
          <div className="w-24 h-1 bg-accent-blue mx-auto mb-6"></div>
          <p className="text-xl text-text-charcoal/70">
            How to reach me for collaborations or opportunities
          </p>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-text-charcoal mb-4">Get In Touch</h2>
              <p className="text-text-charcoal/70 mb-6">
                I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div 
                className="bg-white rounded-lg p-6 border border-gray-200 card-lift"
                data-aos="fade-left"
                data-aos-delay="100"
              >
                <h3 className="text-lg font-semibold text-text-charcoal mb-2">Current Status</h3>
                <p className="text-text-charcoal/70">
                  Completing On-the-Job Training at NCIP
                </p>
              </div>
              <div 
                className="bg-white rounded-lg p-6 border border-gray-200 card-lift"
                data-aos="fade-right"
                data-aos-delay="200"
              >
                <h3 className="text-lg font-semibold text-text-charcoal mb-2">Availability</h3>
                <p className="text-text-charcoal/70">
                  Open to collaborations and opportunities
                </p>
              </div>
            </div>

            <div 
              className="bg-accent-blue-50 rounded-lg p-6 border border-accent-blue-100"
              data-aos="fade"
              data-aos-delay="300"
            >
              <h3 className="text-lg font-semibold text-text-charcoal mb-2">Contact Methods</h3>
              <p className="text-text-charcoal/80">
                Please reach out through your preferred method. I&apos;ll get back to you as soon as possible.
              </p>
              <p className="text-text-charcoal/60 text-sm mt-4">
                <em>Contact information can be added here (email, social media links, etc.)</em>
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center" data-aos="fade" data-aos-delay="400">
          <p className="text-text-charcoal/70 mb-4">
            Interested in working together or have a question?
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="/projects"
              className="inline-block bg-cta-blue text-white px-8 py-3 rounded-lg font-semibold btn-pop btn-pulse hover:bg-cta-blue-600 transition-colors"
            >
              View My Projects
            </a>
            <a
              href="/about"
              className="inline-block bg-gray-200 text-text-charcoal px-8 py-3 rounded-lg font-semibold btn-pop hover:bg-gray-300 transition-colors"
            >
              Learn More About Me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

