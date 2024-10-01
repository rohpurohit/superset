# Base image for Superset worker
FROM apache/superset:dev

# Copy necessary volumes for the worker
COPY ./docker /app/docker
COPY ./superset /app/superset
COPY ./superset-frontend /app/superset-frontend
COPY ./tests_copy /app/tests

# Set environment variables for Celery worker
ENV CELERYD_CONCURRENCY=2

# Expose Celery health check endpoint
HEALTHCHECK CMD ["celery", "-A", "superset.tasks.celery_app:app", "inspect", "ping", "-d", "celery@$$HOSTNAME"]

# Start the worker
CMD ["/app/docker/docker-bootstrap.sh", "worker"]
