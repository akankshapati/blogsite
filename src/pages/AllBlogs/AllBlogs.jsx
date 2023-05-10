import React, { useState } from 'react'
import Card from '../../components/Cards/Card';
import data from '../../consts/data.js'
import InputForm from './InputForm';


const AllBlogs = (props) => {

  const [filteredYear, setFilteredYear] = useState();
  const [filteredMonth, setFilteredMonth] = useState();

  return (
    <>
  <p>{filteredMonth}</p>
      <div className='container'>
        <InputForm
          filteredYear={filteredYear}
          setFilteredYear={setFilteredYear}
          filteredMonth={filteredMonth}
          setFilteredMonth={setFilteredMonth}
        />

        {
          data
            .filter( (blog) => blog.date.substring(0, 4) === filteredYear || filteredMonth)
            .map((blog, index) => {
              return (

                <Card
                  key={index}
                  blogId={blog.blogId}
                  isfeatured={blog.isFeatured}
                  image={blog.image}
                  title={blog.title}
                  date={blog.date}
                  location={blog.location}
                  description={blog.description}
                />

              );

            })}
      </div>
    </>
  )
}

export default AllBlogs
