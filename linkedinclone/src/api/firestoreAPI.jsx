import {firestore} from "../firebaseConfig"
import { addDoc, collection } from "firebase/firestore"
import toast from "react-toastify";

let dbRef = collection(firestore,"posts");
export const PoststatusAPI =(status)=>{
    
    let object ={
        status:status,
    }
    addDoc( dbRef, object )
    .then( (res)=> {
        console.log(res);
        toast.success("Document has been added succesfully")
    })
    .catch((err)=> {
        console.log(err);
        toast.error("Failed");
    })

}