import axios from 'axios'

export const ADD_SMURF = "ADD_SMURF"
export const REMOVE_SMURF = "REMOVE_SMURF"
export const FETCH_SMURF = "FETCH_SMURF"
export const UPDATE = "UPDATE_MISSIONS";
export const ERROR = "SET_ERROR";

export const getSmurf = () => dispatch => {
    dispatch({type: FETCH_SMURF});
    axios
      .get('http://localhost:3333/smurfs')
      .then(res => {
          console.log(res.data)
          dispatch({type: UPDATE, payload:res.data})
      })
      .catch(err => {
          dispatch({type:ERROR, payload:"Error"})
      })
}

export function addSmurf(add){
    console.log('add',add)
    return{
        type: ADD_SMURF,
        payload: {name: add.name, age:add.age , height:add.height }
    };
}

export function removeSmurf(remove){
    console.log('remove',remove)
    return{
        type: REMOVE_SMURF,
        payload: remove
    }
}