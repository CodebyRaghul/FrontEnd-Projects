import {db} from "../firebaseConfig"
import { addDoc, collection, onSnapshot } from "firebase/firestore"
import {toast} from "react-toastify";

let dbRef = collection(db,"posts");
export const PoststatusAPI =(status)=>{

    let object ={
        status:status,
    }
    addDoc( dbRef, {object} )
    .then( (res)=> {
        console.log(res);
        toast.success("Document has been added succesfully");
    })
    .catch((err)=> {
        console.log(err);
        toast.error("Failed"); 
    })

};
export const GetStatus = (setAllstatus)=>{
    onSnapshot(dbRef, (response)=>{
        setAllstatus(response.docs.map( (docs)=>{ 
            return{...docs.data(), id: docs.id};
        }));  
    })

};
// export default PoststatusAPI;
// export default GetStatus;