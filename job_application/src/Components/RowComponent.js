import React,{useState} from 'react';
import '../Styles/RowComponent.css';
import { MdOutlineDeleteOutline } from "react-icons/md";
import TableRow from './TableRow.js';
    

function RowComponent(props){
    let searchValue = props.searchValue;
    let newRow = props.newRow;
    let searchCriteria = props.searchCriteria;
    console.log('rowcomponent');
    const [tableRows,setTableRows] = useState([newRow]);
    const [changeToUpdate,setChangeToUpdate] = useState(false);
    const [dataIndex,setDataIndex] = useState([]);
    const [changeToEdit,setChangeToEdit] = useState(false);
    const [updateIndex,setUpdateIndex] = useState([]);
    const [readOnly,setReadOnly] = useState(false);
    const [readOnlyIndex,setReadOnlyIndex] = useState([]);
    const [skill,setSkill] = useState('');
    const [rating,setRating] = useState('');
    const [skillsArr,setSkillsArr] = useState([]);

    function onSkillChange(event,index){
        if(event.target.value.length>0){
            setChangeToUpdate(true);
            setDataIndex([...dataIndex,index]);
        }
        setSkill(event.target.value);
        newRow[index].skill = event.target.value;
        setSkillsArr([...skillsArr,skill])
    }

    function onRatingChange(event,index){
        if((event.target.value>5 || event.target.value<1) &&(event.target.value!=='') ){
            alert('Enter appropriate rating value.');
        }

        else{
            setRating(event.target.value);
            newRow[index].rating = event.target.value;
        }
    }

    function onActionBtnClick(index,text){
        
        if(text==='Update'){
            setReadOnly(true);
            setChangeToEdit(true);
            setUpdateIndex([...updateIndex,index]);
            setReadOnlyIndex([...readOnlyIndex,index]);
        }

        else if(text ==='Edit'){
            setReadOnly(false);
        }
    }

    function setActionButtonText(i){
        if(changeToEdit &&  updateIndex.includes(i)){
            return 'Edit';
        }

        else if(changeToUpdate && dataIndex.includes(i)){
            return 'Update';
        }

        else{
            return 'Apply';
        }
    }

    function setReadOnlyAttribute(index){
        if(readOnly && readOnlyIndex.includes(index)){
            return true;
        }
    }

    function onDeleteRow(index){
            props.onDeleteRow(index);
    }

    function setTableData(){
        let latestRow = newRow.map((r,i)=>{
            if(searchCriteria==='Skill' && searchValue){
                if(r.skill.includes(searchValue)){
                    return  <tr>
                                <td>
                                    <input type = 'text' placeholder='skill' onChange = {(e)=>onSkillChange(e,i)  } readOnly={setReadOnlyAttribute(i)} value = {r.skill}></input>
                                </td>
                                <td>
                                    <input type = 'number' placeholder='rating(min:1 max:5)' max= '5' onChange = {(e)=>onRatingChange(e,i)} readOnly={setReadOnlyAttribute(i)} value = {r.rating} ></input>
                                </td>
                                <td>
                                    <button className = 'actionBtn' onClick={()=>onActionBtnClick(i,setActionButtonText(i))}>
                                    {setActionButtonText(i)}  
                                    </button>
                                    <button className = 'actionBtn' onClick={()=>onDeleteRow(i)}><MdOutlineDeleteOutline></MdOutlineDeleteOutline></button>
                                </td>
                            </tr>
                }
            }

            else if(searchCriteria==='Rating' && searchValue){
                if(r.rating===searchValue){
                    return  <tr>
                                <td>
                                    <input type = 'text' placeholder='skill' onChange = {(e)=>onSkillChange(e,i)  } readOnly={setReadOnlyAttribute(i)} value = {r.skill}></input>
                                </td>
                                <td>
                                    <input type = 'number' placeholder='rating(min:1 max:5)' max= '5' onChange = {(e)=>onRatingChange(e,i)} readOnly={setReadOnlyAttribute(i)} value = {r.rating} ></input>
                                </td>
                                <td>
                                    <button className = 'actionBtn' onClick={()=>onActionBtnClick(i,setActionButtonText(i))}>
                                    {setActionButtonText(i)}  
                                    </button>
                                    <button className = 'actionBtn'><MdOutlineDeleteOutline></MdOutlineDeleteOutline></button>
                                </td>
                            </tr>
                }
            }

            else{
            return  <tr >
                <td>
                    <input type = 'text' placeholder='skill' onChange = {(e)=>onSkillChange(e,i)  } readOnly={setReadOnlyAttribute(i)} value = {r.skill}></input>
                </td>
                <td>
                    <input type = 'number' placeholder='rating(min:1 max:5)' max= '5' onChange = {(e)=>onRatingChange(e,i)} readOnly={setReadOnlyAttribute(i)} value = {r.rating} ></input>
                </td>
                <td>
                    <button className = 'actionBtn' onClick={()=>onActionBtnClick(i,setActionButtonText(i))}>
                      {setActionButtonText(i)}  
                    </button>
                    <button className = 'deleteBtn' onClick={()=>onDeleteRow(i)}><MdOutlineDeleteOutline></MdOutlineDeleteOutline></button>
                </td>
            </tr>
            }
    
        });

        return latestRow;

    }

       
    
    return(
        <React.Fragment>{setTableData()}</React.Fragment>
    )

}

export default RowComponent;