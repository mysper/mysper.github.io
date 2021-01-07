import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import post from './reducer/post';

const initialState = {
    post: {
        list: null,
        data: {},
        newPost: {
            content: "",
            title: ""
        }
    }
};

const store = createStore(
    combineReducers({ post }),
    initialState,
    composeWithDevTools()
);

export default store;