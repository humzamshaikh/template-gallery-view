import React from 'react'

const YearEndReceiptTemplate = ({ EditableText, content = {} }) => {
  return (
    <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-600 to-orange-600 px-6 py-8 text-center">
        <div className="text-4xl mb-4">📊</div>
        <EditableText 
          contentKey="mainTitle" 
          tag="h1" 
          className="text-3xl font-bold text-white mb-2"
        >
          Year-End Summary
        </EditableText>
        <EditableText 
          contentKey="subtitle" 
          className="text-red-100"
        >
          Your 2024 activity report
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
            📈 Your 2024 Journey in Numbers
          </EditableText>
          
          <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-red-700">
                  <strong>Report Period:</strong> January 1, 2024 - December 31, 2024
                </p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-800 mb-4 text-center">Activity Summary</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Projects Created:</span>
                  <span className="font-semibold text-gray-800">47</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Collaborations:</span>
                  <span className="font-semibold text-gray-800">23</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Hours Logged:</span>
                  <span className="font-semibold text-gray-800">1,247</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Achievements:</span>
                  <span className="font-semibold text-gray-800">15</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-800 mb-4 text-center">Performance Metrics</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Completion Rate:</span>
                  <span className="font-semibold text-green-600">94%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">On-Time Delivery:</span>
                  <span className="font-semibold text-green-600">98%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Client Satisfaction:</span>
                  <span className="font-semibold text-green-600">4.8/5</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Skill Growth:</span>
                  <span className="font-semibold text-blue-600">+12</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
            <h3 className="font-semibold text-gray-800 mb-3">🏆 Top Achievements</h3>
            <div className="space-y-2 text-gray-700">
              <div>• Led 3 major project launches with 100% success rate</div>
              <div>• Mentored 5 junior team members</div>
              <div>• Earned 3 new professional certifications</div>
              <div>• Contributed to 8 open-source projects</div>
            </div>
          </div>
          
          <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-6">
            <h3 className="font-semibold text-gray-800 mb-3">🎯 Goals for 2025</h3>
            <div className="space-y-2 text-gray-700">
              <div>• Launch 2 new product features</div>
              <div>• Increase team productivity by 20%</div>
              <div>• Expand client base by 15%</div>
              <div>• Complete advanced certification program</div>
            </div>
          </div>
          
          <div className="text-center mb-6">
            <EditableText 
              contentKey="buttonText" 
              tag="div" 
              className="text-3xl font-bold text-red-600 mb-2"
            >
              Thank You!
            </EditableText>
            <EditableText 
              contentKey="description" 
              className="text-gray-600"
            >
              Your dedication and hard work have made 2024 an exceptional year. 
              We're excited to see what you'll accomplish in 2025!
            </EditableText>
          </div>
        </div>
        
        <div className="text-center space-y-3">
          <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
            <EditableText contentKey="buttonText">Download Full Report</EditableText>
          </button>
          <EditableText 
            contentKey="footerText" 
            className="text-sm text-gray-500"
          >
            Detailed analytics and insights available in your dashboard
          </EditableText>
        </div>
      </div>
      
      {/* Footer */}
      <div className="bg-gray-100 px-6 py-4 text-center">
        <p className="text-gray-500 text-sm mb-2">
          © 2024 Your Company. All rights reserved.
        </p>
        <p className="text-gray-500 text-sm">
          Questions about your report? Contact analytics@company.com
        </p>
      </div>
    </div>
  )
}

export default YearEndReceiptTemplate 