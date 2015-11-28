import React from 'react';
import AppContainer from '../views/AppContainer';
import fs from 'fs';
import buildStore from '../store/buildStore';
import Note from './models/note';

const index = fs.readFileSync('index.html', {encoding: 'utf-8'});

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
    .replace(/(window\.initialState = )(initialState)/, "$1" + JSON.stringify(store.getState()));
  return html;
}
