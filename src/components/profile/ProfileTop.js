import React from 'react';
import {Link} from 'react-router-dom';

const ProfileTop = ({profile:{user:{name,avatar},profession,workplace,location,social}}) => {
    return (
        <div className="profile-top bg-dark p-2">
            <img
            className="round-img my-1"
            src={avatar}
            alt=""
            />
            <h1 className="large">{name}</h1>
            {profession &&
            <p className="lead">{profession} {workplace && <span>{' '}at{' '}{workplace}</span> }</p>
            }
            {location && <p><i className="fas fa-map-marker-alt"></i>{'  '}{location}</p>}
            {social &&
            <div className="icons my-1">
                {social.twitter && <Link to={social.twitter} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-twitter fa-2x"></i>
                </Link>}
                {social.facebook && <Link to={social.facebook} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook fa-2x"></i>
                </Link>}
                {social.linkedin && <Link to={social.linkedin} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin fa-2x"></i>
                </Link>}
                {social.youtube && <Link to={social.youtube} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-youtube fa-2x"></i>
                </Link>}
                {social.instagram && <Link to={social.instagram} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram fa-2x"></i>
                </Link>}
            </div>
            }
        </div>
    )
}

export default ProfileTop;
