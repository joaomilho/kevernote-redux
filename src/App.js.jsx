import React from 'react';
import ActionBar from './ActionBar';
import NoteList from './NoteList';
import NoteView from './NoteView';
import store from './store';
import { connect } from 'react-redux';

class App extends React.Component {

  add() {
    store.dispatch({ type: 'ADD' });
  }

  delete() {
    store.dispatch({ type: 'DELETE' });
  }

  select(id) {
    store.dispatch({ type: 'SELECT', id: id });
  }

  update(data) {
    store.dispatch({ type: 'UPDATE', ...data });
  }

  selectedNote() {
    for(let note of this.props.notes)
      if(note.id == this.props.selectedNoteId)
        return note;
  }

  render() {
    const selectedNote = this.selectedNote();
    return (
      <main className="app">
        <ActionBar
          add={ this.add } />
        <NoteList
          notes={ this.props.notes }
          selectedNoteId={ this.props.selectedNoteId }
          select={ this.select } />
        { selectedNote ? <NoteView
            delete={ this.delete }
            update={ this.update }
            note={ selectedNote } /> : null }
      </main>
    );
  }
}

export default connect(state => state)(App);
