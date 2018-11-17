import EStyleSheet from 'react-native-extended-stylesheet'

export default EStyleSheet.create({
  container: {
    backgroundColor: '$screenBackgroundColor',
    flex: 1
  },
  contentContainer:{
    padding: 20,
    paddingTop: 60,
    flexGrow: 1,
  },
  title: {
    fontSize: 35,
    color: '#606060',
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
    color: '#78909C',
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