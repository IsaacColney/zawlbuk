import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {removecomment} from '../../actions/post';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
const CommentItem = ({auth,postId,comment:{_id,user,avatar,text,name,date},removecomment,postuserid}) => {
    const onClick = (e) => {
        removecomment(postId,_id);
    }
    return !auth.loading  && (
        <div className="post bg-white p-1 my-1">
        <div>
          <Link to={`/profile/${user}`}>
            <img
              className="round-img"
              src={avatar}
              alt=""
            />
            <h5>{name}</h5>
          </Link>
        </div>
        <div>
          <p className="my-1">
            {text}
          </p>
           <p className="post-date">
            Commented on <Moment format='DD/MM/YYYY'>{date}</Moment>
          </p>
          {!auth.loading && auth.user && (auth.user._id===user||auth.user._id===postuserid)&&(
              <i className="fas fa-trash-alt" onClick = {(e) => onClick(e)} style={{color:'red'}}></i>
          )}
        </div>
        </div>   
    )
}

CommentItem.propTypes = {
    auth:PropTypes.object.isRequired,
    comment:PropTypes.object.isRequired,
    removecomment:PropTypes.func.isRequired,
}
const mapstatetoprops = state => ({
    auth:state.auth
})

export default connect(mapstatetoprops,{removecomment})(CommentItem);
