import React from 'react';
import {Link} from 'react-router-dom';
import Button from '../Button';
const ProfileItem = ({profile:{
    user:{_id,name,avatar},
    profession,
    workplace,
    location,
    journals
}}) => {
    return (
        <div className='profile bg-dark'>
            <img src={avatar} alt="" className="round-img"/>
            <div>
                <h2 style={{color:'#17a2b8'}}>{name}</h2>
                <p>{profession} {workplace && <span> at {workplace} </span>}</p>
                <p className="my-1">{location && <span><i className="fas fa-map-marker-alt"></i>{'  '}{location}</span>}</p>
                <Link to={`/profile/${_id}`}><Button type='primary'>View Profile</Button></Link>
            </div>
            {journals.length > 0 &&
            <ul>
                <h4>Papers published:</h4>
                {journals.slice(0,4).map((journal,index) => (
                    <li key={index} className='text-primary'>{journal&&<i className="fa fa-book"></i>}{'  '}<Link to={journal}>{journal.slice(0,15)}</Link></li>
                ))
                }
            </ul>
            }
        </div>
    )
}



export default ProfileItem;
