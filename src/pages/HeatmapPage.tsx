import { useNavigate } from "react-router";
import InfoCard from "../components/InfoCard";
import PageNavButton from "../components/PageNavButton";
import HeatmapDisplay from "../components/HeatmapDisplay";

export default function HeatmapPage() {
  const navigate = useNavigate();

  function handleNavigateHeatmap() {
    navigate("/insights");
  }

  return (
    <div className="h-full bg-gray-50 flex flex-col justify-between">
      {/* Main content area - takes remaining space */}
      <div className="flex-1 relative">
        <HeatmapDisplay  />
      </div>

      <div className="bg-gray-100 w-full h-[22vh] p-4 flex flex-col justify-between items-center">
        <div className="flex flex-wrap gap-3 w-full justify-between items-center">
          <InfoCard 
          className="w-full"    
            title="Pet Friendliness"
            description="This area offers good pet amenities with 3 dog parks within 2 miles and pet-friendly businesses nearby."
            category="Great!"
            accentColor="green"
          />
        </div>
      </div>

      {/* View Heatmap Button */}
      <PageNavButton
        onClick={handleNavigateHeatmap}
      >
        Learn More
      </PageNavButton>
    </div>
  );
}
