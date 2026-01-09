import { Service, getScenariosForService } from '../data/services';

interface ServiceCardProps {
  service: Service;
  onRecommendationClick?: (serviceId: string) => void;
  isSelected?: boolean;
}

export const ServiceCard = ({ service, onRecommendationClick, isSelected = false }: ServiceCardProps) => {
  const scenarios = getScenariosForService(service.id);
  const recommendationCount = scenarios.length;

  return (
    <div className={`bg-white rounded-lg shadow-md hover:shadow-lg transition-all p-6 border-2 relative ${
      isSelected 
        ? 'border-blue-500 shadow-blue-200 bg-blue-50' 
        : 'border-gray-200'
    }`}>
      <div className="flex items-start justify-between mb-2">
        <h3 className="text-xl font-bold text-gray-800">{service.name}</h3>
        {recommendationCount > 0 && (
          <button
            onClick={() => onRecommendationClick?.(service.id)}
            className="ml-2 px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full font-medium hover:bg-purple-200 transition-colors"
            title={`${recommendationCount}개 시나리오에서 추천됨`}
          >
            추천 {recommendationCount}
          </button>
        )}
      </div>
      <p className="text-gray-600 mb-4 text-sm">{service.summary}</p>
      
      <div className="mb-4">
        <div className="flex flex-wrap gap-2">
          {service.useCases.map((useCase, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full font-medium"
            >
              {useCase}
            </span>
          ))}
        </div>
      </div>
      
      <a
        href={service.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
      >
        공식 문서 보기 →
      </a>
    </div>
  );
};

