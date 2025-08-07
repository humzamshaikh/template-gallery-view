import React from 'react'
import TemplateGallery from './TemplateGallery'
import EmailSender from './EmailSender'
import { appConfig, validateEnvironment } from '../utils/config'
import './App.css'

function App() {
  // Validate environment variables on app start
  React.useEffect(() => {
    validateEnvironment();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>{appConfig.name}</h1>
        {appConfig.debug && (
          <div className="debug-info">
            <small>Environment: {appConfig.environment}</small>
            <small>API URL: {appConfig.apiUrl}</small>
          </div>
        )}
      </header>
      <main>
        <TemplateGallery />
        <EmailSender />
      </main>
    </div>
  )
}

export default App
