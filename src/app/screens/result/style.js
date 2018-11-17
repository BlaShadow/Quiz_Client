import EStyleSheet from 'react-native-extended-stylesheet'

export default EStyleSheet.create({
  wrap:{
    backgroundColor: '$screenBackgroundColor',
    padding: 10,
    paddingTop: 40,
    flex: 1
  },
  scoreText:{
    fontSize: 22, 
    color: '#5b677a', 
    textAlign: 'center'
  },
  footer:{
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  footerResult:{
    fontSize: 28, 
    padding: 10,
    textAlign: 'center', 
    color: '#5b677a'
  }
});