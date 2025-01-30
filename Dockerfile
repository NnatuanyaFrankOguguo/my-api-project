# Use official Node.js image
FROM node:20-alpine

# Set the working directory
WORKDIR /app

#copy package.json and install dependencies
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install 

# Install TypeScript globally
RUN npm install -g typescript

# Copy the rest of the application
COPY . .

# Force TypeScript compilation
RUN npm run build

# Expose the port the app runs on
EXPOSE 5000

# Serve the app
CMD ["node", "dist/index.js"]