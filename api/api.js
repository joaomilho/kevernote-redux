import express from 'express';
import bodyParser from 'body-parser';
import Note from './models/note';
import logger from './logger';
import errorHandler from './errorHandler';

const ok = (fn) => (req, res) => res.sendStatus(fn(req) ? 200 : 500);

import React from 'react';
import AppContainer from '../src/AppContainer';
import fs from 'fs';
import buildStore from '../src/store';

const index = fs.readFileSync('index.html', {encoding: 'utf-8'});

const api = express()
  .get('/notes', (_, res) => res.json(Note.all()))
  .post('/notes', ok(req => Note.create(req.body)))
  .delete('/notes/:id', ok(req => Note.delete(req.params.id)))
  .put('/notes/:id', ok(req => Note.update(req.params.id, req.body)))


function render(id = null) {
  const notes = Note.all()
  const uid = notes[0] ? notes[0].id : null;
  const initialState = {
    notes: notes,
    selectedNoteId: id || uid,
    uid: uid
  };

  let store = buildStore(initialState);
  let componentHtml = React.renderToString(<AppContainer store={store}/>);
  let html = index
    .replace('{{component}}', componentHtml)
    .replace('{{initialState}}', JSON.stringify(store.getState()));
  return html;
}

express()
  .use('/static', express.static('static'))
  .use(bodyParser.json())
  .use(logger)
  .use('/api', api)
  .get('/', (req, res) => res.type('html').send(render()))
  .get('/notes/:id', (req, res) => res.type('html').send(render(req.params.id)))
  .use(errorHandler)
  .listen(3000, 'localhost', () => console.log('API listening at http://localhost:3000'));
