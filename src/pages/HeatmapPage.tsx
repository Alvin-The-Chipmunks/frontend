import { useNavigate } from "react-router";
import InfoCard from "../components/InfoCard";
import PageNavButton from "../components/PageNavButton";
// import HeatmapDisplay from "../components/HeatmapDisplay";
import HeatmapDisplay from "../components/HeatmapDisplay.mock";
import { useInsight } from "../AppRouter";
import { capitalize } from "../utils/common";

export default function HeatmapPage() {

  const navigate = useNavigate();
  const { insight } = useInsight();

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
            title={capitalize(insight?.category as string)}
            description={
                insight?.content as string
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
