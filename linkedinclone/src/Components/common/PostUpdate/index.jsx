import React,{useMemo, useState }from 'react'
import ModalComponents from "../Modal"
import "./index.scss"
import { getuniqueId } from '../../../helpers/uniqueId';
import {PoststatusAPI,GetStatus} from '../../../api/firestoreAPI';
import PostCard from '../PostCard'; 
import { getCurrentTimeStamp } from '../../../helpers/useMoment';

export default function PostStatus({currentUser}) {
    // let userEmail = localStorage.getItem("userEmail");
    const [modalOpen, setModalOpen] = useState(false);
    const [status, setStatus] = useState("");
    const [Allstatus, setAllstatus] = useState([]);
    // console.log(currentUser.object.useID)
    const sendstatus = async()=>{
        let object ={
            status:status,
            date:getCurrentTimeStamp(), 
            userID: currentUser.object.useID,
            userEmail:currentUser.object.email,
            userName: currentUser.object.name,
            postId: getuniqueId(),
        }
        await PoststatusAPI(object);
        await setModalOpen(false);
        await setStatus("");
    }
    useMemo(()=>{
        GetStatus(setAllstatus);
    },[])
    // console.log(Allstatus);
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

