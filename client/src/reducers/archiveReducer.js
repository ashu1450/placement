import {
    ALL_ARCHIVES_REQUEST,
    ALL_ARCHIVES_SUCCESS,
    ALL_ARCHIVES_FAIL,
    
    CLEAR_ERRORS,
  } from "../constants/archiveConstants";


  export const archiveReducer =
  (state = { archives: [] },action) => {
    switch (action.type) {
      case ALL_ARCHIVES_REQUEST :
        return {
          loading: true,
          archives: [],
        };

      case ALL_ARCHIVES_SUCCESS:
        return {
          loading: false,
          archives: action.payload.archives,
          archivesCount: action.payload.archivesCount,
        };

      case ALL_ARCHIVES_FAIL:
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