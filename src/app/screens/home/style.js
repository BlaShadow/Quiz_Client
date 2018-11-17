import EStyleSheet from 'react-native-extended-stylesheet'

export default EStyleSheet.create({
  container: {
    backgroundColor: '$screenBackgroundColor',
    flex: 1
  },
  contentContainer:{
    padding: 20,
    paddingTop: 80,
    flexGrow: 1,
  },
  title: {
    fontSize: 35,
    color: '$textColor',
    textAlign: 'center',
    fontWeight: 'bold'
  },
  content:{
    flexGrow: 1,
    padding: 5,
    flexDirection: 'row',

    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'flex-start'
  },
  contentText:{
    fontSize: 22,
    color: '$textColor',
    textAlign: 'center'
  },
  buttonContainer:{
    padding: 5,
    backgroundColor: '#2196F3',
  },
  button:{
    textAlign: 'center', 
    color: 'white',
    fontWeight: 'bold',
    margin: 5,
    fontSize: 28
  }
});