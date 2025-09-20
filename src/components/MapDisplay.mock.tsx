
import { DeckGL } from "@deck.gl/react";
import { Map } from "@vis.gl/react-google-maps";
import type { MapViewState } from "@deck.gl/core";
import { COORDINATES } from "../data/constants";
import { useState, useEffect } from "react";
import { useZipcode } from "../AppRouter";






export default function MapDisplay() {
  const { zipcode } = useZipcode();
  const [viewState, setViewState] = useState<MapViewState>({
    longitude: COORDINATES[zipcode as keyof typeof COORDINATES]?.lng || -80.1300,
    latitude: COORDINATES[zipcode as keyof typeof COORDINATES]?.lat || 25.7907,
    zoom: 14,
    minZoom: 14,
    maxZoom: 14,
    pitch: 0,
    bearing: 0,
  });

  useEffect(() => {
    if (zipcode) {
      const coordinates = COORDINATES[zipcode as keyof typeof COORDINATES];
      if (coordinates) {
        setViewState(prev => ({
          ...prev,
          longitude: coordinates.lng,
          latitude: coordinates.lat,
        }));
      }
    }
  }, [zipcode]);

  return (
    <DeckGL
      viewState={viewState}
      onViewStateChange={({ viewState }) => setViewState(viewState as MapViewState)}
      controller={true}
    >
      <Map
        reuseMaps
        center={{ lng: viewState.longitude, lat: viewState.latitude }}
        zoom={viewState.zoom}
        gestureHandling="greedy"
        disableDefaultUI
      />
    </DeckGL>
  );
}

