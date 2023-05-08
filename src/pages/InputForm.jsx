import React, { useState } from 'react'
import './InputForm.css'


const InputForm = (props) => {
    const [year, setYear] = useState("");
    const [month, setMonth] = useState("");

    const onChangeYear = e => {
        console.log("selected year:", e.target.value);
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
        console.log("selected month:", e.target.value);
        setMonth(e.target.value)
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
    }

    return (
        <>
            <form className='inputForm' >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <label> <strong>Year</strong>
                    <select
                        name='year'
                        onChange={onChangeYear}
                        value={year}>
                        {getDropListYear()}
                    </select>
                </label>&nbsp;&nbsp;&nbsp;&nbsp;
                <label><strong>Month</strong>
                    <select
                        name='month'
                        onChange={onChangeMonth}
                        value={month}>
                        {getDropListMonth()}
                    </select>
                </label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button
                    className=' button submit-btn'
                    onSubmit={handleSubmit}
                >
                    Submit
                </button>
            </form>
        </>
    )
}

export default InputForm
