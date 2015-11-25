import React from 'react';
import { updateTitle, updateBody, trash } from './actions';

export default class NoteView extends React.Component {

  render() {
    return (
      <article className="note-view">
        <nav className="note-view__actions">
          <button className="note-view__actions__trash" onClick={ trash } />
          <span className="note-view__actions__status">
            { this.props.note.status || "Saved" }
          </span>
        </nav>
        <input className="note-view__title" onChange={ ({target: {value}}) => updateTitle(value) } value={this.props.note.title} />
        <textarea className="note-view__body" onChange={ ({target: {value}}) => updateBody(value) } value={this.props.note.body} />
      </article>
    );
  }

}
