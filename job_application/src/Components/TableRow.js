import React from 'react';

function TableRow(props){
    return (
        <>
            <tr>
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
        </>
    )
}

export default TableRow;