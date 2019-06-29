
import axios from 'axios';
const myPapers = () => dispatch => {
    axios.get('/api/papers')
    .then( result => {
        dispatch({
            type: 'ALL_PAPERS',
            payload: result.data
        })
    })
    .catch( err => {
        console.log(err.response.data);
    });
}

export default myPapers;