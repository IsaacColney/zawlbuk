import axios from 'axios';
import {setAlert} from './alert';
import {
    GET_PROFILE,
    PROFILE_ERROR,
    GET_PROFILES,
    CLEAR_PROFILE
}from './types';
export const getCurrentProfile = () => async dispatch => {
    try{
        const res = await axios.get('/api/profile/me');
        dispatch({
            type:GET_PROFILE,
            payload:res.data
        })
    }
    catch(err){
        dispatch({
            type:PROFILE_ERROR,
            payload:{ msg:err.response.statusText,status:err.response.status }
        })
    }
} 
export const getProfiles = () => async dispatch => {
    try{
        const res = await axios.get('/api/profile');
        dispatch({
            type:GET_PROFILES,
            payload:res.data
        })
    }
    catch(err){
        dispatch({
            type:PROFILE_ERROR,
            payload:{ msg:err.response.statusText,status:err.response.status }
        })
    }
} 
export const getProfilebyId = (userId) => async dispatch => {
    try{
        dispatch({
            type:CLEAR_PROFILE
        })
        const res = await axios.get(`/api/profile/user/${userId}`);
        dispatch({
            type:GET_PROFILE,
            payload:res.data
        })
    }
    catch(err){
        dispatch({
            type:PROFILE_ERROR,
            payload:{ msg:err.response.statusText,status:err.response.status }
        })
    }
} 

export const createprofile = (formdata,history,edit=false) => async dispatch => {
    try{
        const config = {
            headers:{
                'Content-type':'application/json'
            }
        }
        const res = await axios.post('/api/profile',formdata,config);
        dispatch({
            type:GET_PROFILE,
            payload:res.data
        });
        dispatch(setAlert(edit ? 'Profile updated' : 'Profile created','success'));
        history.push('/dashboard');
    }
    catch(err){
        console.error(err.message)
        const errors = err.response.data.errors;
        if(errors){
            errors.forEach(error => dispatch(setAlert(error.msg,"danger")))
        }
        dispatch({
            type:PROFILE_ERROR,
            payload:{ msg:err.response.statusText,status:err.response.status }
        })
    }
}
export const addEducation = (formdata,history) => async dispatch => {
    try{
        const config = {
            headers:{
                'Content-type':'application/json'
            }
        }
        const res = await axios.put('/api/profile/education',formdata,config);
        dispatch({
            type:GET_PROFILE,
            payload:res.data
        });
        dispatch(setAlert('Education added','success'));
        history.push('/dashboard');
    }
    catch(err){
        console.error(err.message)
        const errors = err.response.data.errors;
        if(errors){
            errors.forEach(error => dispatch(setAlert(error.msg,"danger")))
        }
        dispatch({
            type:PROFILE_ERROR,
            payload:{ msg:err.response.statusText,status:err.response.status }
        })
    }
}
export const deleteEducation = id => async dispatch => {
    try{
        const res = await axios.delete(`/api/profile/education/${id}`);
        dispatch({
            type:GET_PROFILE,
            payload:res.data
        });
        dispatch(setAlert('Education deleted','success'));
    }
    catch(err){
        console.error(err.message)
        const errors = err.response.data.errors;
        if(errors){
            errors.forEach(error => dispatch(setAlert(error.msg,"danger")))
        }
        dispatch({
            type:PROFILE_ERROR,
            payload:{ msg:err.response.statusText,status:err.response.status }
        })
    }
}