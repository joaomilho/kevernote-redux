import React from 'react';
import NotePreview from './NotePreview';

export default class NoteList extends React.Component {
  render() {
    let {notes, select, selectedNoteId} = this.props;

    return (
      <aside className="note-list">
        <h2 className="note-list__title">
          Notes
        </h2>
        <div className="note-list__summary">
          { notes.length } { notes.length == 1 ? "note" : "notes" }
        </div>
        <ul className="note-list__container">
          { notes.map(note => <NotePreview key={note.id} select={select} note={note} selected={note.id == selectedNoteId} />)}
        </ul>
      </aside>
    );
  }
}
