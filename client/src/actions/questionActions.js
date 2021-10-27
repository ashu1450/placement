import axios from "axios";
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
   
    
    
    CLEAR_ERRORS,
  } from "../constants/questionConstants";

// get all question
  export const getQuestion = (keyword = "", tag) => async (dispatch)=>{
    try {
        dispatch({type: ALL_QUESTION_REQUEST})

        let link = `/api/v1/questions?keyword=${keyword}`;

        if(tag){
           link = `/api/v1/questions?keyword=${keyword}&tag=${tag}`;
        }
        const {data} = await axios.get(link);


        dispatch({
            type: ALL_QUESTION_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: ALL_QUESTION_FAIL,
            payload: error.response.data.message,
        })
    }
};

// get single question details
export const getQuestionDetails = (id) => async (dispatch)=>{
    try {
        dispatch({type: QUESTION_DETAILS_REQUEST});

        const {data} = await axios.get(`/api/v1/question/${id}`);

        dispatch({
            type: QUESTION_DETAILS_SUCCESS,
            payload: data.question,
        })
    } catch (error) {
        dispatch({
            type: QUESTION_DETAILS_FAIL,
            payload: error.response.data.message,
        })
    }
};


// add new  question
export const createQuestion = (questionData) => async (dispatch) => {
  try {
    dispatch({ type: NEW_QUESTION_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.post(
      `/api/v1/add/question`,
      questionData,
      config
    );

    dispatch({
      type: NEW_QUESTION_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: NEW_QUESTION_FAIL,
      payload: error.response.data.message,
    });
  }
};


// add new  answer
export const newAnswer = (answerData) => async (dispatch) => {
    try {
      dispatch({ type: NEW_ANSWER_REQUEST });
  
      const config = {
        headers: { "Content-Type": "application/json" },
      };
  
      const { data } = await axios.post(`/api/v1/add/answer`, answerData, config);
  
      dispatch({
        type: NEW_ANSWER_SUCCESS,
        payload: data.success,
      });
    } catch (error) {
      dispatch({
        type: NEW_ANSWER_FAIL,
        payload: error.response.data.message,
      });
    }
  };
  

// Clearing Errors
export const clearErrors = () => async (dispatch)=>{
    dispatch({ type: CLEAR_ERRORS });
};