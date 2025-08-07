# AWS Access Setup Guide

## For Repository Owner (You)

### 1. Create IAM User for Partner

#### Step 1: Access IAM Console
1. Go to [AWS IAM Console](https://console.aws.amazon.com/iam/)
2. Sign in with your AWS account

#### Step 2: Create New User
1. Click "Users" in the left sidebar
2. Click "Create user"
3. Enter username: `partner-developer` (or your partner's name)
4. Check "Provide user access to the AWS Management Console"
5. Choose "I want to create an IAM user"
6. Click "Next"

#### Step 3: Set Permissions
**Option A: Attach Policies Directly**
1. Click "Attach policies directly"
2. Search and select these policies:
   - `AmazonS3FullAccess` (if using S3 for file storage)
   - `AWSLambdaBasicExecutionRole` (if using Lambda functions)
   - `AmazonAPIGatewayInvokeFullAccess` (if using API Gateway)
   - `CloudWatchLogsFullAccess` (for logging)

**Option B: Create Custom Policy (More Secure)**
```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "s3:GetObject",
                "s3:PutObject",
                "s3:DeleteObject",
                "s3:ListBucket"
            ],
            "Resource": [
                "arn:aws:s3:::your-bucket-name",
                "arn:aws:s3:::your-bucket-name/*"
            ]
        },
        {
            "Effect": "Allow",
            "Action": [
                "lambda:InvokeFunction",
                "lambda:GetFunction"
            ],
            "Resource": "arn:aws:lambda:*:*:function:your-function-name"
        }
    ]
}
```

#### Step 4: Create Access Keys
1. Click "Next" through the review
2. Click "Create user"
3. **IMPORTANT**: Click "Create access key"
4. Choose "Application running outside AWS"
5. Click "Next"
6. **SAVE THESE CREDENTIALS SECURELY**:
   - Access Key ID
   - Secret Access Key

### 2. Share Credentials Securely

**DO NOT share credentials via email or chat!**

**Recommended Methods:**
1. **Password Manager** (1Password, LastPass, Bitwarden)
2. **Encrypted File** (share password separately)
3. **AWS Secrets Manager** (if available)
4. **In-person** (if possible)

### 3. Environment Variables Setup

Create a `.env.example` file in your project:

```bash
# AWS Configuration
AWS_ACCESS_KEY_ID=your_access_key_here
AWS_SECRET_ACCESS_KEY=your_secret_key_here
AWS_REGION=us-east-1
AWS_S3_BUCKET=your-bucket-name

# Other configurations
NODE_ENV=development
```

## For Partner

### 1. Install AWS CLI
```bash
# macOS
brew install awscli

# Windows
# Download from AWS website

# Linux
curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
unzip awscliv2.zip
sudo ./aws/install
```

### 2. Configure AWS Credentials
```bash
aws configure
```

Enter the credentials provided by your partner:
- AWS Access Key ID
- AWS Secret Access Key
- Default region (e.g., us-east-1)
- Default output format (json)

### 3. Test Access
```bash
# Test S3 access
aws s3 ls

# Test Lambda access (if applicable)
aws lambda list-functions

# Test your specific resources
aws s3 ls s3://your-bucket-name
```

## Security Best Practices

### 1. Principle of Least Privilege
- Only grant necessary permissions
- Review and remove unused permissions regularly
- Use specific resource ARNs instead of wildcards

### 2. Credential Management
- Rotate access keys regularly (every 90 days)
- Never commit credentials to Git
- Use AWS Secrets Manager for production

### 3. Monitoring
- Enable CloudTrail for audit logging
- Set up billing alerts
- Monitor IAM user activity

## Alternative: AWS SSO (For Organizations)

If you're working in a larger organization:

### 1. Set up AWS SSO
1. Go to AWS SSO console
2. Create a permission set for developers
3. Assign users to groups
4. Share SSO portal URL

### 2. Partner Access
1. Partner receives email invitation
2. Sets up SSO account
3. Accesses AWS through SSO portal

## Troubleshooting

### Common Issues
1. **Access Denied**: Check IAM permissions
2. **Invalid Credentials**: Verify access keys
3. **Region Issues**: Ensure correct AWS region
4. **Bucket Not Found**: Check bucket name and permissions

### Getting Help
- Check AWS CloudTrail for access logs
- Review IAM user permissions
- Test with AWS CLI commands
- Contact AWS Support if needed

## Cost Management

### 1. Set Up Billing Alerts
1. Go to AWS Billing Console
2. Set up budget alerts
3. Monitor usage regularly

### 2. Resource Tagging
Tag all resources with:
- `Project: template-gallery`
- `Environment: development`
- `Owner: [your-name]`

### 3. Clean Up
- Delete unused resources
- Stop/terminate idle instances
- Review and optimize costs monthly
