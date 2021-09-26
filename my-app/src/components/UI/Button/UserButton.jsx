import React from 'react';
import './UserButton.css';

function UserButton({children, ...props}) {
    return ( 
        <button className="userButton" {...props}>{children}</button>
     );
}

export default UserButton;