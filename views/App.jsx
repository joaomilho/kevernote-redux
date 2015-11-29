import React from 'react';
import ActionBar from './ActionBar';
import NoteList from './NoteList';
import NoteView from './NoteView';
import { connect } from 'react-redux';
import actions from '../store/actions';
import { bindActionCreators } from 'redux'

export default class App extends React.Component {

  render() {
    return (
      <main className="app">
        <ActionBar />
        <NoteList />
        <NoteView />
      </main>
    );
  }
}
