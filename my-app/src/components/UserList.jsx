import React from 'react';
import User from './User';

function UserList({users}) {
    return ( 
        <div>
            {
                users.map((user) => {return <User user={user} key={user._id}/>})
            }
        </div>
     );
}

export default UserList;