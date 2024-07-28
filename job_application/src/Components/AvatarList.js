import React,{useEffect,useState} from 'react';
import CardComponent from './CardComponent';
import ModalComponent from './ModalComponent.js';
import '../Styles/AvatarList.css';

function AvatarList(){
    const[avatarList,setAvatarList] = useState([]);
    const[showModal,setShowModal] = useState(false);
    const[selectedIndex,setSelectedIndex] =useState('');
    const [finalizedSkills, setFinalizedSkills] = useState([]);

    useEffect(()=>{
        fetch('https://api.slingacademy.com/v1/sample-data/photos')
        .then((response)=>response.json())
        .then((data)=>setAvatarList([...avatarList,...data.photos]))
    },[])

    useEffect(()=>{
        if(showModal){
            document.body.style.overflow = 'hidden';
            window.addEventListener('keydown', close);
        }
    },[showModal])

    function onEditProfileClick(index){
        console.log('reached modal');
        setSelectedIndex(index);
        setShowModal(true);
        
    }

    const close = (event) => {
        if(event.keyCode === 27){
            onClosePopUp();
        }
    }

    function onClosePopUp(){
        if(window.confirm("Do you want to leave without entering the skills?")){
            setShowModal(false);
            document.body.style.overflow = 'unset';
            window.removeEventListener('keydown', close);
        }   
     }

    function onApplySkillsHandler(addedRow,selectedIndex){
        
        addedRow.forEach((item,index)=>{
            let text =' '+ item.skill;
            setFinalizedSkills((prevState)=>[...prevState,{finalSkills:text,index:selectedIndex}])
        })
        setShowModal(false);
    }

    const Modal = ()=>{ return <ModalComponent 
                                    selectedIndex={selectedIndex} 
                                    avatarList = {avatarList}
                                    onApplySkillsHandler={onApplySkillsHandler}
                                    onClosePopUp={onClosePopUp}>
                                </ModalComponent>} 

    
    let card = avatarList.map((item,index)=> {
        return <CardComponent 
                    avatarSource = {item.url} 
                    index={index}
                    onEditProfileClick ={onEditProfileClick}
                    finalizedSkills = {finalizedSkills}
                    selectedIndex = {selectedIndex}>
                </CardComponent>
    })

    return(
        <div className  = 'avatarListOuterBody'>
            <div className='title'>Job Applicants Skills Portal</div>
            <div className  = 'avatarListContainer'>
                <div className = 'cardContainer'>
                    {card}
                </div>
                <div className= 'modalContainer'>
                    {showModal?<Modal></Modal>:null}
                </div>
            </div>
            
        </div>
    )
}

export default AvatarList;