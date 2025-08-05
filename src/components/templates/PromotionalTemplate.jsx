import React from 'react'

const PromotionalTemplate = () => {
  return (
    <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 to-red-500 px-6 py-8 text-center">
        <div className="bg-white text-orange-600 text-sm font-bold px-3 py-1 rounded-full inline-block mb-4">
          LIMITED TIME OFFER
        </div>
        <h1 className="text-3xl font-bold text-white mb-2">50% OFF Everything!</h1>
        <p className="text-orange-100">Don't miss this incredible deal</p>
      </div>
      
      {/* Content */}
      <div className="px-6 py-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            🎉 Flash Sale Alert! 🎉
          </h2>
          
          <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6 mb-6">
            <div className="text-4xl font-bold text-red-600 mb-2">50% OFF</div>
            <div className="text-lg text-gray-700 mb-4">All Premium Features</div>
            <div className="text-sm text-gray-600">
              Offer ends in <span className="font-bold text-red-600">24 hours</span>
            </div>
          </div>
        </div>
        
        <div className="space-y-4 mb-8">
          <h3 className="font-semibold text-gray-800 text-lg">What's Included:</h3>
          <div className="space-y-3">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
              <span className="text-gray-700">Unlimited projects and templates</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
              <span className="text-gray-700">Advanced analytics and reporting</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
              <span className="text-gray-700">Priority customer support</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
              <span className="text-gray-700">Custom branding options</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
              <span className="text-gray-700">API access and integrations</span>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-6 mb-6">
          <div className="text-center">
            <div className="text-sm text-gray-600 mb-2">Regular Price</div>
            <div className="text-2xl text-gray-400 line-through">$99/month</div>
            <div className="text-sm text-gray-600 mb-2 mt-2">Sale Price</div>
            <div className="text-4xl font-bold text-red-600">$49/month</div>
            <div className="text-sm text-green-600 font-semibold mt-2">Save $50/month!</div>
          </div>
        </div>
        
        <div className="text-center space-y-3">
          <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg transition-colors text-lg">
            Claim Your Discount Now
          </button>
          <p className="text-sm text-gray-500">
            *Limited time offer. Cannot be combined with other promotions.
          </p>
        </div>
      </div>
      
      {/* Footer */}
      <div className="bg-gray-100 px-6 py-4 text-center">
        <p className="text-gray-500 text-sm mb-2">
          © 2024 Your Company. All rights reserved.
        </p>
        <p className="text-gray-500 text-sm">
          Questions? Contact us at support@company.com
        </p>
      </div>
    </div>
  )
}

export default PromotionalTemplate 