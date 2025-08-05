import React, { useState } from 'react'

const EmailSender = ({ templateContent, templateName }) => {
  const [recipientEmail, setRecipientEmail] = useState('')
  const [isSending, setIsSending] = useState(false)
  const [message, setMessage] = useState('')
  const [messageType, setMessageType] = useState('') // 'success' or 'error'

  const handleSendEmail = async (e) => {
    e.preventDefault()
    
    if (!recipientEmail) {
      setMessage('Please enter a recipient email address')
      setMessageType('error')
      return
    }

    if (!templateContent) {
      setMessage('No template content available')
      setMessageType('error')
      return
    }

    setIsSending(true)
    setMessage('')

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          recipientEmail,
          templateName,
          templateContent: {
            mainTitle: templateContent.mainTitle || '',
            subtitle: templateContent.subtitle || '',
            mainHeading: templateContent.mainHeading || '',
            description: templateContent.description || '',
            buttonText: templateContent.buttonText || '',
            footerText: templateContent.footerText || ''
          }
        }),
      })

      const data = await response.json()

      if (response.ok) {
        setMessage('Email sent successfully!')
        setMessageType('success')
        setRecipientEmail('')
      } else {
        setMessage(data.error || 'Failed to send email')
        setMessageType('error')
      }
    } catch (error) {
      console.error('Error sending email:', error)
      setMessage('Failed to send email. Please try again.')
      setMessageType('error')
    } finally {
      setIsSending(false)
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mt-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Send Email</h3>
      
      <form onSubmit={handleSendEmail} className="space-y-4">
        <div>
          <label htmlFor="recipientEmail" className="block text-sm font-medium text-gray-700 mb-2">
            Recipient Email Address
          </label>
          <input
            type="email"
            id="recipientEmail"
            value={recipientEmail}
            onChange={(e) => setRecipientEmail(e.target.value)}
            placeholder="Enter recipient email address"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="flex items-center space-x-4">
          <button
            type="submit"
            disabled={isSending}
            className={`px-6 py-2 rounded-md font-medium transition-colors ${
              isSending
                ? 'bg-gray-400 text-gray-600 cursor-not-allowed'
                : 'bg-green-600 hover:bg-green-700 text-white'
            }`}
          >
            {isSending ? (
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Sending...</span>
              </div>
            ) : (
              'Send Email'
            )}
          </button>
          
          <div className="text-sm text-gray-500">
            From: humza.shaikh2006@gmail.com
          </div>
        </div>
      </form>

      {message && (
        <div className={`mt-4 p-3 rounded-md ${
          messageType === 'success' 
            ? 'bg-green-50 border border-green-200 text-green-700' 
            : 'bg-red-50 border border-red-200 text-red-700'
        }`}>
          {message}
        </div>
      )}

      <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-md">
        <h4 className="text-sm font-medium text-blue-800 mb-2">Email Preview:</h4>
        <div className="text-sm text-blue-700 space-y-1">
          <div><strong>Template:</strong> {templateName}</div>
          <div><strong>Title:</strong> {templateContent?.mainTitle || 'Not set'}</div>
          <div><strong>Subtitle:</strong> {templateContent?.subtitle || 'Not set'}</div>
          <div><strong>Heading:</strong> {templateContent?.mainHeading || 'Not set'}</div>
          <div><strong>Description:</strong> {templateContent?.description ? `${templateContent.description.substring(0, 50)}...` : 'Not set'}</div>
          <div><strong>Button:</strong> {templateContent?.buttonText || 'Not set'}</div>
          <div><strong>Footer:</strong> {templateContent?.footerText || 'Not set'}</div>
        </div>
      </div>
    </div>
  )
}

export default EmailSender 