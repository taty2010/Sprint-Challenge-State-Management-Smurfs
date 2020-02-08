export const ADD_SMURF = "ADD_SMURF"
export const REMOVE_SMURF = "REMOVE_SMURF"

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