{{/*
Common labels
*/}}
{{- define "azure-ai-saas.labels" -}}
app: {{ include "azure-ai-saas.name" . }}
chart: {{ include "azure-ai-saas.chart" . }}
release: {{ .Release.Name }}
heritage: {{ .Release.Service }}
{{- end }}

{{/*
Selector labels
*/}}
{{- define "azure-ai-saas.selectorLabels" -}}
app: {{ include "azure-ai-saas.name" . }}
{{- end }}

{{/*
Chart name and version
*/}}
{{- define "azure-ai-saas.chart" -}}
{{- printf "%s-%s" .Chart.Name .Chart.Version | replace "+" "_" | trunc 63 | trimSuffix "-" }}
{{- end }}

{{/*
Application name
*/}}
{{- define "azure-ai-saas.name" -}}
{{- default .Chart.Name .Values.nameOverride | trunc 63 | trimSuffix "-" }}
{{- end }}

{{/*
Full image name
*/}}
{{- define "azure-ai-saas.image" -}}
{{- printf "%s:%s" .Values.image.repository (.Values.image.tag | default .Chart.AppVersion) }}
{{- end }}

