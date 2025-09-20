import { useState } from "react";
import { useNavigate } from "react-router";
import PageNavButton from "../components/PageNavButton";
import { getAiInsight } from "../api/openai";
// import MapDisplay from "../components/MapDisplay";
import MapDisplay from "../components/MapDisplay.mock";
// import { getCommunityData } from "../api/attom";
import { useZipcode } from "../AppRouter";
import { useInsight } from "../AppRouter";
// order these to where they make sense on a page
const categoryItems = [
  { id: "hurricanes", label: "Hurricanes", icon: "🌪️" },
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
  const { zipcode } = useZipcode();
  const { setInsight } = useInsight();

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory((prev) => (prev === categoryId ? null : categoryId));
  };

  async function handleNavigateHeatmap() {
    // const communityData = await getCommunityData(zipcode);
    // console.log("Community data: ", communityData);
    const aiInsight = await getAiInsight(zipcode, selectedCategory as string);
    
    setInsight({ category: selectedCategory as string, content: aiInsight?.data?.content });

    console.log("Ai insight: ", aiInsight);
    navigate("/heatmap");

  }

  return (
    <div className="h-full bg-gray-50 flex flex-col justify-between">
      {/* Main content area - takes remaining space */}
      <div className="flex-1 relative">
        <MapDisplay />

        {/* Location indicator overlay */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
          {/* Transparent circle showing radius */}
          <div className="w-96 h-96 border-2 border-[var(--secondary)]/60 rounded-full relative">
            {/* Center reticule */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              {/* Fun location pin */}
              <div className="relative">
                {/* Outer ring */}
                <div className="w-6 h-6 border-2 border-[var(--secondary)] rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                {/* Inner dot with pulse effect */}
                <div className="w-3 h-3 bg-[var(--secondary)] rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
                {/* Decorative sparkles */}
                <div className="absolute -top-2 -right-2 w-1 h-1 bg-[var(--secondary)] rounded-full animate-ping"></div>
                <div
                  className="absolute -bottom-2 -left-2 w-1 h-1 bg-[var(--secondary)] rounded-full animate-ping"
                  style={{ animationDelay: "0.5s" }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Selected category display overlay */}
        {selectedCategory && (
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-10">
            <div className="bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2 shadow-lg border border-gray-200">
              <p className="text-sm font-medium text-gray-800">
                {
                  categoryItems.find((item) => item.id === selectedCategory)
                    ?.label
                }
              </p>
            </div>
          </div>
        )}
      </div>

      <div className="bg-gray-50 w-full h-[30vh] overflow-y-auto p-6">
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
                  ${
                    isSelected
                      ? "bg-[var(--tertiary)] text-white shadow-md"
                      : "bg-white text-gray-700 shadow-sm border border-gray-200 hover:shadow-md"
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
