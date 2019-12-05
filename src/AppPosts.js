import React from 'react'
import {connect} from 'react-redux'
import PostCard from './PostCard'
import fetchPosts from './actions/posts'



class AppPosts extends React.Component {
    
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         error: null,
    //         isLoaded: false, 
    //         posts: []
    //     }
    // }

    buildList = (data)=>{
        console.log(data)
        this.props.onFetchPosts(data)
    }

    componentDidMount() {
        console.log('Posts did mount')
        let url = `https://jsonplaceholder.typicode.com/posts?userId=${this.props.match.params.userId}`
        if (this.props.posts.length === 0) {
        fetch(url)
        .then(response => response.json())
        .then(this.buildList)
        .catch(error => {
            this.setState({error:error})
        })
    }
    }
           
        render(){
            const {posts} = this.props
            const postList = posts.map(post => (
                <PostCard key={post.id} post = {post} id={post.id}/>         
            )
        )
            return(
                <div className="main">
                    <nav className="nav">
                        <h1>Posts</h1>
                    </nav>
                <section className="post-list">
                {postList}
            </section>
            </div>
                

            )
            }
        }
    
    const mapStateToProps = state => {
        return state
    }

    const mapActionsToState = {
        onFetchPosts: fetchPosts
    }

    
export default connect (mapStateToProps, mapActionsToState)(AppPosts)