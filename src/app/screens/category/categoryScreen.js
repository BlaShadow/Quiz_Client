import React, { Component } from 'react'
import { ScrollView, Text } from 'react-native'
import { connect } from 'react-redux'
import EStyleSheet from 'react-native-extended-stylesheet'

import { Category } from './../../components'
import { loadRemoteCateogires } from './../../actions'
import styles from './style'

console.log('global vars', EStyleSheet.globalVars)

class CategoryScreen extends Component {
  static navigationOptions = {
    title: 'Category',
    headerStyle: {
      backgroundColor: () => EStyleSheet.value('$navBarBackgroundColor'),
    },
    headerTintColor: '#FFF'
  };

  constructor(props) {
    super(props);

    this.didSelectCategory = this.didSelectCategory.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(loadRemoteCateogires())
  }

  didSelectCategory(category){
    //Move to question screen with selected category
    this.props.navigation.navigate('questions', {category})
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        { this.props.isWaiting ? 
          <Text style={styles.loadingText}>Loading Quiz categories...</Text> :
          this.props.categories.map(item => (
            <Category key={item.identifier} 
                categoryName={item.name} 
                onPressHandler={() => this.didSelectCategory(item)} />
          ))
        }
      </ScrollView>
    )
  }
}

const stateToProps = state => {
  let categories = state.questions.categories
  let isWaiting = state.questions.isWaiting

  return {categories, isWaiting}
}

export default connect(stateToProps)(CategoryScreen)