import { useState, useMemo } from 'react';
import { Sidebar } from '../components/Sidebar';
import { ServiceCard } from '../components/ServiceCard';
import { ArchitectRecommendations } from '../components/ArchitectRecommendations';
import { services, categories, getServiceById, Provider } from '../data/services';

export const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedProvider, setSelectedProvider] = useState<Provider | 'all'>('all');
  const [selectedServiceId, setSelectedServiceId] = useState<string | undefined>(undefined);
  const [showRecommendations, setShowRecommendations] = useState<boolean>(true);

  const filteredServices = useMemo(() => {
    let filtered = services;

    // 프로바이더 필터링
    if (selectedProvider !== 'all') {
      filtered = filtered.filter(service => service.provider === selectedProvider);
    }

    // 카테고리 필터링
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(service => service.category === selectedCategory);
    }

    // 서비스 ID 필터링 (추천 매핑에서 선택한 경우)
    if (selectedServiceId) {
      filtered = filtered.filter(service => service.id === selectedServiceId);
    }

    return filtered;
  }, [selectedCategory, selectedProvider, selectedServiceId]);

  const handleServiceClick = (serviceId: string) => {
    if (selectedServiceId === serviceId) {
      setSelectedServiceId(undefined);
    } else {
      setSelectedServiceId(serviceId);
    }
    setShowRecommendations(true);
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={(category) => {
          setSelectedCategory(category);
          setSelectedServiceId(undefined);
        }}
      />
      
      <main className="flex-1 p-8 max-w-7xl mx-auto">
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-3xl font-bold text-gray-800">
              클라우드 AI 서비스 카탈로그
            </h1>
            <button
              onClick={() => setShowRecommendations(!showRecommendations)}
              className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm font-medium"
            >
              {showRecommendations ? '추천 숨기기' : '추천 보기'}
            </button>
          </div>
          
          {/* 프로바이더 선택 탭 */}
          <div className="mb-4 flex gap-2">
            <button
              onClick={() => {
                setSelectedProvider('all');
                setSelectedServiceId(undefined);
              }}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedProvider === 'all'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
              }`}
            >
              전체
            </button>
            <button
              onClick={() => {
                setSelectedProvider('aws');
                setSelectedServiceId(undefined);
              }}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedProvider === 'aws'
                  ? 'bg-orange-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
              }`}
            >
              AWS
            </button>
            <button
              onClick={() => {
                setSelectedProvider('azure');
                setSelectedServiceId(undefined);
              }}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedProvider === 'azure'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
              }`}
            >
              Azure
            </button>
            <button
              onClick={() => {
                setSelectedProvider('gcp');
                setSelectedServiceId(undefined);
              }}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedProvider === 'gcp'
                  ? 'bg-red-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
              }`}
            >
              GCP
            </button>
          </div>

          <p className="text-gray-600">
            {selectedServiceId
              ? `${getServiceById(selectedServiceId)?.name || '선택된 서비스'} (1개)`
              : selectedCategory === 'All' && selectedProvider === 'all'
                ? `전체 ${services.length}개의 서비스` 
                : `${filteredServices.length}개의 서비스`}
          </p>
        </div>

        {showRecommendations && (
          <div className="mb-8">
            <ArchitectRecommendations
              selectedServiceId={selectedServiceId}
              selectedProvider={selectedProvider}
              onServiceClick={handleServiceClick}
            />
          </div>
        )}
        
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-800">
            서비스 목록
            {selectedServiceId && (
              <span className="ml-2 text-lg font-normal text-gray-500">
                - {getServiceById(selectedServiceId)?.name}
              </span>
            )}
          </h2>
          {selectedServiceId && (
            <button
              onClick={() => setSelectedServiceId(undefined)}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors text-sm font-medium"
            >
              필터 해제
            </button>
          )}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onRecommendationClick={handleServiceClick}
              isSelected={selectedServiceId === service.id}
            />
          ))}
        </div>
        
        {filteredServices.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">선택한 카테고리에 서비스가 없습니다.</p>
          </div>
        )}
      </main>
    </div>
  );
};

