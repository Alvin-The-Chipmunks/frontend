import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router";
import CategorySelectPage from "./pages/CategorySelectPage";
import HeatmapPage from "./pages/HeatmapPage";
import InsightsPage from "./pages/InsightsPage";
import Header from "./components/Header";

export default function AppRouter() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Navigate to="/category-select" replace />} />
        <Route path="category-select" element={<CategorySelectPage />} />
        <Route path="heatmap" element={<HeatmapPage />} />
        <Route path="insights" element={<InsightsPage />} />
      </>
    )
  );
  
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <div className="flex-1 overflow-hidden">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}
