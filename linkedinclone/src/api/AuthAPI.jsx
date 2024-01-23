import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    GoogleAuthProvider, 
    signInWithPopup,
    signOut,
} from 'firebase/auth';
import { auth } from '../firebaseConfig';

export const RegisterAPI = (email, password) => {
    try{
        return (   
            createUserWithEmailAndPassword(auth,email,password)     
        );
    }
    catch(err){
        return err;
    }
};

export const LoginAPI = (email, password) => {
    try{
        return (   
            signInWithEmailAndPassword(auth,email,password)     
        );
    }
    catch(err){
        return err;
    }
};

export const GoogleAPI = () => {  
    try{
        let googleprovider = new GoogleAuthProvider();
        return  signInWithPopup(auth, googleprovider); 
    }
    catch(err){
        return err;
    }
    
};
export const onLogOut = () => {  
    try{
        signOut(auth);
    }
    catch(err){
        return err;
    }
    
};