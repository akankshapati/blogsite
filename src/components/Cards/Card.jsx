import React from 'react'
import './Card.css'
import { FaRegCalendar, FaMapMarkerAlt, FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom';

const Card = (props) => {
    return (

        <div className="blog-card">
            <div className="blog-card__image">
                <img src={props.image} alt="card__photo" className='card__photo' />
            </div>
            <div className="blog-card__info">
                <h3 className='blog-card__title'>{props.title}</h3>
                <p className='blog-card__date'><em><FaRegCalendar />{props.date}</em></p>
                <p className='blog-card__location'><em><FaMapMarkerAlt />{props.location}</em></p>
             
             <button className='button blog-card__button--explore'><Link
                        to={`/posts/${props.blogId}`}
                    >
                        Explore Blog <FaArrowRight />
                    </Link>
                    </button>
            </div>

        </div>

    )

}

export default Card
