import React from 'react'
import "./index.scss"
import linkedinlogo from '../../assets/linkedin.png'
import { CiSearch,CiBellOn } from "react-icons/ci";
import { FaHome,FaRegUser,FaBriefcase  } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";
import Profile from "../../assets/profile.png"
import {  useNavigate } from 'react-router-dom';

export default function TopBar() {
  let navigate = useNavigate();
  const goToRoute = (route)=>{
    navigate(route);
  }

  return (
    <div className="TopBar-main">
        <img className="linkedin-logo" src={linkedinlogo} alt="LinkedinLogo"/>
        <CiSearch size={30} className="icons"/>
        <FaHome size={30} className="icons" onClick={ ()=> goToRoute("/home")}/>
        <FaRegUser  size={30} className="usericon" onClick={ ()=> goToRoute("/profile")}/>
        <FaBriefcase  size={30} className="icons"/>
        <AiFillMessage size={30} className="icons"/>
        <CiBellOn size={30} className="icons"/>
        <img className="profile-logo" src={Profile} alt="LinkedinLogo"/>
    </div>
  )
}