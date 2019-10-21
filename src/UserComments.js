import React from 'react'
import './PostCard.css'


class UserComments extends React.Component {
    render() {
    return(
        <div className="PostCard" >
             <div className="card-body">      
                <p className="post-title">{this.props.comment.name}</p>
                <p className="post-body">{this.props.comment.body}</p>  
            </div>
        </div>

        
    )
    }
}

export default UserComments