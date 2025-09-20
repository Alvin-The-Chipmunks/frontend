import './App.css'
import { Map, useMap, useMapsLibrary } from "@vis.gl/react-google-maps";
import { useEffect, useMemo } from "react";
import { mockCoordinates } from "./data/mockCoordinates";
type DataPoint = {
  lat: number;
  lng: number;
  val: number;
};

type HeatmapProps = {
  data: DataPoint[];
  radius?: number;
  opacity?: number;
};

function HeatmapLayer({ data, radius = 20, opacity = 0.6 }: HeatmapProps) {
  const map = useMap();
  const visualization = useMapsLibrary('visualization');

  // Convert data points to WeightedLocation objects for value-based coloring
  const heatmapData = useMemo(() => {
    if (!window.google?.maps || !data.length) return [];
    
    return data.map(point => ({
      location: new google.maps.LatLng(point.lat, point.lng),
      weight: point.val
    }));
  }, [data]);

  const heatmap = useMemo(() => {
    if (!visualization || !heatmapData.length) return null;
    return new visualization.HeatmapLayer({
      data: heatmapData,
      map,
      radius,
      opacity,
    });
  }, [visualization, heatmapData, map, radius, opacity]);

  useEffect(() => {
    if (heatmap) {
      heatmap.setMap(map);
    }
    return () => {
      if (heatmap) {
        heatmap.setMap(null);
      }
    };
  }, [heatmap, map]);

  return null;
};

function App() {
  console.log(import.meta.env.VITE_GOOGLE_MAPS_API_KEY);

  
  return (
    <>
      <Map
        style={{ width: "100vw", height: "100vh" }}
        defaultCenter={{ lng: -80.122360, lat: 26.376032}}
        defaultZoom={10}
        gestureHandling="greedy"
        disableDefaultUI
      >
        <HeatmapLayer
          data={mockCoordinates}
          radius={0.5}
          opacity={0.3}
        />
      </Map>
    </>
  );
}

export default App
