import React from 'react'
import "./index.scss"
import linkedinlogo from '../../assets/linkedin.png'
import { CiSearch,CiBellOn } from "react-icons/ci";
import { FaHome,FaRegUser,FaBriefcase  } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";
import Profile from "../../assets/profile.png"

export default function TopBar() {
  return (
    <div className="TopBar-main">
        <img className="linkedin-logo" src={linkedinlogo} alt="LinkedinLogo"/>
        <CiSearch size={30} className="icons"/>
        <FaHome size={30} className="icons"/>
        <FaRegUser  size={30} className="usericon"/>
        <FaBriefcase  size={30} className="icons"/>
        <AiFillMessage size={30} className="icons"/>
        <CiBellOn size={30} className="icons"/>
        <img className="profile-logo" src={Profile} alt="LinkedinLogo"/>
    </div>
  )
}