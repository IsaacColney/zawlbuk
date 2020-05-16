import React,{Fragment,useEffect} from 'react';
import Spinner from '../Layout/Spinner';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getProfilebyId} from '../../actions/profile'
import {Link} from 'react-router-dom';
import Button from '../Button';
import ProfileTop from './ProfileTop';
import ProfileAbout from './ProfileAbout';
import ProfileEducation from './ProfileEducation';
const Profile = ({match,getProfilebyId,profile:{profile,loading},auth}) => {
    useEffect(() => {
        window.scrollTo(0, 0);
        getProfilebyId(match.params.id)
    },[getProfilebyId,match.params.id]);
    return (
        <Fragment>
            {profile===null || loading ===true ? <Spinner/> :(
                <Fragment>
                    {auth && auth.isAuthenticated && auth.user ? (
                       <Link to='/dashboard'><Button>Go To Dashboard</Button></Link> 
                    ):
                    <Link to='/profiles'><Button>Go back To Scholars</Button></Link>
                    }
                    <ProfileTop profile={profile}/>
                    <ProfileAbout profile={profile}/>
                    <div className="profile-edu bg-white p-2">
                        <h2 className="text-primary">Education</h2>
                        {profile.education.length!==0 ? (profile.education.map(education => (
                            <ProfileEducation key={education._id} education={education}/>
                        ))):(<Fragment>No education credentials</Fragment>)
                        }
                    </div>
                    {(auth.isAuthenticated && auth.user._id===profile.user._id) && 
                    <Link to='/editprofile'><Button type='secondary'>Edit Profile</Button></Link>
                    }
                </Fragment>
            )}
        </Fragment>
    )
}

Profile.propTypes = {
    getProfilebyId:PropTypes.func.isRequired,
    auth:PropTypes.object.isRequired,
    profile:PropTypes.object.isRequired,
}
const mapStatetoProps = state => ({
    profile:state.profile,
    auth:state.auth
});

export default connect(mapStatetoProps,{getProfilebyId})(Profile)
