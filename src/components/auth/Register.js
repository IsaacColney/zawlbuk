import React,{Fragment,useState,useEffect} from 'react';
import {Link,Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {setAlert} from '../../actions/alert';
import {register} from '../../actions/auth';
import PropTypes from 'prop-types';
import Button from '../Button';

const Register = ({setAlert,register,isAuthenticated}) => {
    const [formData,setformData] = useState({
        name:"",
        email:"",
        password:"",
        password2:""
    });
    useEffect(() => {
        window.scrollTo(0, 0)
    },[])
    const {name,email,password,password2} = formData;
    const onChange = (e) => setformData({...formData,[e.target.name]:e.target.value});
    const onSubmit = (e) => {
        e.preventDefault();
        if(password!==password2){
            setAlert("Password a in mil lo","danger");
        }
        else{
            register({name,email,password});
        }
    }
    if(isAuthenticated){
        return <Redirect to="/dashboard"/>;
    }
    return (
        <Fragment>
            <h1 className="large text-primary">Sign Up</h1>
            <p className="lead"><i className="fas fa-user"></i> Create Your Account</p>
            <form className="form" action="create-profile.html" onSubmit = {(e) => onSubmit(e)}>
                <div className="form-group">
                    <input type="text" placeholder="Name" name="name" value={name} onChange={(e) => onChange(e)} required />
                </div>
                <div className="form-group">
                    <input type="email" placeholder="Email Address" name="email" value={email} onChange={(e) => onChange(e)} required/>
                    <small className="form-text"
                        >This site uses Gravatar so if you want Link profile image, use
                        Gravatar email</small>
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        minLength="6"
                        value = {password}
                        onChange={(e) => onChange(e)} required
                    />
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        name="password2"
                        value={password2}
                        minLength="6"
                        onChange={(e) => onChange(e)} required
                    />
                </div>
                <Button type="primary">Sign Up</Button>
            </form>
            <p className="my-1">
                Already have an account? <Link to="/login">Sign In</Link>
            </p>
        </Fragment>
    );
}
Register.propTypes = {
    setAlert:PropTypes.func.isRequired,
    register:PropTypes.func.isRequired,
    isAuthenticated:PropTypes.bool,
}
const maptoProps = (state) => {
    return {isAuthenticated:state.auth.isAuthenticated};
} 
export default connect(maptoProps,{setAlert,register})(Register);
