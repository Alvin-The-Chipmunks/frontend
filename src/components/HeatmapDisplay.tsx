
import { DeckGL } from "@deck.gl/react";
import { HeatmapLayer } from "@deck.gl/aggregation-layers";
import { Map } from "@vis.gl/react-google-maps";
import type { MapViewState } from "@deck.gl/core";

const DATA_URL =
  "https://raw.githubusercontent.com/visgl/deck.gl-data/master/examples/screen-grid/uber-pickup-locations.json"; // eslint-disable-line

const INITIAL_VIEW_STATE: MapViewState = {
  longitude: -73.75,
  latitude: 40.73,
  zoom: 10,
  maxZoom: 16,
  pitch: 0,
  bearing: 0,
};


type DataPoint = [longitude: number, latitude: number, count: number];

export default function HeatmapDisplay({
  data = DATA_URL,
  intensity = 1,
  threshold = 0.03,
  radiusPixels = 30,
}: {
  data?: string | DataPoint[];
  intensity?: number;
  threshold?: number;
  radiusPixels?: number;
}) {
  const layers = [
    new HeatmapLayer<DataPoint>({
      data,
      id: "heatmap-layer",
      pickable: false,
      getPosition: (d) => [d[0], d[1]],
      getWeight: (d) => d[2],
      radiusPixels,
      intensity,
      threshold,
    }),
  ];

  return (
    <DeckGL
      initialViewState={INITIAL_VIEW_STATE}
      controller={true}
      layers={layers}
    >
      <Map
        reuseMaps
        defaultCenter={{ lng: -80.12236, lat: 26.376032 }}
        defaultZoom={12}
        gestureHandling="greedy"
        disableDefaultUI
      />
    </DeckGL>
  );
}

