import React from 'react';
import './ProfileCard.css'
import image from './myAvatar.png'
import './PostCard'
import {NavLink} from 'react-router-dom'

 class ProfileCard extends React.Component {

   
    render(){ 
       
        const ViewDetail = `/users/${this.props.user.id}`

    return (
        <div className="ProfileCard" >
            <div className="card-avatar">
                 <img src={image} alt=""/>
            </div>
            <div className="card-body">
            <p className="profile-name">
            {this.props.user.name}<br />
            <span className="profile-login">{this.props.user.username}</span>
            </p>

            <p className="profile-bio">{this.props.user.email}</p>

          
            <NavLink to={ViewDetail}>ViewDetails</NavLink>
        

            </div>
        </div>
    )

}
}

export default ProfileCard