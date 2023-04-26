import React from 'react'
import './ExploreBlog.css'
import { FaRegCalendar, FaMapMarkerAlt } from 'react-icons/fa'




const ExploreBlog = (props) => {
    
    return (
        <div className="card">
          <div className="card-img">
                    <img src={props.image} alt="" className='card-img' />
                </div>
                <div className="desc">
                    <h2>{props.title}</h2>
                    <p><FaRegCalendar />{props.date}</p>
                    <p><FaMapMarkerAlt />{props.loc}</p>
                </div>
        </div>
    )
}


export default ExploreBlog
