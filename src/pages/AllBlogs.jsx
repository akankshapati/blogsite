import React from 'react'
import Card from '../components/Cards/Card';
import data from '../components/Cards/data.js'
import InputForm from './InputForm';

const AllBlogs = () => {
  return (
    <div className='container cards '>
       <InputForm  />
      {data.map((val, index) => {
        return (
          <>
           
            <Card
              key={val.id}
              isfeatured={val.isFeatured}
              image={val.image}
              title={val.title}
              date={val.date}
              loc={val.location}
            />
          </>
        );
      })}
    </div>
  )
}

export default AllBlogs
