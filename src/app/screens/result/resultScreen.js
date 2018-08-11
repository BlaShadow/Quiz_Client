import React, { Component } from 'react'
import { Text, View, ScrollView, TouchableHighlight } from 'react-native'

import { ItemResult } from './../../components'
import style from './style'

export default class ResultScreen extends Component {
  
  render() {
    let questions = this.props.navigation.state.params.questions
    let successQuestions = questions.filter((item) => item.correctAnswer === item.response).length
    let scoreString = `You scored \n ${successQuestions} / ${questions.length}`
    
    return (
      <View style={style.wrap}>
        <Text style={style.scoreText}>{scoreString}</Text>

        <ScrollView>
            <View style={style.resultContainer}>
                {questions.map((item) => {
                    let isCorrectAnswer = item.correctAnswer === item.response

                    return <ItemResult 
                                key={item.id} 
                                title={item.question} 
                                success={isCorrectAnswer} 
                            />
                })}
            </View>
        </ScrollView>
        
        <TouchableHighlight onPress={() => this.props.navigation.push('questions')}>
          <Text style={style.footerResult}> Try again </Text>
        </TouchableHighlight>
      </View>
    )
  }
}