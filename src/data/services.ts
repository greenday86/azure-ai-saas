export type Provider = 'aws' | 'azure' | 'gcp';

export interface Service {
  id: string;
  name: string;
  category: string;
  summary: string;
  useCases: string[];
  link: string;
  provider: Provider;
}

export const services: Service[] = [
  // Azure Services
  {
    id: 'azure-openai',
    name: 'Azure OpenAI Service',
    category: 'Foundation Models',
    summary: 'GPT-4, GPT-3.5, DALL-E 등 다양한 OpenAI 모델을 Azure에서 안전하게 사용할 수 있는 완전 관리형 서비스입니다.',
    useCases: ['텍스트 생성', '이미지 생성', '채팅봇', '콘텐츠 요약'],
    link: 'https://azure.microsoft.com/ko-kr/products/cognitive-services/openai-service/',
    provider: 'azure'
  },
  {
    id: 'azure-machine-learning',
    name: 'Azure Machine Learning',
    category: 'ML Platform',
    summary: '머신러닝 모델을 구축, 훈련 및 배포하기 위한 완전 관리형 플랫폼입니다.',
    useCases: ['모델 훈련', '모델 배포', '데이터 전처리', '하이퍼파라미터 튜닝'],
    link: 'https://azure.microsoft.com/ko-kr/products/machine-learning/',
    provider: 'azure'
  },
  {
    id: 'azure-text-analytics',
    name: 'Azure Text Analytics',
    category: 'NLP',
    summary: '자연어 처리 서비스로 텍스트에서 인사이트와 관계를 추출합니다.',
    useCases: ['감정 분석', '엔티티 인식', '언어 감지', '주제 모델링'],
    link: 'https://azure.microsoft.com/ko-kr/products/cognitive-services/text-analytics/',
    provider: 'azure'
  },
  {
    id: 'azure-computer-vision',
    name: 'Azure Computer Vision',
    category: 'Computer Vision',
    summary: '이미지와 비디오에서 객체, 사람, 텍스트, 장면 및 활동을 감지하고 분석합니다.',
    useCases: ['얼굴 인식', '객체 감지', '텍스트 추출', '콘텐츠 모더레이션'],
    link: 'https://azure.microsoft.com/ko-kr/products/cognitive-services/computer-vision/',
    provider: 'azure'
  },
  {
    id: 'azure-speech-tts',
    name: 'Azure Speech Service (TTS)',
    category: 'Speech',
    summary: '텍스트를 자연스러운 음성으로 변환하는 텍스트-음성(TTS) 서비스입니다.',
    useCases: ['음성 합성', '다국어 지원', '음성 내레이션', '접근성 향상'],
    link: 'https://azure.microsoft.com/ko-kr/products/cognitive-services/speech-services/',
    provider: 'azure'
  },
  {
    id: 'azure-speech-stt',
    name: 'Azure Speech Service (STT)',
    category: 'Speech',
    summary: '오디오를 텍스트로 변환하는 자동 음성 인식(ASR) 서비스입니다.',
    useCases: ['회의록 작성', '자막 생성', '음성 분석', '콜 센터 분석'],
    link: 'https://azure.microsoft.com/ko-kr/products/cognitive-services/speech-services/',
    provider: 'azure'
  },
  {
    id: 'azure-translator',
    name: 'Azure Translator',
    category: 'NLP',
    summary: '신경망 기반 기계 번역 서비스로 빠르고 고품질의 번역을 제공합니다.',
    useCases: ['다국어 번역', '콘텐츠 현지화', '실시간 번역', '문서 번역'],
    link: 'https://azure.microsoft.com/ko-kr/products/cognitive-services/translator/',
    provider: 'azure'
  },
  {
    id: 'azure-bot-service',
    name: 'Azure Bot Service',
    category: 'Conversational AI',
    summary: '음성 및 텍스트 기반 대화형 인터페이스를 구축하는 서비스입니다.',
    useCases: ['챗봇', '음성 비서', '고객 지원', '대화형 애플리케이션'],
    link: 'https://azure.microsoft.com/ko-kr/products/bot-services/',
    provider: 'azure'
  },
  {
    id: 'azure-form-recognizer',
    name: 'Azure Form Recognizer',
    category: 'Document AI',
    summary: '문서에서 텍스트, 데이터 및 테이블을 자동으로 추출하는 서비스입니다.',
    useCases: ['문서 디지털화', '데이터 추출', '양식 처리', '영수증 분석'],
    link: 'https://azure.microsoft.com/ko-kr/products/form-recognizer/',
    provider: 'azure'
  },
  {
    id: 'azure-cognitive-search',
    name: 'Azure Cognitive Search',
    category: 'Search',
    summary: 'AI 기반 엔터프라이즈 검색 서비스로 정확한 답변을 제공합니다.',
    useCases: ['지식 검색', 'FAQ 시스템', '문서 검색', '내부 위키'],
    link: 'https://azure.microsoft.com/ko-kr/products/search/',
    provider: 'azure'
  },
  {
    id: 'azure-anomaly-detector',
    name: 'Azure Anomaly Detector',
    category: 'Forecasting',
    summary: '기계 학습을 사용하여 시계열 데이터의 이상을 감지하고 예측을 생성하는 서비스입니다.',
    useCases: ['수요 예측', '재고 관리', '매출 예측', '리소스 계획'],
    link: 'https://azure.microsoft.com/ko-kr/products/cognitive-services/anomaly-detector/',
    provider: 'azure'
  },
  {
    id: 'azure-personalizer',
    name: 'Azure Personalizer',
    category: 'Recommendation',
    summary: '실시간 개인화 및 추천을 제공하는 머신러닝 서비스입니다.',
    useCases: ['제품 추천', '콘텐츠 추천', '개인화된 마케팅', '사용자 경험 향상'],
    link: 'https://azure.microsoft.com/ko-kr/products/cognitive-services/personalizer/',
    provider: 'azure'
  },
  // AWS Services
  {
    id: 'aws-bedrock',
    name: 'Amazon Bedrock',
    category: 'Foundation Models',
    summary: '완전 관리형 서비스로 다양한 파운데이션 모델을 API를 통해 사용할 수 있습니다.',
    useCases: ['텍스트 생성', '이미지 생성', '채팅봇', '콘텐츠 요약'],
    link: 'https://aws.amazon.com/ko/bedrock/',
    provider: 'aws'
  },
  {
    id: 'aws-sagemaker',
    name: 'Amazon SageMaker',
    category: 'ML Platform',
    summary: '머신러닝 모델을 구축, 훈련 및 배포하기 위한 완전 관리형 플랫폼입니다.',
    useCases: ['모델 훈련', '모델 배포', '데이터 전처리', '하이퍼파라미터 튜닝'],
    link: 'https://aws.amazon.com/ko/sagemaker/',
    provider: 'aws'
  },
  {
    id: 'aws-comprehend',
    name: 'Amazon Comprehend',
    category: 'NLP',
    summary: '자연어 처리 서비스로 텍스트에서 인사이트와 관계를 추출합니다.',
    useCases: ['감정 분석', '엔티티 인식', '언어 감지', '주제 모델링'],
    link: 'https://aws.amazon.com/ko/comprehend/',
    provider: 'aws'
  },
  {
    id: 'aws-rekognition',
    name: 'Amazon Rekognition',
    category: 'Computer Vision',
    summary: '이미지와 비디오에서 객체, 사람, 텍스트, 장면 및 활동을 감지하고 분석합니다.',
    useCases: ['얼굴 인식', '객체 감지', '텍스트 추출', '콘텐츠 모더레이션'],
    link: 'https://aws.amazon.com/ko/rekognition/',
    provider: 'aws'
  },
  {
    id: 'aws-polly',
    name: 'Amazon Polly',
    category: 'Speech',
    summary: '텍스트를 자연스러운 음성으로 변환하는 텍스트-음성(TTS) 서비스입니다.',
    useCases: ['음성 합성', '다국어 지원', '음성 내레이션', '접근성 향상'],
    link: 'https://aws.amazon.com/ko/polly/',
    provider: 'aws'
  },
  {
    id: 'aws-transcribe',
    name: 'Amazon Transcribe',
    category: 'Speech',
    summary: '오디오를 텍스트로 변환하는 자동 음성 인식(ASR) 서비스입니다.',
    useCases: ['회의록 작성', '자막 생성', '음성 분석', '콜 센터 분석'],
    link: 'https://aws.amazon.com/ko/transcribe/',
    provider: 'aws'
  },
  {
    id: 'aws-translate',
    name: 'Amazon Translate',
    category: 'NLP',
    summary: '신경망 기반 기계 번역 서비스로 빠르고 고품질의 번역을 제공합니다.',
    useCases: ['다국어 번역', '콘텐츠 현지화', '실시간 번역', '문서 번역'],
    link: 'https://aws.amazon.com/ko/translate/',
    provider: 'aws'
  },
  {
    id: 'aws-lex',
    name: 'Amazon Lex',
    category: 'Conversational AI',
    summary: '음성 및 텍스트 기반 대화형 인터페이스를 구축하는 서비스입니다.',
    useCases: ['챗봇', '음성 비서', '고객 지원', '대화형 애플리케이션'],
    link: 'https://aws.amazon.com/ko/lex/',
    provider: 'aws'
  },
  {
    id: 'aws-textract',
    name: 'Amazon Textract',
    category: 'Document AI',
    summary: '문서에서 텍스트, 데이터 및 테이블을 자동으로 추출하는 서비스입니다.',
    useCases: ['문서 디지털화', '데이터 추출', '양식 처리', '영수증 분석'],
    link: 'https://aws.amazon.com/ko/textract/',
    provider: 'aws'
  },
  {
    id: 'aws-kendra',
    name: 'Amazon Kendra',
    category: 'Search',
    summary: '기계 학습 기반 엔터프라이즈 검색 서비스로 정확한 답변을 제공합니다.',
    useCases: ['지식 검색', 'FAQ 시스템', '문서 검색', '내부 위키'],
    link: 'https://aws.amazon.com/ko/kendra/',
    provider: 'aws'
  },
  {
    id: 'aws-forecast',
    name: 'Amazon Forecast',
    category: 'Forecasting',
    summary: '기계 학습을 사용하여 정확한 시계열 예측을 생성하는 서비스입니다.',
    useCases: ['수요 예측', '재고 관리', '매출 예측', '리소스 계획'],
    link: 'https://aws.amazon.com/ko/forecast/',
    provider: 'aws'
  },
  {
    id: 'aws-personalize',
    name: 'Amazon Personalize',
    category: 'Recommendation',
    summary: '실시간 개인화 및 추천을 제공하는 머신러닝 서비스입니다.',
    useCases: ['제품 추천', '콘텐츠 추천', '개인화된 마케팅', '사용자 경험 향상'],
    link: 'https://aws.amazon.com/ko/personalize/',
    provider: 'aws'
  },
  // GCP Services
  {
    id: 'gcp-vertex-ai',
    name: 'Vertex AI',
    category: 'Foundation Models',
    summary: 'Google의 파운데이션 모델과 커스텀 ML 모델을 통합 관리하는 완전 관리형 플랫폼입니다.',
    useCases: ['텍스트 생성', '이미지 생성', '채팅봇', '콘텐츠 요약'],
    link: 'https://cloud.google.com/vertex-ai?hl=ko',
    provider: 'gcp'
  },
  {
    id: 'gcp-vertex-ai-platform',
    name: 'Vertex AI Platform',
    category: 'ML Platform',
    summary: '머신러닝 모델을 구축, 훈련 및 배포하기 위한 완전 관리형 플랫폼입니다.',
    useCases: ['모델 훈련', '모델 배포', '데이터 전처리', '하이퍼파라미터 튜닝'],
    link: 'https://cloud.google.com/vertex-ai?hl=ko',
    provider: 'gcp'
  },
  {
    id: 'gcp-natural-language',
    name: 'Cloud Natural Language API',
    category: 'NLP',
    summary: '자연어 처리 서비스로 텍스트에서 인사이트와 관계를 추출합니다.',
    useCases: ['감정 분석', '엔티티 인식', '언어 감지', '주제 모델링'],
    link: 'https://cloud.google.com/natural-language?hl=ko',
    provider: 'gcp'
  },
  {
    id: 'gcp-vision',
    name: 'Cloud Vision API',
    category: 'Computer Vision',
    summary: '이미지와 비디오에서 객체, 사람, 텍스트, 장면 및 활동을 감지하고 분석합니다.',
    useCases: ['얼굴 인식', '객체 감지', '텍스트 추출', '콘텐츠 모더레이션'],
    link: 'https://cloud.google.com/vision?hl=ko',
    provider: 'gcp'
  },
  {
    id: 'gcp-text-to-speech',
    name: 'Cloud Text-to-Speech',
    category: 'Speech',
    summary: '텍스트를 자연스러운 음성으로 변환하는 텍스트-음성(TTS) 서비스입니다.',
    useCases: ['음성 합성', '다국어 지원', '음성 내레이션', '접근성 향상'],
    link: 'https://cloud.google.com/text-to-speech?hl=ko',
    provider: 'gcp'
  },
  {
    id: 'gcp-speech-to-text',
    name: 'Cloud Speech-to-Text',
    category: 'Speech',
    summary: '오디오를 텍스트로 변환하는 자동 음성 인식(ASR) 서비스입니다.',
    useCases: ['회의록 작성', '자막 생성', '음성 분석', '콜 센터 분석'],
    link: 'https://cloud.google.com/speech-to-text?hl=ko',
    provider: 'gcp'
  },
  {
    id: 'gcp-translate',
    name: 'Cloud Translation API',
    category: 'NLP',
    summary: '신경망 기반 기계 번역 서비스로 빠르고 고품질의 번역을 제공합니다.',
    useCases: ['다국어 번역', '콘텐츠 현지화', '실시간 번역', '문서 번역'],
    link: 'https://cloud.google.com/translate?hl=ko',
    provider: 'gcp'
  },
  {
    id: 'gcp-dialogflow',
    name: 'Dialogflow',
    category: 'Conversational AI',
    summary: '음성 및 텍스트 기반 대화형 인터페이스를 구축하는 서비스입니다.',
    useCases: ['챗봇', '음성 비서', '고객 지원', '대화형 애플리케이션'],
    link: 'https://cloud.google.com/dialogflow?hl=ko',
    provider: 'gcp'
  },
  {
    id: 'gcp-document-ai',
    name: 'Document AI',
    category: 'Document AI',
    summary: '문서에서 텍스트, 데이터 및 테이블을 자동으로 추출하는 서비스입니다.',
    useCases: ['문서 디지털화', '데이터 추출', '양식 처리', '영수증 분석'],
    link: 'https://cloud.google.com/document-ai?hl=ko',
    provider: 'gcp'
  },
  {
    id: 'gcp-enterprise-search',
    name: 'Enterprise Search',
    category: 'Search',
    summary: 'AI 기반 엔터프라이즈 검색 서비스로 정확한 답변을 제공합니다.',
    useCases: ['지식 검색', 'FAQ 시스템', '문서 검색', '내부 위키'],
    link: 'https://cloud.google.com/generative-ai-app-builder/docs/enterprise-search-overview?hl=ko',
    provider: 'gcp'
  },
  {
    id: 'gcp-vertex-forecasting',
    name: 'Vertex AI Forecasting',
    category: 'Forecasting',
    summary: '기계 학습을 사용하여 정확한 시계열 예측을 생성하는 서비스입니다.',
    useCases: ['수요 예측', '재고 관리', '매출 예측', '리소스 계획'],
    link: 'https://cloud.google.com/vertex-ai/docs/training/time-series-forecasting?hl=ko',
    provider: 'gcp'
  },
  {
    id: 'gcp-recommendations-ai',
    name: 'Recommendations AI',
    category: 'Recommendation',
    summary: '실시간 개인화 및 추천을 제공하는 머신러닝 서비스입니다.',
    useCases: ['제품 추천', '콘텐츠 추천', '개인화된 마케팅', '사용자 경험 향상'],
    link: 'https://cloud.google.com/recommendations?hl=ko',
    provider: 'gcp'
  }
];

