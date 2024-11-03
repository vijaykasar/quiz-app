FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /quiz-app

# Install global dependencies if needed (like TypeScript)
RUN npm install -g typescript

# Copy package.json and package-lock.json
COPY package.json ./
COPY package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Compile TypeScript to JavaScript
RUN npx tsc

# Expose the application port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
