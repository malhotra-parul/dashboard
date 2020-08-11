import React, { useState } from 'react';
import "./custom-select.css";

function CustomSelect( props ) {

    const { data, setMonth, setYear } = props;
    const [ inputOptions ] = useState(data);
    const [ selectedOption, setSelectedOption ] = useState("");
   

    const changeSelected = (event) => {
        setSelectedOption(event.target.value);
        if (props.setMonth){
            setMonth(event.target.value);
        }
        if (props.setYear){
            setYear(event.target.value);
        }
    }

    const options = inputOptions.map(option => <option key={option.id} value={option.id}>
        {option.name}
    </option> );

    return (
        <div className="select-holder">
            <select value={selectedOption} onChange={changeSelected}>
                {options}
            </select>
        </div>
    )
}

export default CustomSelect
