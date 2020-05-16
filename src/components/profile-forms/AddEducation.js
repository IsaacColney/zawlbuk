import React,{Fragment,useState,useEffect} from 'react';
import {Link,withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {addEducation} from '../../actions/profile'
import Button from '../Button';
const AddEducation = ({addEducation,history}) => {
    const [formdata,setformdata] = useState({
        school:'',
        degree:'',
        fieldofstudy:'',
        from:'',
        to:'',
        current:false,
        description:''
    });
    useEffect(()=>{
        window.scrollTo(0, 0);
    },[]);
    const onChange = (e) => (setformdata({...formdata,[e.target.name]:e.target.value}));
    const ontogglecurrent = (e) => (setformdata({current:!current}));
    const onsubmit = (e) => {
        e.preventDefault();
        addEducation(formdata,history);
    }
    const {
        school,
        degree,
        fieldofstudy,
        from,
        to,        
        current,
        description
    } = formdata;
    return (
        <Fragment>
            <h1 className="large text-primary">
                Add Your Education
            </h1>
            <p className="lead">
                <i className="fas fa-graduation-cap"></i> Add any school, college,university etc that
                you have attended
            </p>    
            <small>* = required field</small>
            <form className="form" onSubmit={(e) => onsubmit(e)}>
                <div className="form-group">
                    <input
                        type="text"
                        placeholder="* School or College"
                        name="school"
                        value={school} onChange={(e) => onChange(e)}
                        required
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        placeholder="* Degree or Certificate"
                        name="degree"
                        value={degree} onChange={(e) => onChange(e)}
                        required
                    />
                </div>
                <div className="form-group">
                    <input type="text" placeholder="Field Of Study" name="fieldofstudy" value={fieldofstudy} onChange={(e) => onChange(e)}/>
                </div>
                <div className="form-group">
                    <h4>From Date</h4>
                    <input type="date" name="from" value={from} onChange={(e) => onChange(e)}/>
                </div>
                <div className="form-group">
                    <p>
                        <input type="checkbox" name="current" value={current} onChange={(e) => ontogglecurrent(e)} />{"  "}Current
                    </p>
                </div>
                <div className="form-group">
                    <h4>To Date</h4>
                    <input type="date" name="to" value={to} onChange={(e) => onChange(e)}/>
                </div>
                <div className="form-group">
                    <textarea
                        name="description"
                        cols="30"
                        rows="5"
                        value={description} onChange={(e) => onChange(e)}
                        placeholder="Program Description"
                    ></textarea>
                </div>
                <Button type='primary'>Submit</Button>
                <Link to='/dashboard'><Button type='secondary'>Go Back</Button></Link>
            </form>
        </Fragment>
    )
}

AddEducation.propTypes = {
    addEducation:PropTypes.func.isRequired,
}

export default connect(null,{addEducation})(withRouter(AddEducation))
