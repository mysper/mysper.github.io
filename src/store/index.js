import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import post from './reducer/post';
import password from './reducer/password';
const initialState = {
    post: {
        list: null,
        data: {},
        newPost: {
            content: "",
            title: ""
        }
    },
    password: ""
};

const store = createStore(
    combineReducers({ post, password }),
    initialState,
    composeWithDevTools()
);

export default store;