import React from 'react'

const EventComingSoonTemplate = ({ EditableText, content = {} }) => {
  return (
    <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-8 text-center">
        <div className="text-4xl mb-4">🎉</div>
        <EditableText 
          contentKey="mainTitle" 
          tag="h1" 
          className="text-3xl font-bold text-white mb-2"
        >
          Event Coming Soon!
        </EditableText>
        <EditableText 
          contentKey="subtitle" 
          className="text-purple-100"
        >
          Get ready for an amazing experience
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
            🚀 Tech Conference 2024
          </EditableText>
          
          <div className="bg-purple-50 border-l-4 border-purple-500 p-4 mb-6">
            <h3 className="font-semibold text-gray-800 mb-2">Event Details</h3>
            <div className="space-y-2 text-gray-700">
              <div><strong>Date:</strong> December 20-22, 2024</div>
              <div><strong>Location:</strong> San Francisco Convention Center</div>
              <div><strong>Time:</strong> 9:00 AM - 6:00 PM PST</div>
            </div>
          </div>
          
          <EditableText 
            contentKey="description" 
            className="text-gray-600 mb-6 leading-relaxed"
          >
            Join us for three days of inspiring talks, hands-on workshops, and networking 
            opportunities with industry leaders. This year's conference will feature cutting-edge 
            technology presentations and exclusive networking sessions.
          </EditableText>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-2xl mb-2">🎤</div>
              <div className="font-semibold text-gray-800">50+ Speakers</div>
              <div className="text-sm text-gray-600">Industry experts</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-2xl mb-2">👥</div>
              <div className="font-semibold text-gray-800">1000+ Attendees</div>
              <div className="text-sm text-gray-600">Global community</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-2xl mb-2">💡</div>
              <div className="font-semibold text-gray-800">20+ Sessions</div>
              <div className="text-sm text-gray-600">Interactive workshops</div>
            </div>
          </div>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-yellow-700">
                  <strong>Early Bird Registration:</strong> Save 30% when you register before November 30th!
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center space-y-3">
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
            <EditableText contentKey="buttonText">Register Now</EditableText>
          </button>
          <EditableText 
            contentKey="footerText" 
            className="text-sm text-gray-500"
          >
            Don't miss out on the biggest tech event of the year!
          </EditableText>
        </div>
      </div>
      
      {/* Footer */}
      <div className="bg-gray-100 px-6 py-4 text-center">
        <p className="text-gray-500 text-sm mb-2">
          © 2024 Tech Conference. All rights reserved.
        </p>
        <p className="text-gray-500 text-sm">
          Questions? Contact us at info@techconference.com
        </p>
      </div>
    </div>
  )
}

export default EventComingSoonTemplate 