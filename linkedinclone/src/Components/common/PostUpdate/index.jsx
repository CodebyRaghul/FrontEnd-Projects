import React,{useMemo, useState }from 'react'
import ModalComponents from "../Modal"
import "./index.scss"
import {PoststatusAPI,GetStatus} from '../../../api/firestoreAPI';
import PostCard from '../PostCard'; 
import { getCurrentTimeStamp } from '../../../helpers/useMoment';

export default function PostStatus() {
    let userEmail = localStorage.getItem("userEmail");
    const [modalOpen, setModalOpen] = useState(false);
    const [status, setStatus] = useState("");
    const [Allstatus, setAllstatus] = useState([]);
    
    const sendstatus = async()=>{
        let object ={
            status:status,
            date:getCurrentTimeStamp(), 
            userEmail:userEmail,
        }
        await PoststatusAPI(object);
        await setModalOpen(false);
        await setStatus("");
    }
    useMemo(()=>{
        GetStatus(setAllstatus);
    },[])
    console.log(Allstatus);
    return (
    <div className='post-status-main'> 
        <div className='post-status'>

        <button className='open-post-modal' 
            onClick={() => setModalOpen(true)} >
            Start a post
        </button> 

        </div>
        <ModalComponents 
            modalOpen={modalOpen}
            setModalOpen={setModalOpen}
            status={status}
            setStatus={setStatus}
            sendstatus={sendstatus}
            /> 
        <div>
            {Allstatus.map((post)=>{
                // const myobj = ; 
                return ( <PostCard post={post}/> );
            })}
            
        </div>      
    </div>
  )
}

