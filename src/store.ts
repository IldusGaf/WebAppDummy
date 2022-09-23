import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { postReducer } from './reducers/postReducer';
import { postCommentReducer } from './reducers/postCommentReducer';
import { userReducer } from './reducers/userReducer';
import { userProfileReducer } from './reducers/userProfileReducer';

const store = createStore(combineReducers({
  posts: postReducer, users: userReducer, postComments: postCommentReducer, userProfile: userProfileReducer,
}), composeWithDevTools(applyMiddleware(thunk)));

export default store;
