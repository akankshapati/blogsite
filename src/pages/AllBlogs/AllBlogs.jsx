import React, { useState } from 'react'
import Card from '../../components/Cards/Card';
import data from '../../components/Cards/data.js'
import InputForm from '../InputForm';


const AllBlogs = (props) => {

  const [filteredYear, setFilteredYear] = useState("2023");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  // const filteredExpenses = props.data.filter(
  //   (blog) => blog.date.getFullYear().toString() === filteredYear );


  return (
    <>
      <div className='container'>
        <InputForm
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />

        {
          // filteredExpenses
          data.map((blog) => {
            return (
              <>
                <Card
                  key={blog.id}
                  isfeatured={blog.isFeatured}
                  image={blog.image}
                  title={blog.title}
                  date={blog.date}
                  location={blog.location}
                />
              </>
            );
          })}
      </div>
    </>
  )
}

export default AllBlogs
