import { useState } from "react";
import { useNavigate } from "react-router";
import PageNavButton from "../components/PageNavButton";

// order these to where they make sense on a page
const categoryItems = [
  { id: "restaurants", label: "Restaurants", icon: "🍽️" },
  { id: "shopping", label: "Shopping Centers", icon: "🛍️" },
  { id: "parks", label: "Parks & Recreation", icon: "🌳" },
  { id: "schools", label: "Schools", icon: "🏫" },
  { id: "hospitals", label: "Hospitals", icon: "🏥" },
  { id: "transportation", label: "Transportation", icon: "🚌" },
  { id: "entertainment", label: "Entertainment", icon: "🎭" },
  { id: "fitness", label: "Fitness Centers", icon: "💪" },
  { id: "banks", label: "Banks & ATMs", icon: "🏦" },
  { id: "gas", label: "Gas Stations", icon: "⛽" },
];

export default function CategorySelectPage() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(prev => prev === categoryId ? null : categoryId);
  };

  function handleNavigateHeatmap() {
    navigate("/heatmap");
  }

  return (
    <div className="h-full bg-gray-50 flex flex-col justify-between">
      {/* Main content area - takes remaining space */}
      <div className="flex-1"></div>
        {/* Selected category display */}
        {selectedCategory && (
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600 mb-2">
              {categoryItems.find(item => item.id === selectedCategory)?.label}
            </p>
          </div>
        )}

      <div className="bg-gray-50 w-full h-[40vh] overflow-y-auto p-6">

        {/* Category items */}
        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {categoryItems.map((item) => {
            const isSelected = selectedCategory === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleCategorySelect(item.id)}
                className={`
                  flex items-center gap-2 px-4 py-3 rounded-full font-medium text-sm
                  transition-all duration-150 ease-in-out
                  ${isSelected 
                    ? 'bg-[var(--tertiary)] text-white shadow-md' 
                    : 'bg-white text-gray-700 shadow-sm border border-gray-200 hover:shadow-md'
                  }
                `}
              >
                <span className="text-lg">{item.icon}</span>
                <span className="whitespace-nowrap">{item.label}</span>
                {isSelected && (
                  <svg 
                    className="w-4 h-4 ml-1" 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path 
                      fillRule="evenodd" 
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                      clipRule="evenodd" 
                    />
                  </svg>
                )}
              </button>
            );
          })}
        </div>
        
      </div>

      <PageNavButton onClick={handleNavigateHeatmap}>
        View Heatmap
      </PageNavButton>
    </div>
  );
}
