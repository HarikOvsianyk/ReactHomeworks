import React from 'react';

function User({user, setIsActive,setSelectedUser}) {
    const selectUser = () => {
        setIsActive(true);
        setSelectedUser(user);
    }
    return ( 
        <div className="user" onClick={selectUser}>
            <p className="user__name">{user.name}</p>
            <p className="user__age">Age: {user.age}</p>
            <p className="user__gender">Gender: {user.gender}</p>
            <p className="user__balance">Balance: <b>{user.balance}</b></p>
            <img src={user.picture} className="user__img" alt="user_picture" />
        </div>
     );
}

export default User;