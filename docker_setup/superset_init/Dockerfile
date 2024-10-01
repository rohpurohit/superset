# Base image for Superset init
FROM apache/superset:dev

# Copy necessary volumes for initialization
COPY ./docker /app/docker
COPY ./superset /app/superset
COPY ./superset-frontend /app/superset-frontend
COPY ./tests_copy /app/tests

# Set environment variables
ENV CYPRESS_CONFIG=${CYPRESS_CONFIG:-}

# Start Superset initialization script
CMD ["/app/docker/docker-init.sh"]
