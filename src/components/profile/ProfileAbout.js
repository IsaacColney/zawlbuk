import React,{Fragment} from 'react';
import {Link} from 'react-router-dom';

const ProfileAbout = ({profile:{bio,journals,user:{name}}}) => {
    return (
        <div className="profile-about bg-light p-2">
            {bio && (<Fragment>
                <h2 className="text-primary">{name.trim().split(' ')[0]} Bio</h2>
                <p>
                {bio}
                </p>
            </Fragment>)}
            <div className="line"></div>
            {journals.length!==0 && (<Fragment>
                <h2 className="text-primary">Papers/Journals published</h2>
                <div className="skills">
                {journals.map((journal,index) => (
                    <div key={index} className="p-1">{journal && <i className="fa fa-book"></i>}{'      '}<Link to={journal}>{journal}</Link></div>    
                ))}
                </div>

                </Fragment>)}
        </div>
    )
}

export default ProfileAbout;
