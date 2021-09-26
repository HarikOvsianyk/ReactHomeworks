import React, {useState, useMemo} from 'react';
import UserList from './components/UserList';
import AddNewUser from './components/AddNewUser';
import FindUser from './components/FindUser';
import {userData} from './userData';
import './App.css';


function App() {
  const [users, setUser] = useState(userData);
  const [filter, setFilter] = useState('');

  const filteredArray = useMemo(() => {
    return users.filter(user => user.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()));
  },[users,filter]);

  const addNewUser = (newUser) => {
    setUser([...users, newUser]);
  }

  return (
    <div className="App">
      <FindUser filter={filter} setFilter={setFilter}/>
      <AddNewUser addNewUser={addNewUser} />
      <UserList users={filteredArray}/>
    </div>
  );
}

export default App;
