import React from 'react';
import NotePreview from './NotePreview';

import { connect } from 'react-redux';
import actions from '../store/actions';
import { bindActionCreators } from 'redux'

class NoteList extends React.Component {
  render() {
    const {notes, selected, select} = this.props;
    return (
      <aside className="note-list">
        <h2 className="note-list__title">
          Notes
        </h2>
        <div className="note-list__summary">
          { notes.size } { notes.size == 1 ? "note" : "notes" }
        </div>
        <ul className="note-list__container">
          { notes.map((note, idx) => <NotePreview key={idx} note={note} selected={idx == selected} select={() => select(idx)} />) }
        </ul>
      </aside>
    );
  }
}

export default connect(
  state => ({notes: state.get('notes'), selected: state.get('selected')}),
  dispatch => bindActionCreators({select: actions.select}, dispatch)
)(NoteList);
