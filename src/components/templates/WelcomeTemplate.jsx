import React from 'react'

const WelcomeTemplate = () => {
  return (
    <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-8 text-center">
        <h1 className="text-3xl font-bold text-white mb-2">Welcome!</h1>
        <p className="text-blue-100">We're excited to have you on board</p>
      </div>
      
      {/* Content */}
      <div className="px-6 py-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Hello there! 👋
        </h2>
        
        <p className="text-gray-600 mb-6 leading-relaxed">
          Welcome to our platform! We're thrilled to have you join our community. 
          You're now part of something special, and we can't wait to see what you'll accomplish.
        </p>
        
        <div className="bg-gray-50 rounded-lg p-4 mb-6">
          <h3 className="font-semibold text-gray-800 mb-2">Getting Started</h3>
          <ul className="text-gray-600 space-y-1">
            <li>• Complete your profile</li>
            <li>• Explore our features</li>
            <li>• Connect with others</li>
            <li>• Start creating amazing content</li>
          </ul>
        </div>
        
        <div className="text-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
            Get Started
          </button>
        </div>
      </div>
      
      {/* Footer */}
      <div className="bg-gray-100 px-6 py-4 text-center">
        <p className="text-gray-500 text-sm">
          © 2024 Your Company. All rights reserved.
        </p>
      </div>
    </div>
  )
}

export default WelcomeTemplate 