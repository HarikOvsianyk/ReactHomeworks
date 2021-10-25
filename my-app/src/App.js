import React from 'react';
import './App.css';
import { MainContainer } from './Components/MainContainer/MainContainer';
import { Input } from './Components/UI/Input/Input';
import {Form} from './Components/Form/Form';
import {UserList} from './Components/UserList/UserList';

function App() {
  return (
    <MainContainer sx={{display: "flex"}}>
      <MainContainer sx={{width: "100%"}}>
      <Input
        id="searchInput"
        type="text"
        label="Enter participant name..."
      />
      <UserList />
      </MainContainer>
      <MainContainer>
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
