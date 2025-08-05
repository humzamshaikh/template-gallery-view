import React from 'react'

const NewsletterTemplate = () => {
  return (
    <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      {/* Header */}
      <div className="bg-green-600 px-6 py-8 text-center">
        <h1 className="text-3xl font-bold text-white mb-2">Weekly Newsletter</h1>
        <p className="text-green-100">Stay updated with the latest news and insights</p>
      </div>
      
      {/* Content */}
      <div className="px-6 py-8">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            This Week's Highlights 📰
          </h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-semibold text-gray-800 mb-2">New Feature Launch</h3>
              <p className="text-gray-600">
                We've just released our new collaboration tools. Discover how they can 
                transform your workflow and boost productivity.
              </p>
            </div>
            
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold text-gray-800 mb-2">Community Spotlight</h3>
              <p className="text-gray-600">
                Meet Sarah Johnson, our featured community member who has created 
                over 100 amazing projects this month.
              </p>
            </div>
            
            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="font-semibold text-gray-800 mb-2">Upcoming Events</h3>
              <p className="text-gray-600">
                Join us next week for our virtual meetup where we'll discuss the 
                future of digital collaboration.
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-green-50 rounded-lg p-6 mb-6">
          <h3 className="font-semibold text-gray-800 mb-3">Quick Stats</h3>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-green-600">1,234</div>
              <div className="text-sm text-gray-600">New Users</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-600">5,678</div>
              <div className="text-sm text-gray-600">Projects Created</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-600">99%</div>
              <div className="text-sm text-gray-600">Satisfaction</div>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
            Read Full Newsletter
          </button>
        </div>
      </div>
      
      {/* Footer */}
      <div className="bg-gray-100 px-6 py-4 text-center">
        <p className="text-gray-500 text-sm mb-2">
          © 2024 Your Company. All rights reserved.
        </p>
        <p className="text-gray-500 text-sm">
          You can unsubscribe at any time.
        </p>
      </div>
    </div>
  )
}

export default NewsletterTemplate 