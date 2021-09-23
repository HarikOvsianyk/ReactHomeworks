import React, {useState} from 'react';
import UserButton from './UI/UserButton';

function AddNewUser({ addNewUser }) {
    const [newUser, setNewUser] = useState({
        name: '',
        age:'',
        gender:'',
        balance:'$',
        picture:'https://www.meme-arsenal.com/memes/7435f370fb8ced269c8aad28de5cbd05.jpg',
    });

    const createNewUser = (event) => {
        event.preventDefault();
        addNewUser({
            ...newUser,
            _id: Date.now(),
        })
    }
    return ( 
        <div>
            <form className="form"> 
                <input className="form__name" value={newUser.name} onChange={(event) => setNewUser({...newUser, name: event.target.value})} placeholder="Enter name..." />
                <input className="form__age" value={newUser.age} onChange={(event) => setNewUser({...newUser, age: event.target.value})} placeholder="Enter age..." />
                <input className="form__gender" value={newUser.gender} onChange={(event) => setNewUser({...newUser, gender: event.target.value})} placeholder="Enter gender..." />
                <input className="form__balance" value={newUser.balance} onChange={(event) => setNewUser({...newUser, balance: event.target.value})} placeholder="Enter balance..." />
                <input className="form__picture" value={newUser.picture} onChange={(event) => setNewUser({...newUser, picture: event.target.value})} placeholder="Enter picture..." />
                <UserButton onClick={createNewUser}>Create new user</UserButton>
            </form>
        </div>
     );
}

export default AddNewUser;
