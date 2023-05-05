import React from 'react'
import './Navbar.css'
import {  Link } from 'react-router-dom'


const Navbar = () => {
    return (
      
            <div className='navbar'>
                <div className="navbar__right">
                    <span>Blog</span>
                </div>
                <div className="navbar__left">
                    <Link to={'/Allblogs'}>All Blogs</Link>
                </div>
            </div>
    )
}

export default Navbar
