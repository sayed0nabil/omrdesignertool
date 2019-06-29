
import axios from 'axios';
const allPapersAction = (loggedUserId) => dispatch => {
let data = loggedUserId?{userId: loggedUserId}:{}
axios.post(`/api/papers`, data)
    .then(result => {
        dispatch({
            type: 'ALL_PAPERS',
            payload: result.data
        });
    })
    .catch( err => {
        dispatch({
            type: 'GET-ERRORS',
            payload: err.response.data
        });
    })
}
export default allPapersAction;