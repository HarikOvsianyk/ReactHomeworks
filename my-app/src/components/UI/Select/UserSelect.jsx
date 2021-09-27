import React from 'react';
import './UserSelect.css';

function UserSelect({value,options, defaultValue, onSortChange}) {
    return ( 
        <select value={value} onChange={(event) => onSortChange(event.target.value)}>
            <option value="">{defaultValue}</option>
            {
                options.map(option => <option value={option.value} key={option.value}>{option.title}</option>)
            }
        </select>
     );
}

export default UserSelect;