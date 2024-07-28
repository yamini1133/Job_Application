import React from 'react';
import '../Styles/AvatarComponent.css'

function AvatarComponent(props){
    return(
        <img className = 'avatarImage' src= {props.source}></img>
    )
}

export default AvatarComponent;