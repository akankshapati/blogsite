import React from 'react'
import moment from 'moment/moment';
import './Posts.css'
import data from '../../consts/data'
import { useParams } from 'react-router-dom'
import { FaRegCalendar, FaMapMarkerAlt } from 'react-icons/fa'

const Posts = () => {

    const { postId } = useParams();

    return (
        <div className="post">
            {data
                .filter((item) => item.blogId === postId)
                .map((item, index) => (
                    <div key={index}>
                        <h3 className='post-card__title'>{item.title}</h3>

                        <div className="post-card__info">
                            <div className="post-card__image">
                                <img src={item.image} alt="" className='card-img' />
                            </div>
                            <div className="post-card__content">
                                <FaRegCalendar /><p className='post-card__date'><em>{moment(item.date).format('MMMM d, YYYY')}</em></p><br />
                                <FaMapMarkerAlt /><p className='post-card__location'><em>{item.location}</em></p>
                            </div>
                        </div>

                        <div className='post-card__description'>{item.description}</div>
                    </div>
                ))}
        </div>
    )
}

export default Posts
