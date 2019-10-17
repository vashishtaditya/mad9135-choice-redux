import React from 'react'
import {NavLink} from 'react-router-dom'

class AppHeader extends React.Component{
    render(){
        return (
            <nav>
                <NavLink exact to="/">Users</NavLink>
        
            </nav>            
        );
    }
}

export default AppHeader