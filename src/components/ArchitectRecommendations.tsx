import { architectRecommendations, getServiceById, Provider } from '../data/services';

interface ArchitectRecommendationsProps {
  selectedServiceId?: string;
  selectedProvider?: Provider | 'all';
  onServiceClick?: (serviceId: string) => void;
}

export const ArchitectRecommendations = ({ 
  selectedServiceId, 
  selectedProvider = 'all',
  onServiceClick 
}: ArchitectRecommendationsProps) => {
  // 특정 서비스가 선택된 경우, 해당 서비스가 추천되는 시나리오만 표시
  let displayRecommendations = selectedServiceId
    ? architectRecommendations.filter(rec => 
        rec.recommendedServices.includes(selectedServiceId)
      )
    : architectRecommendations;

  // 프로바이더 필터링
  if (selectedProvider !== 'all') {
    displayRecommendations = displayRecommendations.map(rec => ({
      ...rec,
      recommendedServices: rec.recommendedServices.filter(serviceId => {
        const service = getServiceById(serviceId);
        return service?.provider === selectedProvider;
      })
    })).filter(rec => rec.recommendedServices.length > 0);
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Solutions Architect 추천 매핑
        </h2>
        <p className="text-gray-600 text-sm">
          {selectedServiceId 
            ? '이 서비스가 추천되는 시나리오'
            : '비즈니스 시나리오별 추천 서비스'}
        </p>
      </div>

      <div className="space-y-4">
        {displayRecommendations.map((recommendation, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors"
          >
            <div className="mb-3">
              <h3 className="text-lg font-semibold text-gray-800 mb-1">
                {recommendation.scenario}
              </h3>
              <p className="text-sm text-gray-600 mb-2">
                {recommendation.description}
              </p>
              <p className="text-xs text-gray-500 italic">
                {recommendation.useCase}
              </p>
            </div>
            
            <div className="flex flex-wrap gap-2">
              <span className="text-xs font-medium text-gray-500 mr-2">추천 서비스:</span>
              {recommendation.recommendedServices.map((serviceId) => {
                const service = getServiceById(serviceId);
                if (!service) return null;
                
                const isSelected = selectedServiceId === serviceId;
                const providerColors = {
                  aws: 'bg-orange-100 text-orange-700',
                  azure: 'bg-blue-100 text-blue-700',
                  gcp: 'bg-red-100 text-red-700'
                };
                
                // 서비스 이름에서 프로바이더 접두사 제거
                const displayName = service.name
                  .replace('Azure ', '')
                  .replace('Amazon ', '')
                  .replace('Cloud ', '');
                
                return (
                  <button
                    key={serviceId}
                    onClick={() => onServiceClick?.(serviceId)}
                    className={`px-3 py-1 rounded-full text-xs font-medium transition-colors flex items-center gap-1 ${
                      isSelected
                        ? 'bg-blue-600 text-white'
                        : `bg-gray-100 text-gray-700 hover:bg-gray-200`
                    }`}
                  >
                    <span className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${
                      isSelected 
                        ? 'bg-white/20 text-white' 
                        : providerColors[service.provider]
                    }`}>
                      {service.provider.toUpperCase()}
                    </span>
                    {displayName}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {displayRecommendations.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          <p>추천 시나리오가 없습니다.</p>
        </div>
      )}
    </div>
  );
};

