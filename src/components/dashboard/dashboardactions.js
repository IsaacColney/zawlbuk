import React,{Fragment} from 'react'
import {Link} from 'react-router-dom';
import Button from '../Button';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
const dashboardactions = ({auth}) => {
    return auth && auth.user && auth.user._id && (
        <Fragment>
            <div className="dash-buttons">
                <Link to={`/profile/${auth.user._id}`} ><Button><i className="fas fa-user-circle text-primary"></i>{"   MANAGE PROFILE"}</Button></Link>
                <Link to="/addeducation"><Button><i className="fas fa-graduation-cap text-primary"></i> {"   "} Add Education</Button></Link>
                <Link to="/myposts"><Button><i className="fas fa-newspaper text-primary"></i> {"   "} Manage My Articles</Button></Link>
            </div>
        </Fragment>
    )
}
dashboardactions.propTypes = {
    auth:PropTypes.object.isRequired,
}
const mapstatetoprops = state => ({
    auth:state.auth
})
export default connect(mapstatetoprops)(dashboardactions);
