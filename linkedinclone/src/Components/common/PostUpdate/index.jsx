import React,{useMemo, useState }from 'react'
import ModalComponents from "../Modal"
import "./index.scss"
import {PoststatusAPI,GetStatus} from '../../../api/firestoreAPI';
 
export default function PostStatus() {
    const [modalOpen, setModalOpen] = useState(false);
    const [status, setStatus] = useState("");
    const [Allstatus, setAllstatus] = useState([]);
    const sendstatus = ()=>{
        PoststatusAPI(status);
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
            {Allstatus.map((posts)=>{
                return (
                    <>
                    <p> {posts.id}</p>
                    </>
                );
            })}
            
        </div>      
    </div>
  )
}

