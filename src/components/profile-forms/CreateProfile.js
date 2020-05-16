import React,{Fragment,useState,useEffect} from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import {Link,withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {createprofile} from '../../actions/profile';
const CreateProfile = ({createprofile,history}) => {
    const [formdata,setformdata] = useState({
        profession:'',
        workplace:'',
        location:'',
        journals:'',
        bio:'',
        facebook:'',
        instagram:'',
        twitter:'',
        linkedin:'',
        youtube:'',
        isscholar:false
    });
    useEffect(()=>{
        window.scrollTo(0, 0);
    },[]);
    const [showsocial,togglesocial] = useState(false);
    const {
        profession,
        workplace,
        location,
        journals,
        bio,
        facebook,
        instagram,
        twitter,
        linkedin,
        youtube,
        isscholar
    } = formdata;
    const onChange = (e) => (setformdata({...formdata,[e.target.name]:e.target.value}));
    const onChangeIsScholar = (e) => (setformdata({...formdata,isscholar:!isscholar}));
    const onSubmit = (e) => {
        e.preventDefault();
        createprofile(formdata,history);
    }
    let Sociallinks = null;
    if(showsocial){
        Sociallinks = 
            <Fragment>
                <div className="form-group social-input">
                    <i className="fab fa-twitter fa-2x"></i>
                    <input type="text" placeholder="Twitter URL" name="twitter" onChange={(e) => onChange(e)} value={twitter}/>
                </div>

                <div className="form-group social-input">
                    <i className="fab fa-facebook fa-2x"></i>
                    <input type="text" placeholder="Facebook URL" name="facebook" onChange={(e) => onChange(e)} value={facebook}/>
                </div>

                <div className="form-group social-input">
                    <i className="fab fa-youtube fa-2x"></i>
                    <input type="text" placeholder="YouTube URL" name="youtube" onChange={(e) => onChange(e)} value={youtube}/>
                </div>

                <div className="form-group social-input">
                    <i className="fab fa-linkedin fa-2x"></i>
                    <input type="text" placeholder="Linkedin URL" name="linkedin" onChange={(e) => onChange(e)} value={linkedin}/>
                </div>

                <div className="form-group social-input">
                    <i className="fab fa-instagram fa-2x"></i>
                    <input type="text" placeholder="Instagram URL" name="instagram" onChange={(e) => onChange(e)} value={instagram}/>
                </div>
            </Fragment>
        ; 
    }

    return (
        <Fragment>
            <h1 className="large text-primary">
                Create Your Profile
            </h1>
            <p className="lead">
                <i className="fas fa-user"></i> Let's get some information to make your
                profile stand out
            </p>
            <small>* = required field</small>
            <form className="form" onSubmit={(e) => onSubmit(e)}>
                <div className="form-group">
                    <input type="text" placeholder="Profession" name="profession" onChange={(e) => onChange(e)} value={profession}/>
                    <small className="form-text">* I hnathawh lai mek tah hian hian ziak rawh </small>
                </div>
                <div className="form-group">
                    <span>Research scholar i nih leh nih loh tik rawh: {"       "}</span>                
                    <input type="checkbox" name="isscholar" onChange={(e) => onChangeIsScholar(e)} value={isscholar}/>
                    <small className="form-text">* Scholar i nih leh nih loh tick rawh(Research ti lai mek ni lo,hna dang thawk tawh tan pawh tick tho tur)</small>
                </div>
                <div className="form-group">
                    <input type="text" placeholder="Hna thawhna hmun" name="workplace" onChange={(e) => onChange(e)} value={workplace}/>
                    <small className="form-text">Nangma company pawh ni se ziak tho rawh,student/research bei mek tan chuan education form ah a hranin in ziak dawn nia </small>
                </div>
                <div className="form-group">
                    <input type="text" placeholder="Location" name="location" onChange={(e) => onChange(e)} value={location}/>
                    <small className="form-text">City & state suggested (eg. Aizawl, Mumbai)</small>
                </div>
                <div className="form-group">
                    <input type="text" placeholder="Research papers" name="journals" onChange={(e) => onChange(e)} value={journals}/>
                    <small className="form-text">Research paper emaw journal i publish na website link tah hian dah rawh.Please use comma separated values (eg.
                        www.ieee.org,www.facebook.com)</small>
                </div>
                <div className="form-group">
                    <textarea placeholder="A short bio of yourself" name="bio" onChange={(e) => onChange(e)} value={bio}></textarea>
                    <small className="form-text">I chungchang tlem han sawi la :)</small>
                </div>

                <div className="my-2">
                    <button type="button" className="btn btn-light" onClick={() => togglesocial(!showsocial)}>
                        Add Social Network Links
                    </button>
                    <span>Optional</span>
                </div>
                {Sociallinks}
                <Button type='primary'>Submit</Button>
                <Link to = '/dashboard'><Button type='secondary'>Go Back</Button></Link>
            </form>
        </Fragment>
    )
}

CreateProfile.propTypes = {
    createprofile:PropTypes.func.isRequired,
}

export default connect(null,{createprofile})(withRouter(CreateProfile));
