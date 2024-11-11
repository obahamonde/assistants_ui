# Stage 1: Build the Node app
FROM node:20-alpine AS build

# Set the working directory
WORKDIR /app

# Install dependencies
COPY package.json ./
RUN npm install

# Copy the source code and build the app
COPY . .
RUN npm run build

# Stage 2: Setup NGINX to serve the built app
FROM nginx:alpine

# Copy custom Nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf


# Copy the build output from the previous stage to the NGINX web root
COPY --from=build /app/web /usr/share/nginx/html

# Expose port 80 (required by Google Cloud Run)
EXPOSE 80

# Run NGINX in the foreground
CMD ["nginx", "-g", "daemon off;"]
