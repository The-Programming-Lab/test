# Base image
FROM node:14-alpine

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the source code
COPY . .

# Expose the app on port 4173
EXPOSE 3000

# Serve the app
CMD ["node", "app.js"]
