import { GET_POST_LIST, POST_ERROR } from '../redux/action';
import { postURL } from '../URL';

export const getPostsList = () => async function (dispatch) {
    try {
        const postsList = await postURL.get('/');
        dispatch({
            type: GET_POST_LIST,
            payload: [...postsList.data]
        });
    } catch (erro) {
        console.error(erro.message);
        dispatch({
            type: POST_ERROR,
            message: erro.message
        });
    }
}