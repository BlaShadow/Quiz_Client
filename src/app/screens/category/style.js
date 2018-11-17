import EStyleSheet from 'react-native-extended-stylesheet'

export default EStyleSheet.create({
  container: {
    backgroundColor: '$screenBackgroundColor',
    padding: 5,
    flex: 1
  },
  loadingText:{
    color: 'white',
    fontSize: 20,
    margin: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});