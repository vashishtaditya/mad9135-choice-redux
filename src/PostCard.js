import React from 'react'
import './PostCard.css'
import {NavLink} from 'react-router-dom'


class PostCard extends React.Component {
    render() {
        const toComments = `/comments/${this.props.post.id}`
        
    return(
        <div className="PostCard" >
             <div className="card-body">      
                <p className="post-title">{this.props.post.title}</p>
                <p className="post-body">{this.props.post.body}</p>  
                <NavLink to={toComments}>View Comments</NavLink>
            </div>
           
        </div>

        
    )
    }
}

export default PostCard