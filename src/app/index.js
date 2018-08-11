import React from 'react';
import { Provider } from 'react-redux';

import StackNavigator from './config/route';
import store from './config/store';

export default () => (
  <Provider store={store}>
    <StackNavigator />
  </Provider>
)