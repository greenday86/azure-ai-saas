#!/bin/bash
set -e

ACR_NAME=${ACR_NAME:-"skaxdev"}
NAMESPACE=${NAMESPACE:-"azure-ai-saas"}
IMAGE_TAG=${IMAGE_TAG:-"latest"}

echo "Building Docker image..."
docker build -f docker/Dockerfile -t ${ACR_NAME}.azurecr.io/azure-ai-saas:${IMAGE_TAG} .

echo "Pushing image to ACR..."
docker push ${ACR_NAME}.azurecr.io/azure-ai-saas:${IMAGE_TAG}

echo "Deploying to AKS..."
helm upgrade --install azure-ai-saas helm/azure-ai-saas \
  --namespace ${NAMESPACE} \
  --create-namespace \
  --set image.repository=${ACR_NAME}.azurecr.io/azure-ai-saas \
  --set image.tag=${IMAGE_TAG} \
  --wait \
  --timeout 5m

echo "Deployment completed!"
kubectl get all -n ${NAMESPACE}

