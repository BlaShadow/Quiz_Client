import { createStackNavigator } from 'react-navigation';

import { HomeScreen, QuestionScreen, ResultScreen, CategoryScreen } from '../screens'

const stack = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
        header: () => null
    }
  },
  category:{
    screen: CategoryScreen,
  },
  questions: {
    screen: QuestionScreen
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