# Environment Variables Setup Guide

## Overview

Environment variables keep sensitive information (like API keys) out of your code and make your app configurable across different environments (development, staging, production).

## 📁 File Structure

```
template-gallery/
├── .env.example          # Template file (safe to commit)
├── .env                  # Your actual variables (NEVER commit)
├── .env.local           # Local overrides (NEVER commit)
├── .env.development     # Development-specific variables
└── .env.production      # Production-specific variables
```

## 🔧 Step-by-Step Setup

### 1. Create Your Environment File

**For You (Repository Owner):**
```bash
# Copy the example file
cp .env.example .env

# Edit with your actual values
nano .env  # or use your preferred editor
```

**For Your Partner:**
```bash
# Run the setup script (automatically creates .env)
./setup-partner-access.sh

# Or manually copy and edit
cp .env.example .env
nano .env
```

### 2. Configure Your Variables

Edit your `.env` file with real values:

```bash
# AWS Configuration (REPLACE WITH YOUR ACTUAL VALUES)
AWS_ACCESS_KEY_ID=AKIAIOSFODNN7EXAMPLE
AWS_SECRET_ACCESS_KEY=wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY
AWS_REGION=us-east-1
AWS_S3_BUCKET=my-template-gallery-bucket

# Development Configuration
NODE_ENV=development
VITE_API_URL=http://localhost:3000
VITE_APP_NAME=Template Gallery

# Add any other variables you need
```

### 3. Understanding Variable Types

#### Vite Variables (Client-Side)
Variables starting with `VITE_` are exposed to your React app:
```bash
VITE_API_URL=http://localhost:3000
VITE_APP_NAME=Template Gallery
```

#### Server Variables (Backend Only)
Variables without `VITE_` prefix stay on the server:
```bash
AWS_ACCESS_KEY_ID=your_key
AWS_SECRET_ACCESS_KEY=your_secret
DATABASE_URL=your_database_url
```

## 🔐 Security Best Practices

### ✅ DO:
- Use `.env.example` for templates (safe to commit)
- Keep `.env` files in `.gitignore`
- Use strong, unique API keys
- Rotate credentials regularly
- Use different keys for different environments

### ❌ DON'T:
- Commit `.env` files to Git
- Share credentials in chat/email
- Use the same keys for dev and production
- Hardcode secrets in your code

## 🛠️ Using Environment Variables in Your Code

### In React Components (Vite Variables)
```jsx
// Access VITE_ variables
const apiUrl = import.meta.env.VITE_API_URL;
const appName = import.meta.env.VITE_APP_NAME;

function MyComponent() {
  return (
    <div>
      <h1>{appName}</h1>
      <p>API URL: {apiUrl}</p>
    </div>
  );
}
```

### In Node.js/Server Code
```javascript
// Access all environment variables
const awsKey = process.env.AWS_ACCESS_KEY_ID;
const awsSecret = process.env.AWS_SECRET_ACCESS_KEY;
const bucketName = process.env.AWS_S3_BUCKET;

// Example AWS S3 usage
const AWS = require('aws-sdk');
AWS.config.update({
  accessKeyId: awsKey,
  secretAccessKey: awsSecret,
  region: process.env.AWS_REGION
});
```

## 🔄 Environment-Specific Configuration

### Development Environment
```bash
# .env.development
NODE_ENV=development
VITE_API_URL=http://localhost:3000
VITE_DEBUG=true
```

### Production Environment
```bash
# .env.production
NODE_ENV=production
VITE_API_URL=https://api.yourdomain.com
VITE_DEBUG=false
```

## 🚀 Deployment Considerations

### Vercel/Netlify
Set environment variables in your deployment platform dashboard:
1. Go to project settings
2. Find "Environment Variables" section
3. Add each variable from your `.env` file

### AWS/Server Deployment
```bash
# Set environment variables on your server
export AWS_ACCESS_KEY_ID=your_key
export AWS_SECRET_ACCESS_KEY=your_secret
export NODE_ENV=production
```

## 🔍 Troubleshooting

### Common Issues

#### 1. Variables Not Loading
```bash
# Check if .env file exists
ls -la .env

# Verify variable names (case-sensitive)
cat .env | grep VITE_
```

#### 2. Vite Variables Not Available
- Make sure variable starts with `VITE_`
- Restart development server after changes
- Check for typos in variable names

#### 3. AWS Credentials Not Working
```bash
# Test AWS configuration
aws sts get-caller-identity

# Check environment variables
echo $AWS_ACCESS_KEY_ID
echo $AWS_SECRET_ACCESS_KEY
```

### Debug Commands
```bash
# List all environment variables
env | grep VITE_

# Check specific variable
echo $VITE_API_URL

# Test AWS access
aws s3 ls
```

## 📋 Checklist

### For Repository Owner
- [ ] Create `.env.example` with template values
- [ ] Add `.env` to `.gitignore`
- [ ] Set up your own `.env` file
- [ ] Test environment variables work
- [ ] Share setup instructions with partner

### For Partner
- [ ] Copy `.env.example` to `.env`
- [ ] Update with actual credentials
- [ ] Test environment variables
- [ ] Verify AWS access works
- [ ] Start development server

## 🔄 Updating Variables

### Adding New Variables
1. Add to `.env.example` (with placeholder values)
2. Add to your `.env` file (with real values)
3. Update documentation
4. Notify your partner

### Changing Existing Variables
1. Update your `.env` file
2. Update `.env.example` if needed
3. Restart development server
4. Test the changes

## 📚 Additional Resources

- [Vite Environment Variables](https://vitejs.dev/guide/env-and-mode.html)
- [AWS SDK Configuration](https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/loading-node-credentials-environment.html)
- [Node.js Environment Variables](https://nodejs.org/api/process.html#processenv)
