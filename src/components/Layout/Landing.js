import React,{Fragment} from 'react';
import {Link,Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
const Landing = ({isAuthenticated}) => {
    if(isAuthenticated){
        return <Redirect to="/dashboard"/>
    }
    return (
        <Fragment>
            <section className="container">
                <h1 className='large text-primary'>Welcome to Zawlbûk</h1> 
            </section>
        </Fragment>
    )
}
Landing.propTypes = {
    isAuthenticated:PropTypes.bool,
}
const maptoprops = state => ({
    isAuthenticated:state.auth.isAuthenticated
})
export default connect(maptoprops)(Landing);