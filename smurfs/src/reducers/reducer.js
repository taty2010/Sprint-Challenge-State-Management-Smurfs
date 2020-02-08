import {ADD_SMURF, REMOVE_SMURF} from '../actions/action'

const initialState = {

}

function reducer(state, action){
    switch (action.type){
        case ADD_SMURF:
        case REMOVE_SMURF:
        default:
            return state
    }
}

export default reducer