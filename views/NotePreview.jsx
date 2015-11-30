import React from 'react';

let formattedBody = (body) =>
  body.length > 100 ? body.slice(0, 97) + '...' : body;

let NotePreview = ({select, selected, note}) =>
  <li className={ `note-preview ${selected ? "is-selected" : ""}` }>
    <a className="note-preview__link" href="#" onClick={ select }>
      <h2 className="note-preview__title">{ note.get('title') }</h2>
      <p className="note-preview__body">{ formattedBody(note.get('body')) }</p>
    </a>
  </li>;

export default NotePreview;
