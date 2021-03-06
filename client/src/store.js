import { createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { forgotPasswordReducer, profileReducer, userReducer } from "./reducers/userReducer";
import { newAnswerReducer, newQuestionReducer, questionDetailsReducer, questionReducer } from "./reducers/questionReducer";
import { archiveReducer } from "./reducers/archiveReducer";

const reducer = combineReducers({
    user: userReducer,
    profile: profileReducer,
    forgotPassword: forgotPasswordReducer,
    questions: questionReducer,
    questionDetails: questionDetailsReducer,
    newAnswer : newAnswerReducer,
    newQuestion: newQuestionReducer,
    archives: archiveReducer,
});

let initialState = {};

const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
    );


export default store;