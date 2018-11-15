import React, { PureComponent } from 'react'
import { Text, TouchableHighlight } from 'react-native'

import Color from 'color'
import PropTypes from 'prop-types'
import style from './style'

export default class Category extends PureComponent {
  render() {
    let underlayColor = Color("#D0E9FD").darken(0.1)
    
    return (
      <TouchableHighlight
        underlayColor={underlayColor}
        onPress={this.props.onPressHandler}  style={style.container}>
        <Text style={style.categoryName}>{this.props.categoryName}</Text>
      </TouchableHighlight>
    )
  }
}

Category.propTypes = {
  categoryName: PropTypes.string.isRequired,
  onPressHandler: PropTypes.func.isRequired
}