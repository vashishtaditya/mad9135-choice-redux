import React from 'react'
import UserComments from './UserComments'
import {connect} from 'react-redux'
import fetchComments from './actions/comments';



class AppComments extends React.Component{

    buildList = (data)=>{
        console.log(data)
        this.props.onFetchComments(data)
    }

    componentDidMount() {
        console.log('Details did mount')
        if (this.props.comments.length === 0) {
        let url = `https://jsonplaceholder.typicode.com/comments?postId=${this.props.match.params.ID}`
        fetch(url)
        .then(response => response.json())
        .then(this.buildList)
        .catch(error => {
            this.setState({error:error})
        })
    }
    }

    render(){

        const {comments} = this.props
        console.log(comments)
        const commentSection = comments.map(comment => (
            <UserComments key={comment.id} comment = {comment} id={comment.id}/>
          
        )
        )
       
        return(
            <div>
                <nav className="nav">
                    <h1>Comments</h1>
                    </nav>
            <section className="user-detail">
                {commentSection}
            </section>
            </div>
        )
    }
    }

const mapStateToProps = state => {
       
    return state
}

const mapActionsToState = {
    onFetchComments: fetchComments
}


export default connect (mapStateToProps, mapActionsToState)(AppComments)