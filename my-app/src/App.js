import React, {useState, useMemo} from 'react';
import UserList from './components/UserList';
import AddNewUser from './components/AddNewUser';
import FindUser from './components/FindUser';
import {userData} from './userData';
import './App.css';
import UserSelect from './components/UI/Select/UserSelect';
import UserModal from './components/UI/Modal/UserModal';
import UserDetails from './components/UserDetails';
import UserButton from './components/UI/Button/UserButton';


function App() {
  const [users, setUser] = useState(userData);
  const [filter, setFilter] = useState('');
  const [sort, setSort] = useState('');
  const [isActive, setIsActive] = useState(false);
  const [selectedUser, setSelectedUser] = useState({});
  
  const filterByName = useMemo(() => {
    return users.filter(user => user.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()));
  },[users,filter]);

  const sortByAge = useMemo(() => {
    if (sort === '') {
      return filterByName
    }

    if (sort === 'AZ') {
      return filterByName.sort((a,b) => a.age - b.age);
    }

    if (sort === 'ZA') {
      return filterByName.sort((a,b) => b.age - a.age);
    }

  }, [ sort, filterByName]);

  const addNewUser = (newUser) => {
    setUser([...users, newUser]);
  }



  return (
    <div className="App">
      <UserModal 
        visible={isActive}
        setVisible={setIsActive}
      >
       <UserDetails selectedUser={selectedUser}/>
       {/* <AddNewUser addNewUser={addNewUser}/> */}
      </UserModal>
      <div className="wrapper">
      <div className="wrapper2">
      <UserSelect
      defaultValue="Sort"
      options={[
        {value: "AZ", title: "Sort by A-Z"},
        {value: "ZA", title: "Sort by Z-A"},
      ]}
      value={sort}
      onSortChange={setSort}/>
      <FindUser filter={filter} setFilter={setFilter}/>
      </div>
      <AddNewUser addNewUser={addNewUser}/>
      </div>
      
      <UserList users={sortByAge} setIsActive={setIsActive} setSelectedUser={setSelectedUser}/>
    </div>
  );
}

export default App;
