import { createStore, compose, applyMiddleware } from 'redux';
import { devTools } from 'redux-devtools';
import update from './update';
import thunk from 'redux-thunk';

const finalCreateStore = compose(
  applyMiddleware(thunk),
  devTools()
)(createStore);

export default function(data){ return finalCreateStore(update, data); }
