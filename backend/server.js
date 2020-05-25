const express = require('express');
const connectDB = require('./config/db');
const app = express();
connectDB();
const PORT = process.env.PORT || 8000;
app.get('/', (req, res) => {
    res.send(`Server is running on Port ${PORT}`);
});

//Define routes
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/users', require('./routes/api/users'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));


app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));