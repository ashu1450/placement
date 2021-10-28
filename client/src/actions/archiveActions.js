import axios from "axios";
import {
    ALL_ARCHIVES_REQUEST,
    ALL_ARCHIVES_SUCCESS,
    ALL_ARCHIVES_FAIL,

   
   
    
    
    CLEAR_ERRORS,
  } from "../constants/archiveConstants";

// get all question
  export const getArchive = () => async (dispatch)=>{
    try {
        dispatch({type: ALL_ARCHIVES_REQUEST})

        let link = `/api/v1/archives`;
        const {data} = await axios.get(link);


        dispatch({
            type: ALL_ARCHIVES_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: ALL_ARCHIVES_FAIL,
            payload: error.response.data.message,
        })
    }
};


// Clearing Errors
export const clearErrors = () => async (dispatch)=>{
    dispatch({ type: CLEAR_ERRORS });
};