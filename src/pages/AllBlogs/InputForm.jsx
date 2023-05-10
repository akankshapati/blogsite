import React from 'react'
import './InputForm.css'


const InputForm = (props) => {
    const { filteredYear, setFilteredYear, filteredMonth, setFilteredMonth} = props;
    const getDropListYear = () => {
        const year = new Date().getFullYear();
        return (
            Array.from(new Array(50), (v, i) =>
                <option key={i} value={year - i}>{year - i}</option>
            )
        );
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

    const handleSubmit = (e) => {
       e.preventDefault();
       console.log(`Form submitted Year: ${filteredYear} month: ${filteredMonth}`); 
    }

    return (
        <>
            <form className='inputForm'  onSubmit={handleSubmit}>
                <label> <strong>Year</strong>
                    <select
                        name='year'
                        onChange={(e)=>setFilteredYear(() => e.target.value)}
                        value={filteredYear}>
                        {getDropListYear()}
                    </select>
                </label>
                <label><strong>Month</strong>
                    <select
                        name='month'
                        onChange={(e)=>setFilteredMonth(() => e.target.value)}
                        value={filteredMonth}>
                        {getDropListMonth()}
                    </select>
                </label> 
                <button className=' button submit-btn' type='submit' >
                    Submit
                </button>
            </form>
        </>
    )
}

export default InputForm
