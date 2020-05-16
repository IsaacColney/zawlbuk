import React,{Fragment} from 'react'
import PropTypes from 'prop-types'
import Moment from 'react-moment';
import Button from '../DeleteButton';
import {connect} from 'react-redux';
import {deleteEducation} from '../../actions/profile';
const Education = ({education,deleteEducation}) => {
    const educations = education.map((edu) => (
        <tr key={edu._id}>
            <td>{edu.school}</td>
            <td>{edu.degree}</td>
            <td>
                <Moment format='DD/MM/YYYY'>{edu.from}</Moment> - {' '}
                { edu.to === null && edu.current? ('now') :
                (<Moment format='DD/MM/YYYY'>{edu.to}</Moment>)
                }
            </td>
            <td>
                <span><Button click={() => deleteEducation(edu._id)} type="secondary">Delete</Button></span>
            </td>
        </tr>
    ));
    return (
        <Fragment>
            <h2 className='my-2'>EDUCATION CREDENTIALS</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>School</th>
                        <th>Degree</th>
                        <th>Years</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {educations}
                </tbody>
            </table>
        </Fragment>
    )
}

Education.propTypes = {
    education:PropTypes.array,
    deleteEducation:PropTypes.func.isRequired,
}
export default connect(null,{deleteEducation})(Education);
