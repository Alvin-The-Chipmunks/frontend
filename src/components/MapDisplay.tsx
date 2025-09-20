
// https://deck.gl/examples/screen-grid-layer

// create matrix

// 


import { DeckGL } from "@deck.gl/react";
import { Map } from "@vis.gl/react-google-maps";
import type { MapViewState } from "@deck.gl/core";

const INITIAL_VIEW_STATE: MapViewState = {
  longitude: -73.75,
  latitude: 40.73,
  zoom: 9,
  maxZoom: 16,
  pitch: 0,
  bearing: 0,
};

const MAP_STYLE =
  "https://basemaps.cartocdn.com/gl/dark-matter-nolabels-gl-style/style.json";


export default function MapDisplay({
  mapStyle = MAP_STYLE,
}: {
  mapStyle?: string;
}) {
  return (
    <DeckGL
      initialViewState={INITIAL_VIEW_STATE}
      controller={true}
    >
      <Map
        reuseMaps
        defaultCenter={{ lng: -80.12236, lat: 26.376032 }}
        defaultZoom={10}
        gestureHandling="greedy"
        disableDefaultUI
      />
    </DeckGL>
  );
}

