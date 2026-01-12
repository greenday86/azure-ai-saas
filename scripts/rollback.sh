#!/bin/bash
set -e

NAMESPACE=${NAMESPACE:-"azure-ai-saas"}
REVISION=${1:-""}

if [ -z "$REVISION" ]; then
  echo "Usage: $0 <revision-number>"
  echo "Available revisions:"
  helm history azure-ai-saas --namespace ${NAMESPACE} || true
  exit 1
fi

echo "Rolling back to revision ${REVISION}..."
helm rollback azure-ai-saas ${REVISION} --namespace ${NAMESPACE}

echo "Waiting for rollout to complete..."
kubectl rollout status deployment/azure-ai-saas -n ${NAMESPACE} --timeout=5m

echo "Rollback completed!"
kubectl get pods -n ${NAMESPACE}

