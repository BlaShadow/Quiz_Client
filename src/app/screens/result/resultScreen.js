import React, { Component } from 'react'
import { Text, View, ScrollView } from 'react-native'

import { ItemResult, HomeButton, PlayAgainButton } from './../../components'
import style from './style'

export default class ResultScreen extends Component {
  
  render() {
    let {questions, category} = this.props.navigation.state.params
    let successQuestions = questions.filter((item) => item.correctAnswer === item.response).length
    let scoreString = `You scored \n ${successQuestions} / ${questions.length}`
    
    return (
      <View style={style.wrap}>
        <ScrollView>
          <Text style={style.scoreText}>{scoreString}</Text>

          <View style={style.resultContainer}>
            {questions.map((item) => {
              let isCorrectAnswer = item.correctAnswer === item.response

              return <ItemResult key={item.id} title={item.question} success={isCorrectAnswer} />
            })}
          </View>
        </ScrollView>

        <View style={style.footer}>
          <HomeButton onPress={() => this.props.navigation.popToTop()} />
          <PlayAgainButton onPress={() => this.props.navigation.push('questions', {category})} />
        </View>
      </View>
    )
  }
}