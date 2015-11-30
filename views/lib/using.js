import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import actions from '../../store/actions';

const hasheify = (list, fn) => {
  return list.reduce((hash, key) => {
    hash[key] = fn(key);
    return hash;
  }, {});
}

export default function using({fromState, fromActions}){
  if(!fromState) fromState = [];
  if(!fromActions) fromActions = [];

  return connect(
    state => hasheify(fromState, (key) => (key == 'note' ? state.getIn(['notes', state.get('selected')]) : state.get(key))),
    dispatch => bindActionCreators(hasheify(fromActions, (key) => actions[key]), dispatch)
  )
}
