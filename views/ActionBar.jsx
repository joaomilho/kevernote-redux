import React from 'react';

import { connect } from 'react-redux';
import actions from '../store/actions';
import { bindActionCreators } from 'redux'

class ActionBar extends React.Component {
  render() {

    return (
      <nav className="action-bar">
        <div className="action-bar__logo" />
        <button className="action-bar__new" onClick={ this.props.add }>+</button>
      </nav>

    );
  }
}

export default connect(
  null,
  dispatch => bindActionCreators({add: actions.add}, dispatch)
)(ActionBar);
