import { useNavigate } from "react-router";
import InfoCard from "../components/InfoCard";

export default function HeatmapPage() {
  const navigate = useNavigate();


  function handleNavigateHeatmap() {
    navigate("/heatmap");
  }

  return (
    <div className="h-full bg-gray-50 flex flex-col justify-between">
      {/* Main content area - takes remaining space */}
      <div className="flex-1"></div>

      <div className="bg-gray-100 w-full h-[22vh] p-4 flex flex-col justify-between items-center">
        <div className="flex flex-wrap gap-3 w-full justify-between items-center">
          <InfoCard 
          className="w-full"    
            title="Pet Friendly"
            description="This area offers good pet amenities with 3 dog parks within 2 miles and pet-friendly businesses nearby."
            category="Amenities"
            accentColor="blue"
          />
        </div>
      </div>

      {/* View Heatmap Button */}
      <button
        onClick={handleNavigateHeatmap}
        className="m-4 bg-blue-500 text-white rounded-full px-4 py-2 shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200 cursor-pointer hover:bg-blue-600"
      >
        Learn More
      </button>
    </div>
  );
}
