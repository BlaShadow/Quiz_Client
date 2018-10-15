import { createStackNavigator } from 'react-navigation';

import { HomeScreen, QuestionScreen, ResultScreen, CategoryScreen } from '../screens'

const navStyleOptions = {
  headerStyle: {
    backgroundColor: '#3989E1',
  },
  headerTintColor: '#FFF'
}

const stack = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      header: () => null,
    }
  },
  category:{
    screen: CategoryScreen,
    navigationOptions: navStyleOptions
  },
  questions: {
    screen: QuestionScreen,
    navigationOptions: navStyleOptions
  },
  result: {
    screen: ResultScreen,
    navigationOptions: {
      header: () => null
    }
  }
}, {
  mode: 'modal',
  cardStyle: {
      paddingTop: 0
  }
});

export default stack;