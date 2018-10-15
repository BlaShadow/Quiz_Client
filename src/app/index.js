import React from 'react';
import { Provider } from 'react-redux';

import StackNavigator from './config/route';
import store from './config/store';

import EStyleSheet from 'react-native-extended-stylesheet';

EStyleSheet.build({
  $white: '#FFF'
});

export default () => (
  <Provider store={store}>
    <StackNavigator />
  </Provider>
)