import React from 'react';
import using from './lib/using';

let NoteView = ({note, trash, update}) =>
  <article className="note-view">
    <nav className="note-view__actions">
      <button className="note-view__actions__trash" onClick={ trash } />
      <span className="note-view__actions__status">
        { note.get('status') || "Saved" }
      </span>
    </nav>
    <input className="note-view__title" onChange={ ({target: {value}}) => update('title', value) } value={note.get('title')} />
    <textarea className="note-view__body" onChange={ ({target: {value}}) => update('body', value) } value={note.get('body')} />
  </article>;

export default using({
  fromState: ['note'],
  fromActions: ['trash', 'update']
})(NoteView)
