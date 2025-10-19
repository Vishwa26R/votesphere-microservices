# ---- Stage 1: Build ----
# Use a Node.js image to build the React app
FROM node:18-alpine AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the source code
COPY . .

# Build the app for production
RUN npm run build

# ---- Stage 2: Serve ----
# Use a lightweight Nginx server to host the static files
FROM nginx:1.25-alpine

# Copy the built files from the 'build' stage
COPY --from=build /app/dist /usr/share/nginx/html

# Nginx will serve the index.html file by default
# Expose port 80
EXPOSE 80

# The default command for the nginx image will start the server
# CMD ["nginx", "-g", "daemon off;"] is run by default