import React from 'react';

export default class ActionBar extends React.Component {
  render() {

    return (
      <nav className="action-bar">
        <div className="action-bar__logo" />
        <button className="action-bar__new" onClick={ this.props.add }>+</button>
      </nav>

    );
  }
}
