import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { postReducer } from './reducers/postReducers';
import { postCommentReducer } from './reducers/postCommentReducers';
import { userReducer } from './reducers/userReducers';

const store = createStore(combineReducers({ posts: postReducer, users: userReducer, postComments: postCommentReducer }), composeWithDevTools(applyMiddleware(thunk)));

export default store;
