import express from 'express';
import Note from './models/note';

const ok = (fn) => (req, res) => res.sendStatus(fn(req) ? 200 : 500);

export default express()
  .get('/notes', (_, res) => res.json(Note.all()))
  .post('/notes', ok(req => Note.create(req.body)))
  .delete('/notes/:id', ok(req => Note.delete(req.params.id)))
  .put('/notes/:id', ok(req => Note.update(req.params.id, req.body)))
