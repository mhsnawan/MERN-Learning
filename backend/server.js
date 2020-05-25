const express = require('express');
const connectDB = require('./config/db');
const app = express();
connectDB();
const PORT = process.env.PORT || 5000;
app.get('/', (req, res) => {
    res.send(`Server is running on Port ${PORT}`);
});
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));