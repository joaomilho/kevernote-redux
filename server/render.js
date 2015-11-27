import React from 'react';
import AppContainer from '../src/AppContainer';
import fs from 'fs';
import buildStore from '../src/store';
import Note from './models/note';

const index = fs.readFileSync('server/index.html', {encoding: 'utf-8'});

export default function render(id = null) {
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
