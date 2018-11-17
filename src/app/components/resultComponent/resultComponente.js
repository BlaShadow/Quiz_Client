import React, { Component } from 'react'
import { View, ScrollView } from 'react-native'

import { ItemResult } from './../../components'
import style from './style'

export class ResultComponent extends Component {
  render() {
    return (
      <View style={style.resultContainer}>
        <ScrollView style={style.content}>
          {this.props.questions.map((item) => {
              let isCorrectAnswer = item.correctAnswer === item.response

              return <ItemResult key={item.id} title={item.question} success={isCorrectAnswer} />
          })}
        </ScrollView>
      </View>
    )
  }
}

export default ResultComponent
