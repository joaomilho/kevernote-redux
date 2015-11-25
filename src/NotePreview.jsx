import React from 'react';
import { select } from './actions';

export default class NotePreview extends React.Component {
  formattedBody(){
    let {body} = this.props.note;
    return body.length > 100 ? body.slice(0, 97) + '...' : body;
  }

  render() {
    return (
      <li className={ `note-preview ${this.props.selected ? "is-selected" : ""}` }>
        <a className="note-preview__link" href={ `#notes/${this.props.note.id}` } onClick={() => select(this.props.note.id)}>
          <h2 className="note-preview__title">{ this.props.note.title }</h2>
          <p className="note-preview__body">{ this.formattedBody() }</p>
        </a>
      </li>
    );
  }
}
