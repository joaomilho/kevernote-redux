import React from 'react';
import { add } from './actions';

export default class ActionBar extends React.Component {
  render() {
    return (
      <nav className="action-bar">
        <div className="action-bar__logo" />
        <button className="action-bar__new" onClick={ add }>+</button>
      </nav>
    );
  }
}
