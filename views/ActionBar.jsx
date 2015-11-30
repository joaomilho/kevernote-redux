import React from 'react';
import using from './lib/using';

let ActionBar = (props) =>
  <nav className="action-bar">
    <div className="action-bar__logo" />
    <button className="action-bar__new" onClick={ props.add }>+</button>
  </nav>;

export default using({
  fromActions: ['add']
})(ActionBar)
