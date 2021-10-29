import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import PrimaryButton from '../../UI/Button/PrimaryButton';
import Typography from '@mui/material/Typography';
import { useDispatch } from 'react-redux';

export const Competition = ({competition}) => {
  const dispatch = useDispatch();
  return (
    <Card sx={{ width: 180,
                m:2,
                textAlign: "center",
                alignItems: 'center'}}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          ID : {competition.id}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Name : {competition.name}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Status : {competition.status}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Winner : {competition.winner}
        </Typography>
      </CardContent>
      <CardActions sx={{justifyContent:"center"}}>
        <PrimaryButton>Show</PrimaryButton>
      </CardActions>
    </Card>
  );
};

export default Competition;