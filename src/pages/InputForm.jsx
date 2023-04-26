import React, { useState } from 'react'
import './InputForm.css'
import { Form } from 'react-router-dom';

const InputForm = () => {

    const onChangeYear = e => {
        console.log("selected value:", e.target.value);
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

    return (
        <div id='app'>
            <strong>Year</strong> <select onChange={onChangeYear}>
                {getDropListYear()}
            </select>&nbsp;&nbsp;
            <strong>Month</strong> <select onChange={onChangeMonth}>
                {getDropListMonth()}
            </select>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button className="btn" name="button">Submit</button>
        </div>
    )
}

export default InputForm
