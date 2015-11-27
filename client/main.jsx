import React from 'react';
import AppContainer from '../views/AppContainer';
import store from './clientStore';

React.render(<AppContainer store={store} />, document.getElementById('root'));
