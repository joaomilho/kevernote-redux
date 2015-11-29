import buildStore from '../store/buildStore';
import Immutable from 'immutable';

export default buildStore(Immutable.fromJS(window.initialState));
