import React, {useState, useMemo} from 'react';
import UserList from './components/UserList';
import AddNewUser from './components/AddNewUser';
import FindUser from './components/FindUser';
import {userData} from './userData';
import './App.css';
import UserSelect from './components/UI/Select/UserSelect';


function App() {
  const [users, setUser] = useState(userData);
  const [filter, setFilter] = useState('');
  const [sort, setSort] = useState('');
  

  

  const filterByName = useMemo(() => {
    return users.filter(user => user.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()));
  },[users,filter]);

  const sortByAge = useMemo(() => {
    if (sort === 'AZ') {
      return users.sort((a,b) => a.age - b.age);
    }

    if (sort === 'ZA') {
      return users.sort((a,b) => b.age - a.age);
    }

  }, [users, sort]);

  const addNewUser = (newUser) => {
    setUser([...users, newUser]);
  }

  return (
    <div className="App">
      <UserSelect
      defaultValue="Sorting type"
      options={[
        {value: "AZ", title: "Sort by A-Z"},
        {value: "ZA", title: "Sort by Z-A"},
      ]}
      value={sort}
      onSortChange={setSort}/>
      <FindUser filter={filter} setFilter={setFilter}/>
      <AddNewUser addNewUser={addNewUser} />
      <UserList users={filterByName}/>
    </div>
  );
}

export default App;
