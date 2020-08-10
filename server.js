const express = require('express');
const compression = require('compression');
const connectDB = require('./config/db');

const app = express();

require('dotenv').config({
  path: './config/config.env'
});

connectDB();

app.use(compression());
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('API Running'));

// routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
