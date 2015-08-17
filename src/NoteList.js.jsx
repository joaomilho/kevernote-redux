import React from 'react';
import NotePreview from './NotePreview';

export default class NoteList extends React.Component {
  render() {
    return (
      <aside className="note-list">
        <h2 className="note-list__title">
          Notes
        </h2>
        <div className="note-list__summary">
          { this.props.notes.length } { this.props.notes.length == 1 ? "note" : "notes" }
        </div>
        <ul className="note-list__container">
          {this.props.notes.map(note => <NotePreview key={note.id} select={this.props.select} note={note} selected={this.props.selectedNoteId && note.id == this.props.selectedNoteId} />)}
        </ul>
      </aside>
    );
  }
};
