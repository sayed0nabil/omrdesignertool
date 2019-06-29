
const inintialState = [];
export default function(state=inintialState, action){
    switch(action.type){
        case 'ALL_PAPERS':
            return action.payload
        default:
            return state
    }
}