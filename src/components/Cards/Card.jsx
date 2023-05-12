import React from 'react'
import moment from 'moment/moment';
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
                <h3 className='blog-card__title'> <strong>{props.title}</strong> </h3>
                <p className='blog-card__date'><FaRegCalendar /><strong>&nbsp;&nbsp;{moment(props.date).format('MMMM YYYY')}</strong></p>
                <p className='blog-card__location'><FaMapMarkerAlt /><em>&nbsp;&nbsp;{props.location}</em></p>

                <button className='button blog-card__button--explore'><Link
                    to={`/posts/${props.blogId}`}
                >
                    Explore Blog &nbsp;&nbsp;<FaArrowRight />
                </Link>
                </button>
            </div>

        </div>

    )

}

export default Card
