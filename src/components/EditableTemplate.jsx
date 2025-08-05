import React, { useState } from 'react'
import EmailSender from './EmailSender'

const EditableTemplate = ({ template: TemplateComponent, initialContent = {} }) => {
  const [content, setContent] = useState(initialContent)
  const [isEditing, setIsEditing] = useState(false)

  const handleContentChange = (key, value) => {
    setContent(prev => ({
      ...prev,
      [key]: value
    }))
  }

  const EditableText = ({ 
    children, 
    contentKey, 
    tag: Tag = 'p', 
    className = '',
    placeholder = 'Enter text...'
  }) => {
    const [isEditing, setIsEditing] = useState(false)
    const [localValue, setLocalValue] = useState(content[contentKey] || children || '')

    const handleSave = () => {
      handleContentChange(contentKey, localValue)
      setIsEditing(false)
    }

    const handleCancel = () => {
      setLocalValue(content[contentKey] || children || '')
      setIsEditing(false)
    }

    if (isEditing) {
      return (
        <div className="relative">
          <Tag className={`${className} border-2 border-blue-300 rounded px-2 py-1 bg-blue-50`}>
            <textarea
              value={localValue}
              onChange={(e) => setLocalValue(e.target.value)}
              className="w-full bg-transparent border-none outline-none resize-none"
              placeholder={placeholder}
              autoFocus
              onBlur={handleSave}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault()
                  handleSave()
                }
                if (e.key === 'Escape') {
                  handleCancel()
                }
              }}
            />
          </Tag>
          <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs px-2 py-1 rounded-bl">
            Press Enter to save, Esc to cancel
          </div>
        </div>
      )
    }

    return (
      <Tag 
        className={`${className} cursor-pointer hover:bg-yellow-100 hover:border-yellow-300 border border-transparent rounded px-1 py-1 transition-colors`}
        onClick={() => setIsEditing(true)}
        title="Click to edit"
      >
        {content[contentKey] || children}
      </Tag>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex gap-6">
        {/* Template Preview */}
        <div className="flex-1">
          <div className="sticky top-4">
            <TemplateComponent EditableText={EditableText} content={content} />
          </div>
        </div>

        {/* Editing Sidebar */}
        <div className="w-80 bg-gray-50 p-6 rounded-lg h-fit sticky top-4">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-800">Edit Content</h3>
          <button
            onClick={() => setIsEditing(!isEditing)}
            className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
              isEditing 
                ? 'bg-green-600 text-white hover:bg-green-700' 
                : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}
          >
            {isEditing ? 'Editing' : 'Edit Mode'}
          </button>
        </div>

        {isEditing && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Main Title
              </label>
              <input
                type="text"
                value={content.mainTitle || ''}
                onChange={(e) => handleContentChange('mainTitle', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter main title..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Subtitle
              </label>
              <input
                type="text"
                value={content.subtitle || ''}
                onChange={(e) => handleContentChange('subtitle', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter subtitle..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Main Heading
              </label>
              <input
                type="text"
                value={content.mainHeading || ''}
                onChange={(e) => handleContentChange('mainHeading', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter main heading..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description
              </label>
              <textarea
                value={content.description || ''}
                onChange={(e) => handleContentChange('description', e.target.value)}
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                placeholder="Enter description..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Button Text
              </label>
              <input
                type="text"
                value={content.buttonText || ''}
                onChange={(e) => handleContentChange('buttonText', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter button text..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Footer Text
              </label>
              <textarea
                value={content.footerText || ''}
                onChange={(e) => handleContentChange('footerText', e.target.value)}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                placeholder="Enter footer text..."
              />
            </div>

            <div className="pt-4 border-t border-gray-200">
              <button
                onClick={() => {
                  setContent({})
                  setIsEditing(false)
                }}
                className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
              >
                Reset All Changes
              </button>
            </div>
          </div>
        )}

        {!isEditing && (
          <div className="text-center text-gray-500">
            <p className="text-sm">Click "Edit Mode" to start editing the template content.</p>
            <p className="text-xs mt-2">You can also click directly on text elements in the template to edit them.</p>
          </div>
        )}
        </div>
      </div>

      {/* Email Sender */}
      <EmailSender 
        templateContent={content} 
        templateName={TemplateComponent.name || 'Template'} 
      />
    </div>
  )
}

export default EditableTemplate 