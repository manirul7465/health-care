import { getAuth, signInWithPopup,
     GoogleAuthProvider, 
     onAuthStateChanged,signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Login/Firebase/firebase.init";


initializeAuthentication();

const useFirebase=()=>{
    const [user,setUser]=useState({});
    const [isLoading,setIsLoading]=useState(true);
    const auth=getAuth();
    const googleProvider=new GoogleAuthProvider();
    const signInUsingGoogle=()=>{
     return signInWithPopup(auth,googleProvider)

     .then(result=>{
         setUser(result.user);
     })
     .finally(()=>setIsLoading(false));
       
    }
    const logOut=()=>{
        setIsLoading(true);
        signOut(auth)
        .then(()=>{
            setUser({})

        })
        .finally(()=>setIsLoading(false));
    }

    useEffect(()=>{
     onAuthStateChanged(auth,(user)=>{
         if(user){
             setUser(user);
         }
         else{
             setUser({})
         }
         setIsLoading(false);
     })
     
    },[auth])
    return{
        user,
        isLoading,
        signInUsingGoogle,
        logOut
    }

}
export default useFirebase;