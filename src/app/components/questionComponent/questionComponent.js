import React, { PureComponent } from 'react'
import { Text, View, Button } from 'react-native'

import PropTypes from 'prop-types';

import style from './style'

export default class QuestionComponent extends PureComponent {
  render() {
    let questionItem = this.props.question

    return (
      <View style={style.questionContainer}>
        <View style={style.question} >
          <Text style={style.title}>{questionItem.category}</Text>

          <View style={{flex: 4}}>
            <Text style={style.questionStyle}>
              {questionItem.question}
            </Text>
            
            <View style={style.buttonContainer}>
              <Button
                    style={style.button} 
                    title="True" 
                    onPress={() => this.props.answerQuestion(questionItem.id, true)} />

              <Button
                    style={style.button} 
                    title="False" 
                    onPress={() => this.props.answerQuestion(questionItem.id, false)} />
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