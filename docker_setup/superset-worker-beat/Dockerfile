# Base image for Superset Celery beat
FROM apache/superset:dev

# Copy necessary volumes
COPY ./docker /app/docker
COPY ./superset /app/superset
COPY ./superset-frontend /app/superset-frontend
COPY ./tests_copy /app/tests

# Start the Celery beat process
CMD ["/app/docker/docker-bootstrap.sh", "beat"]
