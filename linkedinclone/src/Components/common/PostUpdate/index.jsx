import React,{useState }from 'react'
import ModalComponents from "../Modal"
import "./index.scss"
import { PoststatusAPI } from '../../../api/firestoreAPI';
 
export default function PostStatus() {
    const [modalOpen, setModalOpen] = useState(false);
    const [status, setStatus] = useState("");
    const sendstatus = ()=>{
         PoststatusAPI(status);
    }
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
        
    </div>
  )
}

