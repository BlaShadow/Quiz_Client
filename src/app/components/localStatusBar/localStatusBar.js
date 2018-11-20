import React from 'react';
import { StatusBar, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet'
import Color from 'color'

export default () => {
  let color = EStyleSheet.value('$navBarBackgroundColor')

  return (
    <View>
      <StatusBar backgroundColor={Color(color).darken(0.2)} translucent={false} barStyle="light-content" />
    </View>
  )
}