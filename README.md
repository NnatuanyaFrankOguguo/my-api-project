<div align="center">

## 🚀 HNG12 Stage 0 - Public API 🎯

### 📝 Overview

This is a simple public API developed for the HNG12 Internship Stage 0 task. The API provides:

- 📧 My registered HNG12 Slack email.
- 🕒 The current datetime in ISO 8601 UTC format.
- 🔗 The GitHub repository URL of this project.

### 🛠️ Technology Stack

Backend: Node.js with TypeScript 🟦  
Containerization: Docker 🐳  
Deployment: Railway.app 🚆  
Version Control: Git & GitHub 🐙  
CORS Handling: Configured to allow cross-origin requests 🔄  

### 🌐 API Endpoint

#### GET /

Returns a JSON response with the required information.

**Response Format**
```json
{
  "email": "nnatuanyafrank@gmail.com",
  "current_datetime": "2025-01-30T09:30:00Z",
  "github_url": "https://github.com/nnatunayafrankoguguo/my-api-project"
}
