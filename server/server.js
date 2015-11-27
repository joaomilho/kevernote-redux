import express from 'express';
import bodyParser from 'body-parser';
import logger from './helpers/logger';
import errorHandler from './helpers/errorHandler';
import api from './api'
import render from './render'

express()
  .use('/static', express.static('static'))
  .use(bodyParser.json())
  .use(logger)
  .use('/api', api)
  .get('/', (req, res) => res.type('html').send(render()))
  .get('/notes/:id', (req, res) => res.type('html').send(render(req.params.id)))
  .use(errorHandler)
  .listen(3000, 'localhost', () => console.log('API listening at http://localhost:3000'));
