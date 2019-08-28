const express = require('express');
const http = require('http');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const colors = require('colors');
const fs = require('fs');

require('dotenv').config();

const setupRoutes = require('./routes.js');

const CORS_OPTIONS = {
  origin: '*',
  preflightContinue: false,
  optionsSuccessStatus: 200
};

class ExpressServer {
  constructor() {
    this.port = 1337;
    this.server = express();
    this.http = http.createServer(this.server);

    this.setupLogging();
    this.setupCors();
    this.setupBodyParser();

    setupRoutes(this.server, this.appMgmt);

    this.server.listen(this.port);
    console.log(colors.blue(`Serving on port ${this.port}`));
  }

  setupLogging() {
    const logFile = fs.createWriteStream('./server.log', { flags: 'a' });
    this.server.use(morgan('combined', { stream: logFile }));
  }

  setupCors() {
    this.server.use(cors(CORS_OPTIONS));
  }

  setupBodyParser() {
    this.server.use(bodyParser.json());
    this.server.use(bodyParser.urlencoded({
      extended: true
    }));
  }
}

return new ExpressServer();
