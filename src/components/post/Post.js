import React,{useEffect, Fragment} from 'react';
import {connect} from 'react-redux';
import Spinner from '../Layout/Spinner';
import {getPost} from '../../actions/post';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import Moment from 'react-moment';
import CommentForm from './CommentForm';
import CommentItems from './CommentItems';

const Post = ({auth,post:{post,loading},getPost,match}) => {
    useEffect(()=>{
        window.scrollTo(0, 0);
        getPost(match.params.id);
    },[getPost]);



    return loading || post==null ? <Spinner/> :(<Fragment>
        <div className="post bg-dark p-1 my-1">
            <div>
                <Link to={`/profile/${post.user}`}>
                    <img
                        className="round-img"
                        src={post.avatar}
                        alt=""
                    />
                    <h4>{post.name}</h4>
                </Link>
            </div>
            <div>
                <h2 style={{color:'#90a39b'}}>{post.title}</h2>
                <p className="my-1">
                    {post.text}
                </p>
                <p className="post-date">
                    Posted on <Moment format='DD/MM/YYYY'>{post.date}</Moment>
                </p>

                {post.stars.length>0 && <span><i className='fas fa-star' style={{color:'#d1b528'}}></i>{post.stars.length}</span>}

            </div>
        </div>

        <CommentForm postId={post._id}/>
        {post.comments  && post.comments.length !==0 && <CommentItems postId={post._id} comments={(post.comments)} postuserid={post.user} />}
    </Fragment>)
        
}

Post.propTypes = {
    getPost:PropTypes.func.isRequired,
    post:PropTypes.object.isRequired,
    auth:PropTypes.object.isRequired,
}
const mapstatetoprops = state => ({
    post:state.post,
    auth:state.auth
})

export default connect(mapstatetoprops,{getPost})(Post);
