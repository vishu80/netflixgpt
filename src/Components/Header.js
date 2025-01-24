import React,{useEffect} from "react";
import { addUserDetails, signOutUser } from "../utlis/userSlice";
import { useDispatch,useSelector } from "react-redux";
import {  useNavigate } from "react-router-dom";
import { auth } from "../utlis/firebase";
import { onAuthStateChanged,signOut } from "firebase/auth";
import { LOGO_URL, options, POPULAR_MOVIES_URL } from "../utlis/constant";
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
        src={LOGO_URL}
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
