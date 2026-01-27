# 클라우드 AI 서비스 카탈로그

React + TypeScript + Vite로 구축된 AWS, Azure, GCP AI 서비스들을 시각적으로 정리한 단일 페이지 애플리케이션입니다.

## 기능

- 📋 AWS, Azure, GCP AI 서비스 목록을 카드 형태로 표시
- ☁️ 클라우드 프로바이더별 필터링 (AWS / Azure / GCP / 전체)
- 🔍 카테고리별 필터링 기능
- 🎯 Solutions Architect 추천 매핑 (시나리오별 추천 서비스)
- 📱 반응형 디자인 (모바일, 태블릿, 데스크톱 지원)
- 🎨 Tailwind CSS를 활용한 현대적인 UI

## 시작하기

### 설치

```bash
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

브라우저에서 `http://localhost:5173`을 열어 확인하세요.

### 빌드

```bash
npm run build
```

## 프로젝트 구조

```
src/
├── data/
│   └── services.ts                    # AWS/Azure/GCP 서비스 데이터 정의
├── components/
│   ├── Sidebar.tsx                    # 카테고리 필터 사이드바
│   ├── ServiceCard.tsx                # 서비스 카드 컴포넌트
│   └── ArchitectRecommendations.tsx   # Solutions Architect 추천 매핑
├── pages/
│   └── Home.tsx                       # 메인 페이지 (프로바이더 선택 포함)
├── App.tsx                             # 루트 컴포넌트
├── main.tsx                            # 진입점
└── index.css                           # 전역 스타일
```

## 기술 스택

- **React 18** - UI 라이브러리
- **TypeScript** - 타입 안정성
- **Vite** - 빌드 도구
- **Tailwind CSS** - 스타일링

## 지원 서비스

### AWS AI 서비스
- Amazon Bedrock (Foundation Models)
- Amazon SageMaker (ML Platform)
- Amazon Comprehend (NLP)
- Amazon Rekognition (Computer Vision)
- Amazon Polly (Speech TTS)
- Amazon Transcribe (Speech STT)
- Amazon Translate (NLP)
- Amazon Lex (Conversational AI)
- Amazon Textract (Document AI)
- Amazon Kendra (Search)
- Amazon Forecast (Forecasting)
- Amazon Personalize (Recommendation)

### Azure AI 서비스
- Azure OpenAI Service (Foundation Models)
- Azure Machine Learning (ML Platform)
- Azure Text Analytics (NLP)
- Azure Computer Vision (Computer Vision)
- Azure Speech Service TTS (Speech)
- Azure Speech Service STT (Speech)
- Azure Translator (NLP)
- Azure Bot Service (Conversational AI)
- Azure Form Recognizer (Document AI)
- Azure Cognitive Search (Search)
- Azure Anomaly Detector (Forecasting)
- Azure Personalizer (Recommendation)

### GCP AI 서비스
- Vertex AI (Foundation Models)
- Vertex AI Platform (ML Platform)
- Cloud Natural Language API (NLP)
- Cloud Vision API (Computer Vision)
- Cloud Text-to-Speech (Speech TTS)
- Cloud Speech-to-Text (Speech STT)
- Cloud Translation API (NLP)
- Dialogflow (Conversational AI)
- Document AI (Document AI)
- Enterprise Search (Search)
- Vertex AI Forecasting (Forecasting)
- Recommendations AI (Recommendation)
