interface SidebarProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export const Sidebar = ({ categories, selectedCategory, onCategoryChange }: SidebarProps) => {
  return (
    <aside className="w-64 bg-gray-50 border-r border-gray-200 p-6 h-screen overflow-y-auto">
      <h2 className="text-xl font-bold text-gray-800 mb-4">카테고리</h2>
      <nav className="space-y-2">
        <button
          onClick={() => onCategoryChange('All')}
          className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
            selectedCategory === 'All'
              ? 'bg-blue-600 text-white font-semibold'
              : 'bg-white text-gray-700 hover:bg-gray-100'
          }`}
        >
          전체
        </button>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
              selectedCategory === category
                ? 'bg-blue-600 text-white font-semibold'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            {category}
          </button>
        ))}
      </nav>
    </aside>
  );
};

