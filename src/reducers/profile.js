import {GET_PROFILE,PROFILE_ERROR,CLEAR_PROFILE,GET_PROFILES} from '../actions/types';
const initialstate = {
    profile:null,
    profiles:[],
    loading:true,
    error:{}
}
export default function(state=initialstate,action){
    const {type,payload} = action;
    switch(type){
        case GET_PROFILE:
            return{
                ...state,
                profile:payload,
                loading:false
            }
        case GET_PROFILES:
            return{
                ...state,
                profiles:payload,
                loading:false
            }    
        case PROFILE_ERROR:
            return{
                ...state,
                error:payload,
                profile:null,
                loading:false
            }
        case CLEAR_PROFILE:
            return{
                ...state,
                profile:null,
                loading:false
            }    
        default:
            return state    
    }
}