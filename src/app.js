const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const apiRoutes = require('./routes/api');
require('dotenv').config(); 


const app = express();
const bodyParser = require('body-parser');

app.use(cors());
app.use(express.json());
//
// Increase payload size limit
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));


mongoose.connect('mongodb+srv://rohitrajthakur10:lLvwbxCkFAusPB65@cluster0.gpw3lky.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(error => console.error('Error connecting to MongoDB:', error));


// Routes
app.use('/api', apiRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
