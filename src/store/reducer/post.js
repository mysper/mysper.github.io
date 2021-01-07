export const UPDATE_POST = 'update_post';
export const UPDATE_CONTENT = 'update_content';
export const DELETE_POST = 'delete_post';
export const NEW_POST = "new_post";

export default function (state = {}, action) {
    switch (action.type) {
        case UPDATE_POST: {
            return { ...state, list: action.payload };
        }
        case UPDATE_CONTENT: {
            return { ...state, data: { ...state.data, ...action.payload } }
        }
        case DELETE_POST: {
            return { ...state, list: action.payload }
        }
        case NEW_POST: {
            return { ...state, newPost: { title: action.title, content: action.content } }
        }
        default:
            return state;
    }
};