import EStyleSheet from 'react-native-extended-stylesheet'

export default EStyleSheet.create({
  wrap:{
    flex: 1,
    justifyContent: 'flex-start',
    padding: 5,
    backgroundColor: '$screenBackgroundColor',
  },
  questionCounter:{
    textAlign: 'center',
    fontSize: 16,
    color: 'white',
    margin: 10
  },
  loadingText:{
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  loadingContainer: {
    justifyContent: 'center',
    flex: 1
  }
});