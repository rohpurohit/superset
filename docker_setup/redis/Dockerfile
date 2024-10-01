# Use the official Redis image from DockerHub
FROM redis:7

# Expose the Redis default port
EXPOSE 6379

# Use a persistent volume to store Redis data
VOLUME ["/data"]

# Start Redis server with default configuration
CMD ["redis-server"]
