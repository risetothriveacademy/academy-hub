export default function SupportPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Customer Support Policy
          </h1>
          <p className="text-lg text-gray-600">
            We're here to help you on your journey
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-teal-600 mb-4">
              Contact Information
            </h2>
            <p className="text-gray-700 mb-2">
              For all support inquiries, please contact us at:
            </p>
            <p className="text-lg font-medium text-teal-600">
              <a href="mailto:support@risetothrive-academy.com" className="hover:underline">
                support@risetothrive-academy.com
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-teal-600 mb-4">
              Support Channels
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Email support for all course-related questions</li>
              <li>Technical assistance with platform access</li>
              <li>Billing and payment inquiries</li>
              <li>Content clarification and guidance</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-teal-600 mb-4">
              Response Times
            </h2>
            <p className="text-gray-700 mb-4">
              We strive to respond to all support requests within 24-48 business hours
              (Monday through Friday, excluding holidays).
            </p>
            <p className="text-gray-700">
              For urgent matters, please indicate "URGENT" in your email subject line.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-teal-600 mb-4">
              What We Can Help With
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Course access and login issues</li>
              <li>Video playback or technical problems</li>
              <li>Questions about course content and materials</li>
              <li>Billing questions and receipt requests</li>
              <li>Guidance on getting the most from your courses</li>
              <li>Suggestions for future content</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-teal-600 mb-4">
              Important Notes
            </h2>
            <div className="bg-teal-50 border-l-4 border-teal-600 p-4">
              <p className="text-gray-700 mb-2">
                <strong>Writing-Only Support:</strong> We currently provide support exclusively
                via email. We do not offer phone or live chat support at this time.
              </p>
              <p className="text-gray-700">
                <strong>No Refunds:</strong> All course purchases are final. We do not offer
                refunds under any circumstances. Please review course descriptions carefully
                before purchasing.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-teal-600 mb-4">
              Before Contacting Support
            </h2>
            <p className="text-gray-700 mb-4">
              To help us serve you better, please:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Include your registered email address</li>
              <li>Describe the issue in detail</li>
              <li>Include any error messages or screenshots if applicable</li>
              <li>Let us know what steps you've already tried</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
