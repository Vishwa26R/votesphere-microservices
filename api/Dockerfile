# 1. Base Image: Use an official Node.js runtime as a parent image
FROM node:18-alpine

# 2. Set the working directory inside the container
WORKDIR /app

# 3. Copy package.json and package-lock.json to the container's work directory
COPY package*.json ./

# 4. Install project dependencies
RUN npm install

# 5. Copy the rest of your app's source code from your host to your image filesystem.
COPY . .

# 6. Build the TypeScript code into JavaScript
RUN tsc

# 7. Expose the port the app runs on
EXPOSE 4000

# 8. Define the command to run the application (runs the compiled JS code)
CMD [ "node", "dist/index.js" ]