import React, { useState, useRef } from 'react'
import WelcomeTemplate from './templates/WelcomeTemplate'
import NewsletterTemplate from './templates/NewsletterTemplate'
import PromotionalTemplate from './templates/PromotionalTemplate'
import NotificationTemplate from './templates/NotificationTemplate'

const TemplateGallery = () => {
  const [selectedTemplate, setSelectedTemplate] = useState(null)
  const previewRef = useRef(null)

  // Mocked array of email templates
  const templates = [
    {
      id: 1,
      name: "Welcome Template",
      component: WelcomeTemplate,
      thumbnail: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop&crop=center",
      description: "Perfect for welcoming new users to your platform"
    },
    {
      id: 2,
      name: "Newsletter Template",
      component: NewsletterTemplate,
      thumbnail: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop&crop=center",
      description: "Weekly newsletter with highlights and updates"
    },
    {
      id: 3,
      name: "Promotional Template",
      component: PromotionalTemplate,
      thumbnail: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop&crop=center",
      description: "Sales and promotional campaigns with special offers"
    },
    {
      id: 4,
      name: "Notification Template",
      component: NotificationTemplate,
      thumbnail: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=300&fit=crop&crop=center",
      description: "Important updates and system notifications"
    }
  ]

  const handlePreview = (template) => {
    setSelectedTemplate(template)
    
    // Scroll into view after a short delay to ensure the preview is rendered
    setTimeout(() => {
      previewRef.current?.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }, 100)
  }

  const handleUseTemplate = (template) => {
    console.log(`Selected template: ${template.name}`)
    console.log(`Template component: ${template.component.name}`)
    alert(`Template "${template.name}" selected! Check the console for details.`)
  }

  const SelectedTemplateComponent = selectedTemplate?.component

  return (
    <div className="space-y-12">
      {/* Template Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {templates.map((template) => (
          <div 
            key={template.id} 
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            {/* Thumbnail */}
            <div className="relative h-48 bg-gray-200">
              <img 
                src={template.thumbnail} 
                alt={template.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none'
                  e.target.nextSibling.style.display = 'flex'
                }}
              />
              <div className="hidden absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-2xl mb-2">📧</div>
                  <div className="font-semibold">{template.name}</div>
                </div>
              </div>
            </div>
            
            {/* Template Info */}
            <div className="p-4">
              <h3 className="font-semibold text-gray-800 mb-2">{template.name}</h3>
              <p className="text-gray-600 text-sm mb-4">{template.description}</p>
              
              {/* Preview Button */}
              <button
                onClick={() => handlePreview(template)}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
              >
                Preview
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Template Preview Section */}
      {selectedTemplate && (
        <div ref={previewRef} className="space-y-6">
          <div className="border-t border-gray-200 pt-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                Preview: {selectedTemplate.name}
              </h2>
              <button
                onClick={() => handleUseTemplate(selectedTemplate)}
                className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-200"
              >
                Use this template
              </button>
            </div>
            
            {/* Template Preview */}
            <div className="bg-gray-100 p-8 rounded-lg">
              <SelectedTemplateComponent />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default TemplateGallery 