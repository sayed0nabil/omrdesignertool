import axios from 'axios';

const createPaper = (data, history) => dispatch => {
    axios.post('/api/papers/createpaper', data)
    .then( result => {
        dispatch({
            type: 'GET-ERRORS',
            payload: {}
        })
        history.push('/mypapers');
    })
    .catch( err => {
        console.log(err.response.data);
        dispatch({
            type: 'GET-ERRORS',
            payload: err.response.data
        })
    });
}

export default createPaper;