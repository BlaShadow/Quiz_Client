import React, { Component } from 'react'
import { View, Image } from 'react-native'

import styles from './style'

export class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={require('./assets/header.png')} />
      </View>
    )
  }
}

export default Header
