import React,{useMemo, useState }from 'react'
import ModalComponents from "../Modal"
import "./index.scss"
import {PoststatusAPI,GetStatus} from '../../../api/firestoreAPI';
import PostCard from '../PostCard'; 
// import { getCurrentTime } from '../../../helpers/useMoment';

export default function PostStatus() {
    const [modalOpen, setModalOpen] = useState(false);
    const [status, setStatus] = useState("");
    const [Allstatus, setAllstatus] = useState([]);
    
    const sendstatus = async()=>{
        await PoststatusAPI(status);
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

