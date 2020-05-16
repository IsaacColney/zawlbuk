import axios from 'axios';
import {setAlert} from './alert';
import {
    GET_POSTS,
    POST_ERROR,
    UPDATE_STARS,
    DELETE_POST,
    ADD_POST,
    GET_POST,
    ADD_COMMENT,
    REMOVE_COMMENT
} from './types';
export const getPosts = () => async dispatch => {
    try {
        const res = await axios.get('/api/posts');
        dispatch({
            type:GET_POSTS,
            payload:res.data
        })    
    } 
    catch (err) {
        dispatch({
            type:POST_ERROR,
            payload:{ msg:err.response.statusText,status:err.response.status }
        })
    }
}
export const getPost = (id) => async dispatch => {
    try {
        const res = await axios.get(`/api/posts/${id}`);
        dispatch({
            type:GET_POST,
            payload:res.data
        })    
    } 
    catch (err) {
        dispatch({
            type:POST_ERROR,
            payload:{ msg:err.response.statusText,status:err.response.status }
        })
    }
}
export const starPost = id => async dispatch => {
    try {
        const res = await axios.put(`/api/posts/star/${id}`);
        dispatch({
            type:UPDATE_STARS,
            payload:{id,stars:res.data}
        })    
    } 
    catch (err) {
        dispatch({
            type:POST_ERROR,
            payload:{ msg:err.response.statusText,status:err.response.status }
        })
    }
}
export const unstarPost = id => async dispatch => {
    try {
        const res = await axios.put(`/api/posts/unstar/${id}`);
        dispatch({
            type:UPDATE_STARS,
            payload:{id,stars:res.data}
        })    
    } 
    catch (err) {
        dispatch({
            type:POST_ERROR,
            payload:{ msg:err.response.statusText,status:err.response.status }
        })
    }
}
export const deletepost = id => async dispatch => {
    try {
        await axios.delete(`/api/posts/${id}`);
        dispatch({
            type:DELETE_POST,
            payload:id
        });
        dispatch(setAlert('Post deleted','success'))    
    } 
    catch (err) {
        dispatch({
            type:POST_ERROR,
            payload:{ msg:err.response.statusText,status:err.response.status }
        })
    }
}
export const addpost = (formdata,history) => async dispatch => {
    try {
        const config = {
            headers:{
                'Content-Type':'application/json'
            }
        }
        const res = await axios.post(`/api/posts`,formdata,config);
        dispatch({
            type:ADD_POST,
            payload:res.data
        });
        history.push('/myposts')
        dispatch(setAlert('Post created','success'))    
    } 
    catch (err) {
        dispatch({
            type:POST_ERROR,
            payload:{ msg:err.response.statusText,status:err.response.status }
        })
    }
}
export const addcomment = (postId,formdata) => async dispatch => {
    try {
        const config = {
            headers:{
                'Content-Type':'application/json'
            }
        }
        const res = await axios.post(`/api/posts/comment/${postId}`,formdata,config);
        dispatch({
            type:ADD_COMMENT,
            payload:res.data
        });
        dispatch(setAlert('Comment added','success'))    
    } 
    catch (err) {
        dispatch({
            type:POST_ERROR,
            payload:{ msg:err.response.statusText,status:err.response.status }
        })
    }
}
export const removecomment = (postId,commentId) => async dispatch => {
    try {
        await axios.delete(`/api/posts/comment/${postId}/${commentId}`);
        dispatch({
            type:REMOVE_COMMENT,
            payload:commentId
        });
        dispatch(setAlert('Comment deleted','success'));    
    } 
    catch (err) {
        dispatch({
            type:POST_ERROR,
            payload:{ msg:err.response.statusText,status:err.response.status }
        })
    }
}