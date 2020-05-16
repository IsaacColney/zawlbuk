import React,{Fragment,useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getPosts} from '../../actions/post';
import Spinner from '../Layout/Spinner';
import PostsItem from './PostsItem';
import {Link} from 'react-router-dom';
import Button from '../Button';
const MyPosts = ({post:{posts,loading},getPosts,auth:{user}}) => {
    useEffect(() => {
        window.scrollTo(0, 0);
        getPosts();
    },[getPosts]);
    return (!posts && loading ? <Spinner/> : (<Fragment>
        <Link to='/addpost'><Button type='primary'>Add Article</Button></Link>
        <h1 className='large text-primary'>My Articles</h1>
        <p className='lead'>
            <i className='fas fa-user'></i> Welcome to Zawlbûk community
        </p>

        {posts && posts.length !== 0 && user &&
        <div className='posts'>
            {posts.filter(post => post.user === user._id ).map(post => (
                <PostsItem key={post._id} post={post}/>
            ))}
        </div>
        }
    </Fragment>))
}

MyPosts.propTypes = {
    getPosts:PropTypes.func.isRequired,
    post:PropTypes.object.isRequired,
    auth:PropTypes.object.isRequired,
}
const mapStatetoProps = state => ({
    post:state.post,
    auth:state.auth
})

export default connect(mapStatetoProps,{getPosts})(MyPosts);
