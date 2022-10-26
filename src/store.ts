import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { postReducer } from './reducers/postReducer';
import { postCommentReducer } from './reducers/postCommentReducer';
import { userReducer } from './reducers/userReducer';
import { userProfileReducer } from './reducers/userProfileReducer';
import { userProfileEditReducer } from './reducers/userProfileEditReducer';
import { authorizationReducer } from './reducers/authorizationReducer';

const store = createStore(combineReducers({
  posts: postReducer, users: userReducer, postComments: postCommentReducer, userProfile: userProfileReducer, userProfileEdit: userProfileEditReducer, authorization: authorizationReducer,
}), composeWithDevTools(applyMiddleware(thunk)));

export default store;
