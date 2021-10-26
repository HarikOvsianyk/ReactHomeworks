import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import PrimaryButton from '../UI/Button/PrimaryButton';
import Typography from '@mui/material/Typography';
import { useDispatch } from 'react-redux';
import { deleteUser } from '../../Actions';

export const UserCard = ({user}) => {
  const dispatch = useDispatch();
  return (
    <Card sx={{ width: 180,
                m:2,
                textAlign: "center",
                alignItems: 'center'}}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          ID : {user.id}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Name : {user.name}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Surname : {user.second}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Time : {user.time}
        </Typography>
      </CardContent>
      <CardActions sx={{justifyContent:"center"}}>
        <PrimaryButton onClick={() => dispatch(deleteUser(user.id))}>Delete</PrimaryButton>
      </CardActions>
    </Card>
  );
};

export default UserCard;