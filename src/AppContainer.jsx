import React from 'react';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';
import { Provider } from 'react-redux';
import App from './App';

export default class AppContainer extends React.Component {
  render() {
    let {store} = this.props;

    return  (
      <div>
        <Provider store={store}>
          {() => <App /> }
        </Provider>
        <DebugPanel top bottom right>
          <DevTools store={store} monitor={LogMonitor} />
        </DebugPanel>
      </div>
    );
  }
}
