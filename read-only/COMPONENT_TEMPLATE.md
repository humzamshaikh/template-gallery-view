# Component Development Template

## Component: [ComponentName]

### Description
Brief description of what this component does and its purpose.

### Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `prop1` | `string` | `''` | Description of prop1 |
| `prop2` | `number` | `0` | Description of prop2 |
| `onClick` | `function` | `undefined` | Click handler function |

### Usage Example
```jsx
import ComponentName from './ComponentName'

function App() {
  return (
    <ComponentName 
      prop1="value"
      prop2={42}
      onClick={() => console.log('clicked')}
    />
  )
}
```

### Features
- [ ] Feature 1
- [ ] Feature 2
- [ ] Feature 3

### Dependencies
- List any external dependencies or internal components used

### Notes
- Any important implementation notes
- Known limitations
- Future improvements

---

## Development Checklist

### Before Starting
- [ ] Create feature branch: `git checkout -b feature/component-name`
- [ ] Update component assignment table in CONTRIBUTING.md
- [ ] Review existing similar components for consistency

### During Development
- [ ] Follow component naming conventions
- [ ] Use Tailwind CSS for styling
- [ ] Add proper JSDoc comments
- [ ] Test component with different props
- [ ] Ensure responsive design
- [ ] Add error handling where needed

### Before Committing
- [ ] Test component thoroughly
- [ ] Check for console errors
- [ ] Ensure accessibility (ARIA labels, keyboard navigation)
- [ ] Update component documentation
- [ ] Run linting: `npm run lint`

### Before PR
- [ ] Create comprehensive PR description
- [ ] Add screenshots if UI changes
- [ ] Request code review
- [ ] Update component status in CONTRIBUTING.md
