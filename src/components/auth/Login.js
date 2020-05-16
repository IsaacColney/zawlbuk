import React,{Fragment,useState,useEffect} from 'react';
import {Link,Redirect} from 'react-router-dom';
import {login} from '../../actions/auth';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Button from '../Button';
const Login = ({login,isAuthenticated}) => {
    const [formData,setformData] = useState({
        email:"",
        password:"",
    });
    useEffect(() => {
        window.scrollTo(0, 0);
    },[])
    const {email,password} = formData;
    const onChange = (e) => setformData({...formData,[e.target.name]:e.target.value});
    const onSubmit = (e) => {
        e.preventDefault();
        login(formData.email,formData.password);
    }
    if(isAuthenticated){
        return <Redirect to="/dashboard"/>;
    }
    return (
        <Fragment>
            <h1 className="large text-primary">Login</h1>
            <p className="lead"><i className="fas fa-user"></i> Login to Your Account</p>
            <form className="form" action="create-profile.html" onSubmit = {(e) => onSubmit(e)}>
                <div className="form-group">
                    <input type="email" placeholder="Email Address" name="email" value={email} onChange={(e) => onChange(e)} required/>
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
                <Button type='primary'>Login</Button>
            </form>
            <p className="my-1">
                Don't have an account? <Link to="/register">Register</Link>
            </p>
        </Fragment>
    )
}
Login.propTypes = {
    login:PropTypes.func.isRequired,
    isAuthenticated:PropTypes.bool,
}
const maptoProps = (state) => {
    return {isAuthenticated:state.auth.isAuthenticated};
} 
export default connect(maptoProps,{login})(Login);
