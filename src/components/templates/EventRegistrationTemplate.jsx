import React from 'react'

const EventRegistrationTemplate = ({ EditableText, content = {} }) => {
  return (
    <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-teal-600 to-blue-600 px-6 py-8 text-center">
        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </div>
        <EditableText 
          contentKey="mainTitle" 
          tag="h1" 
          className="text-3xl font-bold text-white mb-2"
        >
          Registration Confirmed!
        </EditableText>
        <EditableText 
          contentKey="subtitle" 
          className="text-teal-100"
        >
          You're all set for the event
        </EditableText>
      </div>
      
      {/* Content */}
      <div className="px-6 py-8">
        <div className="mb-8">
          <EditableText 
            contentKey="mainHeading" 
            tag="h2" 
            className="text-2xl font-semibold text-gray-800 mb-4"
          >
            ✅ Your Registration is Complete
          </EditableText>
          
          <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-6">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-green-700">
                  <strong>Registration ID:</strong> #EVT-2024-001234
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <h3 className="font-semibold text-gray-800 mb-4">Event Details</h3>
            <div className="space-y-3 text-gray-700">
              <div className="flex justify-between">
                <span><strong>Event:</strong></span>
                <span>Tech Conference 2024</span>
              </div>
              <div className="flex justify-between">
                <span><strong>Date:</strong></span>
                <span>December 20-22, 2024</span>
              </div>
              <div className="flex justify-between">
                <span><strong>Time:</strong></span>
                <span>9:00 AM - 6:00 PM PST</span>
              </div>
              <div className="flex justify-between">
                <span><strong>Location:</strong></span>
                <span>San Francisco Convention Center</span>
              </div>
              <div className="flex justify-between">
                <span><strong>Ticket Type:</strong></span>
                <span>Early Bird Pass</span>
              </div>
              <div className="flex justify-between">
                <span><strong>Price:</strong></span>
                <span className="text-green-600 font-semibold">$299 (30% off)</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-4 mb-6">
            <h3 className="font-semibold text-gray-800">What's Next?</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></div>
                <span className="text-gray-700">Check your email for a calendar invitation</span>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></div>
                <span className="text-gray-700">Download the event app for updates and networking</span>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></div>
                <span className="text-gray-700">Join our pre-event community on Discord</span>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></div>
                <span className="text-gray-700">Follow us on social media for speaker announcements</span>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-blue-700">
                  <strong>Need to make changes?</strong> Contact our support team at 
                  support@techconference.com or call (555) 123-4567.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center space-y-3">
          <button className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
            <EditableText contentKey="buttonText">View Event Details</EditableText>
          </button>
          <EditableText 
            contentKey="footerText" 
            className="text-sm text-gray-500"
          >
            We can't wait to see you at the event!
          </EditableText>
        </div>
      </div>
      
      {/* Footer */}
      <div className="bg-gray-100 px-6 py-4 text-center">
        <p className="text-gray-500 text-sm mb-2">
          © 2024 Tech Conference. All rights reserved.
        </p>
        <p className="text-gray-500 text-sm">
          Questions? Contact us at support@techconference.com
        </p>
      </div>
    </div>
  )
}

export default EventRegistrationTemplate 