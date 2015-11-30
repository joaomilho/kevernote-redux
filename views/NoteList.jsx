import React from 'react';
import NotePreview from './NotePreview';
import using from './lib/using';

let pluralize = (count, singular, plural) =>
  `${count} ${count == 1 ? singular : plural}`

let NoteList = ({notes, selectedIdx, select}) =>
  <aside className="note-list">
    <h2 className="note-list__title">
      Notes
    </h2>
    <div className="note-list__summary">
      { pluralize(notes.size, 'note', 'notes') }
    </div>
    <ul className="note-list__container">
      { notes.map((note, idx) =>
          <NotePreview key={idx} note={note} selected={idx == selectedIdx} select={() => select(idx)} />) }
    </ul>
  </aside>;

export default using({
  fromState: ['notes', 'selectedIdx'],
  fromActions: ['select']
})(NoteList)
