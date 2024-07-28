import React,{useState} from 'react';
import '../Styles/MainComponent.css';
import SkillTableComponent from './SkillTableComponent';
//import Button from './Button.js';

function MainComponent(props){
    console.log('maincomponent')
    const[addedRow,setAddedRow] = useState([]);
    const [searchCriteria,setSearchCriteria] = useState('');
    const [isSearchDisabled,setIsSearchDisabled] = useState(false);
    const [searchValue, setSearchValue]= useState('');

    function onAddSkillHandler(){
        let rowObj = {
            skill:'',
            rating:''
       }
       setAddedRow([...addedRow,rowObj])
    }

    function onDeleteRow(index){
        let leftOverRows = addedRow.filter((item,ind)=>{
            let included = ind!==index?true:false;
            return included;
        });
        setAddedRow([...leftOverRows])
    }

    function onSearchChange(event){
        if(searchCriteria!=='Skill' && searchCriteria!=='Rating'){
            setSearchValue('');
            alert('Select appropriate search criteria.');
        }

        else{
            setSearchValue(event.target.value);
        }
    }

    function onDropDownSelect(event){
        setSearchCriteria(event.target.value);
    }

    function onClosePopUp(){
        props.onClosePopUp();
    }

    function onApplySkillsHandler(){
        props.onApplySkillsHandler(addedRow,props.selectedIndex)
    }

    return(
        <div className= 'mainComponentOuterBody'>
            <div className = 'searchAndDropDown'>
                <input type = 'text' placeholder='Search skills...' onChange ={onSearchChange} value={searchValue}></input>
                <select onChange = {onDropDownSelect}>
                    <option disabled selected>Select Skill or Rating</option>
                    <option>Skill</option>
                    <option>Rating</option>
                </select>
            </div>
            <SkillTableComponent 
                newRow={addedRow}
                searchValue ={searchValue}
                searchCriteria={searchCriteria}
                onDeleteRow = {onDeleteRow}>
            </SkillTableComponent>
            <div className = 'btnContainer'>
                <button className = 'btn' onClick = {onAddSkillHandler}>Add Skill</button>
                <button className = 'btn' onClick = {onApplySkillsHandler}> Apply</button>
                <button className = 'btn' onClick = {onClosePopUp}> Cancel</button>
            </div>
        </div>
    )
}

export default MainComponent;