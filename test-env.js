#!/usr/bin/env node

/**
 * Environment Variables Test Script
 * Run this to verify your .env file is set up correctly
 */

import dotenv from 'dotenv';
import { exec } from 'child_process';

console.log('🔍 Testing Environment Variables Setup');
console.log('=====================================\n');

// Load environment variables
dotenv.config();

// Test AWS Configuration
console.log('📦 AWS Configuration:');
const awsVars = {
  'AWS_ACCESS_KEY_ID': process.env.AWS_ACCESS_KEY_ID,
  'AWS_SECRET_ACCESS_KEY': process.env.AWS_SECRET_ACCESS_KEY,
  'AWS_REGION': process.env.AWS_REGION,
  'AWS_S3_BUCKET': process.env.AWS_S3_BUCKET,
};

Object.entries(awsVars).forEach(([key, value]) => {
  const status = value ? '✅' : '❌';
  const displayValue = value ? `${value.substring(0, 8)}...` : 'NOT SET';
  console.log(`  ${status} ${key}: ${displayValue}`);
});

// Test App Configuration
console.log('\n🎨 App Configuration:');
const appVars = {
  'NODE_ENV': process.env.NODE_ENV,
  'VITE_API_URL': process.env.VITE_API_URL,
  'VITE_APP_NAME': process.env.VITE_APP_NAME,
};

Object.entries(appVars).forEach(([key, value]) => {
  const status = value ? '✅' : '⚠️';
  const displayValue = value || 'NOT SET';
  console.log(`  ${status} ${key}: ${displayValue}`);
});

// Test AWS CLI access
console.log('\n🔧 Testing AWS CLI Access:');

exec('aws sts get-caller-identity --query "Account" --output text', (error, stdout, stderr) => {
  if (error) {
    console.log('  ❌ AWS CLI not configured or credentials invalid');
    console.log('     Run: aws configure');
  } else {
    console.log(`  ✅ AWS CLI working - Account: ${stdout.trim()}`);
  }
});

// Summary
console.log('\n📋 Summary:');
const requiredVars = ['AWS_ACCESS_KEY_ID', 'AWS_SECRET_ACCESS_KEY', 'AWS_S3_BUCKET'];
const missingVars = requiredVars.filter(key => !process.env[key]);

if (missingVars.length === 0) {
  console.log('  ✅ All required environment variables are set!');
} else {
  console.log(`  ❌ Missing required variables: ${missingVars.join(', ')}`);
  console.log('  📝 Please update your .env file');
}

console.log('\n🚀 Next steps:');
console.log('  1. If any variables are missing, update your .env file');
console.log('  2. Run: npm run dev');
console.log('  3. Check the browser console for any warnings');
