const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');  // Import CORS
const connectDB = require('./config/db');

// Load environment variables
dotenv.config();

// Connect to the database
connectDB();

const app = express();

// Enable CORS
app.use(cors({ origin: '*' })); 

// Middleware
app.use(bodyParser.json());

// Routes
const requestRoutes = require('./routes/requestRoute.js');
const userRoutes = require('./routes/userRoute.js');
const vendorRoutes = require('./routes/vendorRoutes.js');

app.use('/api/users', userRoutes);
app.use('/api/requests', requestRoutes);
app.use('/api/vendors',vendorRoutes);
const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
