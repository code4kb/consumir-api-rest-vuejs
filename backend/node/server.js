const express = require('express');
const cors = require('cors');
const app = express();

// Init middleware
app.use(express.json({extended:false}));

// TODO: Create an implementation to configure cors in the startup
var corsOptions = {
    origin: 'http://localhost:8080',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

// Define routes
app.use('/api', cors(corsOptions), require('./routes/api/users'));

// Start server
const PORT = process.env.PORT || 5001  
app.listen(PORT, (req, res) => console.log(`Server started on port ${PORT}`));
