import {db} from "../firebaseConfig"
import { addDoc, collection, doc, onSnapshot, updateDoc } from "firebase/firestore"
import {toast} from "react-toastify";
// import { getCurrentTimeStamp } from "../helpers/useMoment";

let dbRef = collection(db,"posts");
let userRef = collection(db,"users");
 
export const PoststatusAPI =(object)=>{
    
    addDoc( dbRef, {object} )
    .then( (res)=> {
        console.log(res);
        toast.success("Post has been added succesfully");
    })
    .catch((err)=> {
        console.log(err);
        toast.error("Failed"); 
    })
    // console.log(getCurrentTimeStamp());

};
export const GetStatus = (setAllstatus)=>{
    onSnapshot(dbRef, (response)=>{
        setAllstatus(response.docs.map( (docs)=>{ 
            return{...docs.data(), id: docs.id};
        }));  
    })

};
export const postUserData = (object)=>{
    addDoc( userRef, {object} )
    .then( ()=> {})
    .catch((err)=> {
        toast.error("Adding a data Failed");
        console.log(err);   
    })

};
export const getCurrentUser = ({setcurrentUser}) => {
    onSnapshot(userRef, (response) => {
        setcurrentUser(
        response.docs
          .map((docs) => {
            return { ...docs.data(), id: docs.id };
          })
        //   === localStorage.getItem("userEmail")
          .filter((item) => {
            return item.object.email === localStorage.getItem("userEmail");
          })[0]
      );
    }); 
  };
  export const editprofile = (userid,payload)=>{
    let usertoedit = doc(userRef,userid)
    updateDoc(usertoedit,payload)
    .then( ()=> {
      toast.success("Document has been updated succesfully");
    })
    .catch((err)=> {
        toast.error("Adding a data Failed");
        console.log(err);   
    })
  }
// export default PoststatusAPI;
// export default GetStatus;