import React,{useState,useEffect} from 'react';
import '../Styles/CardComponent.css';
import AvatarComponent from './AvatarComponent.js';

function CardComponent(props){
    let finalizedSkills = props.finalizedSkills
    
    let skillLabel = finalizedSkills.map((item,index)=>{
        if(props.index===item.index && finalizedSkills.length>0 && item.finalSkills!==' '){
            return <label className = 'skillLabel'> {item.finalSkills}</label>
        }
    })

    function onEditProfileClick(index){
        props.onEditProfileClick(index);
    }
    
    return(
        <div className = 'cardComponentOuterBody'>
            <AvatarComponent source={props.avatarSource}></AvatarComponent>
            <button className = 'editBtn' onClick={()=>onEditProfileClick(props.index)}>Edit Profile</button>
            <label>{skillLabel}</label>
        </div>
    )
}

export default CardComponent;