import React from 'react'
import './PostCard.css'


class PostCard extends React.Component {
    render() {
    return(
        <div className="PostCard" >
             <div className="card-body">      
                <p className="post-title">{this.props.post.title}</p>
                <p className="post-body">{this.props.post.body}</p>  
            </div>
        </div>

        
    )
    }
}

export default PostCard