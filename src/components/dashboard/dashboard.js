import React,{useEffect, Fragment} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {getCurrentProfile} from '../../actions/profile';
import PropTypes from 'prop-types';
import Spinner from '../Layout/Spinner';
import Button from '../Button';
import Dashboardactions from './dashboardactions';
import Education from './Education';
const Dashboard = ({auth:{user},profile:{profile,loading},getCurrentProfile}) => {
    useEffect(() => {
        window.scrollTo(0, 0);
        getCurrentProfile();
    },[getCurrentProfile]);
    return loading && profile===null ? (<Spinner/>) :( 
        <Fragment>
            <h1 className='large text-primary'>Dashboard</h1>
            <p className="lead">
                <i className='fas fa-user'/>{"   "}Welcome {user && user.name}
            </p>
            {profile!==null ? 
            (<Fragment>
                <Dashboardactions/>
            </Fragment>) : 
            (<Fragment> 
                <p>I chungchang tlema zawng a hnuaia button-ah hian hmet la belh rawh le</p>
                <Link to="/createprofile"><Button type='primary'>Create Profile</Button></Link>
            </Fragment>)}
            {profile!==null && profile.education!==null && profile.education.length!==0 ?
            (<Education education={profile.education}/>):null}
        </Fragment>
     );
}
Dashboard.propTypes = {
    auth:PropTypes.object.isRequired,
    getCurrentProfile:PropTypes.func.isRequired,
    profile:PropTypes.object.isRequired,
}
const maptoprops = state => ({
    auth:state.auth,
    profile:state.profile,
});
    
export default connect(maptoprops,{getCurrentProfile})(Dashboard);
