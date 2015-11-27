import React from 'react';
import ActionBar from './ActionBar';
import NoteList from './NoteList';
import NoteView from './NoteView';
import { connect } from 'react-redux';
import actions from '../store/actions';
import { bindActionCreators } from 'redux'

class App extends React.Component {

  render() {
    let {
      data: {notes, selectedNoteId},
      actions: {add, select, trash, update}
    } = this.props;
    let selectedNote = notes.filter(note => note.id == selectedNoteId)[0]

    return (
      <main className="app">
        <ActionBar add={ add } />
        <NoteList select={ select } notes={ notes } selectedNoteId={ selectedNoteId } />
        { selectedNote && <NoteView note={ selectedNote } trash={ trash } update={ update } /> }
      </main>
    );
  }
}

export default connect(
  state => ({data: state}),
  dispatch => ({actions: bindActionCreators(actions, dispatch)})
)(App);
