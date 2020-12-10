import { GET_POST_LIST } from './action';

export const post = (state = {}, action) => {
    switch (action.type) {
        case GET_POST_LIST: {
            return { ...state, postsList: action.payload };
        }
        default: {
            return state;
        }
    }
};