import React, { Component } from 'react'
import { Text, View, TouchableHighlight } from 'react-native'

import { 
  HomeButton, 
  PlayAgainButton,
  CongratulationsComponente
} from './../../components'

import style from './style'

export default class ResultScreen extends Component {
  render() {
    let {questions, category} = this.props.navigation.state.params
    let successQuestions = questions.filter((item) => item.correctAnswer === item.response).length
    let scoreString = `You scored\n${successQuestions} / ${questions.length}`
    
    return (
      <View style={style.wrap}>
        <View style={style.content}>  
          <Text style={style.contentText}>Congratulations</Text>

          <CongratulationsComponente score={successQuestions / questions.length} />
          
          <Text style={style.scoreText}>{scoreString}</Text>

          <TouchableHighlight 
            style={style.detailsButtonContainer}
            underlayColor='#ECEFF1'
            onPress={() => console.log('clicked!')}>
            <Text style={style.detailsButton}>Details</Text>
          </TouchableHighlight>
        </View>
        
        <View style={style.footer}>
          <HomeButton onPress={() => this.props.navigation.popToTop()} />
          <PlayAgainButton onPress={() => this.props.navigation.push('questions', {category})} />
        </View>
      </View>
    )
  }
}