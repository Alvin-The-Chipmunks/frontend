import { useNavigate } from "react-router";
import InfoCard from "../components/InfoCard";
import Button from "../components/Button";
import { aiBigInsights } from "../data/mock/ai-insights";
import { useState } from "react";
import { addNewLines, capitalize } from "../utils/common";
import { useInsight } from "../AppRouter";

export default function InsightsPage() {
  //   const navigate = useNavigate();
  const { insight } = useInsight();
  //   const handleViewHeatmap = () => {
  //     navigate("/heatmap");
  //   };

  //   const handleViewMoreInsights = () => {
  //     // Could navigate to a detailed insights page or show more cards
  //     console.log("View more insights");
  //   };

  return (
    <div className="h-full bg-gray-50 flex flex-col p-4 gap-4 overflow-y-auto">
      {/* Page Title */}
      <div className="text-center mb-2">
        <h1 className="text-2xl font-bold text-gray-900 mb-1">
          Neighborhood Insights
        </h1>
        <p className="text-sm text-gray-600">
          Discover what makes this area special
        </p>
      </div>

      {/* Main Insight Card */}
      <div className="flex-1">
        <div
          className={`bg-white mb-8 flex flex-col justify-between rounded-xl shadow-sm border border-gray-100 border-l-4 border-l-green-400 p-6 hover:shadow-lg hover:border-gray-200 transition-all duration-300 group`}
        >
          <div className="flex items-start gap-1 mb-2 flex-col">
            <div className="flex-1">
              <h3
                className={`text-xl font-bold text-gray-900 transition-colors duration-200 mb-2`}
              >
                {capitalize(insight?.category as string || "Hurricanes")}
              </h3>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              {aiBigInsights[insight?.category as keyof typeof aiBigInsights]}
            </p>
          </div>
          <div className="flex gap-3 mt-4">
            <Button onClick={() => {}}>Yes</Button>
            <Button onClick={() => {}} variant="secondary">
              No
            </Button>
          </div>
        </div>

        <div className="text-center mb-2">
          <h1 className="text-2xl font-bold text-gray-900 mb-1">
            More factors to consider
          </h1>
          <p className="text-sm text-gray-600">
            Discover what makes this area special
          </p>
        </div>

        {/* Additional insight cards could go here */}
        <InfoCard
          title="Transportation Access"
          description="Excellent public transit connectivity with 2 metro stations and multiple bus routes within walking distance."
          category="Excellent"
          accentColor="blue"
          className="mb-4"
        />

        <InfoCard
          title="Cost of Living"
          description="The cost of living in this area is very good. Based on the 2020 Cost of Living Index, the cost of living in the United States is 100, this area is 30."
          category="Very Good"
          accentColor="orange"
        />
      </div>

      {/* Action Buttons */}
    </div>
  );
}
