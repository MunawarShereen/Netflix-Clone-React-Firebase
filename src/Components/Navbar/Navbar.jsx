import React, { useEffect, useRef } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search_icon.svg'
import bell_icon from '../../assets/bell_icon.svg'
import profile_img from '../../assets/profile_img.png'
import caret_icon from '../../assets/caret_icon.svg'
import { logout } from '../../firebase'

const Navbar = () => {
    const navRef = useRef();
    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY >= 80){
                navRef.current.classList.add('nav-dark');
            }else{
                navRef.current.classList.remove('nav-dark');
            }
        })
    },[])
  return (
    <div className='navbar' ref={navRef}>
        <div className="navbar-left">
            <img src={logo} alt="" />
            <ul>
                <li>Home</li>
                <li>TV Shows</li>
                <li>Movies</li>
                <li>New & Popular</li>
                <li>My List</li>
                <li>Browse by Language</li>
            </ul>
        </div>

        <div className="navbar-right">
            <img src={search_icon} alt="" className='icons'/>
            <p>Children</p>
            <img src={bell_icon} alt="" className='icons'/>
            <div className="navbar-profile">
                <img src='data:image/png;base64,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' alt="" className='profile'/>
                <img src={caret_icon} alt=""/>
                <div className='dropdown'>
                   <p onClick={()=>{
                    logout()
                   }}> Sign out Netflix </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar