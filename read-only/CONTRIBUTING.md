# Contributing Guide

## Development Workflow

### 1. Branch Strategy
- `main` - Production-ready code
- `develop` - Integration branch for features
- `feature/component-name` - Individual component development
- `bugfix/issue-description` - Bug fixes

### 2. Getting Started
```bash
# Clone the repository
git clone <repository-url>
cd template-gallery

# Install dependencies
npm install

# Create a new feature branch
git checkout -b feature/your-component-name

# Start development server
npm run dev
```

### 3. Component Development Guidelines

#### File Structure
```
src/components/
├── shared/           # Shared components (buttons, inputs, etc.)
├── templates/        # Email template components
├── layout/          # Layout components (header, footer, etc.)
├── forms/           # Form components
└── ui/              # UI components (modals, tooltips, etc.)
```

#### Component Naming Convention
- Use PascalCase for component files: `MyComponent.jsx`
- Use descriptive names that indicate the component's purpose
- Add `.test.jsx` files for components that need testing

#### Component Structure
```jsx
import React from 'react'

const ComponentName = ({ prop1, prop2 }) => {
  // Component logic here
  
  return (
    <div className="component-name">
      {/* JSX content */}
    </div>
  )
}

export default ComponentName
```

### 4. Code Style
- Use Prettier for code formatting
- Follow ESLint rules
- Use meaningful variable and function names
- Add comments for complex logic
- Use Tailwind CSS for styling

### 5. Commit Messages
Use conventional commit format:
```
type(scope): description

feat(component): add new email template component
fix(gallery): resolve thumbnail loading issue
docs(readme): update installation instructions
```

### 6. Pull Request Process
1. Create feature branch from `develop`
2. Develop your component
3. Test thoroughly
4. Create PR to `develop` branch
5. Request code review
6. Merge after approval

### 7. Component Assignment
Coordinate with your partner to avoid conflicts:
- Assign specific components to each developer
- Use the component assignment table below
- Update status regularly

## Component Assignment Table

| Component | Assigned To | Status | Branch |
|-----------|-------------|--------|--------|
| Header | [Partner Name] | In Progress | feature/header |
| Footer | [Your Name] | Not Started | - |
| Email Form | [Partner Name] | Completed | feature/email-form |
| Template Editor | [Your Name] | In Progress | feature/template-editor |

## Communication
- Use GitHub Issues for tracking
- Comment on PRs for discussions
- Update component status in this file
- Daily standup to sync progress
