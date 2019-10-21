import React from 'react'

import PostCard from './PostCard'



class AppPosts extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false, 
            posts: []
        }
    }

    buildList = (data)=>{
        console.log(data)
        this.setState({
            posts: data,
            isLoaded: true
        })
    }

    componentDidMount() {
        console.log('Posts did mount')
        let url = `https://jsonplaceholder.typicode.com/posts?userId=${this.props.match.params.userId}`
        fetch(url)
        .then(response => response.json())
        .then(this.buildList)
        .catch(error => {
            this.setState({error:error})
        })
    }
           
        render(){
            const {error, isLoaded, posts} = this.state
            const postList = posts.map(post => (
                <PostCard key={post.id} post = {post} id={post.id}/>
              
            )
            )

            if(error){
            return <div>Error: {error.message}</div>
        } else if(!isLoaded){
            return <div>Loading...</div>
        } else {

        

            return(
                <section className="post-list">
                {postList}
            </section>
                

            )
            }
        }
    }
    

    export default AppPosts