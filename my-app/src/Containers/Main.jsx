import {UserList} from '../Components'; 
import { connect } from 'react-redux';
import { deleteUser } from './Actions';

function Main(props) {
    return ( 
        <UserList {...props}/>
     );
}
const mapStateToProps = (state) => {
    return state;
  };
  
  const mapDispatchToProps = {
    deleteUser,
  };
export default connect(mapStateToProps, mapDispatchToProps)(Main);