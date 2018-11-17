import EStyleSheet from 'react-native-extended-stylesheet'

export default EStyleSheet.create({
    questionContainer:{
      backgroundColor: 'transparent',
      flex: 1,
      alignContent: 'stretch',
    },

    question: {
      margin: 10, 
      flex: 1,
      flexDirection: 'column',
      borderRadius: 10,
      overflow: 'hidden',
      backgroundColor: '$white'
    },

    questionStyle:{
      fontSize: 20, 
      textAlign: 'center', 
      margin: 5, 
      flex: 3, 
      color: '$textColorDark',
      alignSelf: 'stretch'
    },

    title: {
      textAlign: 'center',
      fontSize: 22,
      fontWeight: 'bold',
      color: '$textColorDark',
      flex: 1, 
      margin: 5
    },

    buttonContainer:{
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-around',
    },

    button:{
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#454545',
      width: 70,
      height: 70,
      borderRadius: 35,
    },

    buttonText:{
      fontSize: 17,
      color: 'white',
      fontWeight: 'bold'
    }
})