import React from 'react'
import './PostCard.css'
import './CommentsCard.css'


class UserComments extends React.Component {
    render() {
    return(
        <div className="CommentCard" >
             <div className="card-body">      
                <p className="comment-title">Email: {this.props.comment.email}</p>
                <p className="comment-body">{this.props.comment.body}</p>  
            </div>
        </div>

        
    )
    }
}

export default UserComments