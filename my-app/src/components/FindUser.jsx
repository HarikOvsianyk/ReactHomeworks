import React from 'react';
import UserInput from './UI/Input/UserInput';

function FindUser({filter, setFilter}) {
    return ( 
        <div>
            <UserInput value={filter} placeholder="Search by name" onChange={(event) => setFilter(event.target.value)}/>
        </div>
     );
  
}

export default FindUser;