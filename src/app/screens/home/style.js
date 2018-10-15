import { StyleSheet } from "react-native"

export default StyleSheet.create({
  container: {
    backgroundColor: '#D0E9FD',
    padding: 20,
    paddingTop: 60,
    flex: 1
  },
  title: {
    fontSize: 35,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold'
  },
  content:{
    flexGrow: 1,
    justifyContent: 'space-around',
    alignItems: 'stretch'
  },
  contentText:{
    fontSize: 22,
    color: '#5b677a',
    textAlign: 'center'
  },
  button:{
    textAlign: 'center', 
    color: '#5b677a',
    fontWeight: 'bold',
    fontSize: 25
  }
});