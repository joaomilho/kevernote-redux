import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from '../views/AppContainer';
import store from './clientStore';

ReactDOM.render(<AppContainer store={store} />, document.getElementById('root'));
