import { useNavigate } from "react-router";
import InfoCard from "../components/InfoCard";
import PageNavButton from "../components/PageNavButton";
// import HeatmapDisplay from "../components/HeatmapDisplay";
import HeatmapDisplay from "../components/HeatmapDisplay.mock";
import { aiInsights } from "../data/mock/ai-insights";
import { useState } from "react";

export default function HeatmapPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>(
    "hurricanes" as const
  );

  const navigate = useNavigate();

  function handleNavigateHeatmap() {
    navigate("/insights");
  }

  return (
    <div className="h-full bg-gray-50 flex flex-col justify-between">
      {/* Main content area - takes remaining space */}
      <div className="flex-1 relative">
        <HeatmapDisplay />
      </div>

      <div className="bg-gray-100 w-full h-[22vh] p-4 flex flex-col justify-between items-center">
        <div className="flex flex-wrap gap-3 w-full justify-between items-center">
          <InfoCard
            className="w-full"
            title={selectedCategory.toUpperCase()}
            description={
              aiInsights[
                selectedCategory as keyof typeof aiInsights
              ].summary
            }
            category={
              aiInsights[
                selectedCategory as keyof typeof aiInsights
              ].label
            }
            accentColor="green"
          />
        </div>
      </div>

      {/* View Heatmap Button */}
      <PageNavButton onClick={handleNavigateHeatmap}>Learn More</PageNavButton>
    </div>
  );
}
