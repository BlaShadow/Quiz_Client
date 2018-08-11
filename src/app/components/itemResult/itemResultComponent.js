import React, { PureComponent } from 'react'
import { Text, View, Image } from 'react-native'

import PropTypes from 'prop-types';

import style from './style'

export default class ItemResultComponent extends PureComponent {
  render() {
    let image = this.props.success ? require('./images/success.png') : require('./images/fail.png');

    return (
      <View style={style.wrap}>
        <Image style={style.image} source={image} />
        <Text style={style.title}> {this.props.title} </Text>
      </View>
    )
  }
}

ItemResultComponent.propTypes = {
    title: PropTypes.string.isRequired,
    success: PropTypes.bool.isRequired
};


