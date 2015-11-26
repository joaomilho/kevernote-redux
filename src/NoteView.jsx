import React from 'react';

export default class NoteView extends React.Component {

  render() {
    let {trash, update, note: {title, body, status}} = this.props;

    return (
      <article className="note-view">
        <nav className="note-view__actions">
          <button className="note-view__actions__trash" onClick={ trash } />
          <span className="note-view__actions__status">
            { status || "Saved" }
          </span>
        </nav>
        <input className="note-view__title" onChange={ ({target: {value}}) => update({title: value}) } value={title} />
        <textarea className="note-view__body" onChange={ ({target: {value}}) => update({body: value}) } value={body} />
      </article>
    );
  }
}
