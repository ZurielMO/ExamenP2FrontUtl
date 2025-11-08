import {POST_USER} from "../types";


export default (state, action) =>{
    //Destructuramos el action
    const {type, payload} = action;

    switch (type){
        case POST_USER:
            return{
                ...state,
                user:payload
            }

            default:
                return state;
    }
}