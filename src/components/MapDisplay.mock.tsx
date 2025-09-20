
import { DeckGL } from "@deck.gl/react";
import { Map } from "@vis.gl/react-google-maps";
import type { MapViewState } from "@deck.gl/core";

const INITIAL_VIEW_STATE: MapViewState = {
  longitude: -73.75,
  latitude: 40.73,
  zoom: 10,
  minZoom: 14,
  maxZoom: 14,
  pitch: 0,
  bearing: 0,
};


export default function MapDisplay() {
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

