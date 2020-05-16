import React,{Fragment,useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getPosts} from '../../actions/post';
import Spinner from '../Layout/Spinner';
import PostsItem from './PostsItem';
const Posts = ({post:{posts,loading},getPosts}) => {
    useEffect(() => {
        window.scrollTo(0, 0);
        getPosts();
    },[getPosts]);
    return (!posts && loading ? <Spinner/> : (<Fragment>
        <h1 className='large text-primary'>Articles</h1>
        <p className='lead'>
            <i className='fas fa-user'></i> Welcome to Zawlbûk community
        </p>
        {posts && posts.length !== 0 &&
        <div className='posts'>
            {posts.map(post => (
                <PostsItem key={post._id} post={post}/>
            ))}
        </div>
        }
    </Fragment>))
}

Posts.propTypes = {
    getPosts:PropTypes.func.isRequired,
    post:PropTypes.object.isRequired,
}
const mapStatetoProps = state => ({
    post:state.post
})

export default connect(mapStatetoProps,{getPosts})(Posts);
