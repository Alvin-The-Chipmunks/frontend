import type { DataPoint } from "../types";

export const mockCoordinatesB: DataPoint[] = [
  
    // Very low values (0.1-0.2) - Cool colors
    { lat: 26.31, lng: -80.19, val: 0.1 },
    { lat: 26.32, lng: -80.18, val: 0.15 },
    { lat: 26.33, lng: -80.17, val: 0.2 },
    { lat: 26.34, lng: -80.16, val: 0.12 },
    { lat: 26.35, lng: -80.15, val: 0.18 },
    
    // Low values (0.2-0.4) - Cool to medium colors
    { lat: 26.36, lng: -80.14, val: 0.25 },
    { lat: 26.37, lng: -80.13, val: 0.3 },
    { lat: 26.38, lng: -80.12, val: 0.35 },
    { lat: 26.39, lng: -80.11, val: 0.22 },
    { lat: 26.40, lng: -80.10, val: 0.28 },
    
    // Medium values (0.4-0.6) - Yellow/orange colors
    { lat: 26.41, lng: -80.09, val: 0.45 },
    { lat: 26.42, lng: -80.08, val: 0.5 },
    { lat: 26.43, lng: -80.07, val: 0.55 },
    { lat: 26.44, lng: -80.06, val: 0.48 },
    { lat: 26.45, lng: -80.05, val: 0.52 },
    
    // Medium-high values (0.6-0.8) - Orange to red colors
    { lat: 26.46, lng: -80.04, val: 0.65 },
    { lat: 26.47, lng: -80.03, val: 0.7 },
    { lat: 26.48, lng: -80.02, val: 0.75 },
    { lat: 26.49, lng: -80.01, val: 0.68 },
    { lat: 26.50, lng: -80.00, val: 0.72 },
    
    // High values (0.8-1.0) - Hot colors
    { lat: 26.51, lng: -79.99, val: 0.85 },
    { lat: 26.52, lng: -79.98, val: 0.9 },
    { lat: 26.53, lng: -79.97, val: 0.95 },
    { lat: 26.54, lng: -79.96, val: 1.0 },
    { lat: 26.55, lng: -79.95, val: 0.88 },
    
    // Additional scattered points for more coverage
    { lat: 26.25, lng: -80.25, val: 0.05 },  // Very low
    { lat: 26.30, lng: -80.20, val: 0.8 },   // High
    { lat: 26.35, lng: -80.05, val: 0.4 },   // Medium
    { lat: 26.40, lng: -80.30, val: 0.6 },   // Medium-high
    { lat: 26.45, lng: -80.15, val: 0.2 },   // Low
    { lat: 26.50, lng: -80.10, val: 0.9 },   // Very high
    { lat: 26.55, lng: -80.35, val: 0.3 },   // Low-medium
    { lat: 26.60, lng: -80.00, val: 0.7 },   // High
    { lat: 26.65, lng: -80.25, val: 0.1 },   // Very low
    { lat: 26.70, lng: -80.15, val: 0.5 },   // Medium
    
    // Center area with high concentration
    { lat: 26.376032, lng: -80.122360, val: 1.0 },  // Center point - maximum value
    { lat: 26.375, lng: -80.122, val: 0.95 },
    { lat: 26.377, lng: -80.123, val: 0.9 },
    { lat: 26.374, lng: -80.121, val: 0.85 },
    { lat: 26.378, lng: -80.124, val: 0.8 },
    
    // Edge points with varying values
    { lat: 26.20, lng: -80.40, val: 0.15 },
    { lat: 26.80, lng: -80.40, val: 0.25 },
    { lat: 26.20, lng: -79.80, val: 0.35 },
    { lat: 26.80, lng: -79.80, val: 0.45 },
    { lat: 26.50, lng: -80.50, val: 0.55 },
    { lat: 26.50, lng: -79.70, val: 0.65 },
    { lat: 26.10, lng: -80.00, val: 0.75 },
    { lat: 26.90, lng: -80.00, val: 0.85 },

    // Additional 100 data points around center location
    { lat: 26.376032, lng: -80.122360, val: 0.95 },
    { lat: 26.375, lng: -80.121, val: 0.88 },
    { lat: 26.377, lng: -80.123, val: 0.92 },
    { lat: 26.374, lng: -80.120, val: 0.85 },
    { lat: 26.378, lng: -80.124, val: 0.90 },
    { lat: 26.373, lng: -80.119, val: 0.82 },
    { lat: 26.379, lng: -80.125, val: 0.87 },
    { lat: 26.372, lng: -80.118, val: 0.78 },
    { lat: 26.380, lng: -80.126, val: 0.84 },
    { lat: 26.371, lng: -80.117, val: 0.75 },
    
    // North of center
    { lat: 26.385, lng: -80.122, val: 0.65 },
    { lat: 26.390, lng: -80.121, val: 0.58 },
    { lat: 26.395, lng: -80.120, val: 0.52 },
    { lat: 26.400, lng: -80.119, val: 0.45 },
    { lat: 26.405, lng: -80.118, val: 0.38 },
    { lat: 26.410, lng: -80.117, val: 0.32 },
    { lat: 26.415, lng: -80.116, val: 0.28 },
    { lat: 26.420, lng: -80.115, val: 0.24 },
    { lat: 26.425, lng: -80.114, val: 0.20 },
    { lat: 26.430, lng: -80.113, val: 0.18 },
    
    // South of center
    { lat: 26.365, lng: -80.123, val: 0.62 },
    { lat: 26.360, lng: -80.124, val: 0.55 },
    { lat: 26.355, lng: -80.125, val: 0.48 },
    { lat: 26.350, lng: -80.126, val: 0.42 },
    { lat: 26.345, lng: -80.127, val: 0.36 },
    { lat: 26.340, lng: -80.128, val: 0.30 },
    { lat: 26.335, lng: -80.129, val: 0.26 },
    { lat: 26.330, lng: -80.130, val: 0.22 },
    { lat: 26.325, lng: -80.131, val: 0.19 },
    { lat: 26.320, lng: -80.132, val: 0.16 },
    
    // East of center
    { lat: 26.376, lng: -80.115, val: 0.68 },
    { lat: 26.377, lng: -80.110, val: 0.61 },
    { lat: 26.378, lng: -80.105, val: 0.54 },
    { lat: 26.379, lng: -80.100, val: 0.47 },
    { lat: 26.380, lng: -80.095, val: 0.40 },
    { lat: 26.381, lng: -80.090, val: 0.34 },
    { lat: 26.382, lng: -80.085, val: 0.29 },
    { lat: 26.383, lng: -80.080, val: 0.25 },
    { lat: 26.384, lng: -80.075, val: 0.21 },
    { lat: 26.385, lng: -80.070, val: 0.18 },
    
    // West of center
    { lat: 26.375, lng: -80.130, val: 0.66 },
    { lat: 26.374, lng: -80.135, val: 0.59 },
    { lat: 26.373, lng: -80.140, val: 0.52 },
    { lat: 26.372, lng: -80.145, val: 0.45 },
    { lat: 26.371, lng: -80.150, val: 0.39 },
    { lat: 26.370, lng: -80.155, val: 0.33 },
    { lat: 26.369, lng: -80.160, val: 0.28 },
    { lat: 26.368, lng: -80.165, val: 0.24 },
    { lat: 26.367, lng: -80.170, val: 0.20 },
    { lat: 26.366, lng: -80.175, val: 0.17 },
    
    // Northeast quadrant
    { lat: 26.385, lng: -80.115, val: 0.72 },
    { lat: 26.390, lng: -80.110, val: 0.65 },
    { lat: 26.395, lng: -80.105, val: 0.58 },
    { lat: 26.400, lng: -80.100, val: 0.51 },
    { lat: 26.405, lng: -80.095, val: 0.44 },
    { lat: 26.410, lng: -80.090, val: 0.38 },
    { lat: 26.415, lng: -80.085, val: 0.32 },
    { lat: 26.420, lng: -80.080, val: 0.27 },
    { lat: 26.425, lng: -80.075, val: 0.23 },
    { lat: 26.430, lng: -80.070, val: 0.19 },
    
    // Northwest quadrant
    { lat: 26.385, lng: -80.130, val: 0.70 },
    { lat: 26.390, lng: -80.135, val: 0.63 },
    { lat: 26.395, lng: -80.140, val: 0.56 },
    { lat: 26.400, lng: -80.145, val: 0.49 },
    { lat: 26.405, lng: -80.150, val: 0.42 },
    { lat: 26.410, lng: -80.155, val: 0.36 },
    { lat: 26.415, lng: -80.160, val: 0.30 },
    { lat: 26.420, lng: -80.165, val: 0.25 },
    { lat: 26.425, lng: -80.170, val: 0.21 },
    { lat: 26.430, lng: -80.175, val: 0.17 },
    
    // Southeast quadrant
    { lat: 26.365, lng: -80.115, val: 0.68 },
    { lat: 26.360, lng: -80.110, val: 0.61 },
    { lat: 26.355, lng: -80.105, val: 0.54 },
    { lat: 26.350, lng: -80.100, val: 0.47 },
    { lat: 26.345, lng: -80.095, val: 0.40 },
    { lat: 26.340, lng: -80.090, val: 0.34 },
    { lat: 26.335, lng: -80.085, val: 0.28 },
    { lat: 26.330, lng: -80.080, val: 0.24 },
    { lat: 26.325, lng: -80.075, val: 0.20 },
    { lat: 26.320, lng: -80.070, val: 0.17 },
    
    // Southwest quadrant
    { lat: 26.365, lng: -80.130, val: 0.66 },
    { lat: 26.360, lng: -80.135, val: 0.59 },
    { lat: 26.355, lng: -80.140, val: 0.52 },
    { lat: 26.350, lng: -80.145, val: 0.45 },
    { lat: 26.345, lng: -80.150, val: 0.38 },
    { lat: 26.340, lng: -80.155, val: 0.32 },
    { lat: 26.335, lng: -80.160, val: 0.27 },
    { lat: 26.330, lng: -80.165, val: 0.22 },
    { lat: 26.325, lng: -80.170, val: 0.18 },
    { lat: 26.320, lng: -80.175, val: 0.15 },
    
    // Random scattered points with varying values
    { lat: 26.300, lng: -80.200, val: 0.12 },
    { lat: 26.450, lng: -80.050, val: 0.89 },
    { lat: 26.280, lng: -80.180, val: 0.23 },
    { lat: 26.480, lng: -80.080, val: 0.76 },
    { lat: 26.260, lng: -80.160, val: 0.34 },
    { lat: 26.500, lng: -80.110, val: 0.67 },
    { lat: 26.240, lng: -80.140, val: 0.45 },
    { lat: 26.520, lng: -80.140, val: 0.58 },
    { lat: 26.220, lng: -80.120, val: 0.56 },
    { lat: 26.540, lng: -80.170, val: 0.49 },
    { lat: 26.200, lng: -80.100, val: 0.67 },
    { lat: 26.560, lng: -80.200, val: 0.40 },
    { lat: 26.180, lng: -80.080, val: 0.78 },
    { lat: 26.580, lng: -80.230, val: 0.31 },
    { lat: 26.160, lng: -80.060, val: 0.89 },
    { lat: 26.600, lng: -80.260, val: 0.22 },
    { lat: 26.140, lng: -80.040, val: 1.0 },
    { lat: 26.620, lng: -80.290, val: 0.13 },
    { lat: 26.120, lng: -80.020, val: 0.95 },
    { lat: 26.640, lng: -80.320, val: 0.04 },
  ];