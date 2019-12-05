import React from 'react'
import {connect} from 'react-redux'
import ProfileCard from './ProfileCard'
import fetchUsers from './actions/index'
  
class AppUsers extends React.Component {

    buildList = (data)=>{
        this.props.onFetchUsers(data)
    }

    loadUsers() {

        let url = 'https://jsonplaceholder.typicode.com/users'
        fetch(url)
        .then(response => response.json())
        .then(this.buildList)
        .catch(error => {
            this.setState({error:error})
        })
    }


    componentDidMount() {
        console.log('did mount')
        this.loadUsers()
    }


    render () {
       
        
        const {users} = this.props;
        const userList = users.map(user => (
            <ProfileCard key={user.id} user = {user} id={user.id}/>   
        )
        )                 
        console.log(this.props)
        
     
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
    const mapStateToProps = state => {
       
        return state
    }

    const mapActionsToState = {
        onFetchUsers: fetchUsers
    }

    
export default connect (mapStateToProps, mapActionsToState)(AppUsers)