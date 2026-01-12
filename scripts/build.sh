#!/bin/bash
set -e

ACR_NAME=${ACR_NAME:-"skaxdev"}
IMAGE_TAG=${IMAGE_TAG:-"latest"}

echo "Building Docker image..."
docker build -f docker/Dockerfile -t ${ACR_NAME}.azurecr.io/azure-ai-saas:${IMAGE_TAG} .

echo "Image built successfully!"
echo "Image: ${ACR_NAME}.azurecr.io/azure-ai-saas:${IMAGE_TAG}"

