import express from 'express';
import bodyParser from 'body-parser';
import Note from './models/note';
import logger from './logger';
import errorHandler from './errorHandler';

const ok = (fn) => (req, res) => res.sendStatus(fn(req) ? 200 : 500);

import React from 'react';
import AppContainer from '../src/AppContainer';
//AppState = require('./server/AppState.js');
//const index = '<!DOCTYPE html><html><head></head><body>{{component}}</body></html>';
import fs from 'fs';

const index = fs.readFileSync('index.html', {encoding: 'utf-8'});

express()
  .use('/static', express.static('static'))
  .use(bodyParser.urlencoded({ extended: false }))
  .use(logger)
  .get('/', (req, res) => {

    const notes = Note.all()
    const initialState = {
      notes: notes,
      selectedNoteId: notes[0] ? notes[0].id : null,
      uid: Math.max(notes.map(note => note.id))
    };

    let componentHtml = React.renderToString(<AppContainer />);
    let html = index.replace('{{component}}', componentHtml);
    res.type('html').send(html);
  })
  .get('/notes', (_, res) => res.json(Note.all()))
  .post('/notes', ok(req => Note.create(req.body)))
  .delete('/notes/:id', ok(req => Note.delete(req.params.id)))
  .patch('/notes/:id', ok(req => Note.update(req.params.id, req.body)))
  .use(errorHandler)
  .listen(3000, 'localhost', () => console.log('API listening at http://localhost:3000'));
