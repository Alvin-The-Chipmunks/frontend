import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
  useLocation,
  Outlet,
} from "react-router";
import CategorySelectPage from "./pages/CategorySelectPage";
import HeatmapPage from "./pages/HeatmapPage";
import InsightsPage from "./pages/InsightsPage";
import Header from "./components/Header";

function AppLayout() {
  const location = useLocation();
  const isCategorySelect = location.pathname === "/home";
  
  return (
    <div className="h-screen flex flex-col">
      <Header 
        withLogo={isCategorySelect} 
        withBackButton={!isCategorySelect} 
      />
      <div className="flex-1 overflow-hidden">
        <Outlet />
      </div>
    </div>
  );
}

export default function AppRouter() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Navigate to="/home" replace />} />
        <Route path="home" element={<CategorySelectPage />} />
        <Route path="heatmap" element={<HeatmapPage />} />
        <Route path="insights" element={<InsightsPage />} />
      </Route>
    )
  );
  
  return <RouterProvider router={router} />;
}
