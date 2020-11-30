const express = require('express');

const app = express();
const config = require('./src/configs/app');

// Express Configs
require('./src/configs/express')(app);

// Middleware
require('./src/configs/middleware');

// Routes
app.use(require('./src/routes'));

// Error Handler
require('./src/configs/errorHandler')(config.isProduction, app);

// Start Server
const server = app.listen(config.port, () => {
  const { port } = server.address();
  console.log(`Server is running at http://localhost:${port}`);
});
