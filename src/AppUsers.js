import React from 'react'
import ProfileCard from './ProfileCard'

  
class AppUsers extends React.Component {
    constructor(props) {
        console.log("hello")
        super(props);
        this.state = {         
            error: null,
            isLoaded: false,
            list: []
        }
    }

    buildList = (data)=>{
        console.log(data)
        this.setState({
            list: data,
            isLoaded: true
        })
    }

    componentDidMount() {
        console.log('did mount')
        let url = 'https://jsonplaceholder.typicode.com/users'
        fetch(url)
        .then(response => response.json())
        .then(this.buildList)
        .catch(error => {
            this.setState({error:error})
        })
    }

    render () {
        console.log('render')
        const {error, isLoaded, list} = this.state;
        const userList = list.map(user => (
            <ProfileCard key={user.id} user = {user} id={user.id}/>
          
        )
        )                  
     
        if(error){
            return <div>Error: {error.message}</div>
        } else if(!isLoaded){
            return <div>Loading...</div>
        } else {
        return (
            <div>
                <nav className="nav">
                    <h1>Users</h1>
                </nav>
           <section className="user-list">
               {userList}
           </section>
            </div>
        );
    }
    }
}

export default AppUsers