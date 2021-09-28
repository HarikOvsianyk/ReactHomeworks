import React from 'react';
import '../App.css';

function UserDetails({selectedUser}) {
    return ( 
        <div>
            <p className="userDetail">Name: <span>{selectedUser.name}</span></p>
            <p className="userDetail">Id:<span>{selectedUser._id}</span></p>
            <p className="userDetail">Balance:<span>{selectedUser.balance}</span></p>
            <img src={selectedUser.picture} alt="img"></img>
            <p className="userDetail">Age:<span>{selectedUser.age}</span></p>
            <p className="userDetail">Eye color:<span>{selectedUser.eyeColor}</span></p>
            <p className="userDetail">Gender:<span>{selectedUser.gender}</span></p>
            <p className="userDetail">Company:<span>{selectedUser.company}</span></p>
            <p className="userDetail">Email:<span>{selectedUser.email}</span></p>
            <p className="userDetail">Phone:<span>{selectedUser.phone}</span></p>
            <p className="userDetail">Address:<span>{selectedUser.address}</span></p>
            <p className="userDetail">Registered:<span>{selectedUser.registered}</span></p>
        </div>
     );
}

export default UserDetails;