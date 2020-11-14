const express = require('express');
const path = require('path');
const compression = require('compression');
const morgan = require('morgan');
const connectDB = require('./config/db');

const app = express();

require('dotenv').config({
  path: './config/config.env'
});

connectDB();

app.use(compression());
app.use(express.json());

if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'));
}

const apiRoutes = require('./routes/api/root.route');
app.use('/api', apiRoutes);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client/build', 'index.html'))
  );
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
