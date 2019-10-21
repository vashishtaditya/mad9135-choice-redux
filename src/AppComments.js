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
        let url = `https://jsonplaceholder.typicode.com/comments?postId=${this.props.match.params.id}`
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
            <section className="user-detail">
                {commentSection}
            </section>

        )
    }
    }
}




export default AppUserDetail