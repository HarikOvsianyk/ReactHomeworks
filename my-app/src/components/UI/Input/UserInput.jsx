import React from 'react';
import './UserInput.css';

function UserInput({children, ...props}) {
    return ( 
        <input className="userInput" {...props}>{children}</input>
     );
}

export default UserInput;