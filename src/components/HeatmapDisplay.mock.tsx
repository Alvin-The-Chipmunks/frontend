import { DeckGL } from "@deck.gl/react";
import { BitmapLayer } from "@deck.gl/layers";
import { Map } from "@vis.gl/react-google-maps";
import type { MapViewState, Position } from "@deck.gl/core";

const INITIAL_VIEW_STATE: MapViewState = {
  longitude: -73.75,
  latitude: 40.73,
  zoom: 10,
  maxZoom: 14,
  minZoom: 14,
  pitch: 0,
  bearing: 0,
};

// Define the geographic bounds for the heatmap image
// Format: [SW, SE, NE, NW] - 4 corners in clockwise order
// These bounds should match the map restriction bounds exactly
const HEATMAP_BOUNDS = [
  [-74.1, 40.5], // Southwest corner [lng, lat]
  [-73.4, 40.5], // Southeast corner [lng, lat]
  [-73.4, 41.0], // Northeast corner [lng, lat]
  [-74.1, 41.0]  // Northwest corner [lng, lat]
];

// Map restriction bounds - should match HEATMAP_BOUNDS
const MAP_BOUNDS = {
  north: 41.0,   // Northern boundary
  south: 40.5,   // Southern boundary
  east: -73.4,   // Eastern boundary
  west: -74.1,   // Western boundary
};

export default function HeatmapDisplay() {
  const layers = [
    new BitmapLayer({
      id: "heatmap-overlay",
      image: "/heatmap.jpg",
      bounds: HEATMAP_BOUNDS as [Position, Position, Position, Position],
      opacity: 0.3,
      blendMode: 'multiply',
    }),
  ];

  return (
    <DeckGL
      initialViewState={INITIAL_VIEW_STATE}
      controller={{
        scrollZoom: true,
        dragPan: true,
        dragRotate: false,
        doubleClickZoom: true,
        touchZoom: true,
        touchRotate: false,
        keyboard: true,
      }}
      layers={layers}
    >
      <Map
        reuseMaps
        defaultCenter={{ lng: -73.75, lat: 40.73 }}
        defaultZoom={10}
        gestureHandling="greedy"
        disableDefaultUI
         restriction={{
           latLngBounds: MAP_BOUNDS,
           strictBounds: true,
         }}
        minZoom={8}
        maxZoom={16}
      />
    </DeckGL>
  );
}
