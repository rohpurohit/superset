# Use the official Postgres image
FROM postgres:15

# Expose PostgreSQL port
EXPOSE 5432

# Set environment variables for database initialization
ARG POSTGRES_DB
ARG POSTGRES_USER
ARG POSTGRES_PASSWORD

ENV POSTGRES_DB=${POSTGRES_DB}
ENV POSTGRES_USER=${POSTGRES_USER}
ENV POSTGRES_PASSWORD=${POSTGRES_PASSWORD}

ENV PATH="/usr/lib/postgresql/15/bin:$PATH"

# Copy the custom initialization scripts into the container
COPY ../docker/docker-entrypoint-initdb.d /docker-entrypoint-initdb.d

# Define the data volume for persisting database files
VOLUME ["/var/lib/postgresql/data"]

# Set the default command to run the postgres server
CMD ["postgres"]
