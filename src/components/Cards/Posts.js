import React from 'react'
import './Posts.css'
import { useParams } from 'react-router-dom'
import { FaRegCalendar, FaMapMarkerAlt } from 'react-icons/fa'
import data from './data'

const Posts = () => {

    const { dataId } = useParams();
    const blog = data.find((blog) => blog.id === dataId);
    const { title, image, date, location, description } = blog || {};

    return (
        <>
            <p className='post-card__title'>{title}</p>

            <div className="post-card__info">
                <div className="post-card__image">
                    <img src={image} alt="" className='card-img' />
                </div>
                <div className="post-card__content">
                <FaRegCalendar /><p className='post-card__date'><em>{date}</em></p>
                <FaMapMarkerAlt /><p className='post-card__location'><em>{location}</em></p>
                    </div>
            </div>

            <div className='post-card__description'>{description}</div>
        </>

    )
}

export default Posts
