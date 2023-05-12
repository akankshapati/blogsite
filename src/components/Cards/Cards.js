import React from 'react'
import data from '../../consts/data';
import Card from './Card';
import './Card.css'

const Cards = () => {


  return (
    <div className='container'>
      {data.map((val, index) => {
        return (
          <Card
            key={val.id}
            blogId={val.blogId}
            image={val.image}
            title={val.title}
            date={val.date}
            location={val.location}
            description={val.description}
          />
        );
      })}
    </div>
  )
}

export default Cards
