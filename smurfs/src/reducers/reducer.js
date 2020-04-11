import {ADD_SMURF, REMOVE_SMURF, FETCH_SMURF, UPDATE, ERROR} from '../actions/action'

const initialState = {
    smurfs: [],
    isFetchingData: false,
    error: ""
}

function reducer(state = initialState, action){
    switch (action.type){
        case FETCH_SMURF:
            return {
                ...state,
                isFetchingData: true,
                smurfs: []
            }
        case UPDATE:
            return{
                ...state,
                smurfs: action.payload,
                isFetchingData: false
            }
        case ADD_SMURF:
            return{
                ...state,
                
                name: action.payload.name, 
                age: action.payload.age, 
                height:action.payload.height,
                id: Date.now()
                
            }
        case REMOVE_SMURF:
        default:
            return state
    }
}

export default reducer