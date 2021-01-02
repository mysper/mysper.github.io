export const UPDATE_POST = 'update_post';

export default function (state = {}, action) {
    switch (action.type) {
        case UPDATE_POST: {
            return { data: action.payload };
        }
        default:
            return state;
    }
};