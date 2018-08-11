import { createStackNavigator } from 'react-navigation';

import { HomeScreen, QuestionScreen, ResultScreen } from '../screens'

const stack = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
        header: () => null
    }
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