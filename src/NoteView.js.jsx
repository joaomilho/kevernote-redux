import React from 'react';

export default class NoteView extends React.Component {

  updateTitle(event) {
    this.props.update({ update: { title: event.target.value } });
  }

  updateBody() {
    this.props.update({ update: { body: event.target.value } });
  }

  render() {
    return (
      <article className="note-view">
        <nav className="note-view__actions">
          <button className="note-view__actions__trash" onClick={ this.props.delete } />
          <span className="note-view__actions__status">
            { this.props.note.status || "Saved" }
          </span>
        </nav>
        <input className="note-view__title" onChange={ this.updateTitle.bind(this) } value={this.props.note.title} />
        <textarea className="note-view__body" onChange={ this.updateBody.bind(this) } value={this.props.note.body} />
      </article>
    );
  }
}
