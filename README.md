# Template Gallery

A React component that displays a gallery of email templates with preview functionality.

## Features

- **Template Gallery Grid**: Displays email templates in a responsive grid layout
- **Template Cards**: Each card shows a thumbnail, template name, description, and preview button
- **Live Preview**: Click "Preview" to see the actual React component rendered below the gallery
- **Text Editing**: Edit template content directly in the preview with a sidebar editor
- **Email Sending**: Send edited templates via Amazon SES with a simple form
- **Smooth Scrolling**: Automatically scrolls to the preview when selected
- **Use Template**: "Use this template" button logs the component name to console
- **Responsive Design**: Built with Tailwind CSS for mobile-friendly layout

## Templates Included

1. **Welcome Template** - For welcoming new users
2. **Event Coming Soon** - Announce upcoming events and build excitement
3. **Event Registration Confirmation** - Confirm event registrations with all details
4. **Year-End Receipt** - Annual summary and performance reports

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
src/
├── components/
│   ├── TemplateGallery.jsx          # Main gallery component
│   └── templates/                   # Email template components
│       ├── WelcomeTemplate.jsx
│       ├── NewsletterTemplate.jsx
│       ├── PromotionalTemplate.jsx
│       └── NotificationTemplate.jsx
├── App.jsx                          # Main app component
├── main.jsx                         # React entry point
└── index.css                        # Tailwind CSS imports
```

## How It Works

1. **Template Data**: The `templates` array contains objects with:
   - `name`: Template display name
   - `component`: React component to render
   - `thumbnail`: Image URL for the card
   - `description`: Template description

2. **Preview Functionality**: When a user clicks "Preview":
   - The selected template is stored in state
   - The component renders below the gallery with editing capabilities
   - The page smoothly scrolls to the preview

3. **Text Editing**: The `EditableTemplate` component provides:
   - Sidebar editor with form fields for common content
   - Click-to-edit functionality on text elements
   - Real-time preview updates
   - State management for all editable content

4. **Email Sending**: The `EmailSender` component provides:
   - Form to enter recipient email address
   - Send button that calls AWS Lambda via API Gateway
   - Real-time feedback on email sending status
   - Preview of template content being sent

5. **Use Template**: When "Use this template" is clicked:
   - Template name and component name are logged to console
   - An alert confirms the selection

## Customization

To add new templates:

1. Create a new React component in `src/components/templates/`
2. Add the template to the `templates` array in `TemplateGallery.jsx`
3. Include the component import at the top of the file

## Technologies Used

- React 18
- Tailwind CSS
- Vite (build tool)
- Unsplash (for placeholder images)
- Amazon SES (email sending)
- AWS Lambda (backend processing)
- API Gateway (REST API)

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint 