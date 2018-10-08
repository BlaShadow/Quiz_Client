import React, { Component } from 'react'
import { ScrollView } from 'react-native'

import { connect } from 'react-redux'

import { Category } from './../../components'
import { loadRemoteCateogires } from './../../actions'
import styles from './style'

class CategoryScreen extends Component {
  static navigationOptions = {
    title: 'Category'
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
        {
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

  return {categories}
}

export default connect(stateToProps)(CategoryScreen)