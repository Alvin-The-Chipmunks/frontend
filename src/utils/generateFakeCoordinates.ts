



import type { DataPoint } from "../types";

export function generateFakeCoordinates({lat, lng, size}: {lat: number, lng: number, size: number}): DataPoint[] {
    const coordinates: DataPoint[] = [];
    const step = 0.0001; // Distance between points
    
    // Calculate the grid dimensions
    const gridSize = Math.ceil(Math.sqrt(size));
    const halfGrid = Math.floor(gridSize / 2);
    
    // Generate points in a square grid pattern
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            // Stop if we've reached the desired size
            if (coordinates.length >= size) break;
            
            // Calculate offset from center
            const latOffset = (i - halfGrid) * step;
            const lngOffset = (j - halfGrid) * step;
            
            // Generate random value between 0.1 and 1.0
            const val = Math.random() * 0.9 + 0.1;
            
            coordinates.push({
                lat: lat + latOffset,
                lng: lng + lngOffset,
                val: val
            });
        }
        // Break outer loop if we've reached the desired size
        if (coordinates.length >= size) break;
    }
    
    return coordinates;
}