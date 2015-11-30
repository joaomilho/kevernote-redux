import React from 'react';
import ActionBar from './ActionBar';
import NoteList from './NoteList';
import NoteView from './NoteView';

const App = () =>
  <main className="app">
    <ActionBar />
    <NoteList />
    <NoteView />
  </main>;

export default App;
