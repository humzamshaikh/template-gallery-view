#!/bin/bash

# Partner Access Setup Script
# Run this script to set up your development environment

echo "🚀 Setting up partner access for template-gallery project"
echo "=================================================="

# Check if .env file exists
if [ ! -f .env ]; then
    echo "📝 Creating .env file from template..."
    cp .env.example .env 2>/dev/null || {
        echo "⚠️  .env.example not found. Creating basic .env file..."
        cat > .env << EOF
# AWS Configuration
AWS_ACCESS_KEY_ID=your_access_key_here
AWS_SECRET_ACCESS_KEY=your_secret_key_here
AWS_REGION=us-east-1
AWS_S3_BUCKET=your-bucket-name

# Development Configuration
NODE_ENV=development
VITE_API_URL=http://localhost:3000
EOF
    }
    echo "✅ .env file created. Please update with your AWS credentials."
else
    echo "✅ .env file already exists."
fi

# Check if AWS CLI is installed
if command -v aws &> /dev/null; then
    echo "✅ AWS CLI is installed."
    
    # Check if AWS is configured
    if aws sts get-caller-identity &> /dev/null; then
        echo "✅ AWS credentials are configured."
        echo "🔍 Current AWS account: $(aws sts get-caller-identity --query 'Account' --output text)"
    else
        echo "⚠️  AWS credentials not configured. Run 'aws configure' to set up."
    fi
else
    echo "⚠️  AWS CLI not found. Please install it:"
    echo "   macOS: brew install awscli"
    echo "   Windows: Download from AWS website"
    echo "   Linux: curl \"https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip\" -o \"awscliv2.zip\""
fi

# Check Node.js and npm
if command -v node &> /dev/null; then
    echo "✅ Node.js is installed (version: $(node --version))"
else
    echo "❌ Node.js not found. Please install Node.js first."
    exit 1
fi

if command -v npm &> /dev/null; then
    echo "✅ npm is installed (version: $(npm --version))"
else
    echo "❌ npm not found. Please install npm first."
    exit 1
fi

# Install dependencies
echo "📦 Installing project dependencies..."
npm install

# Check if development server can start
echo "🔧 Testing development setup..."
if npm run dev --dry-run &> /dev/null; then
    echo "✅ Development setup looks good!"
else
    echo "⚠️  There might be issues with the development setup."
fi

echo ""
echo "🎉 Setup complete! Next steps:"
echo "1. Update .env file with your AWS credentials"
echo "2. Run 'npm run dev' to start development server"
echo "3. Check COMPONENT_ASSIGNMENTS.md for your assigned components"
echo "4. Create a feature branch: git checkout -b feature/your-component"
echo ""
echo "📚 Useful commands:"
echo "  npm run dev          - Start development server"
echo "  npm run build        - Build for production"
echo "  npm run lint         - Check code quality"
echo "  npm run format       - Format code with Prettier"
echo "  aws s3 ls           - List S3 buckets (test AWS access)"
echo ""
echo "📖 Documentation:"
echo "  - read-only/README.md           - Documentation index"
echo "  - read-only/PARTNER_ONBOARDING.md - Quick start guide"
echo "  - read-only/DEVELOPMENT_SETUP.md  - Detailed setup guide"
echo "  - read-only/AWS_ACCESS_SETUP.md   - AWS configuration guide"
