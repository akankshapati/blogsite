import React from 'react'
import { FaArrowRight, FaRegCalendar, FaMapMarkerAlt } from 'react-icons/fa'
import {  NavLink } from 'react-router-dom';

const Card = (props) => {
    return (
       
            <div className="card flex">
                <div className="card-img">
                    <img src={props.image} alt="" className='card-img' />
                </div>
                <div className="desc">
                    <h2>{props.title}</h2>
                    <p><FaRegCalendar />{props.date}</p>
                    <p><FaMapMarkerAlt />{props.loc}</p>
                    <button><NavLink to={'/Exploreblog/${props.id}'} state={Card}>Explore Events <FaArrowRight /></NavLink></button>
                </div>
            </div>     
        
    )
}

export default Card
