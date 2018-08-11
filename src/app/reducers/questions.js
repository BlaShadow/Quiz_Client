import { 
  ANSWER_QUESTION, 
  CHANGE_CURRENT_PAGE, 
  SAVE_REMOTE_QUESTIONS,
  SETUP_GAME,
  SET_APP_NORMAL,
  SET_APP_WAIT
} from './../actions'

const initialState = {
  isWating: false,
  page: 0,
  questions: []
}

const reducer = (state = initialState, action) => {
  console.log(`Action executed ${action.type}`);

  switch(action.type) {

    case SET_APP_NORMAL:
      return {...state, isWating: false};
    
    case SET_APP_WAIT:
      return {...state, isWating: true};

    case SETUP_GAME:
      return initialState;

    case SAVE_REMOTE_QUESTIONS:
      return {...state, questions: action.questions};
    
    case CHANGE_CURRENT_PAGE:
      return {...state, page: action.page}
    
    case ANSWER_QUESTION:
      let selectedQuestions = state.questions.filter(item => item.id === action.questionId);

      if(selectedQuestions.length > 0){
          let questions = state.questions.map(item => {
              if(item.id === action.questionId){
                  return {...selectedQuestions[0], response: action.answer}
              }
          
              return item;
          })
      
          //Update state
          return {...state, questions}
      }
    break;

    default:
      return state;
  }

  return state;
};

export default reducer
