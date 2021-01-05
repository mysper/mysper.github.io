export const UPDATE_POST = 'update_post';
export const UPDATE_CONTENT = 'update_content';

export default function (state = {}, action) {
    switch (action.type) {
        case UPDATE_POST: {
            return { ...state, list: action.payload };
        }
        case UPDATE_CONTENT: {
            return { ...state, data: { ...state.data, ...action.payload } }
        }
        default:
            return state;
    }
};