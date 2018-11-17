import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'

import styles from './style'

export class CongratulationComponet extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={require('./assets/top.png')} />
      </View>
    )
  }
}

export default CongratulationComponet
