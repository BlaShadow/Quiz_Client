import { StyleSheet } from "react-native"

export default StyleSheet.create({
    questionContainer:{
      backgroundColor: '#5895F5',
      flex: 1,
      alignContent: 'stretch',
    },

    question: {
      margin: 10, 
      flex: 1,
      flexDirection: 'column',
      borderRadius: 10,
      overflow: 'hidden',
      backgroundColor: '#FFFFFF'
    },

    questionStyle:{
      fontSize: 20, 
      textAlign: 'center', 
      margin: 5, 
      flex: 3, 
      color: '#333333',
      alignSelf: 'stretch'
    },

    title: {
      textAlign: 'center',
      fontSize: 22,
      color: '#333333',
      flex: 1, 
      margin: 5
    },

    buttonContainer:{
      flex: 1,
      backgroundColor: '#454545', 
      flexDirection: 'row'
    },

    button:{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      margin: 2
    },

    buttonText:{
      fontSize: 17,
      color: 'white',
      fontWeight: 'bold'
    }
})