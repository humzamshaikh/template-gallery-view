import React from 'react'

const NotificationTemplate = () => {
  return (
    <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      {/* Header */}
      <div className="bg-indigo-600 px-6 py-8 text-center">
        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
        </div>
        <h1 className="text-3xl font-bold text-white mb-2">Important Update</h1>
        <p className="text-indigo-100">We have some news for you</p>
      </div>
      
      {/* Content */}
      <div className="px-6 py-8">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            🔔 System Maintenance Notification
          </h2>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-yellow-700">
                  <strong>Scheduled Maintenance:</strong> Our system will be temporarily unavailable 
                  for scheduled maintenance on <strong>December 15th, 2024 from 2:00 AM to 4:00 AM EST</strong>.
                </p>
              </div>
            </div>
          </div>
          
          <p className="text-gray-600 mb-6 leading-relaxed">
            We're performing important system updates to improve performance and security. 
            During this time, you may experience temporary service interruptions.
          </p>
          
          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <h3 className="font-semibold text-gray-800 mb-3">What to Expect:</h3>
            <ul className="text-gray-600 space-y-2">
              <li>• Brief service interruptions during the maintenance window</li>
              <li>• All data will be safely backed up before maintenance begins</li>
              <li>• Enhanced security features and performance improvements</li>
              <li>• New features and bug fixes will be deployed</li>
            </ul>
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
                  <strong>Need Help?</strong> If you have any questions or concerns, 
                  please don't hesitate to contact our support team.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center space-y-3">
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
            Learn More
          </button>
          <p className="text-sm text-gray-500">
            Thank you for your patience and understanding.
          </p>
        </div>
      </div>
      
      {/* Footer */}
      <div className="bg-gray-100 px-6 py-4 text-center">
        <p className="text-gray-500 text-sm mb-2">
          © 2024 Your Company. All rights reserved.
        </p>
        <p className="text-gray-500 text-sm">
          This is an automated notification. Please do not reply to this email.
        </p>
      </div>
    </div>
  )
}

export default NotificationTemplate 