import React from 'react';
import { Provider } from 'react-redux';

import StackNavigator from './config/route';
import store from './config/store';

import EStyleSheet from 'react-native-extended-stylesheet';

EStyleSheet.build({
  $white: '#FFF',
  $screenBackgroundColor: '#D0E9FD',
  $navBarBackgroundColor: '#3989E1',
  $textColor: '#78797F'
});

export default () => (
  <Provider store={store}>
    <StackNavigator />
  </Provider>
)