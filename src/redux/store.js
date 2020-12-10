import { createStore, combineReducers, applyMiddleware } from 'redux';
import { post } from './reducer';
import thunk from 'redux-thunk';

const reducer = combineReducers({
    post
});

const middleware = [thunk];

const init = {
    post: {
        postsList: []
    }
}

const store = createStore(
    reducer,
    init,
    applyMiddleware(...middleware)
);

export default store;