import { useNavigate } from "react-router";
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


  function handleNavigateHeatmap() {
    navigate("/heatmap");
  }

  return (
    <div className="h-full bg-gray-50 flex flex-col justify-between">
      {/* Main content area - takes remaining space */}
      <div className="flex-1"></div>

      <div className="bg-gray-100 w-full h-[40vh] overflow-y-auto p-4 flex flex-col justify-between items-center">
        <div className="flex flex-wrap gap-3 w-full justify-between items-center">
          {/* Chip Component */}
          <div className="flex flex-wrap gap-3">
            {categoryItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center bg-white rounded-full px-4 py-2 shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200 cursor-pointer hover:bg-gray-50"
              >
                <span className="text-lg mr-2">{item.icon}</span>
                <span className="text-sm font-medium text-gray-700 whitespace-nowrap">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* View Heatmap Button */}
      <button
        onClick={handleNavigateHeatmap}
        className="m-4 bg-blue-500 text-white rounded-full px-4 py-2 shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200 cursor-pointer hover:bg-blue-600"
      >
        View Heatmap
      </button>
    </div>
  );
}
