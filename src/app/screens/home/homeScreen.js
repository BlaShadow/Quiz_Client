import React, { Component } from 'react'
import { Text, View, Button, TouchableHighlight } from 'react-native'

import style from './style'

export default class HomeScreen extends Component {
  constructor(props){
    super(props);

    //bind
    this.startGameActionHandler = this.startGameActionHandler.bind(this)
  }
  
  startGameActionHandler(){
    this.props.navigation.navigate('questions')
  }

  render() {
    return (
      <View style={style.container}>
        <Text style={style.title}>Wellcome to trivia Challence!</Text>

        <View style={style.content}>
          <Text style={style.contentText}>You will be presented with 10 True or false question.</Text>
          <Text style={style.contentText}>Can you score 100%?</Text>
        </View>
        
        <TouchableHighlight onPress={this.startGameActionHandler}>
          <Text style={style.button}>Begin</Text>
        </TouchableHighlight>
      </View>
    )
  }
}