import {  questionsForCategory, triviaCategories} from './../api/services/triviaService'

export const SET_APP_WAIT = "SET_APP_WAIT"
export const SET_APP_NORMAL = "SET_APP_NORMAL"

export const LOAD_REMOTE_QUESTIONS = "LOAD_REMOTE_QUESTIONS"
export const SAVE_REMOTE_QUESTIONS = "SAVE_REMOTE_QUESTIONS"

export const LOAD_REMOTE_CATEORIES = "LOAD_REMOTE_CATEORIES"
export const SAVE_REMOTE_CATEGORIES = "SAVE_REMOTE_CATEGORIES"

export const CHANGE_CURRENT_PAGE = "CHANGE_CURRENT_PAGE"
export const ANSWER_QUESTION = "ANSWER_QUESTION"
export const SETUP_GAME = "SETUP_GAME"

export const setupNewGame = () => ({
  type: SETUP_GAME
})

export const changeCurrentPage = (page) => ({
  type: CHANGE_CURRENT_PAGE,
  page
})

export const setAppAwait = () => ({
  type: SET_APP_WAIT
})

export const setAppNormal = () => ({
  type: SET_APP_NORMAL
})

export const answerQuestion = (questionId, answer) => ({
  type: ANSWER_QUESTION,
  questionId,
  answer
})

export const saveRemoteQuestions = (questions) => ({
  type: SAVE_REMOTE_QUESTIONS,
  questions
})

export const loadRemoteQuestions = (category) => {
  return (dispatch) => {
    //Wait state
    dispatch(setAppAwait())

    return questionsForCategory(category)
        .then(questions => {
            //Normal state
            dispatch(setAppNormal())

            //Save result
            dispatch(saveRemoteQuestions(questions))
        })
        .catch((error) => {
            //Normal state
            dispatch(setAppNormal())
        });
  }
}

export const saveRemoteCategories = (categories) => ({
  type: SAVE_REMOTE_CATEGORIES,
  categories
})

export const loadRemoteCateogires = () => {
  return (dispatch) => {
    //Wait state
    dispatch(setAppAwait())

    return triviaCategories()
      .then(categories => {
        //Normal state
        dispatch(setAppNormal())

        //Save result
        dispatch(saveRemoteCategories(categories))
      })
  }
}
