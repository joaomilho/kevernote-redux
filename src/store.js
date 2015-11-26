import { createStore, compose } from 'redux';
import { devTools } from 'redux-devtools';
import update from './update';

const finalCreateStore = compose(devTools())(createStore);

export default function buildStore(data){
  console.log("BUILDING STORE WITH", data);
  return finalCreateStore(update, data);
}
