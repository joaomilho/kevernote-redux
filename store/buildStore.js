import { createStore, compose, applyMiddleware } from 'redux';
import { devTools } from 'redux-devtools';
import reducer from './reducer';
import thunk from 'redux-thunk';

const finalCreateStore = compose(
  applyMiddleware(thunk),
  devTools()
)(createStore);

export default function(data){ return finalCreateStore(reducer, data); }
