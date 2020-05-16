import React,{Fragment,useEffect} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Spinner from '../Layout/Spinner';
import {getProfiles} from '../../actions/profile';
import ProfileItem from './ProfileItem';
const Profiles = ({getProfiles,profile:{profiles,loading}}) => {
    useEffect(() => {
        window.scrollTo(0, 0);
        getProfiles();
    },[getProfiles]);
    return (
        <Fragment>
            {loading ? (<Spinner/>):(<Fragment>
                <h1 className='large text-primary'>Scholars</h1>
                <p className="lead">
                    <i className='fab fa-connectdevelop'></i>{'  '}Browse and connect with research scholars
                </p>
                <div className='profiles'>
                    {profiles.length > 0 ? (
                        profiles.map(profile => (profile.isscholar &&
                            <ProfileItem key={profile._id} profile={profile}/>
                        ))
                    ):
                    (<h3>No profiles found...</h3>)
                    }
                </div>
            </Fragment>)
            }
        </Fragment>
    )
}

Profiles.propTypes = {
    getProfiles:PropTypes.func.isRequired,
    profile:PropTypes.object.isRequired,
}
const mapStatetoProps = state => ({
    profile:state.profile
})
export default connect(mapStatetoProps,{getProfiles})(Profiles);
