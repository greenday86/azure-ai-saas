#!/bin/bash
set -e

IMAGE_TAG=${IMAGE_TAG:-"local"}
CONTAINER_NAME="azure-ai-saas-test"

echo "Building Docker image for testing..."
docker build -f docker/Dockerfile -t azure-ai-saas:${IMAGE_TAG} .

echo "Starting container..."
docker run -d -p 8080:8080 --name ${CONTAINER_NAME} azure-ai-saas:${IMAGE_TAG}

echo "Waiting for container to start..."
sleep 3

echo "Testing health endpoint..."
curl -f http://localhost:8080/health || (echo "Health check failed!" && exit 1)

echo "Testing main endpoint..."
curl -f http://localhost:8080/ || (echo "Main endpoint failed!" && exit 1)

echo "All tests passed!"
echo "Container is running. To stop: docker stop ${CONTAINER_NAME} && docker rm ${CONTAINER_NAME}"

