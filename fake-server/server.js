const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// POST /community-data endpoint
app.post('/community-data', (req, res) => {
  try {
    const { zipcode, section, field } = req.body;
    
    console.log('Received community data request for zipcode:', zipcode);
    
    // Validate zipcode
    if (!zipcode) {
      return res.status(400).json({
        error: 'Zipcode is required',
        message: 'Please provide a zipcode in the request body'
      });
    }

    // Mock community data response
    const communityData = [
        { lat: 26.376032, lng: -80.122360, val: 1.0}, 
        { lat: 26.35, lng: -80.15, val: 0.4 },        
        { lat: 26.4, lng: -80.1, val: 0.8 },           
        { lat: 26.32, lng: -80.18, val: 0.1 },          
        { lat: 26.38, lng: -80.08, val: 0.9 },          
        { lat: 26.36, lng: -80.14, val: 0.5 },          
        { lat: 26.39, lng: -80.11, val: 0.7 },          
        { lat: 26.33, lng: -80.16, val: 0.3 },          
        { lat: 26.37, lng: -80.13, val: 0.6 },          
        { lat: 26.34, lng: -80.17, val: 0.2 },         
        { lat: 26.41, lng: -80.09, val: 0.85 },       
        { lat: 26.31, lng: -80.19, val: 0.15 },        
      ];

    // Simulate API delay
    setTimeout(() => {
      res.json({
        success: true,
        data: communityData,
        timestamp: new Date().toISOString()
      });
    }, 500);

  } catch (error) {
    console.error('Error processing community data request:', error);
    res.status(500).json({
      error: 'Internal server error',
      message: 'An error occurred while processing your request'
    });
  }
});

// POST /prompt endpoint
app.post('/prompt', (req, res) => {
  try {
    const { zipcode, criteria } = req.body;
    
    console.log('Received AI insight request for zipcode:', zipcode, 'criteria:', criteria);
    
    // Validate required fields
    if (!zipcode || !criteria) {
      return res.status(400).json({
        error: 'Missing required fields',
        message: 'Please provide both zipcode and criteria in the request body'
      });
    }

    // Mock AI insight response
    const aiInsight = {
        content: `Based on the analysis of zipcode ${zipcode}, this area shows ${criteria.toLowerCase()} characteristics. The neighborhood demonstrates strong community engagement and accessibility to essential services.`
      };

    // Simulate API delay
    setTimeout(() => {
      res.json({
        success: true,
        data: aiInsight,
        timestamp: new Date().toISOString()
      });
    }, 800);

  } catch (error) {
    console.error('Error processing AI insight request:', error);
    res.status(500).json({
      error: 'Internal server error',
      message: 'An error occurred while processing your request'
    });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Mock API server running on port ${PORT}`);
  console.log(`📡 Available endpoints:`);
  console.log(`   POST http://localhost:${PORT}/community-data`);
  console.log(`   POST http://localhost:${PORT}/prompt`);
});

module.exports = app;