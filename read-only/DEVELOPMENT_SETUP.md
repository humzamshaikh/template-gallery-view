# Development Setup Guide

## Quick Start

### 1. Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Git

### 2. Initial Setup
```bash
# Clone the repository
git clone <repository-url>
cd template-gallery

# Install dependencies
npm install

# Start development server
npm run dev
```

### 3. Development Workflow

#### Starting a New Component
```bash
# Create and switch to feature branch
git checkout -b feature/your-component-name

# Start development
npm run dev
```

#### Before Committing
```bash
# Format code
npm run format

# Check linting
npm run lint

# Fix auto-fixable issues
npm run lint:fix
```

#### Creating a Pull Request
1. Push your branch: `git push origin feature/your-component-name`
2. Create PR on GitHub to `develop` branch
3. Fill out PR template
4. Request review from your partner

## Component Development

### File Structure
```
src/components/
├── shared/           # Reusable components (Button, Input, etc.)
├── layout/          # Layout components (Header, Footer, etc.)
├── forms/           # Form components
├── ui/              # UI components (Modal, Tooltip, etc.)
└── templates/       # Email template components
```

### Component Guidelines
- Use the `COMPONENT_TEMPLATE.md` as a starting point
- Follow naming conventions (PascalCase for components)
- Use Tailwind CSS for styling
- Add JSDoc comments for props
- Export from index files for easier imports

### Code Style
- Use Prettier for formatting
- Follow ESLint rules
- Use meaningful variable names
- Add comments for complex logic

## Collaboration Tools

### Git Workflow
- `main` - Production code
- `develop` - Integration branch
- `feature/*` - Feature development
- `bugfix/*` - Bug fixes

### Communication
- Update component assignment table in `CONTRIBUTING.md`
- Use GitHub Issues for tracking
- Comment on PRs for discussions
- Daily sync on progress

### Code Review Checklist
- [ ] Code follows project conventions
- [ ] Component is properly documented
- [ ] No console errors
- [ ] Responsive design works
- [ ] Accessibility considerations
- [ ] No unnecessary dependencies

## Troubleshooting

### Common Issues
1. **Port already in use**: Change port in `vite.config.js`
2. **Dependencies issues**: Delete `node_modules` and `package-lock.json`, then `npm install`
3. **Linting errors**: Run `npm run lint:fix`

### Getting Help
- Check existing documentation
- Review similar components
- Ask your partner for code review
- Create GitHub issue for bugs
