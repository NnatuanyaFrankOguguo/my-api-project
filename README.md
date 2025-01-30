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

{
  "email": "nnatuanyafrank@gmail.com",
  "current_datetime": "2025-01-30T09:30:00Z",
  "github_url": "https://github.com/nnatunayafrankoguguo/my-api-project"
}

### ⚡ How to Run Locally

#### 1. Clone the Repository 🛎️

git clone [https://github.com/yourusername/your-repo.git](https://github.com/nnatunayafrankoguguo/my-api-project)
cd your-repo

#### 2. Install Dependencies 📦

npm install

#### 3. Build the Project 🔧

npm run build

#### 4. Run the Server with Docker 🐳

docker build -t my-api .
docker run -p 5000:5000 my-api

#### 5. Test the API 🔍

Once the server is running, open your browser or use Postman to test:

http://localhost:5000/

### 🚀 Deployment

This API is deployed and publicly accessible at:

https://my-api-project-production.up.railway.app

📚 Resources

https://hng.tech/hire/nodejs-developers

📜 License

This project is open-source and available under the MIT License.

Thanks.
