const { SESv2Client, SendEmailCommand } = require('@aws-sdk/client-sesv2');

const sesClient = new SESv2Client({ region: 'us-east-1' }); // Change to your AWS region

exports.handler = async (event) => {
  try {
    // Parse the request body
    const body = JSON.parse(event.body);
    const { recipientEmail, templateName, templateContent } = body;

    // Validate required fields
    if (!recipientEmail || !templateContent) {
      return {
        statusCode: 400,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Content-Type',
          'Access-Control-Allow-Methods': 'POST, OPTIONS'
        },
        body: JSON.stringify({
          error: 'Missing required fields: recipientEmail and templateContent'
        })
      };
    }

    // Construct HTML email from template content
    const htmlContent = generateHTMLEmail(templateName, templateContent);
    const textContent = generateTextEmail(templateName, templateContent);

    // Prepare email parameters
    const emailParams = {
      FromEmailAddress: 'humza.shaikh2006@gmail.com',
      Destination: {
        ToAddresses: [recipientEmail]
      },
      Content: {
        Simple: {
          Subject: {
            Data: templateContent.mainTitle || templateName || 'Email from Template Gallery'
          },
          Body: {
            Html: {
              Data: htmlContent
            },
            Text: {
              Data: textContent
            }
          }
        }
      }
    };

    // Send email using SES
    const command = new SendEmailCommand(emailParams);
    const result = await sesClient.send(command);

    console.log('Email sent successfully:', result);

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS'
      },
      body: JSON.stringify({
        message: 'Email sent successfully',
        messageId: result.MessageId
      })
    };

  } catch (error) {
    console.error('Error sending email:', error);
    
    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS'
      },
      body: JSON.stringify({
        error: 'Failed to send email',
        details: error.message
      })
    };
  }
};

function generateHTMLEmail(templateName, content) {
  const {
    mainTitle = '',
    subtitle = '',
    mainHeading = '',
    description = '',
    buttonText = '',
    footerText = ''
  } = content;

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${mainTitle || templateName}</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          line-height: 1.6;
          color: #333;
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
        }
        .header {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 30px;
          text-align: center;
          border-radius: 8px 8px 0 0;
        }
        .content {
          background: white;
          padding: 30px;
          border: 1px solid #e5e7eb;
        }
        .footer {
          background: #f9fafb;
          padding: 20px;
          text-align: center;
          border-radius: 0 0 8px 8px;
          border: 1px solid #e5e7eb;
          border-top: none;
        }
        .button {
          display: inline-block;
          background: #3b82f6;
          color: white;
          padding: 12px 24px;
          text-decoration: none;
          border-radius: 6px;
          font-weight: bold;
          margin: 20px 0;
        }
        .button:hover {
          background: #2563eb;
        }
        .highlight-box {
          background: #f3f4f6;
          border-left: 4px solid #3b82f6;
          padding: 15px;
          margin: 20px 0;
        }
      </style>
    </head>
    <body>
      <div class="header">
        <h1 style="margin: 0; font-size: 28px;">${mainTitle}</h1>
        ${subtitle ? `<p style="margin: 10px 0 0 0; opacity: 0.9;">${subtitle}</p>` : ''}
      </div>
      
      <div class="content">
        ${mainHeading ? `<h2 style="color: #1f2937; margin-top: 0;">${mainHeading}</h2>` : ''}
        
        ${description ? `<p style="color: #6b7280; line-height: 1.7;">${description}</p>` : ''}
        
        ${buttonText ? `
          <div style="text-align: center;">
            <a href="#" class="button">${buttonText}</a>
          </div>
        ` : ''}
        
        <div class="highlight-box">
          <p style="margin: 0; color: #374151;">
            <strong>Template:</strong> ${templateName}<br>
            <strong>Sent from:</strong> Template Gallery
          </p>
        </div>
      </div>
      
      <div class="footer">
        <p style="margin: 0; color: #6b7280; font-size: 14px;">
          ${footerText || '© 2024 Template Gallery. All rights reserved.'}
        </p>
      </div>
    </body>
    </html>
  `;
}

function generateTextEmail(templateName, content) {
  const {
    mainTitle = '',
    subtitle = '',
    mainHeading = '',
    description = '',
    buttonText = '',
    footerText = ''
  } = content;

  return `
${mainTitle || templateName}
${subtitle ? subtitle : ''}

${mainHeading ? mainHeading : ''}

${description ? description : ''}

${buttonText ? `[${buttonText}]` : ''}

---
Template: ${templateName}
Sent from: Template Gallery

${footerText || '© 2024 Template Gallery. All rights reserved.'}
  `.trim();
} 