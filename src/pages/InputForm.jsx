import React, { useState } from 'react'
import './InputForm.css'
import ReactDOM from 'react-dom/client';


const InputForm = () => {
    const [year, setYear] = useState("");
    const [month, setMonth] = useState("");


    const onChangeYear = e => {
        console.log("selected value:", e.target.value);
        setYear(e.target.value)
    };
    const getDropListYear = () => {
        const year = new Date().getFullYear();
        return (
            Array.from(new Array(50), (v, i) =>
                <option key={i} value={year - i}>{year - i}</option>
            )
        );
    };
    const onChangeMonth = e => {
        console.log("selected value:", e.target.value);
        setMonth( e.target.value)
    };
    const getDropListMonth = () => {
        const month = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        return (
            Array.from(new Array(12), (v, i) =>
                <option key={i} >{month[i]}</option>
            )
        );
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert('the date is:',  {month});
    }

    return (
        <>
        <form className='inputForm' onSubmit={handleSubmit}>
            <label>Year
                <select 
                name='year'
                onChange={onChangeYear} 
                value={year}> 
                {getDropListYear()}
                </select>
            </label>
            <label>Month
                <select 
                name='month'
                onChange={onChangeMonth} 
                value={month}> 
                {getDropListMonth()}
                </select>
            </label>
            <button 
            className='btn'
              >
                Submit
                </button>
        </form>
        {/* {selectedValue && <div style={{ marginTop: 20, lineHeight: '25px' }}>
        <div><b>Selected Value: </b> {selectedValue}</div>
      </div>} */}

        </>


    )
}

export default InputForm
