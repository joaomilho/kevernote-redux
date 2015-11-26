import React from 'react';
import AppContainer from './AppContainer';
import store from '../src/clientStore';

React.render(<AppContainer store={store} />, document.getElementById('root'));
