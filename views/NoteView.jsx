import React from 'react';

import { connect } from 'react-redux';
import actions from '../store/actions';
import { bindActionCreators } from 'redux'

class NoteView extends React.Component {

  render() {
    let {title, body, status} = this.props.note;
    let {update, trash} = this.props;

    return (
      <article className="note-view">
        <nav className="note-view__actions">
          <button className="note-view__actions__trash" onClick={ trash } />
          <span className="note-view__actions__status">
            { status || "Saved" }
          </span>
        </nav>
        <input className="note-view__title" onChange={ ({target: {value}}) => update('title', value) } value={title} />
        <textarea className="note-view__body" onChange={ ({target: {value}}) => update('body', value) } value={body} />
      </article>
    );
  }
}

export default connect(
  state =>
    ({note: state.getIn(['notes', state.get('selected')]).toJS()})
  ,
  dispatch => bindActionCreators({update: actions.update, trash: actions.trash}, dispatch)
)(NoteView);
