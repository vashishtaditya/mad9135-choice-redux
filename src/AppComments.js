import React from 'react'
import UserComments from './UserComments'



class AppUserDetail extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            
            error: null,
            isLoaded: false,
            comments: []
        }
    }

    buildList = (data)=>{
        console.log(data)
        this.setState({
            comments: data,
            isLoaded: true
        })
    }




    componentDidMount() {
        console.log('Details did mount')
        let url = `http://jsonplaceholder.typicode.com/comments?postId=${this.props.match.params.ID}`
        fetch(url)
        .then(response => response.json())
        .then(this.buildList)
        .catch(error => {
            this.setState({error:error})
        })
    }

    render(){

        const {error, isLoaded, comments} = this.state
        const commentSection = comments.map(comment => (
            <UserComments key={comment.id} comment = {comment} id={comment.id}/>
          
        )
        )
        if(error){
            return <div>Error: {error.message}</div>
        } else if(!isLoaded){
            return <div>Loading...</div>
        } else {
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
}




export default AppUserDetail