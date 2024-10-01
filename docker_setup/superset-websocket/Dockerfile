# Base image for websocket service
FROM node:16

# Create app directory
WORKDIR /home/superset-websocket

# Copy the application code into the container
COPY ./superset-websocket /home/superset-websocket

# Exclude node_modules and dist
VOLUME ["/home/superset-websocket/node_modules", "/home/superset-websocket/dist"]

# Copy the websocket config file
COPY ./docker/superset-websocket/config.json /home/superset-websocket/config.json

# Set environment variables
ENV PORT=8080
ENV REDIS_HOST=redis
ENV REDIS_PORT=6379
ENV REDIS_SSL=false

# Expose websocket port
EXPOSE 8080

# Start the websocket service
CMD ["npm", "start"]
