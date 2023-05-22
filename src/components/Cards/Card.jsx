import React from 'react'
import moment from 'moment/moment';
import './Card.css'
import { FaRegCalendar, FaMapMarkerAlt, FaArrowRight } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';

const Card = (props) => {

    const navigate = useNavigate();

    const post = (props) => {
        console.log("Post Id is :", props);
        navigate('/posts', { state: props })
    }

    return (

        <div className="blog-card">
            <div className="blog-card__image">
                <img src={props.image} alt="card__photo" className='card__photo' />
            </div>

            <div className="blog-card__info">
                <h3 className='blog-card__title'> <strong>{props.title}</strong> </h3>

                <p className='blog-card__date'><FaRegCalendar /><strong>&nbsp;&nbsp;{moment(props.date).format('MMMM YYYY')}</strong> </p>

                <p className='blog-card__location'><FaMapMarkerAlt /><em>&nbsp;&nbsp;{props.location}</em></p>

                <button className='button blog-card__button--explore' onClick={() => post(props)}>
                    Explore Blog &nbsp;&nbsp;<FaArrowRight style={{ margin: "-2px" }} />
                </button>
            </div>

        </div>

    )

}

export default Card
