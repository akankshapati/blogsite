import React, {useState} from 'react'
import './Initial.css'
import data from '../components/Cards/data'
import Card from '../components/Cards/Card'

const Initial = () => {

  
  return (
    <div className='container cards '>
      {data.map((val, index) => {
        return (
          val.isFeatured &&
          <Card
            key={val.id}
            isfeatured={val.isFeatured}
            image={val.image}
            desc={val.description}
            title={val.title}
            date={val.date}
            loc={val.location}
          />
        );
      })}
    </div>
  )
}

export default Initial
