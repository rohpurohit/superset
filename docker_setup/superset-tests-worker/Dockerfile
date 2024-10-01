# Base image for testing worker in Superset
FROM apache/superset:dev

# Copy necessary volumes for testing
COPY ./docker /app/docker
COPY ./superset /app/superset
COPY ./superset-frontend /app/superset-frontend
COPY ./tests_copy /app/tests

# Set environment variables for testing
ENV DATABASE_HOST=localhost
ENV DATABASE_DB=test
ENV REDIS_CELERY_DB=2
ENV REDIS_RESULTS_DB=3
ENV REDIS_HOST=localhost
ENV CELERYD_CONCURRENCY=8

# Expose Celery health check endpoint
HEALTHCHECK CMD ["celery", "inspect", "ping", "-A", "superset.tasks.celery_app:app", "-d", "celery@$$HOSTNAME"]

# Start the worker for testing
CMD ["/app/docker/docker-bootstrap.sh", "worker"]
