import React from 'react'
import {NavLink} from 'react-router-dom'

class AppHeader extends React.Component{
    render(){
        return (
            
                <NavLink exact to="/users">Users</NavLink>
        
                     
        );
    }
}

export default AppHeader