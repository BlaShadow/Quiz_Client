import EStyleSheet from 'react-native-extended-stylesheet'

export default EStyleSheet.create({
  wrap:{
    backgroundColor: '$screenBackgroundColor',
    flex: 1
  },
  content:{
    margin: 40,
    padding: 5,
    flex: 1
  },
  contentText:{
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '$textColor',
    margin: 20,
    marginBottom: 30
  },
  scoreText:{
    fontSize: 24, 
    color: '$textColor', 
    textAlign: 'center',
    margin: 20
  },
  footer:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20
  },
  footerResult:{
    fontSize: 28, 
    padding: 20,
    textAlign: 'center', 
    color: '#5b677a'
  },

  //Details Button
  detailsButtonContainer:{
    justifyContent: 'center',
    alignSelf: 'center',
    width: 200,
    height: 50,
    borderRadius: 25,
    padding: 5,
    backgroundColor: 'white',
  },
  detailsButton:{
    fontSize: 20,
    textAlign: 'center',
    color: '#959595',
    fontWeight: 'bold'
  }
});