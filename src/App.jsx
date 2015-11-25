import React from 'react';
import ActionBar from './ActionBar';
import NoteList from './NoteList';
import NoteView from './NoteView';
import store from './store';
import { connect } from 'react-redux';

class App extends React.Component {

  selectedNote() {
    return this.props.notes.filter(note => note.id == this.props.selectedNoteId)[0]
  }

  render() {
    return (
      <main className="app">
        <ActionBar />
        <NoteList notes={ this.props.notes } selectedNoteId={ this.props.selectedNoteId } />
        { this.props.selectedNoteId && <NoteView note={ this.selectedNote() } /> }
      </main>
    );
  }
}

export default connect(state => state)(App);
