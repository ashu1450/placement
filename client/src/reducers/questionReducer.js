import {
    ALL_QUESTION_REQUEST,
    ALL_QUESTION_SUCCESS,
    ALL_QUESTION_FAIL,

    QUESTION_DETAILS_REQUEST,
    QUESTION_DETAILS_SUCCESS,
    QUESTION_DETAILS_FAIL,

    NEW_QUESTION_REQUEST,
    NEW_QUESTION_SUCCESS,
    NEW_QUESTION_FAIL,
    NEW_QUESTION_RESET,

    NEW_ANSWER_REQUEST,
    NEW_ANSWER_SUCCESS,
    NEW_ANSWER_FAIL,
    NEW_ANSWER_RESET,
    
    CLEAR_ERRORS,
  } from "../constants/questionConstants";


  export const questionReducer =
  (state = { questions: [] },action) => {
    switch (action.type) {
      case ALL_QUESTION_REQUEST :
        return {
          loading: true,
          questions: [],
        };

      case ALL_QUESTION_SUCCESS:
        return {
          loading: false,
          questions: action.payload.questions,
          questionsCount: action.payload.questionsCount,
        };

      case ALL_QUESTION_FAIL:
        return {
          loading: false,
          error: action.payload,
        };

      case CLEAR_ERRORS:
        return {
          ...state,
          error: null,
        };

      default:
        return state;
    }
  };


  export const questionDetailsReducer =
  (state = { question:{} },action) => {
    switch (action.type) {
      case QUESTION_DETAILS_REQUEST:
        return {
          loading: true,
          ...state,
        };

      case  QUESTION_DETAILS_SUCCESS:
        return {
          loading: false,
          question: action.payload,
         
        };

      case QUESTION_DETAILS_FAIL:
        return {
          loading: false,
          error: action.payload,
        };

      case CLEAR_ERRORS:
        return {
          ...state,
          error: null,
        };

      default:
        return state;
    }
  }; 

  // ADDING NEW QUESTION 
  export const newQuestionReducer = (state = { question: {} }, action) => {
    switch (action.type) {
      case NEW_QUESTION_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case NEW_QUESTION_SUCCESS:
        return {
          loading: false,
          success: action.payload.success,
          question: action.payload.question,
        };
      case NEW_QUESTION_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case NEW_QUESTION_RESET:
        return {
          ...state,
          success: false,
        };
      case CLEAR_ERRORS:
        return {
          ...state,
          error: null,
        };
      default:
        return state;
    }
  };
  
  
  export const newAnswerReducer = (state = {}, action) => {
    switch (action.type) {
      case NEW_ANSWER_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case NEW_ANSWER_SUCCESS:
        return {
          loading: false,
          success: action.payload,
        };
      case NEW_ANSWER_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case NEW_ANSWER_RESET:
        return {
          ...state,
          success: false,
        };
      case CLEAR_ERRORS:
        return {
          ...state,
          error: null,
        };
      default:
        return state;
    }
  };  
