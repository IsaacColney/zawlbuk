import React,{useState,useEffect} from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import { Link,withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import {addpost} from '../../actions/post';
const PostForm = ({addpost,history}) => {
    const [formdata,setformdata] = useState({
        title:'',
        tags:'',
        text:'',
    });
    useEffect(() => {
        window.scrollTo(0, 0)
    },[]);
    const onChange = (e) => (setformdata({...formdata,[e.target.name]:e.target.value}))
    const onSubmit = (e) => {
        e.preventDefault();
        addpost(formdata,history);
        setformdata({
            title:'',
            tags:'',
            text:''
        });
    }

    return (
        <div className="post-form">
            <Link to='/myposts'><Button type='inherit'>Go Back</Button></Link>
            <div style={{borderRadius:'3px'}} className="bg-primary p">
                <h3>WRITE AN ARTICLE</h3>
            </div>
            <form className="form my-1" onSubmit={e => onSubmit(e)}>
                <h3>Article Title : </h3>
                <input
                    type='text'
                    name='title'
                    placeholder='Enter Title'
                    onChange={e => onChange(e)}
                    style={{borderStyle:'groove',borderColor:'#4a78f7',marginBottom:'10px',borderRadius:'3px'}}
                    required
                />
                <h3>Tags:</h3>
                <input
                    type='text'
                    name='tags'
                    onChange={e => onChange(e)}
                    placeholder='Enter Tags,e.g,science,physics (Please use comma separated values)'
                    style={{borderStyle:'groove',borderColor:'#f74ae0',marginBottom:'10px',borderRadius:'3px'}}
                />
                <h3>Article Body :</h3>
                <textarea
                    name="text"
                    cols="50"
                    rows="100"
                    onChange={e => onChange(e)}
                    placeholder="Tah hian i article content tur ziak rawh"
                    style={{borderStyle:'groove',borderRadius:'3px'}}
                    required
                ></textarea>
                <input type="submit" className="btn btn-dark my-1" value="Submit" style={{borderRadius:'3px',backgroundColor:'#3c196e'}}/>
            </form>
      </div>
    )
}

PostForm.propTypes = {
 addpost:PropTypes.func.isRequired,
}

export default connect(null,{addpost})(withRouter(PostForm));
