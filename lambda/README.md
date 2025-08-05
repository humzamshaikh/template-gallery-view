# Template Gallery Email Sender - AWS Lambda

This Lambda function handles sending emails via Amazon SES from the Template Gallery application.

## Prerequisites

1. **AWS CLI configured** with appropriate permissions
2. **Amazon SES email verified** (`humza.shaikh2006@gmail.com`)
3. **IAM role** with SES permissions (created by deployment script)

## Setup Instructions

### 1. Verify SES Email

First, ensure your email is verified in Amazon SES:

```bash
# Check if email is verified
aws ses get-identity-verification-attributes \
  --identities "humza.shaikh2006@gmail.com" \
  --region us-east-1
```

If not verified, you'll need to verify it in the AWS Console or via CLI.

### 2. Create IAM Role

Create the IAM role for the Lambda function:

```bash
# Create the role
aws iam create-role \
  --role-name template-gallery-email-sender-role \
  --assume-role-policy-document '{
    "Version": "2012-10-17",
    "Statement": [
      {
        "Effect": "Allow",
        "Principal": {
          "Service": "lambda.amazonaws.com"
        },
        "Action": "sts:AssumeRole"
      }
    ]
  }'

# Attach basic execution policy
aws iam attach-role-policy \
  --role-name template-gallery-email-sender-role \
  --policy-arn arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole

# Create SES policy
aws iam put-role-policy \
  --role-name template-gallery-email-sender-role \
  --policy-name SESEmailPolicy \
  --policy-document '{
    "Version": "2012-10-17",
    "Statement": [
      {
        "Effect": "Allow",
        "Action": [
          "ses:SendEmail",
          "ses:SendRawEmail"
        ],
        "Resource": "*"
      }
    ]
  }'
```

### 3. Deploy Lambda Function

Run the deployment script:

```bash
chmod +x deploy.sh
./deploy.sh
```

This will:
- Install dependencies
- Create deployment package
- Deploy Lambda function
- Create API Gateway
- Configure CORS
- Return the API URL

### 4. Update Frontend

Update your frontend to use the new API URL. The deployment script will output the URL, which will look like:
```
https://abc123def.execute-api.us-east-1.amazonaws.com/prod/send-email
```

## API Endpoint

**POST** `/send-email`

### Request Body
```json
{
  "recipientEmail": "recipient@example.com",
  "templateName": "Welcome Template",
  "templateContent": {
    "mainTitle": "Welcome!",
    "subtitle": "We're excited to have you on board",
    "mainHeading": "Hello there! 👋",
    "description": "Welcome to our platform...",
    "buttonText": "Get Started",
    "footerText": "© 2024 Your Company. All rights reserved."
  }
}
```

### Response
```json
{
  "message": "Email sent successfully",
  "messageId": "abc123def456"
}
```

## Testing

Test the Lambda function locally:

```bash
# Test payload
cat > test-event.json << EOF
{
  "body": "{\"recipientEmail\":\"test@example.com\",\"templateName\":\"Test Template\",\"templateContent\":{\"mainTitle\":\"Test Email\",\"description\":\"This is a test email.\"}}"
}
EOF

# Invoke function
aws lambda invoke \
  --function-name template-gallery-email-sender \
  --payload file://test-event.json \
  --region us-east-1 \
  response.json

cat response.json
```

## Troubleshooting

### Common Issues

1. **Email not verified**: Ensure `humza.shaikh2006@gmail.com` is verified in SES
2. **CORS errors**: The API Gateway is configured with CORS headers
3. **Permission denied**: Check IAM role permissions
4. **Timeout**: Function timeout is set to 30 seconds

### Logs

View Lambda logs:
```bash
aws logs describe-log-groups --log-group-name-prefix "/aws/lambda/template-gallery-email-sender"
```

## Security Notes

- The API endpoint is public (no authentication)
- Consider adding API key authentication for production
- SES sending limits apply (check your SES quota)
- Monitor Lambda execution costs

## Cost Estimation

- Lambda: ~$0.20 per 1M requests
- API Gateway: ~$3.50 per 1M requests
- SES: $0.10 per 1K emails sent

For typical usage, costs should be minimal. 