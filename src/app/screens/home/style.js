import { StyleSheet } from "react-native"

export default StyleSheet.create({
  container: {
    backgroundColor: '#F5F5F5',
    padding: 20,
    paddingTop: 60,
    flex: 1
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
  button:{
    margin: 20,
    textAlign: 'center', 
    color: '#78909C',
    fontWeight: 'bold',
    fontSize: 25
  }
});