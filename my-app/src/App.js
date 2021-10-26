import React from 'react';
import './App.css';
import { MainContainer } from './Components/MainContainer/MainContainer';
import {Form} from './Components/Form/Form';
import {UserList} from './Components/UserList/UserList';
import {Search} from './Components/SearchBar/Search';

function App() {
  return (
    <MainContainer sx={{display: "flex"}}>
      <MainContainer sx={{width: "100%"}}>
      <Search />
      <UserList />
      </MainContainer>
      <MainContainer sx ={{mt:3}}>
        <Form/>
      </MainContainer>
    </MainContainer>
  );
}

export default App;
/* const mapStateToProps = (state) => {
  console.log('App', state);
  return state;
};

const mapDispatchToProps = {
  deleteUser,
};
export default connect(mapStateToProps, mapDispatchToProps)(App); */
