import React, {Component} from 'react';
import {reduxForm} from 'redux-form';

export default class NoteView extends Component {

  updateTitle(event) {
    this.props.update({ update: { title: event.target.value } });
  }

  updateBody(event) {
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
        <input className="note-view__title" onChange={ this.updateTitle.bind(this) } defaultValue={this.props.note.title} />
        <textarea className="note-view__body" onChange={ this.updateBody.bind(this) } defaultValue={this.props.note.body} />
      </article>
    );
  }
}
