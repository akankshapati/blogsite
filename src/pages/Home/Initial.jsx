import React from 'react'
import data from '../../consts/data'
import Card from '../../components/Cards/Card'

const Initial = () => {


  return (
    <div className='container'>
      {data.map((val, index) => {
        return (
          val.isFeatured &&
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

export default Initial
