import React, { Component } from 'react'
import { Text, View, TouchableHighlight, StatusBar } from 'react-native'

import { HeaderComponent, LocalStatusBar } from './../../components'
import style from './style'

export default class HomeScreen extends Component {
  constructor(props){
    super(props);

    //bind
    this.startGameActionHandler = this.startGameActionHandler.bind(this)
  }
  
  startGameActionHandler(){
    this.props.navigation.navigate('category')
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={style.container}>
          <View style={style.contentContainer}>
            <HeaderComponent />

            <Text style={style.title}>Quiz App!</Text>

            <View style={style.content}>
              <Text style={style.contentText}>Test your general knowleadge.</Text>
            </View>  
          </View>
          
          <TouchableHighlight 
            underlayColor={"#D0E9FD"} 
            onPress={this.startGameActionHandler}>
            <Text style={style.button}>Begin</Text>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}