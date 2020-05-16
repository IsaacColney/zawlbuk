import React from 'react';
import Moment from 'react-moment';
const ProfileEducation = ({education:{school,degree,fieldofstudy,from,to,current,description}}) => {
    return (
        <div>
            <h3>{school}</h3>
            {from && (
                <p><Moment format='DD/MM/YYYY'>{from}</Moment>{' '}-{' '}{current ? 'Current':<Moment format='DD/MM/YYYY'>{to}</Moment>} </p>
            )}
            <p><strong>Degree: </strong>{degree}</p>
            {fieldofstudy && (
                <p>
                    <strong>Field Of Study: </strong>{fieldofstudy}
                </p>
            )}
            {description && (
                <p>
                    <strong>Description: </strong>{description}
                </p>
            )}
        </div>
    )
}

export default ProfileEducation;
