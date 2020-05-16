import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Moment from 'react-moment';
import Button from '../Button';
import DelButton from '../DeleteButton';
import {starPost,unstarPost,deletepost} from '../../actions/post';
const PostsItem = ({auth,post:{_id,text,name,title,avatar,stars,date,comments,user,tags},starPost,unstarPost,deletepost}) => {
    const starupdate = (id) => {
        if(!auth.user){
            return null;
        }
        if(!auth.loading && stars.filter(el => el.user===auth.user._id).length===0){
            starPost(id);
        }
        else if(!auth.loading){
            unstarPost(id);
        }
    }
    let displaystar = (<i className='far fa-star'></i>)
    if(auth && auth.isAuthenticated && !auth.loading){
        if(stars.filter(el => el.user===auth.user._id).length!==0){
            displaystar = (<i className="fas fa-star"></i>)
        }
    } 
    return ( 
        <div className="post bg-dark p-1 my-1">
            <div>
                <Link to={`/profile/${user}`}>
                    <img
                        className="round-img"
                        src={avatar}
                        alt=""
                    />
                    <h4>{name}</h4>
                </Link>
            </div>
            <div>
                <h3 style={{color:'#90a39b'}}>{title}</h3>
                <p className="my-1">
                    {text.slice(0,150)+' ...'}
                </p>

                <p className="post-date">
                    Posted on <Moment format='DD/MM/YYYY'>{date}</Moment>
                </p>
                <span onClick={e => starupdate(_id)}>
                    <Button>
                        {displaystar}{' '}
                        {stars.length>0 && <span>{stars.length}</span>}
                    </Button>
                </span>
                <Link to={`/posts/${_id}`}><Button type='primary'>
                    View Full Article and Discussions
                    </Button>
                </Link>
                {auth.isAuthenticated && auth.user && auth.user._id===user && (
                    <DelButton type="secondary" click={e => deletepost(_id)}>
                        <i className="fas fa-times"></i>
                    </DelButton>                            
                    )
                }
            </div>
        </div>    
        )
    
}

PostsItem.propTypes = {
    post:PropTypes.object.isRequired,
    auth:PropTypes.object,
    starPost:PropTypes.func.isRequired,
    unstarPost:PropTypes.func.isRequired,
    deletepost:PropTypes.func.isRequired,
}
const mapStatetoProps = state => ({
    auth:state.auth
})
export default connect(mapStatetoProps,{starPost,deletepost,unstarPost})(PostsItem);
