import React,{useState,Fragment} from 'react';
import {connect} from 'react-redux';
import {addcomment} from '../../actions/post';
import PropTypes from 'prop-types';

const CommentForm = ({postId,addcomment,auth}) => {
    const [formdata,setformdata] = useState({
        text:''
    });
    const onChange = (e) => (setformdata({text:e.target.value}));
    const onSubmit = (e) => {
        e.preventDefault();
        addcomment(postId,formdata);
        setformdata({text:''});
    }

    return (
        <div className="post-form">
            {auth.isAuthenticated ?(<Fragment>
                <div style={{borderRadius:'3px'}} className="bg-primary p">
                    <h3>Comment ve la :)</h3>
                </div>
                <form className="form my-1" onSubmit={e => onSubmit(e)}>
                    <textarea
                        name='text'
                        cols="50"
                        rows="5"
                        value={formdata.text}
                        onChange={e => onChange(e)}
                        placeholder="Tah hian comment ziak rawh"
                        style={{borderStyle:'groove',borderRadius:'3px'}}
                        required
                    ></textarea>
                    <input type="submit" className="btn btn-dark my-1" value="Submit" style={{borderRadius:'3px',backgroundColor:'#3c196e'}}/>
                </form>
            </Fragment> ): 
                <div style={{borderRadius:'3px'}} className="bg-primary p">
                    <h3>Comment ve i duh chuan login rawh :)</h3>
                </div>}


        </div>
    )
}

CommentForm.propTypes = {
    addcomment:PropTypes.func.isRequired,
    auth:PropTypes.object.isRequired,
}
const maptoprops = state => ({
    auth:state.auth
})
export default connect(maptoprops,{addcomment})(CommentForm);
