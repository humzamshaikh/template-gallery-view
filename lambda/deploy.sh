#!/bin/bash

# Template Gallery Email Sender Lambda Deployment Script

echo "🚀 Deploying Template Gallery Email Sender Lambda Function..."

# Set variables
FUNCTION_NAME="template-gallery-email-sender"
REGION="us-east-1"
SENDER_EMAIL="humza.shaikh2006@gmail.com"

# Create deployment directory
echo "📁 Creating deployment package..."
mkdir -p deployment
cp send-email.js deployment/
cp package.json deployment/

# Install dependencies
echo "📦 Installing dependencies..."
cd deployment
npm install --production

# Create ZIP file
echo "🗜️ Creating deployment package..."
zip -r function.zip . -x "*.git*" "node_modules/.cache/*"

# Create Lambda function
echo "🔧 Creating Lambda function..."
aws lambda create-function \
  --function-name $FUNCTION_NAME \
  --runtime nodejs18.x \
  --role arn:aws:iam::$(aws sts get-caller-identity --query Account --output text):role/template-gallery-lambda-role \
  --handler send-email.handler \
  --zip-file fileb://function.zip \
  --timeout 30 \
  --memory-size 256 \
  --environment Variables="{SENDER_EMAIL=$SENDER_EMAIL}" \
  --region $REGION

# Create API Gateway
echo "🌐 Creating API Gateway..."
API_ID=$(aws apigateway create-rest-api \
  --name "template-gallery-email-api" \
  --description "API Gateway for Template Gallery Email Sender" \
  --region $REGION \
  --query 'id' --output text)

# Get root resource ID
ROOT_RESOURCE_ID=$(aws apigateway get-resources \
  --rest-api-id $API_ID \
  --region $REGION \
  --query 'items[?path==`/`].id' --output text)

# Create resource
RESOURCE_ID=$(aws apigateway create-resource \
  --rest-api-id $API_ID \
  --parent-id $ROOT_RESOURCE_ID \
  --path-part "send-email" \
  --region $REGION \
  --query 'id' --output text)

# Create POST method
aws apigateway put-method \
  --rest-api-id $API_ID \
  --resource-id $RESOURCE_ID \
  --http-method POST \
  --authorization-type NONE \
  --region $REGION

# Create Lambda integration
aws apigateway put-integration \
  --rest-api-id $API_ID \
  --resource-id $RESOURCE_ID \
  --http-method POST \
  --type AWS_PROXY \
  --integration-http-method POST \
  --uri "arn:aws:apigateway:$REGION:lambda:path/2015-03-31/functions/arn:aws:lambda:$REGION:$(aws sts get-caller-identity --query Account --output text):function:$FUNCTION_NAME/invocations" \
  --region $REGION

# Add Lambda permission for API Gateway
aws lambda add-permission \
  --function-name $FUNCTION_NAME \
  --statement-id apigateway-invoke \
  --action lambda:InvokeFunction \
  --principal apigateway.amazonaws.com \
  --source-arn "arn:aws:execute-api:$REGION:$(aws sts get-caller-identity --query Account --output text):$API_ID/*" \
  --region $REGION

# Deploy API
aws apigateway create-deployment \
  --rest-api-id $API_ID \
  --stage-name prod \
  --region $REGION

# Get API URL
API_URL="https://$API_ID.execute-api.$REGION.amazonaws.com/prod/send-email"

echo "✅ Deployment complete!"
echo "📧 API URL: $API_URL"
echo "📧 Sender Email: $SENDER_EMAIL"

# Clean up
cd ..
rm -rf deployment

echo ""
echo "🔧 Next steps:"
echo "1. Update your frontend to use the API URL: $API_URL"
echo "2. Make sure your SES email ($SENDER_EMAIL) is verified"
echo "3. Test the email sending functionality" 