import React from 'react';

export default class NotePreview extends React.Component {
  render() {
    let body = this.props.note.body;
    body = body.length > 100 ? body.slice(0, 97) + '...' : body;

    return (
      <li className={ `note-preview ${this.props.selected ? "is-selected" : ""}` }>
        <a className="note-preview__link" href={ `#notes/${this.props.note.id}` } onClick={() => this.props.select(this.props.note.id)}>
          <h2 className="note-preview__title">{ this.props.note.title }</h2>
          <p className="note-preview__body">{ body }</p>
        </a>
      </li>
    );
  }
}
