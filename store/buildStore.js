import { createStore, compose, applyMiddleware } from 'redux';
import reducer from './reducer';
import thunk from 'redux-thunk';

const finalCreateStore = compose(
  applyMiddleware(thunk),
)(createStore);

export default function(data){ return finalCreateStore(reducer, data); }
