import React from 'react'
import Card from '../../components/Cards/Card';
import data from '../../components/Cards/data.js'
import InputForm from '../InputForm';
import { useParams } from 'react-router-dom';

const AllBlogs = () => {

  const {blogId} = useParams({data});
   
  return (
    <>
    
      <div className='container'>
      <InputForm />
        {
        
        
        // data.filter((data) => data.blogId === blogId)
        data.map((val, index) => {
          return (
            <>

              <Card
                key={val.id}
                isfeatured={val.isFeatured}
                image={val.image}
                title={val.title}
                date={val.date}
                location={val.location}
              />
            </>
          );
        })}
      </div>
    </>
  )
}

export default AllBlogs
