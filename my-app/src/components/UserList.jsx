import React from 'react';
import User from './User';

function UserList({users, setIsActive, setSelectedUser}) {
    return ( 
        <div>
            {
                users.map((user) => {return <User user={user} key={user._id} setIsActive={setIsActive} setSelectedUser={setSelectedUser}/>})
            }
        </div>
     );
}

export default UserList;