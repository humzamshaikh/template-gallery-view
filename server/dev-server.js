const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Mock email sending endpoint
app.post('/send-email', async (req, res) => {
  try {
    const { recipientEmail, templateName, templateContent } = req.body;
    
    console.log('📧 Email Request Received:');
    console.log('Recipient:', recipientEmail);
    console.log('Template:', templateName);
    console.log('Content:', templateContent);
    
    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // For development, we'll just log the email instead of actually sending it
    console.log('✅ Email would be sent successfully!');
    console.log('📧 To:', recipientEmail);
    console.log('📧 From: humza.shaikh2006@gmail.com');
    console.log('📧 Subject:', templateContent.mainTitle || templateName);
    
    res.json({
      message: 'Email sent successfully (development mode)',
      messageId: 'dev-' + Date.now(),
      recipient: recipientEmail,
      template: templateName
    });
    
  } catch (error) {
    console.error('❌ Error processing email request:', error);
    res.status(500).json({
      error: 'Failed to send email',
      details: error.message
    });
  }
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'Email server is running' });
});

app.listen(port, () => {
  console.log(`🚀 Development email server running on http://localhost:${port}`);
  console.log(`📧 Email endpoint: http://localhost:${port}/send-email`);
  console.log(`🔍 Health check: http://localhost:${port}/health`);
  console.log('');
  console.log('💡 This is a development server that logs emails instead of sending them.');
  console.log('💡 To send real emails, deploy the Lambda function and update the API URL.');
}); 