import React,{useState} from 'react';
import '../Styles/ModalComponent.css';  
import AvatarComponent from './AvatarComponent.js';
import MainComponent from './MainComponent.js';

function ModalComponent(props){
    let avatarList = props.avatarList;
    let index = props.selectedIndex;
    let source;

    function onClosePopUp(){
        props.onClosePopUp();
    }

    function onApplySkillsHandler(addedRow,selectedIndex){
        props.onApplySkillsHandler(addedRow,selectedIndex)
    }

    avatarList.forEach((item,ind)=>{
        if(ind === index){
            source = item.url;
        }
    })

    return(
        <>
        <div className= 'modalComponentOuterBody' onClick = {onClosePopUp}></div>
        <div className= 'contentContainer'>
            <div className = 'imageContainer'>
                <AvatarComponent source = {source}></AvatarComponent>
            </div>
            <div className = 'mainContainer'>
                <MainComponent onClosePopUp={onClosePopUp} onApplySkillsHandler={onApplySkillsHandler} selectedIndex = {props.selectedIndex}></MainComponent>
            </div>
        </div>
        
        </>
    )
}

export default ModalComponent;