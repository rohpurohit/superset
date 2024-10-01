# Use the official nginx image from DockerHub
FROM nginx:latest

# Copy the nginx config file from the local directory to the container
COPY ./nginx.conf /etc/nginx/nginx.conf

# Expose port 80 for HTTP traffic
EXPOSE 80

# Set container to start nginx automatically
CMD ["nginx", "-g", "daemon off;"]
