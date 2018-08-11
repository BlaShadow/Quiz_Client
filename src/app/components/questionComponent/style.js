import { StyleSheet } from "react-native"

export default StyleSheet.create({
    questionContainer:{
      backgroundColor: '#5895F5',
      flex: 1,
    },

    question: {
      margin: 10, 
      flex: 1,
      flexDirection: 'column',
      alignContent: 'stretch', 
      justifyContent: 'space-around', 
      alignItems: 'center',
      borderRadius: 10,
      overflow: 'hidden',
      backgroundColor: 'white'
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
      flexDirection: 'row',
      // alignSelf: 'stretch',
      alignContent: 'stretch',
      alignItems: 'center',
      justifyContent: 'space-around'
    },

    button:{
      fontSize: 15,
      width: '50%',
      flex: 1,
      marginLeft: 0,
      paddingRight: 0
    },
})