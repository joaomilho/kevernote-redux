import React from 'react';

export default class NotePreview extends React.Component {

  render() {
    let {select, selected, note} = this.props;
    let title = note.get('title');
    let body = note.get('body');
    let formattedBody = body.length > 100 ? body.slice(0, 97) + '...' : body;

    return (
      <li className={ `note-preview ${this.props.selected ? "is-selected" : ""}` }>
        <a className="note-preview__link" href="#" onClick={select}>
          <h2 className="note-preview__title">{ title }</h2>
          <p className="note-preview__body">{ formattedBody }</p>
        </a>
      </li>
    );
  }
}
