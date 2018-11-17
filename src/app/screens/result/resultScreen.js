import React, { Component } from 'react'
import { Text, View, TouchableHighlight } from 'react-native'
import Dialog, { SlideAnimation, DialogContent, DialogTitle } from 'react-native-popup-dialog';

import { 
  HomeButton, 
  PlayAgainButton,
  CongratulationsComponent,
  ResultComponent
} from './../../components'

import style from './style'

export default class ResultScreen extends Component {
  constructor(props){
    super(props)

    this.state = {
      visible: false
    }
  }

  render() {
    let {questions, category} = this.props.navigation.state.params
    let successQuestions = questions.filter((item) => item.correctAnswer === item.response).length
    let scoreString = `You scored\n${successQuestions} / ${questions.length}`
    
    return (
      <View style={style.wrap}>
        <View style={style.content}> 
          <Dialog 
            visible={this.state.visible}
            dialogTitle={<DialogTitle title="Responses details" />}
            onTouchOutside={() => {this.setState({ visible: false });}}
            dialogAnimation={new SlideAnimation({slideFrom: 'bottom'})}>
              <ResultComponent questions={questions} />
          </Dialog>
          
          <Text style={style.contentText}>Congratulations</Text>

          <CongratulationsComponent score={successQuestions / questions.length} />
          
          <Text style={style.scoreText}>{scoreString}</Text>

          <TouchableHighlight 
            style={style.detailsButtonContainer}
            underlayColor='#ECEFF1'
            onPress={() => this.setState({visible: true})}>
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