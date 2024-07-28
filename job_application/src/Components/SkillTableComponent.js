import React,{useState} from 'react';
import '../Styles/SkillTableComponent.css';
import RowComponent from './RowComponent.js';

function SkillTableComponent(props){
    console.log('skilltablecomponent')

    function onDeleteRow(index){
        props.onDeleteRow(index);
    }
    let newRow=<RowComponent 
                    newRow = {props.newRow}
                    searchValue = {props.searchValue} 
                    searchCriteria = {props.searchCriteria}
                    onDeleteRow= {props.onDeleteRow} >
                </RowComponent>;

    return(
        <div className='SkillTableComponentOuterBody'>
            <div className = 'skillTableComponent'>
                <table className='skillTable'>
                    <tr>
                        <th colspan='3'>Skills and Rating</th>
                    </tr>
                        {newRow}
                </table>
            </div>
            
            
        </div>
    )
}

export default SkillTableComponent;