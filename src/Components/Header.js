import React,{useEffect} from "react";
import { addUserDetails, signOutUser } from "../utlis/userSlice";
import { useDispatch,useSelector } from "react-redux";
import {  useNavigate } from "react-router-dom";
import { auth } from "../utlis/firebase";
import { onAuthStateChanged,signOut } from "firebase/auth";
const Header = () => {
  const navigate=useNavigate()
  const userData=useSelector((state)=>state.user)
  const dispatch=useDispatch();
  useEffect(()=>{
   const unsubsCribe= onAuthStateChanged(auth, (user) => {
      if (user) {
        const {email,displayName,uid}=user

        dispatch(addUserDetails({
          uid:uid,
          email:email,
          displayName:displayName
        }))
        navigate('/browse')
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        // const uid = user.uid;
        // ...
      } else {
        dispatch(signOutUser())
        navigate('/')
        // User is signed out
        // ...
      }
    });

    return(()=>
    unsubsCribe())
    
  },[])
  const handleSignout=()=>{
    dispatch(signOutUser());
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
    
  }
  return (
    <div className="relative px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-row justify-between items-center">
      <img
        className=" w-44 "
        src="
https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      {userData&&
      <button className="h-8 w-24 bg-[#e50914] text-white font-bold rounded-lg" onClick={()=>handleSignout()}>
        Sign Out
      </button>
}
    </div>
  );
};

export default Header;
