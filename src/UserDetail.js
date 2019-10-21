import React from 'react'
import './ProfileCard.css'
import image from './myAvatar.png'
import {NavLink} from 'react-router-dom'

class UserDetail extends React.Component{


    render(){
        const toPost = `/posts/${this.props.detail.id}`
        const toTodos = `/todos/${this.props.detail.id}`
        const toComments = `/comments${this.props.detail.id}`
        return(
            <div className="ProfileCard" >
            <div className="card-avatar">
                 <img src={image} alt=""/>
            </div>
            <div className="card-body">
            <p className="profile-name">
            {this.props.detail.name}<br />
            <span className="profile-login">{this.props.detail.username}</span>
            </p>

            <p className="profile-bio">{this.props.detail.email}</p>

            <NavLink to={toPost} >View Post</NavLink>
            <NavLink to={toTodos} >View Todos</NavLink>
            <NavLink to={toComments}>View Comments</NavLink>
        

            </div>
        </div>
        )
    }
}

export default UserDetail