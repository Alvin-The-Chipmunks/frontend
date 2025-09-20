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
import { useState, createContext, useContext } from "react";

// Insight type definition
export interface Insight {
  category: string;
  content: string;
}

// Create a context for zipcode state
const ZipcodeContext = createContext<{
  zipcode: string;
  setZipcode: (zipcode: string) => void;
}>({
  zipcode: "33166",
  setZipcode: () => {},
});

// Create a context for insight state
const InsightContext = createContext<{
  insight: Insight | null;
  setInsight: (insight: Insight | null) => void;
}>({
  insight: null,
  setInsight: () => {},
});

// Custom hooks to use contexts
export const useZipcode = () => useContext(ZipcodeContext);
export const useInsight = () => useContext(InsightContext);

function AppLayout() {
  const location = useLocation();
  const isCategorySelect = location.pathname === "/home";
  const { setZipcode } = useZipcode();
  
  return (
    <div className="h-screen flex flex-col">
      <Header 
        setZipcode={setZipcode}
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
  const [zipcode, setZipcode] = useState<string>("33166");
  const [insight, setInsight] = useState<Insight | null>(null);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={
        <ZipcodeContext.Provider value={{ zipcode, setZipcode }}>
          <InsightContext.Provider value={{ insight, setInsight }}>
            <AppLayout />
          </InsightContext.Provider>
        </ZipcodeContext.Provider>
      }>
        <Route index element={<Navigate to="/home" replace />} />
        <Route path="home" element={<CategorySelectPage />} />
        <Route path="heatmap" element={<HeatmapPage />} />
        <Route path="insights" element={<InsightsPage />} />
      </Route>
    )
  );
  
  return <RouterProvider router={router} />;
}
