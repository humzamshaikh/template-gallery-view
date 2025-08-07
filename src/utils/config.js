/**
 * Configuration utility for environment variables
 * Centralizes all environment variable access
 */

// AWS Configuration
export const awsConfig = {
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION || 'us-east-1',
  s3Bucket: process.env.AWS_S3_BUCKET,
};

// App Configuration (Vite variables - available in client)
export const appConfig = {
  name: import.meta.env.VITE_APP_NAME || 'Template Gallery',
  apiUrl: import.meta.env.VITE_API_URL || 'http://localhost:3000',
  environment: import.meta.env.MODE || 'development',
  debug: import.meta.env.VITE_DEBUG === 'true',
};

// Feature Flags
export const features = {
  enablePreview: import.meta.env.VITE_ENABLE_PREVIEW !== 'false',
  enableAnalytics: import.meta.env.VITE_ENABLE_ANALYTICS === 'true',
};

// Validation function to check required environment variables
export const validateEnvironment = () => {
  const required = [
    'AWS_ACCESS_KEY_ID',
    'AWS_SECRET_ACCESS_KEY',
    'AWS_S3_BUCKET',
  ];

  const missing = required.filter(key => !process.env[key]);

  if (missing.length > 0) {
    console.warn('⚠️ Missing required environment variables:', missing);
    console.warn('Please check your .env file');
    return false;
  }

  return true;
};

// Helper function to get environment-specific configuration
export const getEnvironmentConfig = () => {
  const env = import.meta.env.MODE;
  
  switch (env) {
    case 'production':
      return {
        apiUrl: import.meta.env.VITE_API_URL || 'https://api.yourdomain.com',
        debug: false,
        enableAnalytics: true,
      };
    case 'development':
      return {
        apiUrl: import.meta.env.VITE_API_URL || 'http://localhost:3000',
        debug: true,
        enableAnalytics: false,
      };
    default:
      return {
        apiUrl: import.meta.env.VITE_API_URL || 'http://localhost:3000',
        debug: true,
        enableAnalytics: false,
      };
  }
};

// Export default configuration
export default {
  aws: awsConfig,
  app: appConfig,
  features,
  validateEnvironment,
  getEnvironmentConfig,
};
