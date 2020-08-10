import React, { useState } from 'react';
import "./custom-select.css";

function CustomSelect({ data }) {

    const [ inputOptions ] = useState(data);
    const [ selectedOption, setSelectedOption ] = useState("");
    const changeSelected = (event) => {
        setSelectedOption(event.target.value);
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
