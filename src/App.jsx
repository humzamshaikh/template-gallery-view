import TemplateGallery from './components/TemplateGallery'

function App() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 text-center mb-8">
          Email Template Gallery
        </h1>
        <TemplateGallery />
      </div>
    </div>
  )
}

export default App 