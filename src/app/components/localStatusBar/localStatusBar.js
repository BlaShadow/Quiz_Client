import React from 'react';
import { StatusBar, View } from 'react-native';

export default () => {
  return (
    <View>
      <StatusBar backgroundColor={'red'} translucent={false} barStyle="light-content" />
    </View>
  )
}