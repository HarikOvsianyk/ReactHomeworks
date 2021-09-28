import React from 'react';

function UserDetails({selectedUser}) {
    return ( 
        <div>
            <p>Id:{selectedUser._id}</p>
            <p>Balance:{selectedUser.balance}</p>
            <img src={selectedUser.picture} alt="img"></img>
            <p>Age:{selectedUser.age}</p>
            <p>Eye color:{selectedUser.eyeColor}</p>
            <p>Name:{selectedUser.name}</p>
            <p>Gender:{selectedUser.gender}</p>
            <p>Company:{selectedUser.company}</p>
            <p>Email:{selectedUser.email}</p>
            <p>Phone:{selectedUser.phone}</p>
            <p>Address:{selectedUser.address}</p>
            <p>Registered:{selectedUser.registered}</p>
        </div>
     );
}

export default UserDetails;