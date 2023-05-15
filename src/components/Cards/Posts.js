import React from 'react'
import moment from 'moment/moment';
import './Posts.css'
import { useLocation } from 'react-router-dom'
import { FaRegCalendar, FaMapMarkerAlt } from 'react-icons/fa'

const Posts = () => {

    const location = useLocation();
    let blogProps = location.state;


    return (
        <div className="post">

            <div >
                <h3 className='post-card__title'>{blogProps.title}</h3>

                <div className="post-card__info">
                    <div className="post-card__image">
                        <img src={blogProps.image} alt="" className='card-img' />
                    </div>
                    <div className="post-card__content">
                        <FaRegCalendar /><p className='post-card__date'><em>{moment(blogProps.date).format('MMMM d, YYYY')}</em></p><br />
                        <FaMapMarkerAlt /><p className='post-card__location'><em>{blogProps.location}</em></p>
                    </div>
                </div>

                <div className='post-card__description'>{blogProps.description}</div>
            </div>

        </div>
    )
}

export default Posts
