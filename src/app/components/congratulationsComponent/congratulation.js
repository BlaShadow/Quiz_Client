import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import PropTypes from 'prop-types'

import styles from './style'

export class CongratulationComponet extends Component {
  render() {
    let image = require('./assets/top.png')

    if(this.props.score == 0.5){
      image = require('./assets/middle.png')
    } else if(this.props.score < 0.5){
      image = require('./assets/bottom.png')
    }

    return (
      <View style={styles.container}>
        <Image style={styles.image} source={image} />
      </View>
    )
  }
}

CongratulationComponet.propTypes = {
  score: PropTypes.number.isRequired
}

export default CongratulationComponet
