import EStyleSheet from "react-native-extended-stylesheet"

export default EStyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#FCFDFD',
    margin: 2,
    borderRadius: 5,
    padding: 10,
    elevation: 3,
    marginTop: 10,
    marginBottom: 10
  },
  categoryName: {
    color: '$textColor',
    textAlign: 'left',
    marginLeft: 5,
    fontSize: 20,
    fontWeight: 'bold'
  }
});