# Base image for frontend development in Superset
FROM node:16

# Set working directory
WORKDIR /app/superset-frontend

# Set environment variables
ENV BUILD_SUPERSET_FRONTEND_IN_DOCKER=true
ENV SCARF_ANALYTICS=${SCARF_ANALYTICS:-}

# Copy the entire directory for frontend development
COPY ./superset-frontend /app/superset-frontend

# Run the frontend build script
CMD ["/app/docker/docker-frontend.sh"]
