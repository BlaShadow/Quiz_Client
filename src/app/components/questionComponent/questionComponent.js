import React, { PureComponent } from 'react'
import { Text, View, TouchableHighlight, Image } from 'react-native'

import Color from 'color'
import PropTypes from 'prop-types';

import style from './style'

export default class QuestionComponent extends PureComponent {
  render() {
    let questionItem = this.props.question

    let agreeColor = Color('#1471D8')
    let disagreeColor = agreeColor.lighten(0.5)
    let highLightColor = agreeColor.lighten(0.4)

    return (
      <View style={style.questionContainer}>
        <View style={style.question} >
          <Text style={style.title}>{questionItem.category}</Text>

          <View style={{flex: 4}}>
            <Text style={style.questionStyle}>
              {questionItem.question}
            </Text>
          </View>
        </View>

        <View style={style.buttonContainer}>
          <TouchableHighlight 
              underlayColor={highLightColor}
              style={[style.button, {backgroundColor: disagreeColor}]}
              onPress={() => this.props.answerQuestion(questionItem.id, false)}>
              <Image source={require('./assets/cancel-music.png')} style={{width: 30, height: 30}} />
          </TouchableHighlight>
          
          <TouchableHighlight 
              underlayColor={highLightColor}
              style={[style.button, {backgroundColor: agreeColor}]}
              onPress={() => this.props.answerQuestion(questionItem.id, true)}>
              <Image source={require('./assets/check-mark.png')} style={{width: 30, height: 30}} />
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}

QuestionComponent.propTypes = {
    question: PropTypes.object.isRequired,
    answerQuestion: PropTypes.func.isRequired
};