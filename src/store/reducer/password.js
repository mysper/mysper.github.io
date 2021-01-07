export const ENTER = "enter";

export default function (state = "mysper", action) {
    switch (action.type) {
        case ENTER: {
            return action.pd;
        }
        default:
            return state;
    }
};