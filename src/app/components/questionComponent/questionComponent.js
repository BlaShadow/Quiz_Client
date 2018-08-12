import React, { PureComponent } from 'react'
import { Text, View, TouchableHighlight } from 'react-native'

import Color from 'color'
import PropTypes from 'prop-types';

import style from './style'

export default class QuestionComponent extends PureComponent {
  render() {
    let questionItem = this.props.question
    let highLightColor = Color('#454545').lighten(0.5)

    return (
      <View style={style.questionContainer}>
        <View style={style.question} >
          <Text style={style.title}>{questionItem.category}</Text>

          <View style={{flex: 4}}>
            <Text style={style.questionStyle}>
              {questionItem.question}
            </Text>
            
            <View style={style.buttonContainer}>
              <TouchableHighlight 
                  underlayColor={highLightColor}
                  style={[style.button, {borderRightWidth: 2, borderRightColor: 'white'}]}
                  onPress={() => this.props.answerQuestion(questionItem.id, true)}>
                  <Text style={style.buttonText}>True</Text>
              </TouchableHighlight>

              <TouchableHighlight 
                  underlayColor={highLightColor}
                  style={style.button}
                  onPress={() => this.props.answerQuestion(questionItem.id, false)}>
                  <Text style={style.buttonText}>False</Text>
              </TouchableHighlight>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

QuestionComponent.propTypes = {
    question: PropTypes.object.isRequired,
    answerQuestion: PropTypes.func.isRequired
};