import React, { PureComponent } from 'react'
import { TouchableHighlight, Image } from 'react-native'

import PropTypes from 'prop-types'
import style from './style'

export class ButtonImage extends PureComponent {
  render() {
    return (
      <TouchableHighlight onPress={this.props.onPress}>
        <Image style={style.image} source={this.props.source} />
      </TouchableHighlight>
    )
  }
}

ButtonImage.propTypes = {
  source: PropTypes.number,
  onPress: PropTypes.func
}

export let HomeButton = ({onPress}) => {
  return <ButtonImage source={require('./assets/home.png')} onPress={onPress} />
}

export let PlayAgainButton = ({onPress}) => {
  return <ButtonImage source={require('./assets/replay.png')} onPress={onPress} />
}

export default ButtonImage