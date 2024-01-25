import {db} from "../firebaseConfig"
import { addDoc, collection, onSnapshot } from "firebase/firestore"
import {toast} from "react-toastify";
// import { getCurrentTimeStamp } from "../helpers/useMoment";

let dbRef = collection(db,"posts");
let userRef = collection(db,"users");
 
export const PoststatusAPI =(object)=>{
    
    addDoc( dbRef, {object} )
    .then( (res)=> {
        console.log(res);
        toast.success("Document has been added succesfully");
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
        console.log(err);   
    })

};
export const getCurrentUser = (setcurrentUser) => {
    onSnapshot(userRef, (response) => {
        setcurrentUser(
        response.docs
          .map((docs) => {
            return { ...docs.data(), id: docs.id };
          })
          .filter((item) => {
            return item.email === localStorage.getItem("userEmail");
          })[0]
      );
    });
  };
// export default PoststatusAPI;
// export default GetStatus;