export const categories = Array.from(new Set(services.map(service => service.category))).sort();

// Solution Architect 관점 추천 서비스 매핑표
export interface ArchitectRecommendation {
  scenario: string;
  description: string;
  recommendedServices: string[]; // service id 배열
  useCase: string;
}

export const architectRecommendations: ArchitectRecommendation[] = [
  {
    scenario: '고객 지원 자동화',
    description: '24/7 고객 지원 챗봇 및 음성 비서 구축',
    recommendedServices: ['azure-bot-service', 'aws-lex', 'gcp-dialogflow', 'azure-text-analytics', 'aws-comprehend', 'gcp-natural-language', 'azure-speech-stt', 'aws-transcribe', 'gcp-speech-to-text', 'azure-speech-tts', 'aws-polly', 'gcp-text-to-speech'],
    useCase: '고객 문의 자동 응답, 감정 분석, 음성 상담 지원'
  },
  {
    scenario: '콘텐츠 추천 시스템',
    description: '개인화된 제품/콘텐츠 추천 엔진 구축',
    recommendedServices: ['azure-personalizer', 'aws-personalize', 'gcp-recommendations-ai', 'azure-machine-learning', 'aws-sagemaker', 'gcp-vertex-ai-platform'],
    useCase: 'E-commerce 제품 추천, OTT 콘텐츠 추천, 개인화 마케팅'
  },
  {
    scenario: '문서 처리 자동화',
    description: '문서에서 데이터 추출 및 분석 자동화',
    recommendedServices: ['azure-form-recognizer', 'aws-textract', 'gcp-document-ai', 'azure-text-analytics', 'aws-comprehend', 'gcp-natural-language', 'azure-translator', 'aws-translate', 'gcp-translate'],
    useCase: '계약서 분석, 영수증 처리, 다국어 문서 번역'
  },
  {
    scenario: '이미지/비디오 분석',
    description: '이미지 및 비디오 콘텐츠 분석 및 모더레이션',
    recommendedServices: ['azure-computer-vision', 'aws-rekognition', 'gcp-vision', 'azure-form-recognizer', 'aws-textract', 'gcp-document-ai'],
    useCase: '얼굴 인식, 객체 감지, 콘텐츠 모더레이션, 이미지 텍스트 추출'
  },
  {
    scenario: '음성 기반 애플리케이션',
    description: '음성 인식 및 합성 기능이 있는 애플리케이션',
    recommendedServices: ['azure-speech-stt', 'aws-transcribe', 'gcp-speech-to-text', 'azure-speech-tts', 'aws-polly', 'gcp-text-to-speech', 'azure-bot-service', 'aws-lex', 'gcp-dialogflow'],
    useCase: '회의록 자동 생성, 음성 내레이션, 음성 비서'
  },
  {
    scenario: '엔터프라이즈 검색',
    description: '지식 베이스 및 문서 검색 시스템',
    recommendedServices: ['azure-cognitive-search', 'aws-kendra', 'gcp-enterprise-search', 'azure-text-analytics', 'aws-comprehend', 'gcp-natural-language'],
    useCase: '내부 위키 검색, FAQ 시스템, 문서 검색'
  },
  {
    scenario: '예측 분석',
    description: '시계열 데이터 기반 수요/매출 예측',
    recommendedServices: ['azure-anomaly-detector', 'aws-forecast', 'gcp-vertex-forecasting', 'azure-machine-learning', 'aws-sagemaker', 'gcp-vertex-ai-platform'],
    useCase: '재고 관리, 매출 예측, 리소스 계획'
  },
  {
    scenario: 'AI 기반 콘텐츠 생성',
    description: '파운데이션 모델을 활용한 콘텐츠 생성',
    recommendedServices: ['azure-openai', 'aws-bedrock', 'gcp-vertex-ai', 'azure-machine-learning', 'aws-sagemaker', 'gcp-vertex-ai-platform'],
    useCase: '텍스트 생성, 이미지 생성, 챗봇, 콘텐츠 요약'
  },
  {
    scenario: '다국어 서비스',
    description: '다국어 지원 및 현지화 서비스',
    recommendedServices: ['azure-translator', 'aws-translate', 'gcp-translate', 'azure-speech-tts', 'aws-polly', 'gcp-text-to-speech', 'azure-text-analytics', 'aws-comprehend', 'gcp-natural-language'],
    useCase: '실시간 번역, 다국어 음성 합성, 언어 감지'
  },
  {
    scenario: '콜 센터 분석',
    description: '고객 상담 전화 분석 및 인사이트 도출',
    recommendedServices: ['azure-speech-stt', 'aws-transcribe', 'gcp-speech-to-text', 'azure-text-analytics', 'aws-comprehend', 'gcp-natural-language', 'azure-bot-service', 'aws-lex', 'gcp-dialogflow'],
    useCase: '상담 내용 분석, 감정 분석, 자동 응답'
  }
];

// 서비스 ID로 서비스 객체를 찾는 헬퍼 함수
export const getServiceById = (id: string): Service | undefined => {
  return services.find(service => service.id === id);
};

// 시나리오별 추천 서비스 목록 가져오기
export const getRecommendedServicesByScenario = (scenario: string): Service[] => {
  const recommendation = architectRecommendations.find(rec => rec.scenario === scenario);
  if (!recommendation) return [];
  
  return recommendation.recommendedServices
    .map(id => getServiceById(id))
    .filter((service): service is Service => service !== undefined);
};

// 서비스가 추천되는 시나리오 목록 가져오기
export const getScenariosForService = (serviceId: string): ArchitectRecommendation[] => {
  return architectRecommendations.filter(rec => 
    rec.recommendedServices.includes(serviceId)
  );
};