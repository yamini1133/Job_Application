import React,{useState,useEffect} from 'react';
import '../Styles/CardComponent.css';
import AvatarComponent from './AvatarComponent.js';

function CardComponent(props){
    let finalizedSkills = props.finalizedSkills
    
    let skillLabel = finalizedSkills.map((item,index)=>{
        if(props.index===item.index && finalizedSkills.length>0){
            return <label className = 'skillLabel'>Skill: {item.finalSkills}</label>
        }
    })

    function onEditProfileClick(index){
        props.onEditProfileClick(index);
    }
    
    return(
        <div className = 'cardComponentOuterBody'>
            <AvatarComponent source={props.avatarSource}></AvatarComponent>
            <button className = 'editBtn' onClick={()=>onEditProfileClick(props.index)}>Edit Profile</button>
            {skillLabel}
        </div>
    )
}

export default CardComponent;