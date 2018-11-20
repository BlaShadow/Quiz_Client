import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Text, View } from 'react-native'
import { HeaderBackButton } from 'react-navigation'

import { IndicatorViewPager } from 'rn-viewpager';
import { QuestionComponent } from './../../components'

import { loadRemoteQuestions, answerQuestion, changeCurrentPage, setupNewGame } from './../../actions'

import style from './style'

class QuestionScreen extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: 'Quiz',
    headerLeft: <HeaderBackButton tintColor="#fff" onPress={() => {
      navigation.popToTop()
    }} />
  });

  constructor(props){
    super(props);

    //bind
    this.scrollPageChanged = this.scrollPageChanged.bind(this)
    this.answerQuestion = this.answerQuestion.bind(this)
    this.pagerComponent = React.createRef()
  }

  componentDidMount(){
    //Reset game
    this.props.dispatch(setupNewGame())

    //Selected category
    let category = this.props.navigation.state.params.category

    //Load questions
    this.props.dispatch(loadRemoteQuestions(category))
  }

  scrollPageChanged(state){
    if(state === 'idle' && this.props.page <= this.props.totalPage){
      let page = this.props.page + 1
      
      this.props.dispatch(changeCurrentPage(page))
    }
  }

  answerQuestion(questionId, answerValue){
    //Dispatch action
    this.props.dispatch(answerQuestion(questionId, answerValue))
  }

  componentWillReceiveProps(){
    let totalItems = this.props.questions.length

    if(totalItems !== 0 && this.props.page <= totalItems && this.pagerComponent.current != null){
      let page = this.props.page

      console.log("Current page", page);

      this.props.dispatch(changeCurrentPage(page + 1))

      //Change page
      if(page === (totalItems - 1)){
        let category = this.props.navigation.state.params.category
        let questions = this.props.questions
        let params = {category: category, questions: questions}

        this.props.navigation.navigate('result', params)
      } else {
        this.pagerComponent.current.setPage(page + 1)
      }
    }
  }

  render() {
    let pagerText = this.props.isWaiting ? "" : `${this.props.page + 1} of ${this.props.questions.length}`

    return (
      <View style={style.wrap}>
        <IndicatorViewPager 
          scrollEnabled={false}
          ref={this.pagerComponent} 
          onPageScrollStateChanged={this.scrollPageChanged}
          style={[{minHeight: 350}] }>

          { this.props.isWaiting === true ? 
            <View style={style.loadingContainer}>
              <Text style={style.loadingText}>Loading Questions...</Text>
            </View>  
            : 
            this.props.questions.map((questionItem) => 
              <View key={questionItem.id}>
                <QuestionComponent question={questionItem} answerQuestion={this.answerQuestion} />
              </View>
            )
          }
          
        </IndicatorViewPager>

        <Text style={style.questionCounter}>{ pagerText }</Text>
      </View>
    )
  }
}

const stateToProps = (state) => {
  return state.questions
}

export default connect(stateToProps)(QuestionScreen)