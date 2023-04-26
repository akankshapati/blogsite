import React from 'react'
import './Navbar.css'
import {  NavLink } from 'react-router-dom'


const Navbar = () => {
    return (
      
            <div className=' flex navbar'>
                <div className="right_nav">
                    <span><b>Blog</b></span>
                </div>
                <div className="left_nav">
                    <NavLink to='/Allblogs'>All Blogs</NavLink>
                </div>
            </div>
    )
}

export default Navbar
