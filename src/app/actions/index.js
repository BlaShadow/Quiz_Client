
export const SET_APP_WAIT = "SET_APP_WAIT"
export const SET_APP_NORMAL = "SET_APP_WAIT"

export const LOAD_REMOTE_QUESTIONS = "LOAD_REMOTE_QUESTIONS"
export const SAVE_REMOTE_QUESTIONS = "SAVE_REMOTE_QUESTIONS"

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

export const loadRemoteQuestions = () => {
  return (dispatch) => {

    //Wait state
    dispatch(setAppAwait())

    // const url = "https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean"
    const url = "https://opentdb.com/api.php?amount=10&category=22&type=boolean"

    return fetch(url)
      .then(response => response.json())
      .then(data => {

          //Clear the data
          let questions = data.results.map((item) => {
            let question = item.question.replace(/&quot;/g,'"').replace(/&#039;/g,'\'').trim()

            return {
              category: item.category,
              correctAnswer: JSON.parse(item.correct_answer.toLowerCase()),
              question: question,
              id: generateUUID()
            }
          })

          //Save result
          dispatch(saveRemoteQuestions(questions))

          //Normal state
          dispatch(setAppNormal())
      })
      .catch((error) => {
          //Normal state
          dispatch(setAppNormal())

          console.log(error);
      });
  }
}

const generateUUID = () =>  { 
    var d = new Date().getTime();
    if (typeof performance !== 'undefined' && typeof performance.now === 'function'){
        d += performance.now();
    }
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
}
